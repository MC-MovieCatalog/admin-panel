import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GenericCrudOperations } from './generic-crud-operations.interface';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { API_DEFAULT_PATHS } from '../default-paths/api-default-paths';


export abstract class GenericCrudService<T> implements GenericCrudOperations<T> {

  constructor(
    protected http: HttpClient,
    protected toastrService: ToastrService,
    protected route: string
  ) {}

  save(t: T): Observable<T> {
    console.log(API_DEFAULT_PATHS.BASE_URL_API.value + this.route + 'Post');
    return this.http.post<T>(API_DEFAULT_PATHS.BASE_URL_API.value + this.route + 'Post', t).pipe(catchError( err => this.requestCatchError(err, 'L\'enregistrement')));
  }

  update(id: number, t: T): Observable<T> {
    return this.http.put<T>(API_DEFAULT_PATHS.BASE_URL_API.value + this.route + 'Update/' + id, t, {}).pipe(catchError( err => this.requestCatchError(err, 'Update')));
  }
  
  get(id: number): Observable<T> {
    return this.http.get<T>(API_DEFAULT_PATHS.BASE_URL_API.value + this.route + 'Get/' + id).pipe(catchError( err => this.requestCatchError(err, 'get')));
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(API_DEFAULT_PATHS.BASE_URL_API.value + this.route + 'GetAll/').pipe(catchError( err => this.requestCatchError(err, 'GetAll')));
  }

  delete(id: number): Observable<T> {
    return this.http.delete<T>(API_DEFAULT_PATHS.BASE_URL_API.value + this.route + 'Delete/' + id).pipe(catchError( err => this.requestCatchError(err, 'La suppression')));
  }

  requestCatchError(error: any, origineError: any): Observable<any> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      this.toastrService.error(origineError + '  à échouer.', 'Erreur en provenance du client');
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // this.toastrService.error(origineError + '  à échouer.', 'Erreur en provenance du serveur');
      errorMessage = error;
      // errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  getSuccessLoad(): void {
    this.toastrService.success('', 'Chargement terminé');
  }

  getUnknownErrorLoad(): void {
    this.toastrService.error('Nous faisons face à une erreur inconnue, réessayez dans un instant', 'Oups !');
  }

  getErrorLoad(apiError: any): void {
    if (apiError.status == 500) {
      console.log('500  :', apiError);
      this.toastrService.error(apiError.error.Error, 'Erreur ' + apiError.status);
    } else {
      if (apiError) {
        console.log('Autre :', apiError);
        for (const error of apiError.error) {
          if (error.message) {
            this.toastrService.warning(error.field + ' : ' + error.message, 'Erreur : ' + apiError.status);
          } else {
            if (error.error) {
              this.toastrService.warning(error.field + ' : ' + error.error, 'Erreur : ' + apiError.status);
            }
          }
        }
      }
    }
  }
}
