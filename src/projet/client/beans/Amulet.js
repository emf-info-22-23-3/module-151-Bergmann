export class Amulet {
    constructor(name, modifiedValue, modifier, isPercentage, description, secondaryModifier, secondaryValue, isPercentageSecondary) {
        this._name = name;
        this._modifiedValue = modifiedValue;
        this._modifier = modifier;
        this._isPercentage = isPercentage;
        this._description = description;
        this._secondaryModifier = secondaryModifier;
        this._secondaryValue = secondaryValue;
        this._isPercentageSecondary = isPercentageSecondary;
    }

    get name() {
        return this._name;
    }
    get modifiedValue() {
        return this._modifiedValue;
    }
    get modifier() {
        return this._modifier;
    }
    get isPercentage() {
        return this._isPercentage;
    }
    get description() {
        return this._description;
    }
    get secondaryModifier() {
        return this._secondaryModifier;
    }
    get secondaryValue() {
        return this._secondaryValue;
    }
    get isPercentageSecondary() {
        return this._isPercentageSecondary;
    }
    toString() {
        return this._name;
    }
}