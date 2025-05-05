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

    get name() {
        return this._name;
    }

    get amulet() {
        return this._amulet;
    }
    get helmet() {
        return this._helmet;
    }
    get chestplate() {
        return this._chestplate;
    }
    get greaves() {
        return this._greaves;
    }
    get gauntlets() {
        return this._gauntlets;
    }
    get primaryArchetype() {
        return this._primaryArchetype;
    }
    get secondaryArchetype() {
        return this._secondaryArchetype;
    }
    get ring1() {
        return this._ring1;
    }
    get ring2() {
        return this._ring2;
    }
    get ring3() {
        return this._ring3;
    }
    get ring4() {
        return this._ring4;
    }
    toString() {
        return this._name;
    }

    set amulet(amulet) {
        if (amulet instanceof Amulet) {
            this._amulet = amulet;
        }
    }
    set helmet(helmet) {
        if (helmet instanceof Helmet) {
            this._helmet = helmet;
        }
    }
    set chestplate(chestplate) {
        if (chestplate instanceof Chestplate) {
            this._chestplate = chestplate;
        }
    }
    set greaves(greaves) {
        if (greaves instanceof Greaves) {
            this._greaves = greaves;
        }
    }
    set gauntlets(gauntlets) {
        if (gauntlets instanceof Gauntlets) {
            this._gauntlets = gauntlets;
        }
    }
    set primaryArchetype(primaryArchetype) {
        if (primaryArchetype instanceof Archetype) {
            this._primaryArchetype = primaryArchetype;
        }
    }
    set secondaryArchetype(secondaryArchetype) {
        if (secondaryArchetype instanceof Archetype) {
            this._secondaryArchetype = secondaryArchetype;
        }
    }
    set ring1(ring1) {
        if (ring1 instanceof Ring) {
            this._ring1 = ring1;
        }
    }
    set ring2(ring2) {
        if (ring2 instanceof Ring) {
            this._ring2 = ring2;
        }
    }
    set ring3(ring3) {
        if (ring3 instanceof Ring) {
            this._ring3 = ring3;
        }
    }
    set ring4(ring4) {
        if (ring4 instanceof Ring) {
            this._ring4 = ring4;
        }
    }


}