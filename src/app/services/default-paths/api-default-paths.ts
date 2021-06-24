import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

export const API_DEFAULT_PATHS = {
    BASE_URL_API: new BehaviorSubject<string>(environment.API_END_POINT_URL),
    ROUTE_ADDRESS: '/api/addresses/',
    ROUTE_INVOICE: '/api/invoices/',
    ROUTE_MOVIE: '/api/movies/',
    ROUTE_USER: '/api/users/',
    ROUTE_LOGIN: 'api/login_check/'
};