import { UUID } from './uuid';
import { BehaviorSubject, Observable } from 'rxjs';

export abstract class UUIDModel<T extends UUIDModel = any> {
    private readonly _loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public id: UUID;

    public constructor(data?: Partial<T>) {
        Object.assign(this, data);
    }

    public get loading$(): Observable<boolean> {
        return this._loading.asObservable();
    }

    public setLoading(loading: boolean): void {
        this._loading.next(loading);
    }
}
