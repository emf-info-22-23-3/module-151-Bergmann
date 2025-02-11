import { WrkHttps } from "../Wrk/WrkHttps.js";
export class Ctrl {
    constructor() {
        console.log("test")
        this._wrk = new WrkHttps();
        document.getElementById("buttonSignUp").addEventListener("click", this.signUp.bind(this));
    }

    signUp() {
        var inputUsername = document.getElementById("inputUsername").value;
        var inputPassword = document.getElementById("inputPassword").value;
        if (inputUsername!==null||inputUsername!==null) {
            this._wrk.signUp(inputUsername, inputPassword,this.signupSuccess,this.signupError);
            
        }
    }

    signupSuccess(data, text, jqXHR) {
        window.location.href ="http://localhost:8080/projet/client/pages/Buildcreator.html";
    }

    signupError(data, text, jqXHR) {

    }
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("test on load")
    const ctrl = new Ctrl();
});