import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const MODULES: any[] = [CommonModule];

@NgModule({
    imports: [
        ...MODULES,
        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'index',
            },
            {
                path: 'index',
                loadChildren: () =>
                    import('@app/web/src/modules/common/views/public/index/module').then((m) => m.AppCommonPublicIndexPageModule),
            },
        ]),
    ],
})
export class AppCommonPublicPageModule {}
