<?php
include_once(realpath(__DIR__ . '/DBConnectionWrk.php'));

/**
 * Class Login Wrk
 *
 * manages logins with the database 
 *
 * @version 2.0
 * @author Bergmann Leon
 * @project Remnant 2 Build Planner
 */
class LoginWrk
{
    private $dbConnection;

    public function __construct()
    {
        $this->dbConnection = DBConnectionWrk::getInstance();
    }

    /**
     * method to log in
     *
     * @param string $username. Name of the user
     * @param string $password. password of the user
     * @return bool $success 
     */
    public function login($username, $password)
    {
        $success = false;
        $query = "SELECT * FROM t_user WHERE name = :name";
        $params = [':name' => ["$username", PDO::PARAM_STR]];
        $result = $this->dbConnection->selectQuery($query, $params);
        foreach ($result as $data) {
            if ($this->verifyPassword($password, $data["Password"])) {
                $success = true;
            }
        }
        return $success;

    }

    /**
     * method to create a user
     *
     * @param string $username. Name of the user
     * @param string $password. password of the user
     * @return bool $success 
     */
    public function createUser($username, $password)
    {
        $query = "INSERT INTO t_user (Name, Password) VALUES (:name, :password)";
        $hashedPassword = $this->hashPassword($password);
        $params = [
            ':name' => ["$username", PDO::PARAM_STR],
            ':password' => ["$hashedPassword", PDO::PARAM_STR],
        ];
        $success = $this->dbConnection->executeQuery($query, $params);
        return $success;
    }

    /**
     * method to hash a password
     *
     * @param string $password. password of the user
     * @return string hashed password 
     */
    private function hashPassword($password)
    {
        return password_hash($password, PASSWORD_DEFAULT);
    }

    /**
     * method to verify a password hash
     *
     * @param string $password. password of the user
     * @param string $hash. the hashed passsword
     * @return bool is it the same
     */
    public function verifyPassword($password, $hash)
    {
        return password_verify($password, $hash);
    }
}