import { from, Observable, of, timer } from 'rxjs';
import { first, mapTo, skipWhile } from 'rxjs/operators';

// 等待某条件成立
export function waitFor<T>(condition: () => boolean, mapValue?: T, limit: number = 15): Observable<T> {
    return timer(0, 100).pipe(
        skipWhile(() => {
            if (limit > 0) {
                return !condition() && --limit > 0;
            } else {
                return !condition();
            }
        }),
        first(),
        mapTo(mapValue)
    );
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