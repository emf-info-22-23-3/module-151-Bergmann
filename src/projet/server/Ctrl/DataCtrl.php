<?php
include_once(realpath(__DIR__ . '/../Wrk/DatabaseWrk.php'));
include_once(realpath(__DIR__ . '/SessionCtrl.php'));
include_once(realpath(__DIR__ . '/../beans/Amulet.php'));
include_once(realpath(__DIR__ . '/../beans/Ring.php'));
include_once(realpath(__DIR__ . '/../beans/Helmet.php'));
include_once(realpath(__DIR__ . '/../beans/Chestplate.php'));
include_once(realpath(__DIR__ . '/../beans/Greaves.php'));
include_once(realpath(__DIR__ . '/../beans/Gauntlets.php'));

class DataCtrl
{
    private $databaseWrk;
    private $sessionCtrl;
    private $amulets;
    private $rings;
    private $helmets;
    private $chestplates;
    private $greaves;
    private $gauntlets;
    private $archetypes;
    private $builds;

    public function __construct()
    {
        $this->databaseWrk = new DatabaseWrk();
        $this->amulets = array();
        $this->rings = array();
        $this->helmets = array();
        $this->chestplates = array();
        $this->greaves = array();
        $this->gauntlets = array();
        $this->archetypes = array();
        $this->builds = array();
    }

    public function getAmulets(): string
    {
        if (SessionCtrl::getInstance()->isConnected()) {
            $resultat = "<listAmulets>";
            $this->amulets = $this->databaseWrk->getAmulets();
            foreach ($this->amulets as $amulet) {
                $resultat = $resultat . $amulet->asXML();
            }
            $resultat = $resultat . "</listAmulets>";
            return $resultat;
        } else {
            return "500";
        }

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

    public function getHelmets(): string
    {
        $resultat = "<listHelmets>";
        $this->helmets = $this->databaseWrk->getHelmets();
        foreach ($this->helmets as $helmet) {
            $resultat = $resultat . $helmet->asXML();
        }
        $resultat = $resultat . "</listHelmets>";
        return $resultat;
    }
    public function getChestplates(): string
    {
        $resultat = "<listChestplates>";
        $this->chestplates = $this->databaseWrk->getChestplates();
        foreach ($this->chestplates as $chestplate) {
            $resultat = $resultat . $chestplate->asXML();
        }
        $resultat = $resultat . "</listChestplates>";
        return $resultat;
    }

    public function getGreaves(): string
    {
        $resultat = "<listGreaves>";
        $this->greaves = $this->databaseWrk->getGreaves();
        foreach ($this->greaves as $greaves) {
            $resultat = $resultat . $greaves->asXML();
        }
        $resultat = $resultat . "</listGreaves>";
        return $resultat;
    }

    public function getGauntlets(): string
    {
        $resultat = "<listGauntlets>";
        $this->gauntlets = $this->databaseWrk->getGauntlets();
        foreach ($this->gauntlets as $gauntlets) {
            $resultat = $resultat . $gauntlets->asXML();
        }
        $resultat = $resultat . "</listGauntlets>";
        return $resultat;
    }

    public function getBuilds()
    {
        $resultat = null;
        if (SessionCtrl::getInstance()->isConnected()) {

            $user = SessionCtrl::getInstance()->currentUser();
            $this->builds = $this->databaseWrk->getBuilds($user->getName());
            $resultat = "<listBuilds>";
            foreach ($this->builds as $build) {
                $resultat = $resultat . $build->asXML();
            }
            $resultat = $resultat . "</listBuilds";
        }
        return $resultat;
    }

}