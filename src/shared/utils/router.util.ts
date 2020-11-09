import { Injectable } from '@angular/core';
import { PRIMARY_OUTLET, Router, UrlSegment, UrlSegmentGroup } from '@angular/router';
import { isArray } from 'util';

export namespace RouterUtil {
    export function queryParamsExtractor(obj: any): any {
        const data: any = {};

        for (const key in obj) {
            if (undefined !== obj[key] && null !== obj[key]) {
                if (isArray(obj[key]) && obj[key].length === 0) {
                    continue;
                }
                data[key] = obj[key];
            }
        }

        return data;
    }

    @Injectable({ providedIn: 'root' })
    export class RouterUrlDecoder {
        public constructor(private router: Router) {}

        public decode(url: string): { url: any; queryParams: any } {
            const parsedUrl = this.router.parseUrl(url);
            const segmentGroup: UrlSegmentGroup = parsedUrl.root.children[PRIMARY_OUTLET];
            if (segmentGroup) {
                const segments: UrlSegment[] = segmentGroup.segments;
                const formattedUrl = `${segments.map((p) => p.path).join('/')}`;
                return { url: formattedUrl, queryParams: { ...parsedUrl.queryParams } };
            }

            return { url: '/', queryParams: {} };
        }
    }
}
