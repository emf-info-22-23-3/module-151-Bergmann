<?php

class DBConnectionWrk
{
    private static $instance;
    private $pdo;
    private $connection;


    private function __construct()
    {
        $dsn = "mysql:host=mysql;port=3306;dbname=db_remnant2;charset=utf8";
        $username = "root";
        $password = "root";

        try {
            $this->pdo = new PDO($dsn, $username, $password);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->connection = true;
        } catch (PDOException $e) {
            $this->connection = false;
            echo "Connection failed: " . $e->getMessage();
        }
    }

    public static function getInstance()
    {
        if (!self::$instance) {
            self::$instance = new self();
        }

        return self::$instance;
    }


    public function selectQuery($query, $params = []): array|bool
    {
        try {
            $statement = $this->pdo->prepare($query);
            $this->bindParameters($statement, $params);
            $success = $statement->execute();

            if ($success) {
                return $statement->fetchAll(PDO::FETCH_ASSOC);
            } else {
                return false;
            }
        } catch (PDOException $e) {
            echo "Query execution failed: " . $e->getMessage();
            return false;
        }
    }

    // Method to execute a general query
    public function executeQuery($query, $params = []): bool
    {
        try {
            $statement = $this->pdo->prepare($query);
            $this->bindParameters($statement, $params);
            $success = $statement->execute();
            return $success;
        } catch (PDOException $e) {
            echo "Query execution failed: " . $e->getMessage();
            return false;
        }
    }

    // Method to bind parameters to a prepared statement
    private function bindParameters($statement, $params)
    {
        foreach ($params as $param => $value) {
            $statement->bindValue($param, $value[0], $value[1]);
        }
    }


}
