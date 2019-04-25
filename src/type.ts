export function isNullOrUndefined(value: any) {
    return value === null || value === undefined;
}

export function isFunction(value: any) {
    return typeof value === 'function';
}

export function isUndefined(value: any) {
    return value === undefined;
}

export function isNumber(value: any) {
    return typeof value === 'number';
}

export function isString(value: any) {
    return typeof value === 'string';
}

export function isArray(value: any) {
    return Array.isArray(value);
}

export function isBoolean(value: any) {
    return typeof value === 'boolean';
}

export function isBuffer(value: any) {
    return Buffer.isBuffer(value);
}

export function isNull(value: any) {
    return value === null;
}

export function isObject(value: any) {
    return value !== null && typeof value === 'object';
}

export function isPrimitive(value: any) {
    return (typeof value !== 'object' && typeof value !== 'function') || value === null;
}

export function isSymbol(value: any) {
    return typeof value === 'symbol';
}