import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

export namespace UiUtil {
    @Injectable({ providedIn: 'root' })
    export class WindowScroller {
        public constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

        public bind(): Observable<void> {
            return this.router.events.pipe(
                tap((evt: any) => {
                    if (!(evt instanceof NavigationEnd)) {
                        return;
                    }

                    if (isPlatformBrowser(this.platformId)) {
                        window.scrollTo(0, 0);
                    }
                }),
            );
        }
    }
}
