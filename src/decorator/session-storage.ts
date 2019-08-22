/**
 * sessionStorage
 *
 * @param key 存储的键名，不提供则使用属性名
 * @param defaultValue 缓存没有找到值时使用的默认值
 */
export function SessionStorage(key?: string, defaultValue?: any): (target: any, propName: string) => void;

/**
 * sessionStorage
 *
 * @param config 对象形式的 key、defaultValue，方便省略 key 只定义 defaultValue 的情况，
 * 比如：@SessionStorage({ defaultValue: xxx })
 */
export function SessionStorage(config?: { key?: string, defaultValue?: any }): (target: any, propName: string) => void;

export function SessionStorage(key?: string | { key?: string, defaultValue?: any }, defaultValue?: any) {
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
                return storageDecoratorGetHandler(cache, sessionStorage.getItem(rawKey), key, defaultValue);
            },
            set(value: any) {
                cache = value;
                sessionStorage.setItem(rawKey, JSON.stringify(value));
            }
        });
    };
}

export function storageDecoratorGetHandler(cache: any,
                                           curCache: any,
                                           key: string | { key?: string, defaultValue?: any },
                                           defaultValue: any) {
    if (cache === null || cache === undefined) {
        cache = JSON.parse(curCache);

        if (cache === null) {
            if (key !== null && typeof key === 'object') {
                return key.defaultValue;
            } else {
                return defaultValue;
            }
        } else {
            return cache;
        }
    } else {
        // 外部变量 cache 一直缓存值，若多个地方使用同一个缓存，缓存值在其他地方改变，但此处 cache 还保留着以前的值，
        // 对此做一次比较以便及时修复这种情况
        if (JSON.stringify(cache) !== curCache) {
            cache = JSON.parse(curCache);
        }

        return cache;
    }
}