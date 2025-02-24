<?php
include_once("./Ctrl/LoginCtrl.php");
include_once("./Ctrl/DataCtrl.php");
session_start();
$loginCtrl = new LoginCtrl();
$dataCtrl = new DataCtrl();
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if ($_POST['action'] == "signUp") {
        $success = $loginCtrl->createUser($_POST['username'], $_POST['password']);
        var_dump(http_response_code($success));
    }
    if ($_POST['action'] == "login") {
        $success = $loginCtrl->login($_POST['username'], $_POST['password']);
        //var_dump(http_response_code($success));
         http_response_code($success);
    }
    if ($_POST['action'] == "logout") {
        $success = $loginCtrl->logout();
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
    if ($_GET['action'] == "getHelmets") {
        $success = $dataCtrl->getHelmets();
        echo $success;
    }
    if ($_GET['action'] == "getChestplates") {
        $success = $dataCtrl->getChestplates();
        echo $success;
    }
    if ($_GET['action'] == "getGreaves") {
        $success = $dataCtrl->getGreaves();
        echo $success;
    }
    if ($_GET['action'] == "getGauntlets") {
        $success = $dataCtrl->getGauntlets();
        echo $success;
    }
    if ($_GET['action'] == "getBuilds") {
        $success = $dataCtrl->getBuilds();
        echo $success;
    }
}

