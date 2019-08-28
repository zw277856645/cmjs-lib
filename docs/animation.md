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
            transition(':leave', [ useAnimation(fadeOut({ duration: '1s', delay: 100 })) ])
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
        fade()
    ]
})
export class ExampleComponent {
}
```

## bounce-drop

### bounceDropIn

``` angular
```

## 公共成员方法

实例方法

### repositionMessages

- 类型：`(delay?: number) => void`
  - delay：延时重定位时间，默认不延时

错误消息重定位，当关联控件为`表单组`时，其`子域`也会同时重定位

