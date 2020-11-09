import { EnumOption } from '@shared/enums/enum-option';

export class NullEnumOption<T> implements EnumOption<T> {
    public id: T;
    public color: string;
    public text: string;

    public constructor(text?: string, color?: string) {
        this.id = null;
        this.color = color || '';
        this.text = text || '';
    }
}
