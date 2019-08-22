export function Boolean() {
    return function (target: any, propName: string) {
        Object.defineProperty(target, propName, {
            get() {
                return this[ propName ];
            },
            set(value: any) {
                // tslint:disable-next-line:triple-equals
                this[ propName ] = value != null && `${value}` !== 'false';
            }
        });
    };
}

export function Number(fallbackValue: number = 0) {
    return function (target: any, propName: string) {
        Object.defineProperty(target, propName, {
            get() {
                return this[ propName ];
            },
            set(value: any) {
                if (!isNaN(parseFloat(value)) && !isNaN(global.Number(value))) {
                    this[ propName ] = Number(value);
                } else {
                    this[ propName ] = fallbackValue;
                }
            }
        });
    };
}

/**
 * sessionStorage
 *
 * @param key 存储的键名，不提供则使用属性名
 * @param defaultValue 缓存没有找到值时使用的默认值
 */
export function SessionStorage(key?: string, defaultValue?: any) {
    return function (target: any, propName: string) {
        const rawKey = key || propName;
        let cache: any;

        Object.defineProperty(target, propName, {
            get() {
                if (cache === null || cache === undefined) {
                    cache = JSON.parse(sessionStorage.getItem(rawKey));
                }

                return (cache === null || cache === undefined) ? defaultValue : cache;
            },
            set(value: any) {
                cache = value;
                sessionStorage.setItem(rawKey, JSON.stringify(value));
            }
        });
    };
}

/**
 * localStorage
 *
 * @param key 存储的键名，不提供则使用属性名
 * @param defaultValue 缓存没有找到值时使用的默认值
 */
export function LocalStorage(key?: string, defaultValue?: any) {
    return function (target: any, propName: string) {
        const rawKey = key || propName;
        let cache: any;

        Object.defineProperty(target, propName, {
            get() {
                if (cache === null || cache === undefined) {
                    cache = JSON.parse(localStorage.getItem(rawKey));
                }

                return (cache === null || cache === undefined) ? defaultValue : cache;
            },
            set(value) {
                cache = value;
                localStorage.setItem(rawKey, JSON.stringify(value));
            }
        });
    };
}