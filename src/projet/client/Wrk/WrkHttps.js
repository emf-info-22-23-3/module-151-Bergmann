
export class WrkHttps {
    #URL = "http://localhost:8080/projet/server/server.php";

    constructor() {
    }

    signUp(username, password, successCallback, errorCallback) {
        $.ajax({
            type: "POST",
            url: this.#URL,
            data: 'action=signUp&username=' + username + '&password=' + password,
            success: successCallback,
            error: errorCallback
        });
    }

    connect(username, password, successCallback, errorCallback) {
        $.ajax({
            type: "POST",
            url: this.#URL,
            data: 'action=connect&username=' + username + '&password=' + password,
            success: successCallback,
            error: errorCallback
        });
    }

    deconnect(successCallback, errorCallback) {
        $.ajax({
            type: "POST",
            url: this.#URL,
            data: 'action=deconnect',
            success: successCallback,
            error: errorCallback
        });
    }

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
}