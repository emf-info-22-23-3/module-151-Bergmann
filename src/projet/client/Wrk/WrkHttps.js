
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
}