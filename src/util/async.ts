import { from, Observable, of, timer } from 'rxjs';
import { first, map, skipWhile } from 'rxjs/operators';

// 等待某条件成立
export function waitFor<T>(
    condition: () => any,
    mapValue?: T | (() => T),
    limit: number = 15,
    timerGap: number = 100
): Observable<T> {
    let valueFn = () => {
        if (typeof mapValue === 'function') {
            return (mapValue as Function)();
        } else if (mapValue !== undefined) {
            return mapValue;
        } else {
            return condition();
        }
    };

    if (condition()) {
        return of(valueFn());
    } else {
        return timer(0, timerGap).pipe(
            skipWhile(() => {
                if (limit > 0) {
                    return !condition() && --limit > 0;
                } else {
                    return !condition();
                }
            }),
            first(),
            map(() => valueFn())
        );
    }
}

// 各种类型异步转化为 Observable
export function async2Observable(fn: any): Observable<any> {
    if (fn instanceof Observable) {
        return fn;
    } else if (fn instanceof Promise) {
        return from(fn);
    } else if (typeof fn === 'function') {
        return async2Observable(fn());
    } else {
        return of(fn);
    }
}