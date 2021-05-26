import { userMock } from '../user/user-mock';
import { invoicesData } from './invoices';
import { InvoiceModel } from '../../models/invoice.model';
import { movieMock } from '../movie/movie-mock';
import { MovieModel } from '../../models/movie.model';
import { addressMock } from '../address/address-mock';

const invoices: InvoiceModel[] = [];


for (const invoiceItem of invoicesData) {
    const invoice = new InvoiceModel();

    const movies: MovieModel[] = [];
    let amount = 0;

    // Movies
    for (let m = 0; m < 3; m++) {
        const randomMovie = movieMock[Math.floor(Math.random() * (movieMock.length - 1))];
        movies.push(randomMovie);
        amount += randomMovie.price;
    }
    // Address
    const addressId = addressMock[Math.floor(Math.random() * (addressMock.length - 1))];
    // User
    const userId = userMock[Math.floor(Math.random() * (userMock.length - 1))];

    invoice.movies = movies;
    invoice.addressId = addressId.id;
    invoice.customerId = userId.id;
    invoice.amount = amount;

    invoices.push(invoice);
}


export const invoiceMock = invoices;
