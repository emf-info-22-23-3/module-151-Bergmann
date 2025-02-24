import { WrkHttps } from "../Wrk/WrkHttps.js";
import { WrkCalculations } from "../Wrk/WrkCalculations.js";
import { Amulet } from "../beans/Amulet.js";
import { Ring } from "../beans/Ring.js";
import { Helmet } from "../beans/Helmet.js";
import { Chestplate } from "../beans/Chestplate.js";
import { Greaves } from "../beans/Greaves.js";
import { Gauntlets } from "../beans/Gauntlets.js";
import { Archetype } from "../beans/Archetype.js";
import { Build } from "../beans/Build.js";

export class BuildCreatorCtrl {
    constructor() {
        this._wrk = new WrkHttps();
        this._wrkCalc = new WrkCalculations();
        document.getElementById("buttonLogout").addEventListener("click", this.logout.bind(this));
        document.getElementById("selectAmulets").addEventListener("change", this.amuletEvent.bind(this))
    }

    loadData() {
        this.getAmulets();
        this.getRings();
        this.getHelmets();
        this.getChestplates();
        this.getGreaves();
        this.getGauntlets();
        this.getBuilds();
    }

    getAmulets() {
        this._wrk.getAmulets(this.amuletsSuccess, this.amuletsError);
    }

    amuletsSuccess(data, text, jqXHR) {
        console.log("test")
        var amulets = document.getElementById("selectAmulets");
        $(data).find("Amulet").each((index, amuletElement) => {
            var amulet = new Amulet(
                $(amuletElement).find("name").text(),
                $(amuletElement).find("modifiedvalue").text(),
                $(amuletElement).find("modifier").text(),
                $(amuletElement).find("ispercentage").text(),
                $(amuletElement).find("description").text(),
                $(amuletElement).find("secondaryvalue").text(),
                $(amuletElement).find("secondarymodifier").text(),
                $(amuletElement).find("ispercentagesecondary").text(),
            );
            var option = document.createElement("option");
            option.text = amulet.toString();
            option.value = amulet;
            amulets.appendChild(option);
        });
    }

    amuletsError(data, text, jqXHR) {
        console.log("error");
    }

    getRings() {
        this._wrk.getRings(this.ringsSuccess, this.ringsError);
    }

    ringsSuccess(data, text, jqXHR) {
        var rings1 = document.getElementById("selectRings1");
        var rings2 = document.getElementById("selectRings2");
        var rings3 = document.getElementById("selectRings3");
        var rings4 = document.getElementById("selectRings4");

        $(data).find("Ring").each((index, ringElement) => {
            var ring = new Ring(
                $(ringElement).find("name").text(),
                $(ringElement).find("modifiedvalue").text(),
                $(ringElement).find("modifier").text(),
                $(ringElement).find("ispercentage").text(),
                $(ringElement).find("description").text(),
                $(ringElement).find("secondaryvalue").text(),
                $(ringElement).find("secondarymodifier").text(),
                $(ringElement).find("ispercentagesecondary").text(),
            );
            var option1 = document.createElement("option");
            option1.text = ring.toString();
            option1.value = ring;
            rings1.appendChild(option1);

            var option2 = document.createElement("option");
            option2.text = ring.toString();
            option2.value = ring;
            rings2.appendChild(option2);

            var option3 = document.createElement("option");
            option3.text = ring.toString();
            option3.value = ring;
            rings3.appendChild(option3);

            var option4 = document.createElement("option");
            option4.text = ring.toString();
            option4.value = ring;
            rings4.appendChild(option4);

        });
    }

    ringsError(data, text, jqXHR) {
        console.log("error");
    }


    getHelmets() {
        this._wrk.getHelmets(this.helmetSuccess, this.helmetError);
    }

    helmetSuccess(data, text, jqXHR) {
        var helmets = document.getElementById("selectHelmets");
        $(data).find("Helmet").each((index, helmetElement) => {
            var helmet = new Helmet(
                $(helmetElement).find("name").text(),
                $(helmetElement).find("armor").text(),
                $(helmetElement).find("weight").text(),
            );
            var option = document.createElement("option");
            option.text = helmet.toString();
            option.value = helmet;
            helmets.appendChild(option);
        });
    }

    helmetError(data, text, jqXHR) {
        console.log("error helmet");
    }

    getChestplates() {
        this._wrk.getChestplates(this.chestplateSuccess, this.chestplateError);
    }

    chestplateSuccess(data, text, jqXHR) {
        var chestplates = document.getElementById("selectChestplates");
        $(data).find("Chestplate").each((index, chestplateElement) => {
            var chestplate = new Chestplate(
                $(chestplateElement).find("name").text(),
                $(chestplateElement).find("armor").text(),
                $(chestplateElement).find("weight").text(),
            );
            var option = document.createElement("option");
            option.text = chestplate.toString();
            option.value = chestplate;
            chestplates.appendChild(option);
        });
    }

    chestplateError(data, text, jqXHR) {
        console.log("error chestplate");
    }

    getGreaves() {
        this._wrk.getGreaves(this.greavesSuccess, this.greavesError);
    }

    greavesSuccess(data, text, jqXHR) {
        var greavesList = document.getElementById("selectGreaves");
        $(data).find("Greaves").each((index, greavesElement) => {
            var greaves = new Greaves(
                $(greavesElement).find("name").text(),
                $(greavesElement).find("armor").text(),
                $(greavesElement).find("weight").text(),
            );
            var option = document.createElement("option");
            option.text = greaves.toString();
            option.value = greaves;
            greavesList.appendChild(option);
        });
    }

    greavesError(data, text, jqXHR) {
        console.log("error greaves");
    }

    getGauntlets() {
        this._wrk.getGauntlets(this.gauntletsSuccess, this.gauntletsError);
    }

