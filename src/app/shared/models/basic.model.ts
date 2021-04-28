export abstract class BasicModel {
    protected _id: number;

    public get id(): number {
        return this._id;
    }

    public set id(idToCreate: number) {
        if (!idToCreate) {
            throw new Error('Cet identifiant est invalide.');
        }
        this._id = idToCreate;
    }
}
