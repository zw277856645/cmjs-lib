## 概要

常用 angular 装饰器

## LocalStorage

对所装饰的属性使用 localStorage 存/取值，初始从缓存加载值赋值给属性，后续当属性值改变时，自动缓存到 localStorage

> 注意
> - 当属性值为对象时，必须改变对象的引用才能被保存到 localStorage。列如：数组使用 array = [].concat(array, newItem)，
> 对象使用 obj = { ...obj }
> - 禁止通过赋值形式给属性默认值，如：@LocalStorage() name: string = 'xxx'，会导致BUG，
> 请使用 @LocalStorage({ defaultValue: 'xxx' }) name: string 的方式

**LocalStorage(`key`?: string, `defaultValue`?: any)**  
**LocalStorage(`config`?: { `key`?: string, `defaultValue`?: any })**  

- key：存储的键名，若省略，则为属性名
- defaultValue：当不存在缓存值时，返回的默认值
  
示例：

```js
class SampleClass {

    @LocalStorage() name: string;
    // @LocalStorage('nameAlias', 'xxx') name: string; 
    // @LocalStorage({ defaultValue: 'xxx' }) name: string;
    
    // 数组改变时，需改变引用才能被正确处理，如添加元素可使用 likes = [].concat(likes, xxx)
    @LocalStorage({ defaultValue: [] }) likes: string[];
    
    /* 对象改变时，需改变引用才能被正确处理，如当 street 改变时，address.street = newValue，
     * 需对 address 重新赋值，address = { ...address } 
     */
    @LocalStorage({ defaultValue: {} }) address: { street: string; code: string };
}
```

## SessionStorage

参考`LocalStorage`

## InputBoolean

转化属性值为 boolean，通常与输入属性装饰器 @Input() 配和使用，免去在代码逻辑中再对属性做容错处理

**InputBoolean()**  

示例：

```js
@Component({
    selector: 'sample',
    ...
})
class SampleClass {

    @Input() InputBoolean() valid: boolean;
}
```

```html
<!-- valid = true -->
<sample valid></sample>

<!-- valid = true -->
<sample valid=""></sample>

<!-- valid = true -->
<sample valid="any string but false"></sample>

<!-- valid = false -->
<sample valid="false"></sample>

<!-- valid = false -->
<sample [valid]></sample>

<!-- valid = false -->
<sample [valid]="false"></sample>

<!-- valid = true -->
<sample [valid]="true"></sample>

<!-- valid = true -->
<sample [valid]="0"></sample>

<!-- valid = true -->
<sample [valid]="1"></sample>
```

## InputNumber

转化属性值为 number，通常与输入属性装饰器 @Input() 配和使用，免去在代码逻辑中再对属性做容错处理

**InputNumber(`fallbackValue`: number = 0)**

- fallbackValue：转化失败时使用的值，不提供则为 undefined

示例：

```js
@Component({
    selector: 'sample',
    ...
})
class SampleClass {

    @Input() InputNumber() max: number;
}
```

```html
<!-- max = 7 -->
<sample max="7"></sample>

<!-- max = fallbackValue -->
<sample max></sample>

<!-- max = fallbackValue -->
<sample max="any thing cannot parse to number"></sample>
```