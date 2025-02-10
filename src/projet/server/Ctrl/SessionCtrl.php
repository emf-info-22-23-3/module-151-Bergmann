<?php
include_once("../beans/User.php");
class SessionCtrl
{
    private $currentUser;
    public function __construct()
    {
        $this->currentUser = null;
    }

    public function startSession($user): bool
    {
        session_start();
        $_SESSION["currentUser"] = $user;
        return isset($_SESSION["currentUser"]);
    }

    public function destroySession(): bool
    {
        session_destroy();
        return !isset($_SESSION["currentUser"]);
    }

    public function isConnected(): bool
    {
        return $this->currentUser !== null;
    }

    public function currentUser(): User
    {
        return $this->currentUser;
    }
}