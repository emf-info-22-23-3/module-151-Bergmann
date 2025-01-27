<?php
require_once("CtrlData.php");
$ctrl = new CtrlData();
if($_GET['action'] == "equipe")
{
    $ctrl->readEquipes();
    
}elseif ($_GET['action'] == "joueur") {
    $ctrl->readJoueurs($_GET['equipeId']);
}
