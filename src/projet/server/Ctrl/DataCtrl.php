<?php
include_once(realpath(__DIR__ . '/../Wrk/DatabaseWrk.php'));
include_once(realpath(__DIR__ . '/SessionCtrl.php'));
include_once(realpath(__DIR__ . '/../beans/Amulet.php'));

class DataCtrl
{
    private $databaseWrk;
    private $sessionCtrl;
    private $amulets;
    private $rings;

    public function __construct()
    {
        $this->databaseWrk = new DatabaseWrk();
        $this->sessionCtrl = new SessionCtrl();
        $this->amulets = array();
        $this->rings = array();
    }

    public function getAmulets(): string
    {
        $resultat = "<listAmulets>";
        $this->amulets = $this->databaseWrk->getAmulets();
        foreach ($this->amulets as $amulet) {
            $resultat = $resultat . $amulet->asXML();
        }
        $resultat = $resultat . "</listAmulets>";
        return $resultat;
    }

    public function getRings(): string
    {
        $resultat = "<listRings>";
        $this->rings = $this->databaseWrk->getRings();
        foreach ($this->rings as $ring) {
            $resultat = $resultat . $ring->asXML();
        }
        $resultat = $resultat . "</listRings>";
        return $resultat;
    }

}