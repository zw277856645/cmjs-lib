## 概要

常用 angular 指令(@Directive)

## SwitcherTemplateOutletDirective

选择器：`*switcherTemplateOutlet`

切换`普通输入`或`模板(TemplateRef)输入`的结构型指令

> 使用需导入 CmjsLibModule

示例：

```html
<!-- 普通输入，渲染内部内容 -->
<ng-container *switcherTemplateOutlet="title">{{ title }}</ng-container>

<!-- 模板输入，渲染传入的模板本身 -->
<ng-container *switcherTemplateOutlet="titleTemplate"></ng-container>
<ng-template #titleTemplate> ... </ng-template>
```