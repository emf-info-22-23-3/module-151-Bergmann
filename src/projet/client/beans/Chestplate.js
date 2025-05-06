/*
 * Bean Chestplate
 *
 * @author Bergmann Leon
 * @project Remnant 2 Build Planner
 * @version 2.0 / 06-MAY-2025
 */
export class Chestplate {
    constructor(name, armor, weight) {
        this._name = name;
        this._armor = armor;
        this._weight = weight;
    }
    
    /**
     * the Getter for the name of the Chestplate
     * @returns the name
     */
    get name() {
        return this._name;
    }

    /**
     * the Getter for the armor value provided by the Chestplate
     * @returns armor
     */
    get armor() {
        return this._armor;
    }

    /**
     * the Getter for the weight of the chestplate
     * @returns weight
     */
    get weight() {
        return this._weight;
    }

    /**
     * a method that returns the Chestplate as a string, to use in the dropdowns
     * @returns the name as String
     */
    toString() {
        return this._name;
    }
}