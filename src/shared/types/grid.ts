export interface GridData<T> {
    data: {
        data: Array<T>;
        total: number;
    };
    limit: number;
    skip: number;
}
