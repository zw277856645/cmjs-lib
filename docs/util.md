## 概要

一些常用方法集合

## Dom 相关

### getInputCursorIndex

获取文本框光标位置，失败返回 -1

**getInputCursorIndex(`input`: HTMLInputElement): number**

- input：input 输入框 / textarea 文本域 

### setInputCursorIndex

设置文本框光标位置

**setInputCursorIndex(`input`: HTMLInputElement, `position`: number): void**

- input：input 输入框 / textarea 文本域 
- position：光标需要移动到的位置

### copyDom

复制 dom 到剪切板，相当于用户拖拽鼠标选中 dom 按 ctrl + c

**copyDom(`ele`: HTMLElement): void**

- ele：dom 元素

### getOffset

获取元素距离窗口左上角偏移量，注意是整个窗口，不是可视窗口

**getOffset(`ele`: HTMLElement): { `left`: number, `top`: number }**

- ele：dom 元素

返回值

- left：元素距离窗口左边距离
- top：元素距离窗口顶部距离

### getScrollTop

获取元素 scrollTop，做了类型处理 

**getScrollTop(`ele`: Window | Document | Element): number**

- ele：dom 元素

### getScrollLeft

获取元素 scrollLeft，做了类型处理 

**getScrollLeft(`ele`: Window | Document | Element): number**

- ele：dom 元素

### setScrollTop

设置元素 scrollTop，做了类型处理

**setScrollTop(`ele`: Window | Document | Element, `top`: number = 0): void**

- ele：dom 元素
- top：scrollTop 值，省略则为 0

### setScrollLeft

设置元素 scrollLeft，做了类型处理

**setScrollLeft(`ele`: Window | Document | Element, `left`: number = 0): void**

- ele：dom 元素
- left：scrollLeft 值，省略则为 0

### isVisible

判断元素是否可见，注意是通过元素`offsetWidth > 0 && offsetHeight > 0`判断的，不是 display 和 visible 样式属性

**isVisible(`ele`: Element): void**

- ele：dom 元素

### isHidden

`isVisible`的反逻辑

### getStyle

获取元素最终样式属性值

**getStyle(`ele`: Element, `style`: string): string**

- ele：dom 元素
- style：待查询的样式属性

### getOuterWidth

获取元素外部宽度，等于`border-left + padding-left + width + padding-right + border-right`

**getOuterWidth(`ele`: Window | Document | Element, `withMargin`?: boolean): number**

- ele：dom 元素
- withMargin：是否包括 margin-left 和 margin-right

### getOuterHeight

获取元素外部高度，等于`border-top + padding-top + height + padding-bottom + border-bottom`

**getOuterHeight(`ele`: Window | Document | Element, `withMargin`?: boolean): number**

- ele：dom 元素
- withMargin：是否包括 margin-top 和 margin-bottom

## 文件处理

### dataURLtoBlob

转化 base64 字符串为 Blob 对象

**dataURLtoBlob(`dataUrl`: string): Blob**

- dataUrl: base64 字符串

## 滚动处理

### smoothScroll2YPosition

平滑滚动到指定距离(垂直方向)

**smoothScroll2YPosition(`target`: any, `y`: number, `callback`?: Function): void**

- target: 目标滚动元素
- y：需要滚动到的 y 轴位置
- callback：滚动结束回调

## 异步处理

### async2Observable

转化不同规格的`异步 / 同步`对象为`Observable`

**async2Observable(`fn`: any): Observable<any>**

- fn：任意

```js
// 源码
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
```

### waitFor

等待直到条件成立

**waitFor&lt;T&gt;(`condition`: () => boolean, `mapValue`?: T, `limit`: number = 15): Observable&lt;T&gt;**

- condition：检验条件函数
- mapValue：条件成功时映射的值，作为后续操作的回调参数
- limit：最大检查次数，可设置为 0、false 等空值以无限检查 

## 杂项集合

### uuid

唯一标识

**uuid(`len`: number, `radix`?: number): string**

- len：生成的 uuid 长度
- radix：随机种子，通常不需要设置

### deepExtend

深度继承

**deepExtend(`out`: any, ...`args`: any[]): any**

- out：继承后输出的对象
- args：待继承的对象列表