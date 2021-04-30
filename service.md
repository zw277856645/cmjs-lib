## 概要

常用全局服务(root)，服务于 angular 应用

## LocalStorageService

原始的 localStorage 只支持字符串的存取，本服务简单使用`JSON.stringify / JSON.parse`以支持对象的存取

### getItem

获取缓存值

**getItem(`key`: string): any**

- key：存储的键名

示例：

```js
@Component({
    ...
})
export class Sample {

    cache: any;

    constructor(private localStorageService: LocalStorageService) {
    }
    
    ngOnInit() {
        this.cache = this.localStorageService.getItem('CACHE_KEY');
    }
}
```

### setItem

存储缓存值

**setItem(`key`: string, `value`: any): void**

- key：存储的键名
- value: 存储的值

### removeItem

清除指定缓存

**removeItem(`key`: string): void**

- key：存储的键名

### clear

清空所有缓存

**clear(): void**

## SessionStorageService

参考`LocalStorageService`