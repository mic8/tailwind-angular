import { APP_INITIALIZER, Injector, Provider } from '@angular/core';

export function APP_INITIALIZER_FACTORY(injector: Injector): () => Promise<void> {
    return () => {
        return new Promise<void>(async (resolve) => {
            resolve();
        });
    };
}

export const SELF_APP_INITIALIZER: Provider = {
    useFactory: APP_INITIALIZER_FACTORY,
    provide: APP_INITIALIZER,
    deps: [Injector],
    multi: true,
};
