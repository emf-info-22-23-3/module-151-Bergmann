<?php
include_once("./Ctrl/LoginCtrl.php");

$loginCtrl = new LoginCtrl();


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if ($_POST['action'] == "signUp") {
        $success = $loginCtrl->createUser($_POST['username'], $_POST['password']);
        var_dump(http_response_code($success));
    }
}

