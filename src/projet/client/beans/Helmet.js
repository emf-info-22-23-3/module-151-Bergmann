export class Helmet {
    constructor(name, armor, weight) {
        this._name = name;
        this._armor = armor;
        this._weight = weight;
    }

    get name() {
        return this._name;
    }
    get armor() {
        return this._armor;
    }
    get weight() {
        return this._weight;
    }

    toString() {
        return this._name;
    }
}