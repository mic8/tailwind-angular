import { EnumOption } from '@shared/enums/enum-option';

export enum Religion {
    OTHER = 'other',
    HINDU = 'hindu',
    BUDDHA = 'buddha',
    CATHOLIC = 'catholic',
    PROTESTANT = 'protestant',
    ISLAM = 'islam',
}

export namespace Religion {
    export function getValue(): EnumOption<Religion>[] {
        return [
            { id: Religion.OTHER, text: 'Other' },
            { id: Religion.HINDU, text: 'Hindu' },
            { id: Religion.BUDDHA, text: 'Buddha' },
            { id: Religion.CATHOLIC, text: 'Catholic' },
            { id: Religion.PROTESTANT, text: 'Protestant' },
            { id: Religion.ISLAM, text: 'Islam' },
        ];
    }
}
