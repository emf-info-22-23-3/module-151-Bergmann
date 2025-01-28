<?php

require_once("Equipe.php");
require_once("Joueur.php");
class WrkDatabase
{
    public $pdo;
    public $equipes;
    public $joueurs;

    public function __construct()
    {
        $this->pdo = new PDO('mysql:host=database;port=3306;dbname=hockey_stats;charset=utf8', 'root', 'root');
        $this->equipes = array();
    }

    public function readJoueurs($equipeID) {
        $reponse = $this->pdo->query("SELECT * FROM t_joueur WHERE FK_equipe=$equipeID");
        $i = 0;
        while ($data = $reponse->fetch()){
            $joueur = new Joueur($data["Nom"], $data["Points"], $data["FK_equipe"]);
            $joueurs[$i] = $joueur;
            $i++;
        }
        $reponse->closeCursor();
        return $joueurs;
    }

    public function readEquipes() {
        $reponse = $this->pdo->query("SELECT * FROM t_equipe");
        $i = 0;
        while ($data = $reponse->fetch()){
            $equipe = new Equipe($data["PK_equipe"], $data["Nom"]);
            $equipes[$i] = $equipe;
            $i++;
        }
        $reponse->closeCursor();
        return $equipes;
    }



}
