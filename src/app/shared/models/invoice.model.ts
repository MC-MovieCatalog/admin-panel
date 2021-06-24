import { BasicModel } from './basic.model';
import { MovieModel } from './movie.model';
import { UserModel } from './user.model';

export class InvoiceModel extends BasicModel {
    private _customerId: number;
    private _customer?: UserModel;
    private _addressId: number ;
    private _amount: number;
    private _createdAt?: Date;
    private _invoiceReference: string;
    private _movies: MovieModel[];

    public constructor() {
        super();
    }

    public get customerId(): number {
        return this._customerId;
    }

    public set customerId(customerIdToCreate: number) {
        if (!customerIdToCreate) {
            throw new Error('Id invalide.');
        }
        this._customerId = customerIdToCreate;
    }

    public get addressId(): number {
        return this._addressId;
    }

    public set addressId(addressIdToCreate: number) {
        if (!addressIdToCreate) {
            throw new Error('Id invalide.');
        }
        this._addressId = addressIdToCreate;
    }

    public get amount(): number {
        return this._amount;
    }

    public set amount(amountToCreate: number) {
        if (!amountToCreate) {
            throw new Error('Montant invalide.');
        }
        this._amount = amountToCreate;
    }

    public get createdAt(): Date | undefined {
        return this._createdAt;
    }

    public set createdAt(_createdAtToCreate: Date | undefined) {
        if (!_createdAtToCreate) {
            throw new Error('Date invalide.');
        }
        this._createdAt = _createdAtToCreate;
    }

    public get invoiceReference(): string {
        return this._invoiceReference;
    }

    public set invoiceReference(invoiceReferenceToCreate: string) {
        if (!invoiceReferenceToCreate) {
            throw new Error('Référence invalide.');
        }
        this._invoiceReference = invoiceReferenceToCreate;
    }

    public get movies(): MovieModel[] {
        return this._movies;
    }

    public set movies(moviesToCreate: MovieModel[]) {
        if (!moviesToCreate) {
            throw new Error('Movie(s) invalide(s).');
        }
        this._movies = moviesToCreate;
    }

    public get customer(): UserModel {
        return this._customer;
    }

    public set customer(customerToCreate: UserModel) {
        if (!customerToCreate) {
            throw new Error('Client invalide.');
        }
        this._customer = customerToCreate;
    }
}
