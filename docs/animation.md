## 概要

抽象封装`animate.css`动画为可复用 angular `动画组件`，方便通过传递参数修改动画细节，以及自由组合动画组件创建新的动画。

动画组件使用时需要设置比较多的配置，若只关心元素的`添加(:enter)`/`移除(:leave)`状态，通常使用在`*ngIf、*ngFor`的地方，
可使用`固定动画`方式，插件已内置了一些常用的固定动画。

> PS：`固定动画`是指已内部固定了`:enter`和`:leave`对应的`动画组件`，不需要设置额外配置可直接使用

## 使用方式

动画组件使用方式

``` js
@Component({
    ...
    animations: [
        trigger('name', [
            transition(':enter', [ useAnimation(fadeIn()) ]),
            transition(':leave', [ useAnimation(fadeOut({ duration: 1000, delay: 100 })) ])
        ])
    ]
})
export class ExampleComponent {
}
```

固定动画使用方式

``` js
@Component({
    ...
    animations: [
        fade({ duration: 1000 })
    ]
})
export class ExampleComponent {
}
```

## bounce-drop

### bounceDropIn

- 动画组件

``` js
// 参数 - BounceDropInOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 1000
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    percent40?: string;     // 动画在 40% 偏移量处的 translateY 值，默认值 -30px
    percent70?: string;     // 动画在 70% 偏移量处的 translateY 值，默认值 -15px
    percent90?: string;     // 动画在 90% 偏移量处的 translateY 值，默认值 -4px
}
```

``` angular-files
demo/animation/bounce-drop/bounce-drop-in.ts
```

### bounceDrop

- 固定动画

``` js
// 参数同 bounceDropIn
// 只有 :enter 动画，没有 :leave 动画
```

``` angular-files
demo/animation/bounce-drop/bounce-drop.ts
```

## flash

### flashIn

- 动画组件

``` js
// 参数 - FlashInOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 1000
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    percent25?: number;     // 动画在 25% 偏移量处的 opacity 值，默认值 0
    percent50?: string;     // 动画在 50% 偏移量处的 opacity 值，默认值 1
    percent75?: string;     // 动画在 75% 偏移量处的 opacity 值，默认值 0
}
```

``` angular-files
demo/animation/flash/flash-in.ts
```

### flash

- 固定动画

``` js
// 参数同 flashIn
// 只有 :enter 动画，没有 :leave 动画
```

``` angular-files
demo/animation/flash/flash.ts
```

## pulse

### pulseIn

- 动画组件

``` js
// 参数 - PulseInOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 500
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    percent50?: number;     // 动画在 50% 偏移量处的 scale3d 值，默认值 1.15
}
```

``` angular-files
demo/animation/pulse/pulse-in.ts
```

### pulse

- 固定动画

``` js
// 参数同 pulseIn
// 只有 :enter 动画，没有 :leave 动画
```

``` angular-files
demo/animation/pulse/pulse.ts
```

## rubber-band

### rubberBandIn

- 动画组件

``` js
// 参数 - RubberBandInOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 800
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    percent30?: { scaleX: number; scaleY: number };  // 动画在 30% 偏移量处的 scaleX, scaleY 值，默认值 1.25, 0.75
    percent40?: { scaleX: number; scaleY: number };  // 动画在 40% 偏移量处的 scaleX, scaleY 值，默认值 0.75, 1.25
    percent50?: { scaleX: number; scaleY: number };  // 动画在 50% 偏移量处的 scaleX, scaleY 值，默认值 1.15, 0.85
    percent65?: { scaleX: number; scaleY: number };  // 动画在 65% 偏移量处的 scaleX, scaleY 值，默认值 0.95, 1.05
    percent75?: { scaleX: number; scaleY: number };  // 动画在 70% 偏移量处的 scaleX, scaleY 值，默认值 1.05, 0.95
}
```

``` angular-files
demo/animation/rubber-band/rubber-band-in.ts
```

### rubberBand

- 固定动画

``` js
// 参数同 rubberBandIn
// 只有 :enter 动画，没有 :leave 动画
```

``` angular-files
demo/animation/rubber-band/rubber-band.ts
```

## shake

### shakeIn

- 动画组件

