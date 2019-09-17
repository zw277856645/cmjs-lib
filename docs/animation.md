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

    // 动画在 15% 偏移量处的 translateX, rotateZ 值，默认值 -25%, -5deg
    percent15?: { translateX?: string; rotateZ?: string };

    // 动画在 30% 偏移量处的 translateX, rotateZ 值，默认值 20%, 3deg
    percent30?: { translateX?: string; rotateZ?: string };

    // 动画在 45% 偏移量处的 translateX, rotateZ 值，默认值 -15%, -3deg
    percent45?: { translateX?: string; rotateZ?: string };

    // 动画在 60% 偏移量处的 translateX, rotateZ 值，默认值 10%, 2deg
    percent60?: { translateX?: string; rotateZ?: string };

    // 动画在 75% 偏移量处的 translateX, rotateZ 值，默认值 -5%, -1deg
    percent75?: { translateX?: string; rotateZ?: string };
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

## slide

``` angular-files
{
  "embedOptions": {
    "height": 800
  }
}

demo/animation/slide.component.ts
```

### slideInX

- 动画组件

``` js
// 参数 - SlideXOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 250
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    startX?: string;        // 动画在 0%   偏移量处的 translateX 值，默认值 0
    endX?: string;          // 动画在 100% 偏移量处的 translateX 值，默认值 0
}
```

### slideInLeft

- 动画组件

``` js
// 参数 - SlideXOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 250
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    startX?: string;        // 动画在 0%   偏移量处的 translateX 值，默认值 -100%
    endX?: string;          // 动画在 100% 偏移量处的 translateX 值，默认值 0
}
```

### slideInRight

- 动画组件

``` js
// 参数 - SlideXOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 250
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    startX?: string;        // 动画在 0%   偏移量处的 translateX 值，默认值 100%
    endX?: string;          // 动画在 100% 偏移量处的 translateX 值，默认值 0
}
```

### slideOutLeft

- 动画组件

``` js
// 参数 - SlideXOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 250
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    startX?: string;        // 动画在 0%   偏移量处的 translateX 值，默认值 0
    endX?: string;          // 动画在 100% 偏移量处的 translateX 值，默认值 -100%
}
```

### slideOutRight

- 动画组件

``` js
// 参数 - SlideXOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 250
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    startX?: string;        // 动画在 0%   偏移量处的 translateX 值，默认值 0
    endX?: string;          // 动画在 100% 偏移量处的 translateX 值，默认值 100%
}
```

### slideLeft

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: SlideXOptions;       // :enter 动画参数，使用 slideInX(-100% => 0)
    leave?: SlideXOptions;       // :leave 动画参数，使用 slideInX(0 => -100%)
}
```

### slideRight

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: SlideXOptions;       // :enter 动画参数，使用 slideInX(100% => 0)
    leave?: SlideXOptions;       // :leave 动画参数，使用 slideInX(0 => 100%)
}
```

### slideLeftToRight

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: SlideXOptions;       // :enter 动画参数，使用 slideInX(-100% => 0)
    leave?: SlideXOptions;       // :leave 动画参数，使用 slideInX(0 => 100%)
}
```

### slideRightToLeft

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: SlideXOptions;       // :enter 动画参数，使用 slideInX(100% => 0)
    leave?: SlideXOptions;       // :leave 动画参数，使用 slideInX(0 => -100%)
}
```

### slideInY

- 动画组件

``` js
// 参数 - SlideYOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 250
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    startY?: string;        // 动画在 0%   偏移量处的 translateY 值，默认值 0
    endY?: string;          // 动画在 100% 偏移量处的 translateY 值，默认值 0
}
```

### slideInTop

- 动画组件

``` js
// 参数 - SlideYOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 250
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    startY?: string;        // 动画在 0%   偏移量处的 translateY 值，默认值 -100%
    endY?: string;          // 动画在 100% 偏移量处的 translateY 值，默认值 0
}
```

### slideInBottom

- 动画组件

``` js
// 参数 - SlideYOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 250
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    startY?: string;        // 动画在 0%   偏移量处的 translateY 值，默认值 100%
    endY?: string;          // 动画在 100% 偏移量处的 translateY 值，默认值 0
}
```

