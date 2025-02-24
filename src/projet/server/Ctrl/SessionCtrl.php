<?php
include_once(realpath(__DIR__ . '/../beans/User.php'));

class SessionCtrl
{
    private static $instance = null;

    private function __construct()
    {
    }

    public static function getInstance(): SessionCtrl
    {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function startSession($user): bool
    {

        $_SESSION["currentUser"] = $user;
        $this->currentUser = $user;

        return isset($_SESSION["currentUser"]);
    }

    public function destroySession(): bool
    {
        session_destroy();
        $this->currentUser = null;
        return !isset($_SESSION["currentUser"]);
    }

    public function isConnected(): bool
    {
        return isset($_SESSION["currentUser"]);
    }

    public function currentUser(): ?User
    {
        return $_SESSION["currentUser"];
    }
}