``` js
// 参数 - ShakeInOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 1000
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    percent11?: string;     // 动画在 11% 偏移量处的 translateX 值，默认值 -10px
    percent22?: string;     // 动画在 22% 偏移量处的 translateX 值，默认值 10px
    percent33?: string;     // 动画在 33% 偏移量处的 translateX 值，默认值 -8px
    percent44?: string;     // 动画在 44% 偏移量处的 translateX 值，默认值 8px
    percent55?: string;     // 动画在 55% 偏移量处的 translateX 值，默认值 -6px
    percent66?: string;     // 动画在 66% 偏移量处的 translateX 值，默认值 6px
    percent77?: string;     // 动画在 77% 偏移量处的 translateX 值，默认值 -4px
    percent88?: string;     // 动画在 88% 偏移量处的 translateX 值，默认值 4px
}
```

``` angular-files
demo/animation/shake/shake-in.ts
```

### shake

- 固定动画

``` js
// 参数同 shakeIn
// 只有 :enter 动画，没有 :leave 动画
```

``` angular-files
demo/animation/shake/shake.ts
```

## swing

### swingIn

- 动画组件

``` js
// 参数 - SwingInOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 800
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    percent20?: string;     // 动画在 20% 偏移量处的 rotateZ 值，默认值 15deg
    percent40?: string;     // 动画在 40% 偏移量处的 rotateZ 值，默认值 -10deg
    percent60?: string;     // 动画在 60% 偏移量处的 rotateZ 值，默认值 5deg
    percent80?: string;     // 动画在 80% 偏移量处的 rotateZ 值，默认值 -5deg
}
```

``` angular-files
demo/animation/swing/swing-in.ts
```

### swing

- 固定动画

``` js
// 参数同 swingIn
// 只有 :enter 动画，没有 :leave 动画
```

``` angular-files
demo/animation/swing/swing.ts
```

## tada

### tadaIn

- 动画组件

``` js
// 参数 - TadaInOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 1000
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease-in-out

    percent10?: { scale?: number; rotateZ?: string };  // 动画在 10% 偏移量处的 scale3d, rotateZ 值，默认值 0.9, -3deg
    percent20?: { scale?: number; rotateZ?: string };  // 动画在 20% 偏移量处的 scale3d, rotateZ 值，默认值 0.9, -3deg
    percent30?: { scale?: number; rotateZ?: string };  // 动画在 30% 偏移量处的 scale3d, rotateZ 值，默认值 1.1, 3deg
    percent40?: { scale?: number; rotateZ?: string };  // 动画在 40% 偏移量处的 scale3d, rotateZ 值，默认值 1.1, -3deg
    percent50?: { scale?: number; rotateZ?: string };  // 动画在 50% 偏移量处的 scale3d, rotateZ 值，默认值 1.1, 3deg
    percent60?: { scale?: number; rotateZ?: string };  // 动画在 60% 偏移量处的 scale3d, rotateZ 值，默认值 1.1, -3deg
    percent70?: { scale?: number; rotateZ?: string };  // 动画在 70% 偏移量处的 scale3d, rotateZ 值，默认值 1.1, 3deg
    percent80?: { scale?: number; rotateZ?: string };  // 动画在 80% 偏移量处的 scale3d, rotateZ 值，默认值 1.1, -3deg
    percent90?: { scale?: number; rotateZ?: string };  // 动画在 90% 偏移量处的 scale3d, rotateZ 值，默认值 1.1, 3deg
}
```

``` angular-files
demo/animation/tada/tada-in.ts
```

### tada

- 固定动画

``` js
// 参数同 tadaIn
// 只有 :enter 动画，没有 :leave 动画
```

``` angular-files
demo/animation/tada/tada.ts
```

## wobble

### wobbleIn

- 动画组件

``` js
// 参数 - WobbleInOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 1000
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    percent15?: { translateX?: string; rotateZ?: string };  // 动画在 15% 偏移量处的 translateX, rotateZ 值，默认值 -25%, -5deg
    percent30?: { translateX?: string; rotateZ?: string };  // 动画在 30% 偏移量处的 translateX, rotateZ 值，默认值 20%, 3deg
    percent45?: { translateX?: string; rotateZ?: string };  // 动画在 45% 偏移量处的 translateX, rotateZ 值，默认值 -15%, -3deg
    percent60?: { translateX?: string; rotateZ?: string };  // 动画在 60% 偏移量处的 translateX, rotateZ 值，默认值 10%, 2deg
    percent75?: { translateX?: string; rotateZ?: string };  // 动画在 75% 偏移量处的 translateX, rotateZ 值，默认值 -5%, -1deg
}
```

