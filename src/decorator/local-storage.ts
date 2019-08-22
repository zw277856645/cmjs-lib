import { storageDecoratorGetHandler } from './session-storage';

/**
 * localStorage
 *
 * @param key 存储的键名，不提供则使用属性名
 * @param defaultValue 缓存没有找到值时使用的默认值
 */
export function LocalStorage(key?: string, defaultValue?: any): (target: any, propName: string) => void;

/**
 * localStorage
 *
 * @param config 对象形式的 key、defaultValue，方便省略 key 只定义 defaultValue 的情况，
 * 比如：@SessionStorage({ defaultValue: xxx })
 */
export function LocalStorage(config?: { key?: string, defaultValue?: any }): (target: any, propName: string) => void;

export function LocalStorage(key?: string | { key?: string, defaultValue?: any }, defaultValue?: any) {
    return function (target: any, propName: string) {
        let rawKey: string;
        let cache: any;

        if (typeof key === 'string') {
            rawKey = key;
        } else if (key !== null && typeof key === 'object' && typeof key.key === 'string') {
            rawKey = key.key;
        } else {
            rawKey = propName;
        }

        Object.defineProperty(target, propName, {
            get() {
                return storageDecoratorGetHandler(cache, localStorage.getItem(rawKey), key, defaultValue);
            },
            set(value: any) {
                cache = value;
                localStorage.setItem(rawKey, JSON.stringify(value));
            }
        });
    };
}