### slideOutTop

- 动画组件

``` js
// 参数 - SlideYOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 250
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    startY?: string;        // 动画在 0%   偏移量处的 translateY 值，默认值 0
    endY?: string;          // 动画在 100% 偏移量处的 translateY 值，默认值 -100%
}
```

### slideOutBottom

- 动画组件

``` js
// 参数 - SlideYOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 250
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    startY?: string;        // 动画在 0%   偏移量处的 translateY 值，默认值 0
    endY?: string;          // 动画在 100% 偏移量处的 translateY 值，默认值 100%
}
```

### slideTop

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: SlideYOptions;       // :enter 动画参数，使用 slideInY(-100% => 0)
    leave?: SlideYOptions;       // :leave 动画参数，使用 slideInY(0 => -100%)
}
```

### slideBottom

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: SlideYOptions;       // :enter 动画参数，使用 slideInY(100% => 0)
    leave?: SlideYOptions;       // :leave 动画参数，使用 slideInY(0 => 100%)
}
```

### slideTopToBottom

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: SlideYOptions;       // :enter 动画参数，使用 slideInY(-100% => 0)
    leave?: SlideYOptions;       // :leave 动画参数，使用 slideInY(0 => 100%)
}
```

### slideBottomToTop

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: SlideYOptions;       // :enter 动画参数，使用 slideInY(100% => 0)
    leave?: SlideYOptions;       // :leave 动画参数，使用 slideInY(0 => -100%)
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

### fadeTop

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: SlideYOptions;       // :enter 动画参数，使用 fadeIn、slideInY(-100% => 0)
    leave?: SlideYOptions;       // :leave 动画参数，使用 fadeOut、slideInY(0 => -100%)
}
```

### fadeBottom

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: SlideYOptions;       // :enter 动画参数，使用 fadeIn、slideInY(100% => 0)
    leave?: SlideYOptions;       // :leave 动画参数，使用 fadeOut、slideInY(0 => 100%)
}
```

### fadeTopToBottom

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: SlideYOptions;       // :enter 动画参数，使用 fadeIn、slideInY(-100% => 0)
    leave?: SlideYOptions;       // :leave 动画参数，使用 fadeOut、slideInY(0 => 100%)
}
```

### fadeBottomToTop

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: SlideYOptions;       // :enter 动画参数，使用 fadeIn、slideInY(100% => 0)
    leave?: SlideYOptions;       // :leave 动画参数，使用 fadeOut、slideInY(0 => -100%)
}
```

## flip

``` angular-files
{
  "embedOptions": {
    "height": 800
  }
}

