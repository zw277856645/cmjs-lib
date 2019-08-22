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