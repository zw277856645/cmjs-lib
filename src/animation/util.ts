import { AnimationReferenceMetadata, transition, trigger, useAnimation } from '@angular/animations';

/**
 * PS：动画会被使用在 @Component 的 animations 中，angular 在 AOT 编译时禁止在注解中执行'除 return 语句外还包含其他语句函数'，
 * 比如 function getName() { return 'xxx' } 合法，而 function getName() { console.log('xxx'); return 'xxx' } 会
 * 报错(Function calls are not supported in decorators)，所以本插件中所有动画函数经过简化处理，只有直接的 return 语句
 */

export interface AnimOptions {

    duration?: number;

    delay?: number;

    easing?: string;
}

export interface CommonTriggerOptions<A extends AnimOptions, B extends AnimOptions = A> extends AnimOptions {

    enter?: A;

    leave?: B;
}

// tslint:disable-next-line:max-line-length
export function commonTriggerCreator<A extends AnimOptions, B extends AnimOptions, T extends CommonTriggerOptions<A, B>>(
    name: string,
    options: T = {} as T,
    enterHandler: (options: A) => AnimationReferenceMetadata,
    leaveHandler: (options: B) => AnimationReferenceMetadata
) {
    return trigger(name, [
        transition(':enter', [
            useAnimation(
                enterHandler({
                    duration: options.duration,
                    delay: options.delay,
                    easing: options.easing,
                    ...options.enter
                })
            )
        ]),
        transition(':leave', [
            useAnimation(
                leaveHandler({
                    duration: options.duration,
                    delay: options.delay,
                    easing: options.easing,
                    ...options.leave
                })
            )
        ])
    ]);
}