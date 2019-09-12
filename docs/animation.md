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
        // 第二个参数为动画名称，默认与函数名称相同
        // 当需要使用多个不同配置的相同固定动画时，需要指定不同名称来使用
        fade({ duration: 1000 }, 'fade1000'),
        fade({ duration: 2000 }, 'fade2000')
    ]
})
export class ExampleComponent {
}
```

## bounce-drop

``` angular-files
demo/animation/bounce-drop.component.ts
```

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

### bounceDrop

- 固定动画

``` js
// 参数同 bounceDropIn
// 只有 :enter 动画，没有 :leave 动画
```

## flash

``` angular-files
demo/animation/flash.component.ts
```

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

### flash

- 固定动画

``` js
// 参数同 flashIn
// 只有 :enter 动画，没有 :leave 动画
```

## pulse

``` angular-files
demo/animation/pulse.component.ts
```

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

### pulse

- 固定动画

``` js
// 参数同 pulseIn
// 只有 :enter 动画，没有 :leave 动画
```

## rubber-band

``` angular-files
demo/animation/rubber-band.component.ts
```

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

### rubberBand

- 固定动画

``` js
// 参数同 rubberBandIn
// 只有 :enter 动画，没有 :leave 动画
```

## shake

``` angular-files
demo/animation/shake.component.ts
```

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

### shake

- 固定动画

``` js
// 参数同 shakeIn
// 只有 :enter 动画，没有 :leave 动画
```

## swing

``` angular-files
demo/animation/swing.component.ts
```

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

### swing

- 固定动画

``` js
// 参数同 swingIn
// 只有 :enter 动画，没有 :leave 动画
```

## tada

``` angular-files
demo/animation/tada.component.ts
```

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

### tada

- 固定动画

``` js
// 参数同 tadaIn
// 只有 :enter 动画，没有 :leave 动画
```

## wobble

``` angular-files
demo/animation/wobble.component.ts
```

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

### wobble

- 固定动画

``` js
// 参数同 wobbleIn
// 只有 :enter 动画，没有 :leave 动画
```

## jello

``` angular-files
demo/animation/jello.component.ts
```

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

### jello

- 固定动画

``` js
// 参数同 jelloIn
// 只有 :enter 动画，没有 :leave 动画
```

## heart-beat

``` angular-files
demo/animation/heart-beat.component.ts
```

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

### heartBeat

- 固定动画

``` js
// 参数同 heartBeatIn
// 只有 :enter 动画，没有 :leave 动画
```

## bounce

``` angular-files
{
  "embedOptions": {
    "height": 800
  }
}

demo/animation/bounce.component.ts
```

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

### bounce

- 固定动画

``` js
// 参数
{
    duration?: number;          // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;             // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;            // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: BounceInOptions;    // :enter 动画参数，使用 bounceIn
    leave?: BounceOutOptions;   // :leave 动画参数，使用 bounceOut
}
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

### bounceOutLeft

- 动画组件

``` js
// 参数 - BounceOutXOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 600
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    percent20?: string;     // 动画在 0%   偏移量处的 translateX 值，默认值 10px
    percent100?: string;    // 动画在 100% 偏移量处的 translateX 值，默认值 -100%
}
```

### bounceInRight

- 动画组件

``` js
// 参数 - BounceInXOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 600
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 cubic-bezier(0.215, 0.61, 0.355, 1)

    percent0?: string;      // 动画在 0%  偏移量处的 translateX 值，默认值 100%
    percent60?: string;     // 动画在 60% 偏移量处的 translateX 值，默认值 -25px
    percent75?: string;     // 动画在 75% 偏移量处的 translateX 值，默认值 10px
    percent90?: string;     // 动画在 90% 偏移量处的 translateX 值，默认值 -5px
}
```

### bounceOutRight

- 动画组件

``` js
// 参数 - BounceOutXOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 600
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    percent20?: string;     // 动画在 0%   偏移量处的 translateX 值，默认值 -10px
    percent100?: string;    // 动画在 100% 偏移量处的 translateX 值，默认值 100%
}
```

### bounceLeft

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: BounceInXOptions;    // :enter 动画参数，使用 bounceInLeft
    leave?: BounceOutXOptions;   // :leave 动画参数，使用 bounceOutLeft
}
```

### bounceRight

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: BounceInXOptions;    // :enter 动画参数，使用 bounceInRight
    leave?: BounceOutXOptions;   // :leave 动画参数，使用 bounceOutRight
}
```

