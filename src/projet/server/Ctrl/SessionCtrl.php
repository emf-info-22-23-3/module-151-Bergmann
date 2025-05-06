<?php
include_once(realpath(__DIR__ . '/../beans/User.php'));
/**
 * Class SessionCtrl
 *
 * manages the sessions
 *
 * @version 2.0
 * @author Bergmann Leon
 * @project Remnant 2 Build Planner
 */

class SessionCtrl
{
    private static $instance = null;

    private function __construct()
    {
    }

    /**
     *
     * Method that returns the instance of this singleton class
     */
    public static function getInstance(): SessionCtrl
    {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * method to start a new session
     *
     * @param User $user. Name of the user
     * @return bool is the user set
     */
    public function startSession($user): bool
    {

        $_SESSION["currentUser"] = $user;
        $this->currentUser = $user;

        return isset($_SESSION["currentUser"]);
    }

     /**
     * method to destroy the current session
     *
     * @return bool is the user no longer set
     */
    public function destroySession(): bool
    {
        session_destroy();
        $this->currentUser = null;
        return !isset($_SESSION["currentUser"]);
    }

     /**
     * method to check if a session exists
     *
     * @return bool does the session exist
     */
    public function isConnected(): bool
    {
        return isset($_SESSION["currentUser"]);
    }

     /**
     * method to get the current user
     *
     * @return bool the current user 
     */
    public function currentUser(): ?User
    {
        return $_SESSION["currentUser"];
    }
}