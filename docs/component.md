## 概要

常用 angular 组件(@Component)

## ContentsLoadingComponent

选择器：`contents-loading`, `[contentsLoading]`

内容加载 loading 组件，当内容没有加载时，显示本组件，当内容加载完毕时，销毁本组件

> 使用需导入 CmjsLibModule

### 输入属性

#### loadingRender

- 类型：`TemplateRef<{ fullScreen: boolean }>`
- 默认值：`内置模板`

loading 渲染模板，不提供则使用内置模板。可用环境变量为[`fullScreen`](#fullScreen)

示例：

``` html
<contents-loading [loadingRender]="loadingTmpl"></contents-loading>

<ng-template #loadingTmpl let-fullScreen="fullScreen">
  <div class="ui loader" [class.full-screen]="fullScreen"></div>
</ng-template>
```

``` css
.loader {
  position: absolute;
  ...
}

.loading.full-screen {
  position: fixed;
  ...
}
```

#### contentsContainer

- 类型：`Element | ElementRef | string`
- 默认值：`undefined`

包含待加载内容的容器指引

- 当类型为 string 时，为 css 选择器
- 当不设置时，则以指令本身`子元素`为容器指引

示例：

模板变量方式

``` html
<contents-loading [contentsContainer]="contents"></contents-loading>

<div class="container" #contents>
  <!-- 待加载的内容 -->
  ...
</div>
```

css 选择器方式

> css 选择器方式只会在子元素中查找，注意内容`必须`放在组件中

``` html
<contents-loading [contentsContainer]=".container">
  <div class="container">
    <!-- 待加载的内容 -->
    ...
  </div>
</contents-loading>

<!-- 省略参数，代表以指令本身子元素为容器指引，此方式与上面示例等效 -->
<div class="container" contentsLoading>
  <!-- 待加载的内容 -->
  ...
</div>
```

`css 选择器可以设置为尚未渲染的元素`

``` html
<contents-loading [contentsContainer]=".wrapper">
  <div class="container">
    <!-- 待加载的内容 -->
    <div class="wrapper" *ngIf="datas?.length > 0">
      ...
    </div>
  </div>
</contents-loading>
```

#### fullScreen

- 类型：`boolean`
- 默认值：`true`

loading 是否为全屏，false 时代表在指令`父元素`上应用动画。

> 父元素会自动设置`position: relative`和`min-height`。`min-height`是防止内容没有加载时高度为0而看不到 loading 动画，你
> 也可自行设置合适值覆盖插件内置值

示例：

在 `class="parent"` 的元素上应用动画

``` html
<div class="parent">
  <contents-loading [fullScreen]="false">
    <!-- 待加载的内容 -->
    ...
  </contents-loading>
</div>

<!-- 或 -->

<div class="parent">
  <contents-loading [fullScreen]="false" [contentsContainer]="contents"></contents-loading>
  <div class="container" #contents>
    <!-- 待加载的内容 -->
    ...
  </div>
</div>
```

#### delay

- 类型：`number`
- 默认值：`500`

初始动画显示的延时时间，设置 0 禁用延时

> 通常在页面/内容加载时，不立即显示 loading，当过一个短暂时间后，页面/内容还没有加载，代表这是一个缓慢页面/内容，此时再开始显示
> loading 是一个比较好的用户体验。否则如果一个页面/内容加载比较快，loading 会快速的显示 -> 销毁，造成闪烁的不良体验