demo/animation/flip.component.ts
```

### flipIn

- 动画组件

``` js
// 参数 - FlipInOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 1000
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    // 动画在 0%  偏移量处的 perspective, scale3d, translateZ, rotateY 值，默认值 400px, 1, 0, -360deg
    percent0?: { perspective?: string; scale?: number; translateZ?: string; rotateY?: string; };

    // 动画在 40% 偏移量处的 perspective, scale3d, translateZ, rotateY 值，默认值 400px, 1, 150px, -190px
    percent40?: { perspective?: string; scale?: number; translateZ?: string; rotateY?: string; };

    // 动画在 50% 偏移量处的 perspective, scale3d, translateZ, rotateY 值，默认值 400px, 1, 150px, -170px
    percent50?: { perspective?: string; scale?: number; translateZ?: string; rotateY?: string; };

    // 动画在 80% 偏移量处的 perspective, scale3d, translateZ, rotateY 值，默认值 400px, 1, 0, 0
    percent80?: { perspective?: string; scale?: number; translateZ?: string; rotateY?: string; };
}
```

### flip

- 固定动画

``` js
// 参数同 flipIn
// 只有 :enter 动画，没有 :leave 动画
```

### flipInX

- 动画组件

``` js
// 参数 - FlipInXOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 1000
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    // 动画在 0%   偏移量处的 perspective, rotateX 值，默认值 400px, 90deg
    percent0?: { perspective?: string; rotate?: string; };

    // 动画在 40%  偏移量处的 perspective, rotateX 值，默认值 400px, -20deg
    percent40?: { perspective?: string; rotate?: string; };

    // 动画在 60%  偏移量处的 perspective, rotateX 值，默认值 400px, 10deg
    percent60?: { perspective?: string; rotate?: string; };

    // 动画在 80%  偏移量处的 perspective, rotateX 值，默认值 400px, -5deg
    percent80?: { perspective?: string; rotate?: string; };

    // 动画在 100% 偏移量处的 perspective, rotateX 值，默认值 400px, 0
    percent100?: { perspective?: string; rotate?: string; };
}
```

### flipOutX

- 动画组件

``` js
// 参数 - FlipOutXOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 750
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    // 动画在 0%   偏移量处的 perspective, rotateX 值，默认值 400px, 0
    percent0?: { perspective?: string; rotate?: string; };

    // 动画在 30%  偏移量处的 perspective, rotateX 值，默认值 400px, -20deg
    percent30?: { perspective?: string; rotate?: string; };

    // 动画在 100% 偏移量处的 perspective, rotateX 值，默认值 400px, 90deg
    percent100?: { perspective?: string; rotate?: string; };
}
```

### flipX

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: FlipInXOptions;      // :enter 动画参数，使用 flipInX
    leave?: FlipOutXOptions;     // :leave 动画参数，使用 flipOutX
}
```

### flipInY

- 动画组件

``` js
// 参数 - FlipInYOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 1000
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    // 动画在 0%   偏移量处的 perspective, rotateY 值，默认值 400px, 90deg
    percent0?: { perspective?: string; rotate?: string; };

    // 动画在 40%  偏移量处的 perspective, rotateY 值，默认值 400px, -20deg
    percent40?: { perspective?: string; rotate?: string; };

    // 动画在 60%  偏移量处的 perspective, rotateY 值，默认值 400px, 10deg
    percent60?: { perspective?: string; rotate?: string; };

    // 动画在 80%  偏移量处的 perspective, rotateY 值，默认值 400px, -5deg
    percent80?: { perspective?: string; rotate?: string; };

    // 动画在 100% 偏移量处的 perspective, rotateY 值，默认值 400px, 0
    percent100?: { perspective?: string; rotate?: string; };
}
```

### flipOutY

- 动画组件

``` js
// 参数 - FlipOutYOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 750
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    // 动画在 0%   偏移量处的 perspective, rotateY 值，默认值 400px, 0
    percent0?: { perspective?: string; rotate?: string; };

    // 动画在 30%  偏移量处的 perspective, rotateY 值，默认值 400px, -20deg
    percent30?: { perspective?: string; rotate?: string; };

    // 动画在 100% 偏移量处的 perspective, rotateY 值，默认值 400px, 90deg
    percent100?: { perspective?: string; rotate?: string; };
}
```

### flipY

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: FlipInYOptions;      // :enter 动画参数，使用 flipInY
    leave?: FlipOutYOptions;     // :leave 动画参数，使用 flipOutY
}
```

## light-speed

``` angular-files
{
  "embedOptions": {
    "height": 530
  }
}

demo/animation/light-speed.component.ts
```

### lightSpeedIn

- 动画组件

``` js
// 参数 - LightSpeedInOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 1000
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease-out

    // 动画在 0%  偏移量处的 translateX, skewX 值，默认值 100%, -30deg
    percent0?: { translateX?: string; skewX?: string };

    // 动画在 60% 偏移量处的 skewX 值，默认值 20deg
    percent60?: { skewX?: string };

    // 动画在 80% 偏移量处的 skewX 值，默认值 -5deg
    percent80?: { skewX?: string };
}
```

### lightSpeedOut

- 动画组件

``` js
// 参数 - LightSpeedOutOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 750
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease-in

    // 动画在 100% 偏移量处的 translateX, skewX 值，默认值 100%, 30deg
    percent100?: { translateX?: string; skewX?: string };
}
```

### lightSpeed

- 固定动画

``` js
// 参数
{
    duration?: number;               // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;                  // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;                 // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: LightSpeedInOptions;     // :enter 动画参数，使用 lightSpeedIn
    leave?: LightSpeedOutOptions;    // :leave 动画参数，使用 lightSpeedOut
}
```

## rotate

``` angular-files
{
  "embedOptions": {
    "height": 800
  }
}

