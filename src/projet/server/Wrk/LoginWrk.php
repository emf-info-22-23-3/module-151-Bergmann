<?php
include_once(realpath(__DIR__ . '/DBConnectionWrk.php'));
class LoginWrk
{
    private $dbConnection;

    public function __construct()
    {
        $this->dbConnection = DBConnectionWrk::getInstance();
    }

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

    private function hashPassword($password)
    {
        return password_hash($password, PASSWORD_DEFAULT);
    }

    public function verifyPassword($password, $hash)
    {
        return password_verify($password, $hash);
    }
}