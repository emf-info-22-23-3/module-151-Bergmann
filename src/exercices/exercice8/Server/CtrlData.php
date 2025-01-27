<?php
    require_once("WrkDatabase.php");
    class CtrlData {
        private $wrk;
        public function __construct() {
            $this->wrk = new WrkDatabase;
        }
 
        public function readJoueurs($equipeID) {
            $joueurs = $this->wrk->readJoueurs($equipeID);
            echo '<joueurs>';
            foreach ($joueurs as $joueur) {
                echo "<joueur><id>".$joueur->getEquipe()."</id><nom>".$joueur->getNom()."</nom><points>".$joueur->getPoints()."</points></joueur>";
            }
            echo '</joueurs>';
        }
 
        public function readEquipes() {
            $equipes = $this->wrk->readEquipes();
            echo '<equipes>';
            foreach ($equipes as $equipe) {
                echo "<equipe><id>".$equipe->getID()."</id><nom>".$equipe->getNom()."</nom></equipe>";
            }
            echo '</equipes>';
        }
 
    }
?>
