import { BasicModel } from './basic.model';
// import { UserModel } from './user.model';

export class AddressModel extends BasicModel {
    private _streetNb: string;
    private _address: string ;
    private _postal: string;
    private _type: string;
    private _city: string;
    // private _user?: UserModel;
    private _userId: number;

    public constructor() {
        super();
    }

    public get streetNb(): string {
        return this._streetNb;
    }

    public set streetNb(streetNbToCreate: string) {
        if (!streetNbToCreate) {
            throw new Error('Ce numéro est invalide.');
        }
        this._streetNb = streetNbToCreate;
    }

    public get address(): string {
        return this._address;
    }

    public set address(addressToCreate: string) {
        if (!addressToCreate) {
            throw new Error('Cette adresse invalide.');
        }
        this._address = addressToCreate;
    }

    public get postal(): string {
        return this._postal;
    }

    public set postal(postalToCreate: string) {
        if (!postalToCreate) {
            throw new Error('Ce code postal invalide.');
        }
        this._postal = postalToCreate;
    }

    public get city(): string {
        return this._city;
    }

    public set city(cityToCreate: string) {
        if (!cityToCreate) {
            throw new Error('Cette ville est invalide.');
        }
        this._city = cityToCreate;
    }

    public get type(): string {
        return this._type;
    }

    public set type(typeToCreate: string) {
        if (!typeToCreate) {
            throw new Error('Cette ville est invalide.');
        }
        this._type = typeToCreate;
    }

    /*
    public get user(): UserModel | undefined {
        return this._user;
    }

    public set user(userToCreate: UserModel | undefined) {
        if (userToCreate) {
            if (!(userToCreate instanceof UserModel)) {
                throw new Error('Utilisateur non reconnu.');
            }
            this._user = userToCreate;
        }
    }
    */

    public get userId(): number {
        return this._userId;
    }

    public set userId(userIdToCreate: number) {
        if (!userIdToCreate) {
            throw new Error('Cet utilisateur n\'existe pas.');
        }
        this._userId = userIdToCreate;
    }
}
