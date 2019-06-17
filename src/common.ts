// 唯一标识
export function uuid(len: number, radix?: number) {
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    let uuid = [], i;

    radix = radix || chars.length;

    if (len) {
        for (i = 0; i < len; i++) {
            uuid[ i ] = chars[ 0 | Math.random() * radix ];
        }
    } else {
        let r;

        uuid[ 8 ] = uuid[ 13 ] = uuid[ 18 ] = uuid[ 23 ] = '-';
        uuid[ 14 ] = '4';

        for (i = 0; i < 36; i++) {
            if (!uuid[ i ]) {
                r = 0 | Math.random() * 16;
                uuid[ i ] = chars[ (i === 19) ? (r & 0x3) | 0x8 : r ];
            }
        }
    }

    return uuid.join('');
}

// 深度拷贝
export function deepExtend(out: any, ...args: any[]) {
    if ((typeof out !== 'object' && typeof out !== 'function') || out === null) {
        if (args.length === 0) {
            return out;
        } else if (args.length === 1) {
            return args[ 0 ];
        } else {
            return deepExtend({}, ...args);
        }
    }

    out = out || {};

    for (let i = 0; i < args.length; i++) {
        let obj = args[ i ];

        if (!obj) {
            continue;
        }

        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[ key ] === 'object') {
                    out[ key ] = deepExtend(out[ key ], obj[ key ]);
                } else {
                    out[ key ] = obj[ key ];
                }
            }
        }
    }

    return out;
}