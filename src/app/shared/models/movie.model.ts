import { BasicModel } from './basic.model';

export class MovieModel extends BasicModel {
    private _duration: string ;
    private _link: string;
    private _description: string;
    private _title: string;
    private _price: number; // must be transformed in number
    private _cover: string;
    private readonly _createdAt?: Date;
    private _director: string;
    private _trailer: string;
    private _slug?: string;

    public constructor() {
        super();
    }

    public get duration(): string {
        return this._duration;
    }

    public set duration(durationToCreate: string) {
        if (!durationToCreate) {
            throw new Error('Le durée est obligatoire.');
        }
        this._duration = durationToCreate;
    }

    public get link(): string {
        return this._link;
    }

    public set link(linkToCreate: string) {
        if (!linkToCreate) {
            throw new Error('Le lien ne peut pas être vide.');
        }
        this._link = linkToCreate;
    }

    public get description(): string {
        return this._description;
    }

    public set description(descriptionToCreate: string) {
        if (!descriptionToCreate) {
            throw new Error('La description est obligatoire.');
        }
        this._description = descriptionToCreate;
    }

    public get title(): string {
        return this._title;
    }

    public set title(titleToCreate: string) {
        if (!titleToCreate) {
            throw new Error('Le titre ne peut pas être vide.');
        }
        this._title = titleToCreate;
    }

    public get price(): number {
        return this._price;
    }

    public set price(priceToCreate: number) {
        if (!priceToCreate) {
            throw new Error('Le prix est obligatoire.');
        }
        this._price = priceToCreate;
    }

    public get cover(): string {
        return this._cover;
    }

    public set cover(coverToCreate: string) {
        if (!coverToCreate) {
            throw new Error('La couverture est obligatoire.');
        }
        this._cover = coverToCreate;
    }

    public get createdAt(): Date | undefined {
        return this._createdAt;
    }

    /*
    public set createdAt(movieCreatedAt: Date | undefined) {
        if (movieCreatedAt) {
            if (!(movieCreatedAt instanceof Date)) {
                throw new Error('Date non conforme.');
            }
            this._createdAt = movieCreatedAt;
        }
    }
    */

    public get director(): string {
        return this._director;
    }

    public set director(directorToCreate: string) {
        if (!directorToCreate) {
            throw new Error('Le directeur est obligatoire.');
        }
        this._director = directorToCreate;
    }

    public get trailer(): string {
        return this._trailer;
    }

    public set trailer(trailerToCreate: string) {
        if (!trailerToCreate) {
            throw new Error('Le trailer est obligatoire.');
        }
        this._trailer = trailerToCreate;
    }

    public get slug(): string | undefined {
        return this._slug;
    }

    public set slug(slugToCreate: string | undefined) {
        if (!slugToCreate) {
            throw new Error('Le slug est obligatoire.');
        }
        this._slug = slugToCreate;
    }

}
