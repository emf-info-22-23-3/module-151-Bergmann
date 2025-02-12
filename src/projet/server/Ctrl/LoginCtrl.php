<?php
include_once(realpath(__DIR__ . '/../Wrk/LoginWrk.php'));
include_once(realpath(__DIR__ . '/SessionCtrl.php'));
class LoginCtrl
{
    private $loginWrk;
    private $sessionCtrl;

    public function __construct()
    {
        $this->loginWrk = new LoginWrk();
        $this->sessionCtrl = new SessionCtrl();
    }

    public function login($username, $password): int
    {
        $success = 500;
        $resultat = $this->loginWrk->login($username, $password);
        if ($resultat) {
            $this->sessionCtrl->startSession(new User($username, $password));
            $success = 200;
        }
        return $success;
    }

    public function createUser($username, $password): int
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