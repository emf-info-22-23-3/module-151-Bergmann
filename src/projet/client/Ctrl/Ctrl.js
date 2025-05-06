/*
 * Controller Login Page
 *
 * @author Bergmann Leon
 * @project Remnant 2 Build Planner
 * @version 2.0 / 06-MAY-2025
 */
import { WrkHttps } from "../Wrk/WrkHttps.js";
import { Amulet } from "../beans/Amulet.js";
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
        var inputUsername = document.getElementById("inputUsername").value;
        sessionStorage.setItem("Username", inputUsername);
        window.location.replace("http://localhost:8080/projet/client/pages/Buildcreator.html");
    }

    signupError(data, text, jqXHR) {
        console.log("errorcallback")
    }

    login() {
        var inputUsername = document.getElementById("inputUsername").value;
        var inputPassword = document.getElementById("inputPassword").value;
        if (inputUsername !== null || inputUsername !== null) {
            this._wrk.connect(inputUsername, inputPassword, this.loginSuccess, this.loginError);
        }
    }

    loginSuccess(data, text, jqXHR) {
        var inputUsername = document.getElementById("inputUsername").value;
        sessionStorage.setItem("Username", inputUsername);
        window.location.replace("http://localhost:8080/projet/client/pages/Buildcreator.html");
    }

    loginError(data, text, jqXHR) {
        console.log("errorcallback")
    }

}

document.addEventListener("DOMContentLoaded", function () {
    const ctrl = new Ctrl();
});