demo/animation/rotate.component.ts
```

### rotateIn

- 动画组件

``` js
// 参数 - RotateInOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 600
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    startDegrees?: string;  // 动画在 0% 偏移量处的 rotateZ 值，默认值 -200deg
}
```

### rotateOut

- 动画组件

``` js
// 参数 - RotateOutOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 600
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    endDegrees?: string;    // 动画在 100% 偏移量处的 rotateZ 值，默认值 200deg
}
```

### rotate

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: RotateInOptions;     // :enter 动画参数，使用 rotateIn
    leave?: RotateOutOptions;    // :leave 动画参数，使用 rotateOut
}
```

### rotateInLeftDown

- 动画组件

``` js
// 参数 - RotateInOptions
{
    duration?: number;        // 持续时间，单位毫秒(ms)，默认值 600
    delay?: number;           // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;          // 变化曲线，默认值 ease

    startDegrees?: string;    // 动画在 0% 偏移量处的 rotateZ 值，默认值 -45deg
}
```

### rotateInRightDown

- 动画组件

``` js
// 参数 - RotateInOptions
{
    duration?: number;        // 持续时间，单位毫秒(ms)，默认值 600
    delay?: number;           // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;          // 变化曲线，默认值 ease

    startDegrees?: string;    // 动画在 0% 偏移量处的 rotateZ 值，默认值 45deg
}
```

### rotateInLeftUp

- 动画组件

``` js
// 参数 - RotateInOptions
{
    duration?: number;        // 持续时间，单位毫秒(ms)，默认值 600
    delay?: number;           // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;          // 变化曲线，默认值 ease

    startDegrees?: string;    // 动画在 0% 偏移量处的 rotateZ 值，默认值 45deg
}
```

### rotateInRightUp

- 动画组件

``` js
// 参数 - RotateInOptions
{
    duration?: number;        // 持续时间，单位毫秒(ms)，默认值 600
    delay?: number;           // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;          // 变化曲线，默认值 ease

    startDegrees?: string;    // 动画在 0% 偏移量处的 rotateZ 值，默认值 -90deg
}
```

### rotateOutLeftDown

- 动画组件

``` js
// 参数 - RotateOutOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 600
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    endDegrees?: string;    // 动画在 100% 偏移量处的 rotateZ 值，默认值 45deg
}
```

### rotateOutRightDown

- 动画组件

``` js
// 参数 - RotateOutOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 600
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    endDegrees?: string;    // 动画在 100% 偏移量处的 rotateZ 值，默认值 -45deg
}
```

### rotateOutLeftUp

- 动画组件

``` js
// 参数 - RotateOutOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 600
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    endDegrees?: string;    // 动画在 100% 偏移量处的 rotateZ 值，默认值 -45deg
}
```

### rotateOutRightUp

- 动画组件

``` js
// 参数 - RotateOutOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 600
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    endDegrees?: string;    // 动画在 100% 偏移量处的 rotateZ 值，默认值 90deg
}
```

### rotateLeftDown

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: RotateInOptions;     // :enter 动画参数，使用 rotateInLeftDown
    leave?: RotateOutOptions;    // :leave 动画参数，使用 rotateOutLeftDown
}
```

### rotateRightDown

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: RotateInOptions;     // :enter 动画参数，使用 rotateInRightDown
    leave?: RotateOutOptions;    // :leave 动画参数，使用 rotateOutRightDown
}
```

### rotateLeftUp

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: RotateInOptions;     // :enter 动画参数，使用 rotateInLeftUp
    leave?: RotateOutOptions;    // :leave 动画参数，使用 rotateOutLeftUp
}
```

### rotateRightUp

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: RotateInOptions;     // :enter 动画参数，使用 rotateInRightUp
    leave?: RotateOutOptions;    // :leave 动画参数，使用 rotateOutRightUp
}
```

