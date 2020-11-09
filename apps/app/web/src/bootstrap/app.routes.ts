import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'common',
    },
    {
        path: 'common',
        loadChildren: () => import('@app/web/src/modules/common/views/public/module').then((m) => m.AppCommonPublicPageModule),
    },
];

export const APP_ROUTES: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
