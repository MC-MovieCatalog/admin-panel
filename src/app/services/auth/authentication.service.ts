import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserModel } from 'src/app/shared/models/user.model';
import { API_DEFAULT_PATHS } from '../default-paths/api-default-paths';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<UserModel>;
  public currentUser: Observable<UserModel>;

  constructor(
    private http: HttpClient,
    protected toastrService: ToastrService,
    private router: Router,
    ) {
    this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserModel {
    return this.currentUserSubject.value;
  }

  /* store userToken details and jwt token in local storage to keep userToken logged in between page refreshes */
  login(username: string, password: string, route: string) {
    return this.http.post<any>(`${API_DEFAULT_PATHS.BASE_URL_API.value+API_DEFAULT_PATHS.ROUTE_LOGIN}`, { username, password })
      .pipe(map(userToken => {

        this.getUserData(username).subscribe((userData: UserModel) => {
          
          if (userData.roles.includes('ROLE_ADMIN')) {

            localStorage.setItem('currentUser', JSON.stringify(userToken));
            localStorage.setItem('currentUserData', JSON.stringify(userData));

            this.currentUserSubject.next(userToken);
            this.toastrService.success('Bienvenue ' + userData.firstName +' ' + userData.lastName, 'Connexion réussie');
          } else {
            this.toastrService.error('Vous n\'avez pas les autorisations d\'accès à cette page', 'Oups...!');
          }
          this.router.navigate([route]);
        })
        return userToken;
      }));
  }

  /* remove user from local storage to log user out */
  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserData');
    this.currentUserSubject.next(null);
  }

  getUserData(username: string): Observable<UserModel> {
    return this.http.get<UserModel>(
      API_DEFAULT_PATHS.BASE_URL_API.value
      +
      API_DEFAULT_PATHS.ROUTE_USER + 'GetUserByEmail/' + username).pipe(catchError( err => this.requestCatchError(err, 'get')));
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

}
