import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ServicePickerModule } from '@naker/service-picker';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicStorageModule } from '@ionic/storage';
import { IonicStorageAdapter, UbudStorageModule } from '@ubud/storage';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { NacoModule } from '@naker/naco';
import { APP_ROUTES } from '@app/web/src/bootstrap/app.routes';
import { SELF_APP_INITIALIZER } from '@app/web/src/bootstrap/app.initializer';
import { registerLocaleData } from '@angular/common';
import localeId from '@angular/common/locales/id';
import '@progress/kendo-angular-intl/locales/id/all';
import { QuillModule } from 'ngx-quill';

registerLocaleData(localeId, 'id');

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        IonicStorageModule.forRoot(),
        UbudStorageModule.forRoot(IonicStorageAdapter),
        StoreModule.forRoot(
            {},
            {
                runtimeChecks: {
                    strictStateImmutability: false,
                    strictActionImmutability: false,
                },
            },
        ),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument(<any>{
            maxAgent: 25,
            logOnly: environment.production,
        }),
        StoreRouterConnectingModule.forRoot(),
        HttpClientModule,
        ServicePickerModule.forRoot(),
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

        DialogsModule,
        LoadingBarRouterModule,
        LoadingBarHttpClientModule,
        QuillModule.forRoot(),

        NacoModule.forRoot({ clientId: environment.naco.clientId, scopes: 'basic email profile' }),
        APP_ROUTES,
    ],
    providers: [
        SELF_APP_INITIALIZER,
        {
            provide: LOCALE_ID,
            useValue: 'id',
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
