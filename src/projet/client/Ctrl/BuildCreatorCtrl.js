/*
 * Controller Build Creator
 *
 * @author Bergmann Leon
 * @project Remnant 2 Build Planner
 * @version 2.0 / 06-MAY-2025
 */

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
    /**
    * constructor of the Controller, that initializes the two workers and creates all listeners
    */
    constructor() {
        this._wrk = new WrkHttps();
        this._wrkCalc = new WrkCalculations();
        document.getElementById("buttonLogout").addEventListener("click", this.logout.bind(this));
        document.getElementById("buttonNewBuild").addEventListener("click", this.newBuildButton.bind(this));
        document.getElementById("buttonDeleteBuild").addEventListener("click", this.deleteBuildButton.bind(this));
        document.getElementById("buttonSaveBuild").addEventListener("click", this.saveBuildButton.bind(this));
        document.getElementById("selectAmulets").addEventListener("change", this.amuletEvent.bind(this));
        document.getElementById("selectHelmets").addEventListener("change", this.helmetEvent.bind(this));
        document.getElementById("selectChestplates").addEventListener("change", this.chestplateEvent.bind(this));
        document.getElementById("selectGreaves").addEventListener("change", this.greavesEvent.bind(this));
        document.getElementById("selectGauntlets").addEventListener("change", this.gauntletsEvent.bind(this));
        document.getElementById("selectRings1").addEventListener("change", this.ring1Event.bind(this));
        document.getElementById("selectRings2").addEventListener("change", this.ring2Event.bind(this));
        document.getElementById("selectRings3").addEventListener("change", this.ring3Event.bind(this));
        document.getElementById("selectRings4").addEventListener("change", this.ring4Event.bind(this));
        document.getElementById("selectPrimaryArchetype").addEventListener("change", this.primaryArchetypeEvent.bind(this));
        document.getElementById("selectSecondaryArchetype").addEventListener("change", this.secondaryArchetypeEvent.bind(this));
        document.getElementById("selectBuilds").addEventListener("change", this.buildEvent.bind(this));


    }

    /**
     * method that calls the sub methods to load all Data
     * @returns {undefined}
     */
    loadData() {
        this.getAmulets();
        this.getRings();
        this.getHelmets();
        this.getChestplates();
        this.getGreaves();
        this.getGauntlets();
        this.getArchetypes();
        this.getBuilds();
    }

    /**
    * method to load all Amulets
    * @returns {undefined}
    */
    getAmulets() {
        this._wrk.getAmulets(this.amuletsSuccess.bind(this), this.amuletsError);
    }

    /**
     * successcallback method of getAmulets, that turns the XML into objects and gives them to WrkCalculations,
     * before adding them to the dropdown on the interface 
     * @param {type} data
     * @param {type} text
     * @param {type} jqXHR
     * @returns {undefined}
     */
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
            this._wrkCalc.addAmulet(amulet);
        });
    }

    /**
     * Errorcallback method of getGreaves 
     * @param {type} data
     * @param {type} text
     * @param {type} jqXHR
     * @returns {undefined}
     */
    amuletsError(data, text, jqXHR) {
        console.log("error");
    }

    /**
    * method to load all Rings
    * @returns {undefined}
    */
    getRings() {
        this._wrk.getRings(this.ringsSuccess.bind(this), this.ringsError);
    }

    /**
     * successcallback method of getRings, that turns the XML into objects and gives them to WrkCalculations,
     * before adding them to the 4 Ring dropdowns on the interface 
     * @param {type} data
     * @param {type} text
     * @param {type} jqXHR
     * @returns {undefined}
     */
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

            this._wrkCalc.addRing(ring);

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

    /**
     * Errorcallback method of getRings 
     * @param {type} data
     * @param {type} text
     * @param {type} jqXHR
     * @returns {undefined}
     */
    ringsError(data, text, jqXHR) {
        console.log("error");
    }

    /**
    * method to load all Helmets
    * @returns {undefined}
    */
    getHelmets() {
        this._wrk.getHelmets(this.helmetSuccess.bind(this), this.helmetError);
    }

    /**
     * successcallback method of getHelmets, that turns the XML into objects and gives them to WrkCalculations,
     * before adding them to the dropdown on the interface 
     * @param {type} data
     * @param {type} text
     * @param {type} jqXHR
     * @returns {undefined}
     */
    helmetSuccess(data, text, jqXHR) {
        var helmets = document.getElementById("selectHelmets");
        $(data).find("Helmet").each((index, helmetElement) => {
            var helmet = new Helmet(
                $(helmetElement).find("name").text(),
                $(helmetElement).find("armor").text(),
                $(helmetElement).find("weight").text(),
            );
            this._wrkCalc.addHelmet(helmet);
            var option = document.createElement("option");
            option.text = helmet.toString();
            option.value = helmet;
            helmets.appendChild(option);
        });
    }

    /**
     * Errorcallback method of getHelmets
     * @param {type} data
     * @param {type} text
     * @param {type} jqXHR
     * @returns {undefined}
     */
    helmetError(data, text, jqXHR) {
        console.log("error helmet");
    }

    /**
    * method to load all Chestplates
    * @returns {undefined}
    */
    getChestplates() {
        this._wrk.getChestplates(this.chestplateSuccess.bind(this), this.chestplateError);
    }

    /**
     * successcallback method of getChestplates, that turns the XML into objects and gives them to WrkCalculations,
     * before adding them to the dropdown on the interface 
     * @param {type} data
     * @param {type} text
     * @param {type} jqXHR
     * @returns {undefined}
     */
    chestplateSuccess(data, text, jqXHR) {
        var chestplates = document.getElementById("selectChestplates");
        $(data).find("Chestplate").each((index, chestplateElement) => {
            var chestplate = new Chestplate(
                $(chestplateElement).find("name").text(),
                $(chestplateElement).find("armor").text(),
                $(chestplateElement).find("weight").text(),
            );
            this._wrkCalc.addChestplate(chestplate);
            var option = document.createElement("option");
            option.text = chestplate.toString();
            option.value = chestplate;
            chestplates.appendChild(option);
        });
    }

    /**
    * Errorcallback method of getChestplates
    * @param {type} data
    * @param {type} text
    * @param {type} jqXHR
    * @returns {undefined}
    */
    chestplateError(data, text, jqXHR) {
        console.log("error chestplate");
    }

    /**
    * method to load all Greaves
    * @returns {undefined}
    */
    getGreaves() {
        this._wrk.getGreaves(this.greavesSuccess.bind(this), this.greavesError);
    }

    /**
     * successcallback method of getGreaves, that turns the XML into objects and gives them to WrkCalculations,
     * before adding them to the dropdown on the interface 
     * @param {type} data
     * @param {type} text
     * @param {type} jqXHR
     * @returns {undefined}
     */
    greavesSuccess(data, text, jqXHR) {
        var greavesList = document.getElementById("selectGreaves");
        $(data).find("Greaves").each((index, greavesElement) => {
            var greaves = new Greaves(
                $(greavesElement).find("name").text(),
                $(greavesElement).find("armor").text(),
                $(greavesElement).find("weight").text(),
            );
            this._wrkCalc.addGreaves(greaves);
            var option = document.createElement("option");
            option.text = greaves.toString();
            option.value = greaves;
            greavesList.appendChild(option);
        });
    }

    /**
     * Errorcallback method of getGreaves 
     * @param {type} data
     * @param {type} text
     * @param {type} jqXHR
     * @returns {undefined}
     */
    greavesError(data, text, jqXHR) {
        console.log("error greaves");
    }

    /**
    * method to load all Gauntlets
    * @returns {undefined}
    */
    getGauntlets() {
        this._wrk.getGauntlets(this.gauntletsSuccess.bind(this), this.gauntletsError);
    }

    /**
     * successcallback method of getGauntlets, that turns the XML into objects and gives them to WrkCalculations,
     * before adding them to the dropdown on the interface 
     * @param {type} data
     * @param {type} text
     * @param {type} jqXHR
     * @returns {undefined}
     */
    gauntletsSuccess(data, text, jqXHR) {
        var gauntletsList = document.getElementById("selectGauntlets");
        $(data).find("Gauntlets").each((index, gauntletsElement) => {
            var gauntlets = new Gauntlets(
                $(gauntletsElement).find("name").text(),
                $(gauntletsElement).find("armor").text(),
                $(gauntletsElement).find("weight").text(),
            );
            this._wrkCalc.addGauntlets(gauntlets);
            var option = document.createElement("option");
            option.text = gauntlets.toString();
            option.value = gauntlets;
            gauntletsList.appendChild(option);
        });
    }

    /**
     * Errorcallback method of getGauntlets 
     * @param {type} data
     * @param {type} text
     * @param {type} jqXHR
     * @returns {undefined}
     */
    gauntletsError(data, text, jqXHR) {
        console.log("error gauntlets");
    }

    /**
    * method to load all Archetypes
    * @returns {undefined}
    */
    getArchetypes() {
        this._wrk.getArchetypes(this.archetypesSuccess.bind(this), this.archetypesError);
    }

    /**
     * successcallback method of getArchetypes, that turns the XML into objects and gives them to WrkCalculations,
     * before adding them to the dropdown on the interface 
     * @param {type} data
     * @param {type} text
     * @param {type} jqXHR
     * @returns {undefined}
     */
    archetypesSuccess(data, text, jqXHR) {
        var archetypeList1 = document.getElementById("selectPrimaryArchetype");
        var archetypeList2 = document.getElementById("selectSecondaryArchetype");
        $(data).find("Archetype").each((index, archetypeElement) => {
            var archetype = new Archetype(
                $(archetypeElement).find("name").text(),
            );
            this._wrkCalc.addArchetype(archetype);
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

    /**
     * Errorcallback method of getArchetypes 
     * @param {type} data
     * @param {type} text
     * @param {type} jqXHR
     * @returns {undefined}
     */
    archetypesError(data, text, jqXHR) {
        console.log("error Archetypes");
    }

    /**
    * method to load all Builds
    * @returns {undefined}
    */
    getBuilds() {
        this._wrk.getBuilds(this.getBuildsSuccess.bind(this), this.getBuildsError);
    }

    /**
     * successcallback method of getBuilds, that turns the XML into objects and gives them to WrkCalculations,
     * before adding them to the dropdown on the interface 
     * @param {type} data
     * @param {type} text
     * @param {type} jqXHR
     * @returns {undefined}
     */
    getBuildsSuccess(data, text, jqXHR) {
        var buildList = document.getElementById("selectBuilds");
        buildList.innerHTML = "";
        var optionDefault = document.createElement("option");
        optionDefault.text = "Select Build";
        buildList.appendChild(optionDefault);
        $(data).find("Build").each((index, buildElement) => {
            var name = $(buildElement).find("nameBuild").text();
            var amulet = this.findAmulet($(buildElement).find("Amulet"));
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
            this._wrkCalc.addBuild(build);
            var option = document.createElement("option");
            option.text = build.toString();
            option.value = build;
            buildList.appendChild(option);
        });
    }

    /**
     * Errorcallback method of getBuilds 
     * @param {type} data
     * @param {type} text
     * @param {type} jqXHR
     * @returns {undefined}
     */
    getBuildsError() {
        console.log("error Builds")
    }
    /**
        * method to close the session and disconnect
        * @returns {undefined}
        */
    logout() {
        this._wrk.deconnect(this.logoutSuccess, this.logoutError);
    }

    /**
     * successcallback method of logout, that removes the session storage variable and redirects the user to the login page
     * @param {type} data
     * @param {type} text
     * @param {type} jqXHR
     * @returns {undefined}
     */
    logoutSuccess() {
        sessionStorage.removeItem("Username");
        window.location.replace("http://localhost:8080/projet/client/index.html");
    }

    /**
     * Errorcallback method of logout
     * @param {type} data
     * @param {type} text
     * @param {type} jqXHR
     * @returns {undefined}
     */
    logoutError() {
        console.log("error logout");
    }

    /**
     * method called by pressing the new Build button. opens a prompt and calls the workerHttps to send a request
     * @returns {undefined}
     */
    newBuildButton() {
        let buildName = prompt("Please enter a Name for your Build:", "");
        if (buildName != null) {
            this._wrk.newBuild(buildName, this.newBuildSuccess.bind(this), this.newBuildError);
        }
    }

    /**
    * successcallback method of newBuild, that reloads the builds by calling the appropriate method
    * @param {type} data
    * @param {type} text
    * @param {type} jqXHR
    * @returns {undefined}
    */
    newBuildSuccess(data, text, jqXHR) {
        this._wrk.getBuilds(this.getBuildsSuccess.bind(this), this.getBuildsError);
    }

    /**
     * Errorcallback method of new Build
     * @param {type} data
     * @param {type} text
     * @param {type} jqXHR
     * @returns {undefined}
     */
    newBuildError(data, text, jqXHR) {
        console.log("Error create build");
    }

    /**
     * method called by pressing the delete Build button. takes the selected build from the dropdown and calls the workerHttps to send a request
     * @returns {undefined}
     */
    deleteBuildButton() {
        var selectElement = document.getElementById("selectBuilds");
        var selectedValue = selectElement.value;
        if (selectedValue !== null) {
            this._wrk.deleteBuild(this._wrkCalc.getBuild(selectedValue).name, this.deleteSuccess.bind(this), this.deleteError);
        }
    }

    /**
     * method called by pressing the new Build button. takes the selected build from the dropdown and calls the workerHttps to send a request
     * @returns {undefined}
     */
    saveBuildButton() {
        var selectElement = document.getElementById("selectBuilds");
        var selectedValue = selectElement.value;
        if (selectedValue !== null) {
            this._wrk.updateBuild(this._wrkCalc.getBuild(), this.saveSuccess.bind(this), this.saveError);
        }
    }

    /**
    * successcallback method of delete Build, that reloads the builds by calling the appropriate method
    * @param {type} data
    * @param {type} text
    * @param {type} jqXHR
    * @returns {undefined}
    */
    deleteSuccess(data, text, jqXHR) {
        this._wrk.getBuilds(this.getBuildsSuccess.bind(this), this.getBuildsError);
    }

    /**
     * Errorcallback method of delete Build
     * @param {type} data
     * @param {type} text
     * @param {type} jqXHR
     * @returns {undefined}
     */
    deleteError(data, text, jqXHR) {
        console.log("Error delete build");
    }

    /**
    * successcallback method of save Build, that reloads the builds by calling the appropriate method
    * @param {type} data
    * @param {type} text
    * @param {type} jqXHR
    * @returns {undefined}
    */
    saveSuccess(data, text, jqXHR) {
        this._wrk.getBuilds(this.getBuildsSuccess.bind(this), this.getBuildsError);
    }

    /**
     * Errorcallback method of save Build
     * @param {type} data
     * @param {type} text
     * @param {type} jqXHR
     * @returns {undefined}
     */
    saveError(data, text, jqXHR) {
        console.log("Error saving build");
    }

    /**
     * event triggered by a change of the selected element in the Amulet dropdown.
     * gives the new selected value to the WrkCalculations
     * @param {type} evt
     * @returns {undefined}
     */
    amuletEvent(evt) {
        var selectElement = document.getElementById("selectAmulets");
        var selectedValue = selectElement.value;
        this._wrkCalc.amuletChange(selectedValue);
        var stats = this._wrkCalc.getStats();
        //this.displayStats(stats);
    }

    /**
     * event triggered by a change of the selected element in the Helmet dropdown.
     * gives the new selected value to the WrkCalculations
     * @param {type} evt
     * @returns {undefined}
     */
    helmetEvent(evt) {
        var selectElement = document.getElementById("selectHelmets");
        var selectedValue = selectElement.value;
        this._wrkCalc.helmetChange(selectedValue);
        var stats = this._wrkCalc.getStats();
        //this.displayStats(stats);
    }

    /**
     * event triggered by a change of the selected element in the Chestplate dropdown.
     * gives the new selected value to the WrkCalculations
     * @param {type} evt
     * @returns {undefined}
     */
    chestplateEvent(evt) {
        var selectElement = document.getElementById("selectChestplates");
        var selectedValue = selectElement.value;
        this._wrkCalc.chestplateChange(selectedValue);
        var stats = this._wrkCalc.getStats();
        //this.displayStats(stats);
    }

    /**
     * event triggered by a change of the selected element in the Greaves dropdown.
     * gives the new selected value to the WrkCalculations
     * @param {type} evt
     * @returns {undefined}
     */
    greavesEvent(evt) {
        var selectElement = document.getElementById("selectGreaves");
        var selectedValue = selectElement.value;
        this._wrkCalc.greavesChange(selectedValue);
        var stats = this._wrkCalc.getStats();
        //this.displayStats(stats);
    }

    /**
     * event triggered by a change of the selected element in the Gauntlets dropdown.
     * gives the new selected value to the WrkCalculations
     * @param {type} evt
     * @returns {undefined}
     */
    gauntletsEvent(evt) {
        var selectElement = document.getElementById("selectGauntlets");
        var selectedValue = selectElement.value;
        this._wrkCalc.gauntletsChange(selectedValue);
        var stats = this._wrkCalc.getStats();
        //this.displayStats(stats);
    }

    /**
     * event triggered by a change of the selected element in the Ring1 dropdown.
     * gives the new selected value to the WrkCalculations
     * @param {type} evt
     * @returns {undefined}
     */
    ring1Event(evt) {
        var selectElement = document.getElementById("selectRings1");
        var selectedValue = selectElement.value;
        this._wrkCalc.ring1Change(selectedValue);
        var stats = this._wrkCalc.getStats();
        //this.displayStats(stats);
    }

    /**
     * event triggered by a change of the selected element in the Ring2 dropdown.
     * gives the new selected value to the WrkCalculations
     * @param {type} evt
     * @returns {undefined}
     */
    ring2Event(evt) {
        var selectElement = document.getElementById("selectRings2");
        var selectedValue = selectElement.value;
        this._wrkCalc.ring2Change(selectedValue);
        var stats = this._wrkCalc.getStats();
        //this.displayStats(stats);
    }

    /**
     * event triggered by a change of the selected element in the Ring3 dropdown.
     * gives the new selected value to the WrkCalculations
     * @param {type} evt
     * @returns {undefined}
     */
    ring3Event(evt) {
        var selectElement = document.getElementById("selectRings3");
        var selectedValue = selectElement.value;
        this._wrkCalc.ring3Change(selectedValue);
        var stats = this._wrkCalc.getStats();
        //this.displayStats(stats);
    }

    /**
     * event triggered by a change of the selected element in the Ring4 dropdown.
     * gives the new selected value to the WrkCalculations
     * @param {type} evt
     * @returns {undefined}
     */
    ring4Event(evt) {
        var selectElement = document.getElementById("selectRings4");
        var selectedValue = selectElement.value;
        this._wrkCalc.ring4Change(selectedValue);
        var stats = this._wrkCalc.getStats();
        //this.displayStats(stats);
    }

    /**
     * event triggered by a change of the selected element in the Primary Archetype dropdown.
     * gives the new selected value to the WrkCalculations
     * @param {type} evt
     * @returns {undefined}
     */
    primaryArchetypeEvent(evt) {
        var selectElement = document.getElementById("selectPrimaryArchetype");
        var selectedValue = selectElement.value;
        this._wrkCalc.primaryArchetypeChange(selectedValue);
        var stats = this._wrkCalc.getStats();
        //this.displayStats(stats);
    }

    /**
    * event triggered by a change of the selected element in the Secondary Archetype dropdown.
    * gives the new selected value to the WrkCalculations
    * @param {type} evt
    * @returns {undefined}
    */
    secondaryArchetypeEvent(evt) {
        var selectElement = document.getElementById("selectSecondaryArchetype");
        var selectedValue = selectElement.value;
        this._wrkCalc.secondaryArchetypeChange(selectedValue);
        var stats = this._wrkCalc.getStats();
        //this.displayStats(stats);
    }

    /**
    * event triggered by a change of the selected element in the Build dropdown.
    * gives the new selected value to the WrkCalculations and updates the other dropdowns according to the build
    * @returns {undefined}
    */
    buildEvent() {
        var listBuilds = document.getElementById("selectBuilds");
        var selectedBuild = listBuilds.value;
        this._wrkCalc.buildChange(selectedBuild);
        document.getElementById("buttonSaveBuild").disabled = false;
        document.getElementById("buttonDeleteBuild").disabled = false;
        document.getElementById("selectAmulets").value = this._wrkCalc.getAmuletName();
        document.getElementById("selectRings1").value = this._wrkCalc.getRing1Name();
        document.getElementById("selectRings2").value = this._wrkCalc.getRing2Name();
        document.getElementById("selectRings3").value = this._wrkCalc.getRing3Name();
        document.getElementById("selectRings4").value = this._wrkCalc.getRing4Name();
        document.getElementById("selectHelmets").value = this._wrkCalc.getHelmetName();
        document.getElementById("selectChestplates").value = this._wrkCalc.getChestplateName();
        document.getElementById("selectGreaves").value = this._wrkCalc.getGreavesName();
        document.getElementById("selectGauntlets").value = this._wrkCalc.getGauntletsName();

    }
    /*
        displayStats(stats) {
            stats.forEach(function (value, key) {
                if (value > 0) {
    
                }
            });
        }
    */

    /**
    * method that creates an Amulet object from the data provided
    * @param {type} data
    * @returns {Amulet}
    */
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

    /**
    * method that creates a Ring object from the data provided
    * @param {type} data
    * @returns {Ring}
    */
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

    /**
    * method that creates a Helmet object from the data provided
    * @param {type} data
    * @returns {Helmet}
    */
    findHelmet(data) {
        var helmet = new Helmet(
            $(data).find("name").text(),
            $(data).find("armor").text(),
            $(data).find("weight").text(),
        );
        return helmet;
    }

    /**
    * method that creates a Chestplate object from the data provided
    * @param {type} data
    * @returns {Chestplate}
    */
    findChestplate(data) {
        var chestplate = new Chestplate(
            $(data).find("name").text(),
            $(data).find("armor").text(),
            $(data).find("weight").text(),
        );
        return chestplate;
    }

    /**
    * method that creates a Greaves object from the data provided
    * @param {type} data
    * @returns {Greaves}
    */
    findGreaves(data) {
        var greaves = new Greaves(
            $(data).find("name").text(),
            $(data).find("armor").text(),
            $(data).find("weight").text(),
        );
        return greaves;
    }

    /**
    * method that creates a Gauntlets object from the data provided
    * @param {type} data
    * @returns {Gauntlets}
    */
    findGauntlets(data) {
        var gauntlets = new Gauntlets(
            $(data).find("name").text(),
            $(data).find("armor").text(),
            $(data).find("weight").text(),
        );
        return gauntlets;
    }

    /**
    * method that creates an Archetype object from the data provided
    * @param {type} data
    * @returns {Archetype}
    */
    findArchetype(data) {
        var archetype = new Archetype(
            $(data).find("name").text(),
        );
        return archetype;
    }



}

/**
 * code executet after loading the document. checks if the client has a valid session
 */
document.addEventListener("DOMContentLoaded", function () {
    const ctrl = new BuildCreatorCtrl();
    if (sessionStorage.getItem("Username")) {
        ctrl.loadData();
    } else {
        ctrl.logout();
    }
});