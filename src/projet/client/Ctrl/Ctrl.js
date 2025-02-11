import { WrkHttps } from "../Wrk/WrkHttps.js";
export class Ctrl {
    constructor() {
        this._wrk = new WrkHttps();
        document.getElementById("buttonSignUp").addEventListener("click", this.signUp.bind(this));
        document.getElementById("buttonLogin").addEventListener("click", this.login.bind(this));

    }

    signUp() {
        var inputUsername = document.getElementById("inputUsername").value;
        var inputPassword = document.getElementById("inputPassword").value;
        if (inputUsername !== null || inputUsername !== null) {
            this._wrk.signUp(inputUsername, inputPassword, this.signupSuccess, this.signupError);

        }
    }

    signupSuccess(data, text, jqXHR) {
        console.log("successcallback")
        window.location.replace("http://localhost:8080/projet/client/pages/Buildcreator.html");
    }

    signupError(data, text, jqXHR) {
        console.log("errorcallback")
    }

    login() {
        var inputUsername = document.getElementById("inputUsername").value;
        var inputPassword = document.getElementById("inputPassword").value;
        if (inputUsername !== null || inputUsername !== null) {
            this._wrk.connect(inputUsername, inputPassword, this.signupSuccess, this.signupError);
        }
    }

    loginSuccess(data, text, jqXHR) {
        window.location.replace("http://localhost:8080/projet/client/pages/Buildcreator.html");
    }

    loginError(data, text, jqXHR) {
        console.log("errorcallback")
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const ctrl = new Ctrl();
});