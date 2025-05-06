/*
 * Bean Amulet
 *
 * @author Bergmann Leon
 * @project Remnant 2 Build Planner
 * @version 2.0 / 06-MAY-2025
 */
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

    /**
     * Getter for the Amulets Name
     * @returns the name
     */
    get name() {
        return this._name;
    }

    /**
     * Getter for the value that is modified by the Amulet
     * @returns the modified value
     */
    get modifiedValue() {
        return this._modifiedValue;
    }

    /**
     * Getter for the ammount, by which the value is modified
     * @returns the modifier
     */
    get modifier() {
        return this._modifier;
    }

    /**
     * Getter that returns if the modifier is a percentage
     * @returns true/false
     */
    get isPercentage() {
        return this._isPercentage;
    }

    /**
     * Getter for the Amulets description
     * @returns the description
     */
    get description() {
        return this._description;
    }

    /**
     * Getter for the ammount of the second modified value of the amulet, if it exists
     * @returns the modifier of null
     */
    get secondaryModifier() {
        return this._secondaryModifier;
    }

    /**
     * Getter for the second value that is modified by the amulet, if it exists
     * @returns the modified value or null
     */
    get secondaryValue() {
        return this._secondaryValue;
    }

    /**
     * Getter that returns if the second modifier is a percentage
     * @returns the name
     */
    get isPercentageSecondary() {
        return this._isPercentageSecondary;
    }

    /**
     * a method that returns the Amulet as a string, to use in the dropdowns
     * @returns the name as String
     */
    toString() {
        return this._name;
    }
}