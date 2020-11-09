export interface Collection<T> {
    data: T[];
    limit: number;
    page: number;
    total: number;
    lastPage?: number;
}
