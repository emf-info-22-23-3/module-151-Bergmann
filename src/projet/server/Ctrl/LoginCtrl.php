<?php
include_once("../Wrk/LoginWrk.php");
include_once("SessionCtrl.php");
class LoginCtrl
{
    private $loginWrk;
    private $sessionCtrl;

    public function __construct()
    {
        $this->loginWrk = new LoginWrk();
        $this->sessionCtrl = new SessionCtrl();
    }

    public function login($username, $password)
    {
        //$resultat =$this->loginWrk->login($username, $password);
    }

    public function createUser($username, $password)
    {
        $success = 500;
        $resultat = $this->loginWrk->createUser($username, $password);
        if ($resultat) {
            $this->sessionCtrl->startSession(new User($username, $password));
            $success = 200;
        }
        return $success;
    }
}