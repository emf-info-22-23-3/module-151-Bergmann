/*
 * Worker Calculation and Data
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
import { Gauntlets } from "../beans/Gauntlets.js";
import { Build } from "../beans/Build.js";
import { Archetype } from "../beans/Archetype.js";

export class WrkCalculations {
    constructor() {
        if (WrkCalculations.instance) {
            return WrkCalculations.instance;
        }
        this._currentBuild = null;
        this._helmet = null;
        this._chestplate = null;
        this._greaves = null;
        this._gauntlets = null;
        this._amulet = null;
        this._primaryArchetype = null;
        this._secondaryArchetype = null;
        this._rings = new Map([
            ["Ring1", null],
            ["Ring2", null],
            ["Ring3", null],
            ["Ring4", null]
        ]);
        this._stats = new Map([
            ["Health", 100],
            ["Stamina", 100],
            ["Weight", 0],
            ["Armor", 0],
            ["AcidDamage", 0],
            ["Firerate", 0],
            ["SkillCooldown", 0],
            ["ShockDamage", 0],
            ["FireDamage", 0],
            ["ArmorEffectiven", 0],
            ["CorrosiveDamage", 0],
            ["ReloadSpeed", 0],
            ["SkillDuration", 0],
            ["StaminaCost", 0],
            ["OverloadedDamag", 0],
            ["BurningDamage", 0],
            ["ElementalDamage", 0],
            ["ExplosiveDamage", 0],
            ["RangedLifesteal", 0],
            ["CritChance", 0],
            ["GunRange", 0],
            ["RelicSpeed", 0],
            ["MeleeLifesteal", 0],
            ["DodgeThreshhold", 0],
            ["HPRegen", 0],
            ["MeleeDamage", 0],
            ["GunSwapSpeed", 0],
            ["DamageReduction", 0],
            ["CritDamage", 0],
            ["AllDamage", 0],
            ["ConsumableSpeed", 0],
            ["MouvementSpeed", 0],
            ["UnarmedDamage", 0]
        ]);
        this._builds = new Array();
        this._amuletsList = new Array();
        this._helmetsList = new Array();
        this._chestplatesList = new Array();
        this._greavesList = new Array();
        this._gauntletsList = new Array();
        this._archetypesList = new Array();
        this._ringsList = new Array();
        WrkCalculations.instance = this;
    }

    /**
    * method to create a new build
    * @param {Build} build
    * @returns {undefined}
    */
    addBuild(build) {
        if (build instanceof Build) {
            this._builds.push(build);
        }
    }

    /**
    * method to create a new Amulet
    * @param {Amulet} amulet
    * @returns {undefined}
    */
    addAmulet(amulet) {
        if (amulet instanceof Amulet) {
            this._amuletsList.push(amulet);
        }
    }

    /**
    * method to create a new Ring
    * @param {Ring} ring
    * @returns {undefined}
    */
    addRing(ring) {
        if (ring instanceof Ring) {
            this._ringsList.push(ring);
        }
    }

    /**
    * method to create a new Helmet
    * @param {Helmet} helmet
    * @returns {undefined}
    */
    addHelmet(helmet) {
        if (helmet instanceof Helmet) {
            this._helmetsList.push(helmet);
        }
    }

    /**
    * method to create a new Chestplate
    * @param {Chestplate} chestplate
    * @returns {undefined}
    */
    addChestplate(chestplate) {
        if (chestplate instanceof Chestplate) {
            this._chestplatesList.push(chestplate);
        }
    }

    /**
    * method to create new Greaves
    * @param {Greaves} greaves
    * @returns {undefined}
    */
    addGreaves(greaves) {
        if (greaves instanceof Greaves) {
            this._greavesList.push(greaves);
        }
    }

    /**
    * method to create new Gauntlets
    * @param {Gauntlets} gauntlets
    * @returns {undefined}
    */
    addGauntlets(gauntlets) {
        if (gauntlets instanceof Gauntlets) {
            this._gauntletsList.push(gauntlets);
        }
    }

    /**
    * method to create a new Archetype
    * @param {Archetype} archetype
    * @returns {undefined}
    */
    addArchetype(archetype) {
        if (archetype instanceof Archetype) {
            this._archetypesList.push(archetype);
        }
    }

    /**
    * method to change the current Build
    * @param {String} buildname
    * @returns {undefined}
    */
    buildChange(buildname) {
        this._currentBuild = this._builds.find(build => build.name === buildname);


    }

    getBuild() {
        return this._currentBuild;
    }

    /**
    * method to change the current Amulet
    * @param {String} newAmulet
    * @returns {undefined}
    */
    amuletChange(newAmulet) {
        this._amuletsList.forEach(amulet => {
            if (amulet._name == newAmulet) {
                this._currentBuild.amulet = amulet;

            }
        });
    }

    /**
    * method to change the current Ring 1
    * @param {String} ring1
    * @returns {undefined}
    */
    ring1Change(ring1) {
        this._ringsList.forEach(ring => {
            if (ring._name == ring1) {
                this._currentBuild.ring1 = ring;

            }
        });
    }

    /**
    * method to change the current Ring 2
    * @param {String} ring2
    * @returns {undefined}
    */
    ring2Change(ring2) {
        this._ringsList.forEach(ring => {
            if (ring._name == ring2) {
                this._currentBuild.ring2 = ring;

            }
        });
    }

    /**
    * method to change the current Ring 3
    * @param {String} ring3
    * @returns {undefined}
    */
    ring3Change(ring3) {
        this._ringsList.forEach(ring => {
            if (ring._name == ring3) {
                this._currentBuild.ring3 = ring;

            }
        });
    }

    /**
    * method to change the current Ring 4
    * @param {String} ring4
    * @returns {undefined}
    */
    ring4Change(ring4) {
        this._ringsList.forEach(ring => {
            if (ring._name == ring4) {
                this._currentBuild.ring4 = ring;

            }
        });
    }
    /**
    * method to change the current Helmet
    * @param {String} newhelmet
    * @returns {undefined}
    */
    helmetChange(newhelmet) {
        this._helmetsList.forEach(helmet => {
            if (helmet._name == newhelmet) {
                this._currentBuild.helmet = helmet;
            }
        });
    }

    /**
    * method to change the current Chestplate
    * @param {String} newChestplate
    * @returns {undefined}
    */
    chestplateChange(newChestplate) {
        this._chestplatesList.forEach(chestplate => {
            if (chestplate._name == newChestplate) {
                this._currentBuild.chestplate = chestplate;

            }
        });
    }

    /**
    * method to change the current Greaves
    * @param {String} newGreaves
    * @returns {undefined}
    */
    greavesChange(newGreaves) {
        this._greavesList.forEach(greaves => {
            if (greaves._name == newGreaves) {
                this._currentBuild.greaves = greaves;

            }
        });
    }

    /**
    * method to change the current Gauntlets
    * @param {String} newGauntlets
    * @returns {undefined}
    */
    gauntletsChange(newGauntlets) {
        this._gauntletsList.forEach(gauntlets => {
            if (gauntlets._name == newGauntlets) {
                this._currentBuild.gauntlets = gauntlets;

            }
        });
    }

    /**
    * method to change the current primary Archetype
    * @param {String} newArchetype
    * @returns {undefined}
    */
    primaryArchetypeChange(newArchetype) {
        this._archetypesList.forEach(archetype => {
            if (archetype._name == newArchetype) {
                this._currentBuild.primaryArchetype = archetype;
            }
        });
    }

    /**
    * method to change the current secondary Archetype
    * @param {String} newArchetype
    * @returns {undefined}
    */
    secondaryArchetypeChange(newArchetype) {
        this._archetypesList.forEach(archetype => {
            if (archetype._name == newArchetype) {
                this._currentBuild.secondaryArchetype = archetype;
            }
        });
    }

    /**
    * method to execute all calculations
    * @returns {undefined}
    */
    updateStats() {
        this.calculateStats("Armor");
        this.calculateStats("Health");
        this.calculateStats("Stamina");
        this.calculateStats("AcidDamage");
        this.calculateStats("Firerate");
        this.calculateStats("SkillCooldown");
        this.calculateStats("ShockDamage");
        this.calculateStats("FireDamage");
        this.calculateStats("CorrosiveDamage");
        this.calculateStats("ReloadSpeed");
        this.calculateStats("SkillDuration");
        this.calculateStats("StaminaCost");
        this.calculateStats("OverloadedDamag");
        this.calculateStats("BurningDamage");
        this.calculateStats("ElementalDamage");
        this.calculateStats("ExplosiveDamage");
        this.calculateStats("RangedLifesteal");
        this.calculateStats("CritChance");
        this.calculateStats("GunRange");
        this.calculateStats("RelicSpeed");
        this.calculateStats("MeleeLifesteal");
        this.calculateStats("DodgeThreshhold");
        this.calculateStats("HPRegen");
        this.calculateStats("MeleeDamage");
        this.calculateStats("GunSwapSpeed");
        this.calculateStats("CritDamage");
        this.calculateStats("AllDamage");
        this.calculateStats("ConsumableSpeed");
        this.calculateStats("MouvementSpeed");
        this.calculateStats("UnarmedDamage");
        this.calculateWeight();
        this.calculateDamageReduction();

    }

    /**
    * method to calculate all stats except weight, armor and Damage reduction, using the provided stat
    * @param {String} stat
    * @returns {undefined}
    */
    calculateStats(stat) {
        this._stats.set(stat, 100);
        if (this._amulet instanceof Amulet) {
            if (this._amulet._modifiedValue == stat) {
                this._stats.set(stat, (this._stats.get(stat) + this._amulet._modifier));
            }
            if (this._amulet._secondaryValue == stat) {
                this._stats.set(stat, (this._stats.get(stat) + this._amulet._secondaryModifier));
            }
        }
        this._rings.forEach(ring => {
            if (ring instanceof Ring) {
                if (ring.modifiedValue == stat) {
                    this._stats.set(stat, (this._stats.get(stat) + ring._modifier));
                }
                if (ring._secondaryValue == stat) {
                    this._stats.set(stat, (this._stats.get(stat) + ring._secondaryModifier));

                }
            }
        });
    }

    /**
    * method to calculate the armor stat
    * @returns {undefined}
    */
    calculateArmor() {
        this._stats.set("Armor", 0);
        if (this._helmet instanceof Helmet) {
            this._stats.set("Armor", (this._stats.get("Armor") + this._helmet._armor));
        }
        if (this._chestplate instanceof Chestplate) {
            this._stats.set("Armor", (this._stats.get("Armor") + this._chestplate._armor));
        }
        if (this._greaves instanceof Greaves) {
            this._stats.set("Armor", (this._stats.get("Armor") + this._greaves._armor));
        }
        if (this._gauntlets instanceof Gauntlets) {
            this._stats.set("Armor", (this._stats.get("Armor") + this._gauntlets._armor));
        }
        if (this._amulet instanceof Amulet) {
            if (this._amulet._modifiedValue == "Armor") {
                this._stats.set("Armor", (this._stats.get("Armor") + this._amulet._modifier));
            }
            if (this._amulet._secondaryValue == "Armor") {
                this._stats.set("Armor", (this._stats.get("Armor") + this._amulet._secondaryModifier));
            }
        }
        this._rings.forEach(ring => {
            if (ring instanceof Ring) {
                if (ring.modifiedValue == "Armor") {
                    this._stats.set("Armor", (this._stats.get("Armor") + ring._modifier));
                }
                if (ring._secondaryValue == "Armor") {
                    this._stats.set("Armor", (this._stats.get("Armor") + ring._secondaryModifier));

                }
            }
        });
        this._stats.set("Armor", this._stats.get("Armor") * (1 + (this._stats.get("ArmorEffectiven") / 100)))
    }

    /**
    * method to calculate the weight stat
    * @returns {undefined}
    */
    calculateWeight() {
        this._stats.set("Weight", 0);
        if (this._helmet instanceof Helmet) {
            this._stats.set("Weight", (this._stats.get("Weight") + this._helmet._weight));
        }
        if (this._chestplate instanceof Chestplate) {
            this._stats.set("Weight", (this._stats.get("Weight") + this._chestplate._weight));
        }
        if (this._greaves instanceof Greaves) {
            this._stats.set("Weight", (this._stats.get("Weight") + this._greaves._weight));
        }
        if (this._gauntlets instanceof Gauntlets) {
            this._stats.set("Weight", (this._stats.get("Weight") + this._gauntlets._weight));
        }
        if (this._amulet instanceof Amulet) {
            if (this._amulet._modifiedValue == "Encumberance") {
                if (this._amulet._isPercentage) {
                    this._stats.set("Weight", (this._stats.get("Weight") * (1 + (this._amulet._modifier / 100))));
                } else {
                    this._stats.set("Weight", (this._stats.get("Weight") + this._amulet._modifier));
                }
            }
            if (this._amulet._secondaryValue == "Encumberance") {
                if (this._amulet._isPercentageSecondary) {
                    this._stats.set("Weight", (this._stats.get("Weight") * (1 + (this._amulet._modifier / 100))));
                } else {
                    this._stats.set("Weight", (this._stats.get("Weight") + this._amulet._secondaryModifier));
                }
            }
        }
        this._rings.forEach(ring => {
            if (ring instanceof Ring) {
                if (ring.modifiedValue == "Encumberance") {
                    if (ring._isPercentage) {
                        this._stats.set("Weight", (this._stats.get("Weight") * (1 + (ring._modifier / 100))));
                    } else {
                        this._stats.set("Weight", (this._stats.get("Weight") + ring._modifier));
                    }
                }
                if (ring._secondaryValue == "Encumberance") {
                    if (ring._isPercentageSecondary) {
                        this._stats.set("Weight", (this._stats.get("Weight") * (1 + (ring._modifier / 100))));
                    } else {
                        this._stats.set("Weight", (this._stats.get("Weight") + ring._secondaryModifier));

                    }

                }
            }
        });
    }

    /**
    * method to calculate the Damage reduction stat
    * @returns {undefined}
    */
    calculateDamageReduction() {
        var armorDR = this._stats.get("Armor") / (this._stats.get("Armor") + 200);
        var flatDR = 0;
        if (this._amulet instanceof Amulet) {
            if (this._amulet._modifiedValue == "DamageReduction") {
                flatDR = flatDR + this._amulet._modifier;
            }
            if (this._amulet._secondaryValue == "DamageReduction") {
                flatDR = flatDR + this._amulet._secondaryModifier;
            }
        }
        this._rings.forEach(ring => {
            if (ring instanceof Ring) {
                if (ring.modifiedValue == "DamageReduction") {
                    flatDR = flatDR + ring._modifier;
                }
                if (ring._secondaryValue == "DamageReduction") {
                    flatDR = flatDR + ring._secondaryModifier;
                }
            }
        });
        this._stats.set("DamageReduction", 1 - (1 - armorDR) * (1 - (flatDR / 100)));
    }

    /**
     * the Getter for the stats
     * @returns the stats as a list
     */
    getStats() {
        return this._stats;
    }

    /**
     * the Getter for the name of the equipped Amulet
     * @returns the name
     */
    getAmuletName() {
        var resultat = "Amulet"
        if (this._currentBuild.amulet != null) {
            resultat = this._currentBuild.amulet;
        }
        return resultat;
    }

    /**
     * the Getter for the name of the equipped ring 1
     * @returns the name
     */
    getRing1Name() {
        var resultat = "Ring"
        if (this._currentBuild.ring1 != null) {
            resultat = this._currentBuild.ring1;
        }
        return resultat;
    }

    /**
     * the Getter for the name of the equipped ring 2
     * @returns the name
     */
    getRing2Name() {
        var resultat = "Ring"
        if (this._currentBuild.ring2 != null) {
            resultat = this._currentBuild.ring2;
        }
        return resultat;
    }

    /**
     * the Getter for the name of the equipped ring 3
     * @returns the name
     */
    getRing3Name() {
        var resultat = "Ring"
        if (this._currentBuild.ring3 != null) {
            resultat = this._currentBuild.ring3;
        }
        return resultat;
    }

    /**
     * the Getter for the name of the equipped ring 4
     * @returns the name
     */
    getRing4Name() {
        var resultat = "Ring"
        if (this._currentBuild.ring4 != null) {
            resultat = this._currentBuild.ring4;
        }
        return resultat;
    }

    /**
     * the Getter for the name of the equipped Helmet
     * @returns the name
     */
    getHelmetName() {
        var resultat = "Helmet"
        if (this._currentBuild.helmet != null) {
            resultat = this._currentBuild.helmet;
        }
        return resultat;
    }

    /**
     * the Getter for the name of the equipped Chestplate
     * @returns the name
     */
    getChestplateName() {
        var resultat = "Chestplate"
        if (this._currentBuild.chestplate != null) {
            resultat = this._currentBuild.chestplate;
        }
        return resultat;
    }

    /**
     * the Getter for the name of the equipped Greaves
     * @returns the name
     */
    getGreavesName() {
        var resultat = "Greaves"
        if (this._currentBuild.greaves != null) {
            resultat = this._currentBuild.greaves;
        }
        return resultat;
    }

    /**
     * the Getter for the name of the equipped Gauntlets
     * @returns the name
     */
    getGauntletsName() {
        var resultat = "Gauntlets"
        if (this._currentBuild.gauntlets != null) {
            resultat = this._currentBuild.gauntlets;
        }
        return resultat;
    }

    /**
     * the Getter for the name of the equipped primary Archetype
     * @returns the name
     */
    getPrimaryArchetypeName() {
        var resultat = "Archetype"
        if (this._currentBuild.primaryArchetype != null) {
            resultat = this._currentBuild.primaryArchetype;
        }
        return resultat;
    }

    /**
     * the Getter for the name of the equipped secondary Archetype
     * @returns the name
     */
    getSecondaryArchetypeName() {
        var resultat = "Archetype"
        if (this._currentBuild.secondaryArchetype != null) {
            resultat = this._currentBuild.secondaryArchetype;
        }
        return resultat;
    }

}