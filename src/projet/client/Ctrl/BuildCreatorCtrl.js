import { WrkHttps } from "../Wrk/WrkHttps.js";
import { Amulet } from "../beans/Amulet.js";
import { Ring } from "../beans/Ring.js";
import { Helmet } from "../beans/Helmet.js";
import { Chestplate } from "../beans/Chestplate.js";
import { Greaves } from "../beans/Greaves.js";
import { Gauntlets } from "../beans/Gauntlets.js";

export class BuildCreatorCtrl {
    constructor() {
        this._wrk = new WrkHttps();
        document.getElementById("buttonLogout").addEventListener("click", this.logout.bind(this));
        document.getElementById("selectAmulets").addEventListener("change",this.amuletEvent.bind(this))
    }

    loadData() {
        this.getAmulets();
        this.getRings();
        this.getHelmets();
        this.getChestplates();
        this.getGreaves();
        this.getGauntlets();
    }

    getAmulets() {
        this._wrk.getAmulets(this.amuletsSuccess, this.amuletsError);
    }

    amuletsSuccess(data, text, jqXHR) {
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

    logout() {
        this._wrk.deconnect(this.logoutSuccess, this.logoutError);
    }

    logoutSuccess() {
        window.location.replace("http://localhost:8080/projet/client/index.html");
    }

    logoutError() {
        console.log("error logout");
    }


    amuletEvent(evt){
        var selectElement = document.getElementById("selectAmulets");
        var selectedValue = selectElement.value;
        console.log(selectedValue);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const ctrl = new BuildCreatorCtrl();
    ctrl.loadData();
});