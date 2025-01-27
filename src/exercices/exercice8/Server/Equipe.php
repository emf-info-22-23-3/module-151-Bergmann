<?php

class Equipe
{
    public $nom;
    public $id;

    public function __construct($id, $nom)
    {
        $this->nom = $nom;
        $this->id = $id;
    }
    public function getNom()
    {
        return $this->nom;
    }
    public function getId()
    {
        return $this->id;
    }
}

