import { HttpErrorResponse } from '@angular/common/http';

export namespace HttpUtil {
    export function queryParamsExtractor(obj: any): any {
        const data: any = {};

        for (const key in obj) {
            if (undefined !== obj[key] && null !== obj[key]) {
                if (Array.isArray(obj[key])) {
                    data[`${key}[]`] = [];
                    obj[key].forEach((item) => {
                        data[`${key}[]`].push(item);
                    });
                } else if (typeof obj[key] === 'object') {
                    for (const objKey in obj[key]) {
                        data[`${key}[${objKey}]`] = obj[key][objKey];
                    }
                } else {
                    data[key] = obj[key];
                }
            }
        }

        return HttpUtil.requestToSnake(data);
    }

    export function requestToSnake(data: any) {
        if (data instanceof FormData) {
            const arr: any[] = Array.from((<any>data).entries());

            return arr.reduce((acc, [key, val]) => {
                const newKey = key.replace(/([A-Z])/g, (m: string) => '_' + m.toLowerCase());
                if (val) {
                    if (val instanceof File) {
                        acc.append(newKey, val, val.name);
                    } else {
                        acc.append(newKey, val);
                    }
                }

                return acc;
            }, new FormData());
        }
        if (data instanceof Date || data instanceof Boolean || data instanceof String) {
            return data;
        }
        if (data instanceof Array) {
            return data.map((item: any) => HttpUtil.requestToSnake(item));
        }

        if (null !== data && 'object' === typeof data) {
            const transformed: any = {};
            Object.keys(data).forEach((key: any) => {
                let transformedKey = key;
                let transformedItem = data[key];

                if ('string' === typeof transformedKey) {
                    transformedKey = transformedKey.replace(/([A-Z])/g, (m: string) => '_' + m.toLowerCase());
                }

                if ('object' === typeof transformedItem) {
                    transformedItem = HttpUtil.requestToSnake(transformedItem);
                }

                transformed[transformedKey] = transformedItem;
            });

            return transformed;
        }

        return data;
    }

    export function errorExtractor(err: HttpErrorResponse): string {
        let message: any = '';

        if (err.error && err.message) {
            if (err.error instanceof ProgressEvent) {
                message = err.message;
            } else {
                message = err.error.message;
            }
        }

        return message;
    }

    export function payloadToFormData(payload: any): FormData {
        const formData = new FormData();

        for (const key in payload) {
            if (payload[key] !== null && payload !== undefined) {
                formData.append(key, payload[key]);
            }
        }

        return formData;
    }

    export function objectToFormData(formData: FormData, key: string, payload: any): any {
        const keys = Object.keys(payload);
        keys.forEach((item) => {
            formData.append(`${key}[${item}]`, payload[item]);
        });

        return formData;
    }
}
