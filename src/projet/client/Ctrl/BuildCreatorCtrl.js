import { WrkHttps } from "../Wrk/WrkHttps.js";
import { Amulet } from "../beans/Amulet.js";
import { Ring } from "../beans/Ring.js";
export class BuildCreatorCtrl {
    constructor() {
        this._wrk = new WrkHttps();

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
}

document.addEventListener("DOMContentLoaded", function () {
    const ctrl = new BuildCreatorCtrl();
    ctrl.getAmulets();
    ctrl.getRings();
});