### bounceLeftToRight

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: BounceInXOptions;    // :enter 动画参数，使用 bounceInLeft
    leave?: BounceOutXOptions;   // :leave 动画参数，使用 bounceOutRight
}
```

### bounceRightToLeft

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: BounceInXOptions;    // :enter 动画参数，使用 bounceInRight
    leave?: BounceOutXOptions;   // :leave 动画参数，使用 bounceOutLeft
}
```

### bounceInTop

- 动画组件

``` js
// 参数 - BounceInYOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 600
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 cubic-bezier(0.215, 0.61, 0.355, 1)

    percent0?: string;      // 动画在 0%  偏移量处的 translateY 值，默认值 -100%
    percent60?: string;     // 动画在 60% 偏移量处的 translateY 值，默认值 20px
    percent75?: string;     // 动画在 75% 偏移量处的 translateY 值，默认值 -10px
    percent90?: string;     // 动画在 90% 偏移量处的 translateY 值，默认值 5px
}
```

### bounceOutTop

- 动画组件

``` js
// 参数 - BounceOutYOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 600
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    percent20?: string;     // 动画在 0%  偏移量处的 translateY 值，默认值 -10px
    percent40?: string;     // 动画在 60% 偏移量处的 translateY 值，默认值 10px
    percent45?: string;     // 动画在 75% 偏移量处的 translateY 值，默认值 10px
    percent100?: string;    // 动画在 90% 偏移量处的 translateY 值，默认值 -100%
}
```

### bounceInBottom

- 动画组件

``` js
// 参数 - BounceInYOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 600
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 cubic-bezier(0.215, 0.61, 0.355, 1)

    percent0?: string;      // 动画在 0%  偏移量处的 translateY 值，默认值 100%
    percent60?: string;     // 动画在 60% 偏移量处的 translateY 值，默认值 -20px
    percent75?: string;     // 动画在 75% 偏移量处的 translateY 值，默认值 10px
    percent90?: string;     // 动画在 90% 偏移量处的 translateY 值，默认值 -5px
}
```

### bounceOutBottom

- 动画组件

``` js
// 参数 - BounceInYOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 600
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    percent20?: string;     // 动画在 0%  偏移量处的 translateY 值，默认值 10px
    percent40?: string;     // 动画在 60% 偏移量处的 translateY 值，默认值 -10px
    percent45?: string;     // 动画在 75% 偏移量处的 translateY 值，默认值 -10px
    percent100?: string;    // 动画在 90% 偏移量处的 translateY 值，默认值 100%
}
```

### bounceTop

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: BounceInYOptions;    // :enter 动画参数，使用 bounceInTop
    leave?: BounceOutYOptions;   // :leave 动画参数，使用 bounceOutTop
}
```

### bounceBottom

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: BounceInYOptions;    // :enter 动画参数，使用 bounceInBottom
    leave?: BounceOutYOptions;   // :leave 动画参数，使用 bounceOutBottom
}
```

### bounceTopToBottom

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: BounceInYOptions;    // :enter 动画参数，使用 bounceInTop
    leave?: BounceOutYOptions;   // :leave 动画参数，使用 bounceOutBottom
}
```

### bounceBottomToTop

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: BounceInYOptions;    // :enter 动画参数，使用 bounceInBottom
    leave?: BounceOutYOptions;   // :leave 动画参数，使用 bounceOutTop
}
```

## fade

``` angular-files
{
  "embedOptions": {
    "height": 800
  }
}

demo/animation/fade.component.ts
```

### fadeIn

- 动画组件

``` js
// 参数
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 250
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease
}
```

### fadeOut

- 动画组件

``` js
// 参数同 fadeIn
```

### fade

- 固定动画

``` js
// 参数同 fadeIn，:enter 使用 fadeIn，:leave 使用 fadeOut
```

### fadeLeft

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: SlideXOptions;       // :enter 动画参数，使用 fadeIn、slideInX(-100% => 0)
    leave?: SlideXOptions;       // :leave 动画参数，使用 fadeOut、slideInX(0 => -100%)
}
```

### fadeRight

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: SlideXOptions;       // :enter 动画参数，使用 fadeIn、slideInX(100% => 0)
    leave?: SlideXOptions;       // :leave 动画参数，使用 fadeOut、slideInX(0 => 100%)
}
```

### fadeLeftToRight

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: SlideXOptions;       // :enter 动画参数，使用 fadeIn、slideInX(-100% => 0)
    leave?: SlideXOptions;       // :leave 动画参数，使用 fadeOut、slideInX(0 => 100%)
}
```

### fadeRightToLeft

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: SlideXOptions;       // :enter 动画参数，使用 fadeIn、slideInX(100% => 0)
    leave?: SlideXOptions;       // :leave 动画参数，使用 fadeOut、slideInX(0 => -100%)
}
```