import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommonIndexPage } from '@app/web/src/modules/common/views/public/index/common-index.page';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

const MODULES: any[] = [CommonModule, DropDownsModule, InputsModule, ButtonsModule];

@NgModule({
    declarations: [CommonIndexPage],
    imports: [
        ...MODULES,
        RouterModule.forChild([
            {
                path: '',
                component: CommonIndexPage,
            },
        ]),
    ],
})
export class AppCommonPublicIndexPageModule {}