### rotateLeftDownToUp

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: RotateInOptions;     // :enter 动画参数，使用 rotateInLeftDown
    leave?: RotateOutOptions;    // :leave 动画参数，使用 rotateOutLeftUp
}
```

### rotateLeftUpToDown

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: RotateInOptions;     // :enter 动画参数，使用 rotateInLeftUp
    leave?: RotateOutOptions;    // :leave 动画参数，使用 rotateOutLeftDown
}
```

### rotateRightDownToUp

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: RotateInOptions;     // :enter 动画参数，使用 rotateInRightDown
    leave?: RotateOutOptions;    // :leave 动画参数，使用 rotateOutRightUp
}
```

### rotateRightUpToDown

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: RotateInOptions;     // :enter 动画参数，使用 rotateInRightUp
    leave?: RotateOutOptions;    // :leave 动画参数，使用 rotateOutRightDown
}
```

### rotateLeftDownToRightUp

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: RotateInOptions;     // :enter 动画参数，使用 rotateInLeftDown
    leave?: RotateOutOptions;    // :leave 动画参数，使用 rotateOutRightUp
}
```

### rotateLeftUpToRightDown

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: RotateInOptions;     // :enter 动画参数，使用 rotateInLeftUp
    leave?: RotateOutOptions;    // :leave 动画参数，使用 rotateOutRightDown
}
```

### rotateRightUpToLeftDown

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: RotateInOptions;     // :enter 动画参数，使用 rotateInRightUp
    leave?: RotateOutOptions;    // :leave 动画参数，使用 rotateOutLeftDown
}
```

### rotateRightDownToLeftUp

- 固定动画

``` js
// 参数
{
    duration?: number;           // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;              // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;             // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: RotateInOptions;     // :enter 动画参数，使用 rotateInRightDown
    leave?: RotateOutOptions;    // :leave 动画参数，使用 rotateOutLeftUp
}
```

## zoom

``` angular-files
{
  "embedOptions": {
    "height": 800
  }
}

