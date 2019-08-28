function propDecoratorFactory<T, D>(fallback: (v: T) => D): (target: any, propName: string) => void {
    return function (target: any, propName: string): void {
        const privatePropName = `__cmjs__decorator__${propName}`;

        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true
        });

        Object.defineProperty(target, propName, {
            get(): string {
                // 使用另一个属性做中转，避免死循环
                return this[ privatePropName ];
            },
            set(value: T): void {
                this[ privatePropName ] = fallback(value);
            }
        });
    };
}

export function InputBoolean() {
    // tslint:disable-next-line:triple-equals
    return propDecoratorFactory((value: any) => value != null && `${value}` !== 'false');
}

export function InputNumber(fallbackValue: number = 0) {
    return propDecoratorFactory((value: any) => {
        if (!isNaN(parseFloat(value)) && !isNaN(Number(value))) {
            return Number(value);
        } else {
            return fallbackValue;
        }
    });
}