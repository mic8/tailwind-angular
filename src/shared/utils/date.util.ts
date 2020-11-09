import { Injectable } from '@angular/core';
import { IntlService } from '@progress/kendo-angular-intl';

export namespace DateUtil {
    export function toISODateString(date: Date): string {
        return new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000).toISOString().split('T')[0];
    }

    @Injectable({ providedIn: 'root' })
    export class Parser {
        public constructor(private intl: IntlService) {}

        public parseDate(dateString: any): Date {
            return this.intl.parseDate(dateString) || new Date();
        }
    }

    export function toDateWithTimezone(date: Date): string | null {
        function formatString(data: string): string {
            if (data.length < 2) {
                return `0${data}`;
            }

            return data;
        }

        if (date) {
            const tz = date.getTimezoneOffset() / 60;
            let strTz = `-${Math.abs(tz)}`;
            if (tz < 0) {
                strTz = `+${Math.abs(tz)}`;
            }

            return `${formatString(date.getFullYear().toString())}-${formatString((date.getMonth() + 1).toString())}-${formatString(
                date.getDate().toString(),
            )} ${formatString(date.getHours().toString())}:${formatString(date.getMinutes().toString())}:${formatString(
                date.getSeconds().toString(),
            )} ${strTz}`;
        }

        return null;
    }

    export function getMonthDuration(firstDate: Date, secondDate: Date): number {
        let timeDiff = (secondDate.getTime() - firstDate.getTime()) / 1000;
        timeDiff /= 60 * 60 * 24 * 7 * 4;
        if (timeDiff < 1) {
            timeDiff = 1;
        }

        return Math.abs(Math.round(timeDiff));
    }
}
