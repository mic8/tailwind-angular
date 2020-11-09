export namespace TextUtil {
    export function toLiteral(data: any): any {
        return toSnake(data).replace(/_/g, ' ');
    }

    export function toCamel(data: string): string {
        return data.replace(/(\_\w)/g, (m: string) => m[1].toUpperCase());
    }

    export function toSnake(data: string): string {
        return data.replace(/([A-Z])/g, (m: string) => '_' + m.toLowerCase());
    }
}