demo/animation/zoom.component.ts
```

### zoomIn

- 动画组件

``` js
// 参数 - ZoomInOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 800
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    startScale?: number;    // 动画在 0% 偏移量处的 scale3d 值，默认值 0.3
}
```

### ZoomOut

- 动画组件

``` js
// 参数 - ZoomOutOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 800
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    endScale?: number;      // 动画在 50% 偏移量处的 scale3d 值，默认值 0.3
}
```

### zoom

- 固定动画

``` js
// 参数
{
    duration?: number;         // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;            // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;           // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: ZoomInOptions;     // :enter 动画参数，使用 zoomIn
    leave?: ZoomOutOptions;    // :leave 动画参数，使用 ZoomOut
}
```

### zoomInLeft

- 动画组件

``` js
// 参数 - ZoomInXOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 1000
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 cubic-bezier(0.55, 0.055, 0.675, 0.19)

    // 动画在 0%  偏移量处的 scale3d, translateX 值，默认值 0.1, -300%
    percent0?: { scale?: number; translateX?: string };

    // 动画在 60% 偏移量处的 scale3d, translateX 值，默认值 0.475, 10px
    percent60?: { scale?: number; translateX?: string };
}
```

### zoomInRight

- 动画组件

``` js
// 参数 - ZoomInXOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 1000
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 cubic-bezier(0.55, 0.055, 0.675, 0.19)

    // 动画在 0%  偏移量处的 scale3d, translateX 值，默认值 0.1, 300%
    percent0?: { scale?: number; translateX?: string };

    // 动画在 60% 偏移量处的 scale3d, translateX 值，默认值 0.475, -10px
    percent60?: { scale?: number; translateX?: string };
}
```

### zoomInTop

- 动画组件

``` js
// 参数 - ZoomInYOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 1000
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 cubic-bezier(0.55, 0.055, 0.675, 0.19)

    // 动画在 0%  偏移量处的 scale3d, translateY 值，默认值 0.1, -400%
    percent0?: { scale?: number; translateY?: string };

    // 动画在 60% 偏移量处的 scale3d, translateY 值，默认值 0.475, 20px
    percent60?: { scale?: number; translateY?: string };
}
```

### zoomInBottom

- 动画组件

``` js
// 参数 - ZoomInYOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 1000
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 cubic-bezier(0.55, 0.055, 0.675, 0.19)

    // 动画在 0%  偏移量处的 scale3d, translateY 值，默认值 0.1, 400%
    percent0?: { scale?: number; translateY?: string };

    // 动画在 60% 偏移量处的 scale3d, translateY 值，默认值 0.475, -20px
    percent60?: { scale?: number; translateY?: string };
}
```

### zoomOutLeft

- 动画组件

``` js
// 参数 - ZoomOutXOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 1000
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    // 动画在 40%  偏移量处的 scale3d, translateX 值，默认值 0.475, 10px
    percent40?: { scale?: number; translateX?: string };

    // 动画在 100% 偏移量处的 scale3d, translateX 值，默认值 0.1, -300%
    percent100?: { scale?: number; translateX?: string };
}
```

### zoomOutRight

- 动画组件

``` js
// 参数 - ZoomOutXOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 1000
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    // 动画在 40%  偏移量处的 scale3d, translateX 值，默认值 0.475, -10px
    percent40?: { scale?: number; translateX?: string };

    // 动画在 100% 偏移量处的 scale3d, translateX 值，默认值 0.1, 300%
    percent100?: { scale?: number; translateX?: string };
}
```

### zoomOutTop

- 动画组件

``` js
// 参数 - ZoomOutYOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 1000
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    // 动画在 40%  偏移量处的 scale3d, translateY 值，默认值 0.475, 20px
    percent40?: { scale?: number; translateY?: string };

    // 动画在 100% 偏移量处的 scale3d, translateY 值，默认值 0, -400%
    percent100?: { scale?: number; translateY?: string };
}
```

### zoomOutBottom

- 动画组件

``` js
// 参数 - ZoomOutYOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 1000
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    // 动画在 40%  偏移量处的 scale3d, translateY 值，默认值 0.475, -20px
    percent40?: { scale?: number; translateY?: string };

    // 动画在 100% 偏移量处的 scale3d, translateY 值，默认值 0, 400%
    percent100?: { scale?: number; translateY?: string };
}
```

### zoomLeft

- 固定动画

``` js
// 参数
{
    duration?: number;          // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;             // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;            // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: ZoomInXOptions;     // :enter 动画参数，使用 zoomInLeft
    leave?: ZoomOutXOptions;    // :leave 动画参数，使用 zoomOutLeft
}
```

### zoomRight

- 固定动画

``` js
// 参数
{
    duration?: number;          // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;             // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;            // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: ZoomInXOptions;     // :enter 动画参数，使用 zoomInRight
    leave?: ZoomOutXOptions;    // :leave 动画参数，使用 zoomOutRight
}
```

### zoomLeftToRight

- 固定动画

``` js
// 参数
{
    duration?: number;          // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;             // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;            // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: ZoomInXOptions;     // :enter 动画参数，使用 zoomInLeft
    leave?: ZoomOutXOptions;    // :leave 动画参数，使用 zoomOutRight
}
```

### zoomRightToLeft

- 固定动画

``` js
// 参数
{
    duration?: number;          // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;             // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;            // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: ZoomInXOptions;     // :enter 动画参数，使用 zoomInRight
    leave?: ZoomOutXOptions;    // :leave 动画参数，使用 zoomOutLeft
}
```

### zoomTop

- 固定动画

``` js
// 参数
{
    duration?: number;          // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;             // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;            // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: ZoomInYOptions;     // :enter 动画参数，使用 zoomInTop
    leave?: ZoomOutYOptions;    // :leave 动画参数，使用 zoomOutTop
}
```

### zoomBottom

- 固定动画

``` js
// 参数
{
    duration?: number;          // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;             // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;            // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: ZoomInYOptions;     // :enter 动画参数，使用 zoomInBottom
    leave?: ZoomOutYOptions;    // :leave 动画参数，使用 zoomOutBottom
}
```

## hinge

``` angular-files
demo/animation/hinge.component.ts
```

### hingeOut

- 动画组件

``` js
// 参数 - HingeOutOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 1500
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    percent20?: { rotateZ?: string; };     // 动画在 20%  偏移量处的 rotateZ 值，默认值 80deg
    percent40?: { rotateZ?: string; };     // 动画在 40%  偏移量处的 rotateZ 值，默认值 60deg
    percent60?: { rotateZ?: string; };     // 动画在 60%  偏移量处的 rotateZ 值，默认值 80deg
    percent80?: { rotateZ?: string; };     // 动画在 80%  偏移量处的 rotateZ 值，默认值 60deg
    percent100?: { translateY?: string };  // 动画在 100% 偏移量处的 translateY 值，默认值 600%
}
```

### hinge

- 固定动画

``` js
// 参数同 HingeOutOptions
// 只有 :leave 动画，没有 :enter 动画
```

## jack-in-the-box

``` angular-files
demo/animation/jack-in-the-box.component.ts
```

### jackInTheBoxIn

- 动画组件

``` js
// 参数 - JackInTheBoxInOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 800
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    percent0?: { scale?: string; rotate?: string };   // 动画在 0%  偏移量处的 scale3d, rotate3d 值，默认值 0.1, 30deg
    percent50?: { rotate?: string; };                 // 动画在 50%  偏移量处的 rotateZ 值，默认值 -10deg
    percent70?: { rotate?: string; };                 // 动画在 70%  偏移量处的 rotateZ 值，默认值 3deg
}
```

### jackInTheBox

- 固定动画

``` js
// 参数同 JackInTheBoxInOptions
// 只有 :enter 动画，没有 :leave 动画
```

## roll

``` angular-files
{
  "embedOptions": {
    "height": 530
  }
}

