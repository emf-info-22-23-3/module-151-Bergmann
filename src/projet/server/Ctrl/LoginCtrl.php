<?php
include_once(realpath(__DIR__ . '/../Wrk/LoginWrk.php'));
include_once(realpath(__DIR__ . '/SessionCtrl.php'));

/**
 * Class LoginCtrl
 *
 * manages the login, logout and sign up
 *
 * @version 2.0
 * @author Bergmann Leon
 * @project Remnant 2 Build Planner
 */
class LoginCtrl
{
    private $loginWrk;
    private $sessionCtrl;

    /**
     * Constructor of the class Amulet
     *
     */
    public function __construct()
    {
        $this->loginWrk = new LoginWrk();
    }

    /**
     * method allowing the user to log in
     *
     * @param string $username the username
     * @param string $password the password
     * @return integer $success the response code
     */
    public function login($username, $password): int
    {
        $success = 401;
        $resultat = $this->loginWrk->login($username, $password);
        if ($resultat) {
            if (SessionCtrl::getInstance()->startSession(new User($username, $password))) {
                $success = 200;
            }
        }
        return $success;
    }

    /**
     * method allowing the creation of a new user
     *
     * @param string $username the username
     * @param string $password the password
     * @return integer $success the response code
     */
    public function createUser($username, $password): int
    {
        $success = 500;
        $resultat = $this->loginWrk->createUser($username, $password);
        if ($resultat) {
            SessionCtrl::getInstance()->startSession(new User($username, $password));
            $success = 200;
        }
        return $success;
    }

    /**
     * method allowing the user to log out
     *
     * @return integer $success the response code
     */
    public function logout(): int
    {
        $success = 500;
        $resultat = SessionCtrl::getInstance()->destroySession();
        if ($resultat) {
            $success = 200;
        }
        return $success;
    }
}