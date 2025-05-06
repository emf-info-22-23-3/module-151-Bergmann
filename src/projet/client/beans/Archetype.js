/*
 * Bean Archetype 
 *
 * @author Bergmann Leon
 * @project Remnant 2 Build Planner
 * @version 2.0 / 06-MAY-2025
 */
export class Archetype {
    constructor(name) {
        this._name = name;
    }

    /**
     * Getter for the Archetypes Name
     * @returns the name
     */
    get name() {
        return this._name;
    }

    /**
     * a method that returns the Archetype as a string, to use in the dropdowns
     * @returns the name as String
     */
    toString() {
        return this._name;
    }
}