``` angular-files
demo/animation/wobble/wobble-in.ts
```

### wobble

- 固定动画

``` js
// 参数同 wobbleIn
// 只有 :enter 动画，没有 :leave 动画
```

``` angular-files
demo/animation/wobble/wobble.ts
```

## jello

### jelloIn

- 动画组件

``` js
// 参数 - JelloInOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 1000
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    percent22?: string;     // 动画在 22% 偏移量处的 skewX, skewY 值，默认值 -12.5deg
    percent33?: string;     // 动画在 33% 偏移量处的 skewX, skewY 值，默认值 6.25deg
    percent44?: string;     // 动画在 44% 偏移量处的 skewX, skewY 值，默认值 -3.125deg
    percent55?: string;     // 动画在 55% 偏移量处的 skewX, skewY 值，默认值 1.5625deg
    percent66?: string;     // 动画在 66% 偏移量处的 skewX, skewY 值，默认值 -0.78125deg
    percent77?: string;     // 动画在 77% 偏移量处的 skewX, skewY 值，默认值 0.390625deg
    percent88?: string;     // 动画在 88% 偏移量处的 skewX, skewY 值，默认值 -0.1953125deg
}
```

``` angular-files
demo/animation/jello/jello-in.ts
```

### jello

- 固定动画

``` js
// 参数同 jelloIn
// 只有 :enter 动画，没有 :leave 动画
```

``` angular-files
demo/animation/jello/jello.ts
```

## heart-beat

### heartBeatIn

- 动画组件

``` js
// 参数 - HeartBeatInOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 1500
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease-in-out

    percent14?: number;     // 动画在 14% 偏移量处的 scale3d 值，默认值 1.3
    percent28?: number;     // 动画在 28% 偏移量处的 scale3d 值，默认值 1
    percent42?: number;     // 动画在 42% 偏移量处的 scale3d 值，默认值 1.3
}
```

``` angular-files
demo/animation/heart-beat/heart-beat-in.ts
```

### heartBeat

- 固定动画

``` js
// 参数同 heartBeatIn
// 只有 :enter 动画，没有 :leave 动画
```

``` angular-files
demo/animation/heart-beat/heart-beat.ts
```

## bounce

### bounceIn

- 动画组件

``` js
// 参数 - BounceInOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 800
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 cubic-bezier(0.215, 0.61, 0.355, 1)

    percent0?: number;      // 动画在 0%  偏移量处的 scale3d 值，默认值 0.3
    percent20?: number;     // 动画在 20% 偏移量处的 scale3d 值，默认值 1.1
    percent40?: number;     // 动画在 40% 偏移量处的 scale3d 值，默认值 0.9
    percent60?: number;     // 动画在 60% 偏移量处的 scale3d 值，默认值 1.03
    percent80?: number;     // 动画在 80% 偏移量处的 scale3d 值，默认值 0.97
}
```

``` angular-files
demo/animation/bounce/bounce-in.ts
```

### bounceOut

- 动画组件

``` js
// 参数 - BounceOutOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 800
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    percent20?: number;     // 动画在 20%  偏移量处的 scale3d 值，默认值 0.9
    percent50?: number;     // 动画在 50%  偏移量处的 scale3d 值，默认值 1.1
    percent55?: number;     // 动画在 55%  偏移量处的 scale3d 值，默认值 1.1
    percent100?: number;    // 动画在 100% 偏移量处的 scale3d 值，默认值 0.3
}
```

``` angular-files
demo/animation/bounce/bounce-out.ts
```

### bounce

- 固定动画

``` js
// 参数
{
    duration?: number;          // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;             // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;            // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: BounceInOptions;    // :enter 动画参数
    leave?: BounceOutOptions;   // :leave 动画参数
}
```

``` angular-files
demo/animation/bounce/bounce.ts
```

### bounceInLeft

- 动画组件

``` js
// 参数 - BounceInXOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 600
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 cubic-bezier(0.215, 0.61, 0.355, 1)

    percent0?: string;      // 动画在 0%  偏移量处的 translateX 值，默认值 -100%
    percent60?: string;     // 动画在 60% 偏移量处的 translateX 值，默认值 25px
    percent75?: string;     // 动画在 75% 偏移量处的 translateX 值，默认值 -10px
    percent90?: string;     // 动画在 90% 偏移量处的 translateX 值，默认值 5px
}
```

``` angular-files
demo/animation/bounce/bounce-in-left.ts
```