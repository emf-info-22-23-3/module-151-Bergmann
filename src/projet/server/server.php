<?php
include_once("./Ctrl/LoginCtrl.php");
include_once("./Ctrl/DataCtrl.php");

$loginCtrl = new LoginCtrl();
$dataCtrl = new DataCtrl();


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if ($_POST['action'] == "signUp") {
        $success = $loginCtrl->createUser($_POST['username'], $_POST['password']);
        var_dump(http_response_code($success));
    }
    if ($_POST['action'] == "login") {
        $success = $loginCtrl->login($_POST['username'], $_POST['password']);
        var_dump(http_response_code($success));
    }
}
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if ($_GET['action'] == "getAmulets") {
        $success = $dataCtrl->getAmulets();
        echo $success;
    }
    if ($_GET['action'] == "getRings") {
        $success = $dataCtrl->getRings();
        echo $success;
    }
}

