import { Amulet } from "../beans/Amulet.js";
import { Ring } from "../beans/Ring.js";
import { Helmet } from "../beans/Helmet.js";
import { Chestplate } from "../beans/Chestplate.js";
import { Greaves } from "../beans/Greaves.js";
import { Gauntlets } from "../beans/Gauntlets.js"

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
}