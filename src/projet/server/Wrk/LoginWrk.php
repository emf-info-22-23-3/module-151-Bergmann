<?php
include_once("DBConnectionWrk.php");
class LoginWrk
{
    private $dbConnection;

    public function __construct()
    {
        $this->dbConnection = DBConnectionWrk::getInstance();
    }

    public function login($username, $password)
    {
        $query = "SELECT * FROM t_user WHERE name = :name";
        $params = [':name' => ["$username", PDO::PARAM_STR]];
        $result = $this->dbConnection->selectQuery($query, $params);
        foreach ($result as $data) {
            if ($data["Password"] == $password) {

            }

        }
    }

    public function createUser($username, $password)
    {
        $query = "INSERT INTO t_user (Name, Password) VALUES (:name, :password)";
        $params = [
            ':name' => ["$username", PDO::PARAM_STR],
            ':password' => ["$password", PDO::PARAM_STR],
        ];
        $success = $this->dbConnection->executeQuery($query, $params);
        return $success;
    }
}