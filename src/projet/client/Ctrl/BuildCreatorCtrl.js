import { WrkHttps } from "../Wrk/WrkHttps.js";
import { Amulet } from "../beans/Amulet.js";
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
}

document.addEventListener("DOMContentLoaded", function () {
    const ctrl = new BuildCreatorCtrl();
    ctrl.getAmulets();
});