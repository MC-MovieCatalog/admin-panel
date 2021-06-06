import { Observable } from 'rxjs';

export interface GenericCrudOperations<T> {
    save(t: T): Observable<T>;
    update(id: number, t: T): Observable<T>;
    get(id: number): Observable<T>;
    getAll(): Observable<T[]>;
    delete(id: number): Observable<any>;
}
