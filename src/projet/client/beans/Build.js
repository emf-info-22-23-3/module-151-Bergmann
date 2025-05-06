/*
 * Bean Build 
 *
 * @author Bergmann Leon
 * @project Remnant 2 Build Planner
 * @version 2.0 / 06-MAY-2025
 */

import { Amulet } from "../beans/Amulet.js";
import { Ring } from "../beans/Ring.js";
import { Helmet } from "../beans/Helmet.js";
import { Chestplate } from "../beans/Chestplate.js";
import { Greaves } from "../beans/Greaves.js";
import { Gauntlets } from "../beans/Gauntlets.js"
import { Archetype } from "../beans/Archetype.js"

export class Build {
    constructor(name, amulet, helmet, chestplate, greaves, gauntlets, primaryArchetype, secondaryArchetype, ring1, ring2, ring3, ring4) {
        this._name = name;
        this._amulet = amulet;
        this._helmet = helmet;
        this._chestplate = chestplate;
        this._greaves = greaves;
        this._gauntlets = gauntlets;
        this._primaryArchetype = primaryArchetype;
        this._secondaryArchetype = secondaryArchetype;
        this._ring1 = ring1;
        this._ring2 = ring2;
        this._ring3 = ring3;
        this._ring4 = ring4;
    }

    /**
     * the Getter for the name of the Build
     * @returns the name
     */
    get name() {
        return this._name;
    }

    /**
     * the Getter for the Amulet used in the Build, if any
     * @returns Amulet or null
     */
    get amulet() {
        return this._amulet;
    }

    /**
     * the Getter for the Helmet used in the Build, if any
     * @returns Helmet or null
     */
    get helmet() {
        return this._helmet;
    }

    /**
     * the Getter for the Chestplate used in the Build, if any
     * @returns Chestplate or null
     */
    get chestplate() {
        return this._chestplate;
    }

    /**
     * the Getter for the Greaves used in the Build, if any
     * @returns Greaves or null
     */
    get greaves() {
        return this._greaves;
    }

    /**
     * the Getter for the Gauntlets used in the Build, if any
     * @returns Gauntlets or null
     */
    get gauntlets() {
        return this._gauntlets;
    }

    /**
     * the Getter for the Primary Archetype used in the Build, if any
     * @returns Archetype or null
     */
    get primaryArchetype() {
        return this._primaryArchetype;
    }

    /**
     * the Getter for the secondary Archetype used in the Build, if any
     * @returns Archetype or null
     */
    get secondaryArchetype() {
        return this._secondaryArchetype;
    }

    /**
     * the Getter for the First Ring used in the Build, if any
     * @returns Ring or null
     */
    get ring1() {
        return this._ring1;
    }

    /**
     * the Getter for the second Ring used in the Build, if any
     * @returns Ring or null
     */
    get ring2() {
        return this._ring2;
    }

    /**
     * the Getter for the third Ring used in the Build, if any
     * @returns Ring or null
     */
    get ring3() {
        return this._ring3;
    }

    /**
     * the Getter for the fourth Ring used in the Build, if any
     * @returns Ring or null
     */
    get ring4() {
        return this._ring4;
    }

    /**
     * a method that returns the Build as a string, to use in the dropdowns
     * @returns the name as String
     */
    toString() {
        return this._name;
    }

    /**
    * Setter for the Amulet used in the Build
    * @param Amulet amulet
    * @returns {undefined}
    */
    set amulet(amulet) {
        if (amulet instanceof Amulet) {
            this._amulet = amulet;
        }
    }

    /**
    * Setter for the Helmet used in the Build
    * @param Helmet helmet
    * @returns {undefined}
    */
    set helmet(helmet) {
        if (helmet instanceof Helmet) {
            this._helmet = helmet;
        }
    }

    /**
    * Setter for the Chestplate used in the Build
    * @param Chestplate chestplate
    * @returns {undefined}
    */
    set chestplate(chestplate) {
        if (chestplate instanceof Chestplate) {
            this._chestplate = chestplate;
        }
    }

    /**
    * Setter for the Greaves used in the Build
    * @param Greaves greaves
    * @returns {undefined}
    */
    set greaves(greaves) {
        if (greaves instanceof Greaves) {
            this._greaves = greaves;
        }
    }

    /**
    * Setter for the Gauntlets used in the Build
    * @param Gauntlets gauntlets
    * @returns {undefined}
    */
    set gauntlets(gauntlets) {
        if (gauntlets instanceof Gauntlets) {
            this._gauntlets = gauntlets;
        }
    }

    /**
    * Setter for the primary Archetype used in the Build
    * @param Archetype primaryArchetype
    * @returns {undefined}
    */
    set primaryArchetype(primaryArchetype) {
        if (primaryArchetype instanceof Archetype) {
            this._primaryArchetype = primaryArchetype;
        }
    }

    /**
    * Setter for the secondary Archetype used in the Build
    * @param Archetype secondaryArchetype
    * @returns {undefined}
    */
    set secondaryArchetype(secondaryArchetype) {
        if (secondaryArchetype instanceof Archetype) {
            this._secondaryArchetype = secondaryArchetype;
        }
    }

    /**
    * Setter for the first Ring used in the Build
    * @param Ring ring1
    * @returns {undefined}
    */
    set ring1(ring1) {
        if (ring1 instanceof Ring) {
            this._ring1 = ring1;
        }
    }

    /**
    * Setter for the second Ring used in the Build
    * @param Ring ring2
    * @returns {undefined}
    */
    set ring2(ring2) {
        if (ring2 instanceof Ring) {
            this._ring2 = ring2;
        }
    }

    /**
    * Setter for the third Ring used in the Build
    * @param Ring ring3
    * @returns {undefined}
    */
    set ring3(ring3) {
        if (ring3 instanceof Ring) {
            this._ring3 = ring3;
        }
    }

    /**
    * Setter for the fourth Ring used in the Build
    * @param Ring ring4
    * @returns {undefined}
    */
    set ring4(ring4) {
        if (ring4 instanceof Ring) {
            this._ring4 = ring4;
        }
    }


}