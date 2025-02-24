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
        WrkCalculations.instance = this;
    }


    addBuild(build) {
        if (build instanceof Build) {
            this._builds.push(build);
        }
    }

    buildChange(buildname) {
        var selectedbuild = this._builds.find(build => build.name === buildname);
        this.amuletChange(selectedbuild._amulet);
        this.helmetChange(selectedbuild._helmet);
        this.chestplateChange(selectedbuild._chestplate);
        this.greavesChange(selectedbuild._greaves);
        this.gauntletsChange(selectedbuild._gauntlets);
        this.ring1Change(selectedbuild._ring1);
        this.ring2Change(selectedbuild._ring2);
        this.ring3Change(selectedbuild._ring3);
        this.ring4Change(selectedbuild._ring4);
        this.primaryArchetypeChange(selectedbuild._primaryArchetype);
        this.secondaryArchetypeChange(selectedbuild._secondaryArchetype);
    }

    amuletChange(amulet) {
        if (amulet instanceof Amulet) {
            this._amulet = amulet;
            this.updateStats();
        }
    }

    ring1Change(ring1) {
        if (ring1 instanceof Ring) {
            this._rings.set("Ring1", ring1);
            this.updateStats();
        }
    }

    ring2Change(ring2) {
        if (ring2 instanceof Ring) {
            this._rings.set("Ring2", ring2);
            this.updateStats();
        }
    }

    ring3Change(ring3) {
        if (ring3 instanceof Ring) {
            this._rings.set("Ring3", ring3);
            this.updateStats();
        }
    }

    ring4Change(ring4) {
        if (ring4 instanceof Ring) {
            this._rings.set("Ring4", ring4);
            this.updateStats();
        }
    }

    helmetChange(helmet) {
        if (helmet instanceof Helmet) {
            this._helmet = helmet;
            this.updateStats();
        }
    }

    chestplateChange(chestplate) {
        if (chestplate instanceof Chestplate) {
            this._chestplate = chestplate;
            this.updateStats();
        }
    }

    greavesChange(greaves) {
        if (greaves instanceof Greaves) {
            this._greaves = greaves;
            this.updateStats();
        }
    }

    gauntletsChange(gauntlets) {
        if (gauntlets instanceof Gauntlets) {
            this._gauntlets = gauntlets;
            this.updateStats();
        }
    }

    primaryArchetypeChange(archetype) {
        if (archetype instanceof Archetype) {
            this._primaryArchetype = archetype;
        }
    }

    secondaryArchetypeChange(archetype) {
        if (archetype instanceof Archetype) {
            this._secondaryArchetype = archetype;
        }
    }

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

    getStats() {
        return this._stats;
    }

    getAmuletName() {
        var resultat = "Amulet"
        if (this._amulet != null) {
            resultat = this._amulet._name;
        }
        return resultat;
    }

    getRing1Name() {
        var resultat = "Ring"
        if (this._rings.get("Ring1") != null) {
            resultat = this._rings.get("Ring1")._name;
        }
        return resultat;
    }

    getRing2Name() {
        var resultat = "Ring"
        if (this._rings.get("Ring2") != null) {
            resultat = this._rings.get("Ring2")._name;
        }
        return resultat;
    }

    getRing3Name() {
        var resultat = "Ring"
        if (this._rings.get("Ring3") != null) {
            resultat = this._rings.get("Ring3")._name;
        }
        return resultat;
    }

    getRing4Name() {
        var resultat = "Ring"
        if (this._rings.get("Ring4") != null) {
            resultat = this._rings.get("Ring4")._name;
        }
        return resultat;
    }

    getHelmetName() {
        var resultat = "Helmet"
        if (this._helmet != null) {
            resultat = this._helmet._name;
        }
        return resultat;
    }

    getChestplateName() {
        var resultat = "Chestplate"
        if (this._chestplate != null) {
            resultat = this._chestplate._name;
        }
        return resultat;
    }

    getGreavesName() {
        var resultat = "Greaves"
        if (this._greaves != null) {
            resultat = this._greaves._name;
        }
        return resultat;
    }

    getGauntletsName() {
        var resultat = "Gauntlets"
        if (this._gauntlets != null) {
            resultat = this._gauntlets._name;
        }
        return resultat;
    }

    getPrimaryArchetypeName() {
        var resultat = "Archetype"
        if (this._primaryArchetype != null) {
            resultat = this._primaryArchetype_name;
        }
        return resultat;
    }

    getSecondaryArchetypeName() {
        var resultat = "Archetype"
        if (this._secondaryArchetype != null) {
            resultat = this._secondaryArchetype._name;
        }
        return resultat;
    }
}