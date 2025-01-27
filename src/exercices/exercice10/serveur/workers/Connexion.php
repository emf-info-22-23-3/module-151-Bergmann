<?php
include_once('configConnexion.php');
class Connection {
	private $pdo;
	
	/**
     * Fonction d'ouvrir une connexion à la base de données.
     */
    public function __construct() {
    	try {
			$this->pdo = new PDO(DB_TYPE.':host='.DB_TYPE.';port='.DB_HOST.';dbname='.DB_NAME.';charset='.DB_CHARSET, DB_USER, DB_PASS);
		}catch (PDOException $e) {
    		print "Erreur !: " . $e->getMessage() . "<br/>";
    		die();
		}
	}

	/**
     * Fonction permettant d'exécuter une requête MySQL.
	 * 
	 * @param String $query. Requête à exécuter.
     */
    public function executeQuery($query) {
    	try {
	        $queryRes =  $this->pdo->query($query);		
	        return  $queryRes->fetchAll();
      }catch (PDOException $e) {
          print "Erreur !: " . $e->getMessage() . "<br/>";
          die();
      }
    }

}

?>
