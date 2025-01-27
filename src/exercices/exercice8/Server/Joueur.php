<?php

class Joueur
{
    public $nom;
    public $points;

    public $equipe;

    public function __construct($nom, $points, $equipe)
    {
        $this->nom = $nom;
        $this->points = $points;
        $this->equipe = $equipe;
    }
    public function getEquipe()
    {
        return $this->equipe;
    }
    public function getNom()
    {
        return $this->nom;
    }
    public function getPoints()
    {
        return $this->points;
    }
}