    gauntletsSuccess(data, text, jqXHR) {
        var gauntletsList = document.getElementById("selectGauntlets");
        $(data).find("Gauntlets").each((index, gauntletsElement) => {
            var gauntlets = new Gauntlets(
                $(gauntletsElement).find("name").text(),
                $(gauntletsElement).find("armor").text(),
                $(gauntletsElement).find("weight").text(),
            );
            var option = document.createElement("option");
            option.text = gauntlets.toString();
            option.value = gauntlets;
            gauntletsList.appendChild(option);
        });
    }

    gauntletsError(data, text, jqXHR) {
        console.log("error gauntlets");
    }

    getArchetypes() {
        this._wrk.getArchetypes(this.archetypesSuccess, this.archetypesError);
    }

    archetypesSuccess() {
        var archetypeList1 = document.getElementById("selectPrimaryArchetype");
        var archetypeList2 = document.getElementById("selectSecondaryArchetype");
        $(data).find("Archetype").each((index, archetypeElement) => {
            var archetype = new Archetype(
                $(gauntletsElement).find("name").text(),
            );
            var option1 = document.createElement("option");
            option1.text = archetype.toString();
            option1.value = archetype;
            archetypeList1.appendChild(option1);

            var option2 = document.createElement("option");
            option2.text = archetype.toString();
            option2.value = archetype;
            archetypeList2.appendChild(option2);
        });
    }

    archetypesError() {
        console.log("error Archetypes");
    }

    getBuilds() {
        this._wrk.getBuilds(this.getBuildsSuccess, this.getBuildsError);
    }

    getBuildsSuccess(data, text, jqXHR) {
        var buildList = document.getElementById("selectBuilds");
        $(data).find("Build").each((index, buildElement) => {
            var name = $(buildElement).find("nameBuild").text();
            var amulet = this.findAmulet($(buildElement).find("Amulet").text());
            var ring1 = this.findRing($(buildElement).find("Ring1"));
            var ring2 = this.findRing($(buildElement).find("Ring2"));
            var ring3 = this.findRing($(buildElement).find("Ring3"));
            var ring4 = this.findRing($(buildElement).find("Ring4"));
            var helmet = this.findHelmet($(buildElement).find("Helmet"));
            var chestplate = this.findChestplate($(buildElement).find("Chestplate"));
            var greaves = this.findGreaves($(buildElement).find("Greaves"));
            var gauntlets = this.findGauntlets($(buildElement).find("Gauntlets"));
            var primaryArchetype = this.findArchetype($(buildElement).find("PrimaryArchetype"));
            var secondaryArchetype = this.findArchetype($(buildElement).find("SecondaryArchetype"));
            var build = new Build(name, amulet, helmet, chestplate, greaves, gauntlets, primaryArchetype, secondaryArchetype, ring1, ring2, ring3, ring4);

            var option = document.createElement("option");
            option.text = build.toString();
            option.value = build;
            buildList.appendChild(option);
        });
    }

    getBuildsError() {

    }

    logout() {
        this._wrk.deconnect(this.logoutSuccess, this.logoutError);
    }

    logoutSuccess() {
        sessionStorage.removeItem("Username");
        window.location.replace("http://localhost:8080/projet/client/index.html");
    }

    logoutError() {
        console.log("error logout");
    }


    amuletEvent(evt) {
        var selectElement = document.getElementById("selectAmulets");
        var selectedValue = selectElement.value;
        this._wrkCalc.amuletChange(selectedValue);
        var stats = this._wrkCalc.getStats();
        //this.displayStats(stats);
    }

    displayStats(stats) {
        stats.forEach(function (value, key) {
            if (value > 0) {

            }
        });
    }

    findAmulet(data) {
        var amulet = new Amulet(
            $(data).find("name").text(),
            $(data).find("modifiedvalue").text(),
            $(data).find("modifier").text(),
            $(data).find("ispercentage").text(),
            $(data).find("description").text(),
            $(data).find("secondaryvalue").text(),
            $(data).find("secondarymodifier").text(),
            $(data).find("ispercentagesecondary").text(),
        );
        return amulet;
    }

    findRing(data) {
        var ring = new Ring(
            $(data).find("name").text(),
            $(data).find("modifiedvalue").text(),
            $(data).find("modifier").text(),
            $(data).find("ispercentage").text(),
            $(data).find("description").text(),
            $(data).find("secondaryvalue").text(),
            $(data).find("secondarymodifier").text(),
            $(data).find("ispercentagesecondary").text(),
        );
        return ring;
    }

    findHelmet(data) {
        var helmet = new Helmet(
            $(data).find("name").text(),
            $(data).find("armor").text(),
            $(data).find("weight").text(),
        );
        return helmet;
    }

    findChestplate(data) {
        var chestplate = new Chestplate(
            $(data).find("name").text(),
            $(data).find("armor").text(),
            $(data).find("weight").text(),
        );
        return chestplate;
    }
    findGreaves(data) {
        var greaves = new Greaves(
            $(data).find("name").text(),
            $(data).find("armor").text(),
            $(data).find("weight").text(),
        );
        return greaves;
    }

    findGauntlets(data) {
        var gauntlets = new Gauntlets(
            $(data).find("name").text(),
            $(data).find("armor").text(),
            $(data).find("weight").text(),
        );
        return gauntlets;
    }

    findArchetype(data) {
        var archetype = new Archetype(
            $(data).find("name").text(),
        );
        return archetype;
    }

}

document.addEventListener("DOMContentLoaded", function () {
    const ctrl = new BuildCreatorCtrl();
    if (sessionStorage.getItem("Username")) {
        ctrl.loadData();
    } else {
        ctrl.logout();
    }
});