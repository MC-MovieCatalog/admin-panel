import { BasicModel } from './basic.model';
import { AddressModel } from './address.model';

export class UserModel extends BasicModel {
    private _lastName: string ;
    private _firstName: string;
    private _email: string;
    private _password: string;
    private _roles: string[] = ['ROLE_USER'];
    private _isVerify: boolean;
    private _isActive: boolean;
    private _agreeTerms: boolean;
    private readonly _agreeTermsValidateAt?: Date;
    private readonly _inscriptionDate?: Date;
    private _addresses?: AddressModel[];


    public constructor() {
        super();
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(lastNameToCreate: string) {
        if (!lastNameToCreate) {
            throw new Error('Le nom est obligatoire.');
        }
        this._lastName = lastNameToCreate;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(firstNameToCreate: string) {
        if (!firstNameToCreate) {
            throw new Error('Le prénom ne peut pas être vide.');
        }
        this._firstName = firstNameToCreate;
    }

    public get email(): string {
        return this._email;
    }

    public set email(emailToCreate: string) {
        if (!emailToCreate) {
            throw new Error('L\'email est obligatoire.');
        }
        this._email = emailToCreate;
    }

    public get password(): string {
        return this._password;
    }

    public set password(passwordToCreate: string) {
        if (!passwordToCreate) {
            throw new Error('Le mot de passe ne peut pas être vide.');
        }
        this._password = passwordToCreate;
    }

    public get roles(): string[] {
        return this._roles;
    }

    public set roles(rolesToCreate: string[]) {
        if (!rolesToCreate) {
            throw new Error('Le rôle ne peut pas être vide.');
        }
        this._roles = rolesToCreate;
    }

    public get isVerify(): boolean {
        return this._isVerify;
    }

    public set isVerify(isVerifyToCreate: boolean) {
        if (!isVerifyToCreate) {
            throw new Error('Valeur incorrecte.');
        }
        this._isVerify = isVerifyToCreate;
    }

    public get isActive(): boolean {
        return this._isActive;
    }

    public set isActive(isActiveToCreate: boolean) {
        if (!isActiveToCreate) {
            throw new Error('Valeur incorrecte.');
        }
        this._isActive = isActiveToCreate;
    }

    public get agreeTerms(): boolean {
        return this._agreeTerms;
    }

    public set agreeTerms(agreeTermsToCreate: boolean) {
        if (!agreeTermsToCreate) {
            throw new Error('Vous devez validez les conditions d\'utilisation.');
        }
        this._agreeTerms = agreeTermsToCreate;
    }

    public get agreeTermsValidateAt(): Date | undefined {
        return this._agreeTermsValidateAt;
    }

    /*
    public set agreeTermsValidateAt(agreeTermsValidateAtToCreate: Date | undefined) {
        if (agreeTermsValidateAtToCreate) {
            if (!(agreeTermsValidateAtToCreate instanceof Date)) {
                throw new Error('Date non conforme.');
            }
            this._agreeTermsValidateAt = agreeTermsValidateAtToCreate;
        }
    }
    */

    public get inscriptionDate(): Date | undefined {
        return this._inscriptionDate;
    }

    /*
    public set inscriptionDate(inscriptionToCreate: Date | undefined) {
        if (inscriptionToCreate) {
            if (!(inscriptionToCreate instanceof Date)) {
                throw new Error('Date non conforme.');
            }
            this._inscriptionDate = inscriptionToCreate;
        }
    }
    */

    public get addresses(): AddressModel[] | undefined {
        return this._addresses;
    }

    public set addresses(addressesToCreate: AddressModel[] | undefined) {

        if (addressesToCreate) {
            if (!(addressesToCreate instanceof AddressModel)) {
                throw new Error('Adresse inconnue.');
            }
            this._addresses = addressesToCreate;
        }
    }
}
