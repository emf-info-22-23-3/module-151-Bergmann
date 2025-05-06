<?php
/**
 * Class DBConnectionWrk
 *
 * manages the database access
 *
 * @version 2.0
 * @author Bergmann Leon
 * @project Remnant 2 Build Planner
 */
class DBConnectionWrk
{
    private static $instance;
    private $pdo;
    private $connection;

    /**
     * Constructor of the class DBConnectionWrk. initializes the connection to the Database
     *
     */
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
    /**
     *
     * Method that returns the instance of this singleton class
     */
    public static function getInstance()
    {
        if (!self::$instance) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    /**
     * method allowing the execution of a select query
     *
     * @param string $query the query that will be executed
     * @param array $params the parameters of said query
     * @return string the data fetched from the Database
     */
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

    /**
     * method allowing the execution of a  query
     *
     * @param string $query the query that will be executed
     * @param array $params the parameters of said query
     * @return string the data fetched from the Database
     */
    public function executeQuery($query, $params = []): bool
    {
        try {
            $this->pdo->beginTransaction();

            $statement = $this->pdo->prepare($query);
            $this->bindParameters($statement, $params);
            $success = $statement->execute();

            if ($success) {
                $this->pdo->commit();

                return true;
            } else {
                return false;
            }

        } catch (PDOException $e) {
            $this->pdo->rollBack();

            return false;
        }
    }

 /**
     * method allowing to bind the params to a query
     *
     * @param string $query the query 
     * @param array $params the parameters to bind to the query
     * @return string|null the bound statement
     */
    private function bindParameters($statement, $params)
    {
        foreach ($params as $param => $value) {
            $statement->bindValue($param, $value[0], $value[1]);
        }
    }


}
