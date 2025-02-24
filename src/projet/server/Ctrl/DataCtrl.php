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
            $result = "<listAmulets>";
            $this->amulets = $this->databaseWrk->getAmulets();
            foreach ($this->amulets as $amulet) {
                $result = $result . $amulet->asXML();
            }
            $result = $result . "</listAmulets>";
            return $result;
        } else {
            return "500";
        }

    }

    public function getRings(): string
    {
        $result = "<listRings>";
        $this->rings = $this->databaseWrk->getRings();
        foreach ($this->rings as $ring) {
            $result = $result . $ring->asXML();
        }
        $result = $result . "</listRings>";
        return $result;
    }

    public function getHelmets(): string
    {
        $result = "<listHelmets>";
        $this->helmets = $this->databaseWrk->getHelmets();
        foreach ($this->helmets as $helmet) {
            $result = $result . $helmet->asXML();
        }
        $result = $result . "</listHelmets>";
        return $result;
    }
    public function getChestplates(): string
    {
        $result = "<listChestplates>";
        $this->chestplates = $this->databaseWrk->getChestplates();
        foreach ($this->chestplates as $chestplate) {
            $result = $result . $chestplate->asXML();
        }
        $result = $result . "</listChestplates>";
        return $result;
    }

    public function getGreaves(): string
    {
        $result = "<listGreaves>";
        $this->greaves = $this->databaseWrk->getGreaves();
        foreach ($this->greaves as $greaves) {
            $result = $result . $greaves->asXML();
        }
        $result = $result . "</listGreaves>";
        return $result;
    }

    public function getGauntlets(): string
    {
        $result = "<listGauntlets>";
        $this->gauntlets = $this->databaseWrk->getGauntlets();
        foreach ($this->gauntlets as $gauntlets) {
            $result = $result . $gauntlets->asXML();
        }
        $result = $result . "</listGauntlets>";
        return $result;
    }

    public function getBuilds()
    {
        $result = null;
        if (SessionCtrl::getInstance()->isConnected()) {

            $user = SessionCtrl::getInstance()->currentUser();
            $this->builds = $this->databaseWrk->getBuilds($user->getName());
            $result = "<listBuilds>";
            foreach ($this->builds as $build) {
                $result = $result . $build->asXML();
            }
            $result = $result . "</listBuilds>";
        }
        return $result;
    }

    public function createBuild($build)
    {
        $result = null;
        if (SessionCtrl::getInstance()->isConnected()) {

            $user = SessionCtrl::getInstance()->currentUser();
            $result = $this->databaseWrk->newBuild($build, $user->getName());
        }
        return $result;
    }

}