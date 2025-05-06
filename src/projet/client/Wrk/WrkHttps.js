/*
 * Wrk Http Requests
 *
 * @author Bergmann Leon
 * @project Remnant 2 Build Planner
 * @version 2.0 / 06-MAY-2025
 */
export class WrkHttps {
    #URL = "http://localhost:8080/projet/server/server.php";

    constructor() {
    }

    /**
    * method allowing to send a sign up request (new user)
    * @param {String} username the username
    * @param {String} passwordthe password
    * @param {type} Fonction successCallback function
    * @param {type} Fonction errorCallback function
    */
    signUp(username, password, successCallback, errorCallback) {
        $.ajax({
            type: "POST",
            url: this.#URL,
            data: 'action=signUp&username=' + username + '&password=' + password,
            success: successCallback,
            error: errorCallback
        });
    }

    /**
    * method allowing to send a login request (existing user user)
    * @param {String} username the username
    * @param {String} passwordthe password
    * @param {type} Fonction successCallback function
    * @param {type} Fonction errorCallback function
    */
    connect(username, password, successCallback, errorCallback) {
        $.ajax({
            type: "POST",
            url: this.#URL,
            data: 'action=login&username=' + username + '&password=' + password,
            success: successCallback,
            error: errorCallback
        });
    }

    /**
    * method allowing to send a logout request
    * @param {type} Fonction successCallback function
    * @param {type} Fonction errorCallback function
    */
    deconnect(successCallback, errorCallback) {
        $.ajax({
            type: "POST",
            url: this.#URL,
            data: 'action=deconnect',
            success: successCallback,
            error: errorCallback
        });
    }

    /**
    * method allowing to send a get request to retrieve all Amulets
    * @param {type} Fonction successCallback function
    * @param {type} Fonction errorCallback function
    */
    getAmulets(successCallback, errorCallback) {
        $.ajax({
            type: "GET",
            dataType: "xml",
            url: this.#URL,
            data: 'action=getAmulets',
            success: successCallback,
            error: errorCallback
        });
    }

    /**
    * method allowing to send a get request to retrieve all Rings
    * @param {type} Fonction successCallback function
    * @param {type} Fonction errorCallback function
    */
    getRings(successCallback, errorCallback) {
        $.ajax({
            type: "GET",
            dataType: "xml",
            url: this.#URL,
            data: 'action=getRings',
            success: successCallback,
            error: errorCallback
        });
    }

    /**
    * method allowing to send a get request to retrieve all Helmets
    * @param {type} Fonction successCallback function
    * @param {type} Fonction errorCallback function
    */
    getHelmets(successCallback, errorCallback) {
        $.ajax({
            type: "GET",
            dataType: "xml",
            url: this.#URL,
            data: 'action=getHelmets',
            success: successCallback,
            error: errorCallback
        });
    }

    /**
    * method allowing to send a get request to retrieve all Chestplates
    * @param {type} Fonction successCallback function
    * @param {type} Fonction errorCallback function
    */
    getChestplates(successCallback, errorCallback) {
        $.ajax({
            type: "GET",
            dataType: "xml",
            url: this.#URL,
            data: 'action=getChestplates',
            success: successCallback,
            error: errorCallback
        });
    }

    /**
    * method allowing to send a get request to retrieve all Greaves
    * @param {type} Fonction successCallback function
    * @param {type} Fonction errorCallback function
    */
    getGreaves(successCallback, errorCallback) {
        $.ajax({
            type: "GET",
            dataType: "xml",
            url: this.#URL,
            data: 'action=getGreaves',
            success: successCallback,
            error: errorCallback
        });
    }

    /**
    * method allowing to send a get request to retrieve all Gauntlets
    * @param {type} Fonction successCallback function
    * @param {type} Fonction errorCallback function
    */
    getGauntlets(successCallback, errorCallback) {
        $.ajax({
            type: "GET",
            dataType: "xml",
            url: this.#URL,
            data: 'action=getGauntlets',
            success: successCallback,
            error: errorCallback
        });
    }

    /**
    * method allowing to send a get request to retrieve all Builds
    * @param {type} Fonction successCallback function
    * @param {type} Fonction errorCallback function
    */
    getBuilds(successCallback, errorCallback) {
        $.ajax({
            type: "GET",
            dataType: "xml",
            url: this.#URL,
            data: 'action=getBuilds',
            success: successCallback,
            error: errorCallback
        });
    }

    /**
    * method allowing to send a get request to retrieve all Archetypes
    * @param {type} Fonction successCallback function
    * @param {type} Fonction errorCallback function
    */
    getArchetypes(successCallback, errorCallback) {
        $.ajax({
            type: "GET",
            dataType: "xml",
            url: this.#URL,
            data: 'action=getArchetypes',
            success: successCallback,
            error: errorCallback
        });
    }

    /**
    * method allowing to send a put request to create a new build
    * @param {String} buildName the name of the build
    * @param {type} Fonction successCallback function
    * @param {type} Fonction errorCallback function
    */
    newBuild(buildName, successCallback, errorCallback) {
        $.ajax({
            method: "PUT",
            contentType: 'application/json',
            url: this.#URL,
            data: JSON.stringify({
                action: "CREATE",
                buildName
            }),
            success: successCallback,
            error: errorCallback
        });
    }

    /**
    * method allowing to send a put request to update an existing build
    * @param {Build} build the build
    * @param {type} Fonction successCallback function
    * @param {type} Fonction errorCallback function
    */
    updateBuild(build, successCallback, errorCallback) {
        $.ajax({
            method: "PUT",
            contentType: 'application/json',
            url: this.#URL,
            data: JSON.stringify({
                action: "UPDATE",
                build
            }),
            success: successCallback,
            error: errorCallback
        });
    }

    /**
    * method allowing to send a delete request to delete an existing build
    * @param {String} buildName the name of the build
    * @param {type} Fonction successCallback function
    * @param {type} Fonction errorCallback function
    */
    deleteBuild(buildName, successCallback, errorCallback) {
        $.ajax({
            method: "DELETE",
            contentType: 'application/json',
            url: this.#URL,
            data: JSON.stringify({ buildName }),
            success: successCallback,
            error: errorCallback
        });
    }
}