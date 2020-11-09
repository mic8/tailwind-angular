import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-common-index-page',
    templateUrl: './common-index.page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonIndexPage {}