demo/animation/roll.component.ts
```

### rollIn

- 动画组件

``` js
// 参数 - RollInOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 600
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    // 动画在 0% 偏移量处的 translateX, rotateZ 值，默认值 -100%, -120deg
    percent0?: { translateX?: string; rotateZ?: string };
}
```

### rollOut

- 动画组件

``` js
// 参数 - RollOutOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 600
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 ease

    // 动画在 100% 偏移量处的 translateX, rotateZ 值，默认值 100%, 120deg
    percent100?: { translateX?: string; rotateZ?: string };
}
```

### roll

- 固定动画

``` js
// 参数
{
    duration?: number;          // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;             // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;            // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: RollInOptions;      // :enter 动画参数，使用 rollIn
    leave?: RollOutOptions;     // :leave 动画参数，使用 rollOut
}
```

## shrink

``` angular-files
{
  "embedOptions": {
    "height": 800
  }
}

demo/animation/shrink.component.ts
```

### shrinkInLeft

- 动画组件

``` js
// 参数 - ShrinkXOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 400
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 linear
    
    // width 动画 duration 为原始 duration 的倍率，默认值 0.85
    // width 变化需比 scaleX 快一些，否则视觉上 width 有拖沓感
    widthDurationRate?: number;
    
    // 动画在 0%   偏移量处的 opacity, scaleX, width 值，默认值 0, 0, *
    percent0?: { opacity?: number; scaleX?: number; width?: string };     
    
    // 动画在 100% 偏移量处的 opacity, scaleX, width 值，默认值 1, 1, *
    percent100?: { opacity?: number; scaleX?: number; width?: string };  
}
```

> width 通常不需要设置。scaleX 不会影响元素真实宽度，动画未结束前父元素宽度任然占据着，若需要处理这种情况，
> 可设置 width 和 scaleX 同时变化

### shrinkInRight

- 动画组件

``` js
// 参数同 shrinkInLeft，主要 transform-origin 不同，固定不可修改
```

### shrinkOutLeft

- 动画组件

``` js
// 参数 - ShrinkXOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 400
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 linear
    
    // width 动画 duration 为原始 duration 的倍率，默认值 0.85
    // width 变化需比 scaleX 快一些，否则视觉上 width 有拖沓感
    widthDurationRate?: number;
    
    // 动画在 0%   偏移量处的 opacity, scaleX, width 值，默认值 1, 1, *
    percent0?: { opacity?: number; scaleX?: number; width?: string };     
    
    // 动画在 100% 偏移量处的 opacity, scaleX, width 值，默认值 0, 0, *
    percent100?: { opacity?: number; scaleX?: number; width?: string };  
}
```

### shrinkOutRight

- 动画组件

``` js
// 参数同 shrinkOutLeft，主要 transform-origin 不同，固定不可修改
```

### shrinkLeft

- 固定动画

``` js
// 参数
{
    duration?: number;          // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;             // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;            // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: ShrinkXOptions;     // :enter 动画参数，使用 shrinkInLeft
    leave?: ShrinkXOptions;     // :leave 动画参数，使用 shrinkOutLeft
}
```

### shrinkRight

- 固定动画

``` js
// 参数
{
    duration?: number;          // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;             // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;            // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: ShrinkXOptions;     // :enter 动画参数，使用 shrinkInRight
    leave?: ShrinkXOptions;     // :leave 动画参数，使用 shrinkOutRight
}
```

### shrinkInTop

- 动画组件

``` js
// 参数 - ShrinkYOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 400
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 linear
    
    // height 动画 duration 为原始 duration 的倍率，默认值 0.85
    // height 变化需比 scaleY 快一些，否则视觉上 height 有拖沓感
    heightDurationRate?: number;
    
    // 动画在 0%   偏移量处的 opacity, scaleY, height 值，默认值 0, 0, *
    percent0?: { opacity?: number; scaleY?: number; height?: string };     
    
    // 动画在 100% 偏移量处的 opacity, scaleY, height 值，默认值 1, 1, *
    percent100?: { opacity?: number; scaleY?: number; height?: string };  
}
```

> height 通常不需要设置。scaleY 不会影响元素真实高度，动画未结束前父元素高度任然占据着，若需要处理这种情况，
> 可设置 height 和 scaleY 同时变化

### shrinkInBottom

- 动画组件

``` js
// 参数同 shrinkInTop，主要 transform-origin 不同，固定不可修改
```

### shrinkOutTop

- 动画组件

``` js
// 参数 - ShrinkYOptions
{
    duration?: number;      // 持续时间，单位毫秒(ms)，默认值 400
    delay?: number;         // 延时时间，单位毫秒(ms)，默认值 0
    easing?: string;        // 变化曲线，默认值 linear
    
    // height 动画 duration 为原始 duration 的倍率，默认值 0.85
    // height 变化需比 scaleY 快一些，否则视觉上 height 有拖沓感
    heightDurationRate?: number;
    
    // 动画在 0%   偏移量处的 opacity, scaleY, height 值，默认值 1, 1, *
    percent0?: { opacity?: number; scaleY?: number; height?: string };     
    
    // 动画在 100% 偏移量处的 opacity, scaleY, height 值，默认值 0, 0, *
    percent100?: { opacity?: number; scaleY?: number; height?: string };  
}
```

### shrinkOutBottom

- 动画组件

``` js
// 参数同 shrinkOutTop，主要 transform-origin 不同，固定不可修改
```

### shrinkTop

- 固定动画

``` js
// 参数
{
    duration?: number;          // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;             // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;            // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: ShrinkYOptions;     // :enter 动画参数，使用 shrinkInTop
    leave?: ShrinkYOptions;     // :leave 动画参数，使用 shrinkOutTop
}
```

### shrinkBottom

- 固定动画

``` js
// 参数
{
    duration?: number;          // 共同持续时间，优先级低于 enter/leave 自身的 duration
    delay?: number;             // 共同延时时间，优先级低于 enter/leave 自身的 delay
    easing?: string;            // 共同变化曲线，优先级低于 enter/leave 自身的 easing

    enter?: ShrinkYOptions;     // :enter 动画参数，使用 shrinkInBottom
    leave?: ShrinkYOptions;     // :leave 动画参数，使用 shrinkOutBottom
}
```