<?php
include_once(realpath(__DIR__ . '/DBConnectionWrk.php'));
include_once(realpath(__DIR__ . '/../beans/Amulet.php'));
include_once(realpath(__DIR__ . '/../beans/Ring.php'));
include_once(realpath(__DIR__ . '/../beans/Helmet.php'));
include_once(realpath(__DIR__ . '/../beans/Chestplate.php'));
include_once(realpath(__DIR__ . '/../beans/Greaves.php'));
include_once(realpath(__DIR__ . '/../beans/Gauntlets.php'));


class DatabaseWrk
{
    private $dbConnection;
    private $amulets;
    private $rings;
    private $helmets;
    private $chestplates;
    private $greaves;
    private $gauntlets;

    public function __construct()
    {
        $this->dbConnection = DBConnectionWrk::getInstance();
        $this->amulets = array();
        $this->rings = array();
        $this->helmets = array();
        $this->greaves = array();
        $this->gauntlets = array();
        $this->chestplates = array();
    }

    public function getAmulets(): array
    {
        $query = "SELECT * FROM t_amulet";
        $params = [];
        $counter = 0;
        $result = $this->dbConnection->selectQuery($query, $params);
        foreach ($result as $data) {
            $amulet = new Amulet($data['Name'], $data['ModifiedValue'], $data['Modifier'], $data['isPercentage'], $data['description']);
            $amulet->setSecondaryStats($data['secondaryModifier'], $data['secondaryValue'], $data['isPercentageSecondary']);
            $this->amulets[$counter++] = $amulet;
        }
        return $this->amulets;
    }

    public function getRings(): array
    {
        $query = "SELECT * FROM t_ring";
        $params = [];
        $counter = 0;
        $result = $this->dbConnection->selectQuery($query, $params);
        foreach ($result as $data) {
            $ring = new Ring($data['Name'], $data['ModifiedValue'], $data['Modifier'], $data['isPercentage'], $data['description']);
            $ring->setSecondaryStats($data['secondaryModifier'], $data['secondaryValue'], $data['isPercentageSecondary']);
            $this->rings[$counter++] = $ring;
        }
        return $this->rings;
    }

    public function getHelmets(): array
    {
        $query = "SELECT * FROM t_helmet";
        $params = [];
        $counter = 0;
        $result = $this->dbConnection->selectQuery($query, $params);
        foreach ($result as $data) {
            $helmet = new Helmet($data['Name'], $data['Armor'], $data['Weight']);
            $this->helmets[$counter++] = $helmet;
        }
        return $this->helmets;
    }

    public function getChestplates(): array
    {
        $query = "SELECT * FROM t_chestplate";
        $params = [];
        $counter = 0;
        $result = $this->dbConnection->selectQuery($query, $params);
        foreach ($result as $data) {
            $chestplate = new Chestplate($data['Name'], $data['Armor'], $data['Weight']);
            $this->chestplates[$counter++] = $chestplate;
        }
        return $this->chestplates;
    }

    public function getGreaves(): array
    {
        $query = "SELECT * FROM t_greaves";
        $params = [];
        $counter = 0;
        $result = $this->dbConnection->selectQuery($query, $params);
        foreach ($result as $data) {
            $greaves = new Greaves($data['Name'], $data['Armor'], $data['Weight']);
            $this->greaves[$counter++] = $greaves;
        }
        return $this->greaves;
    }

    public function getGauntlets(): array
    {
        $query = "SELECT * FROM t_gauntlets";
        $params = [];
        $counter = 0;
        $result = $this->dbConnection->selectQuery($query, $params);
        foreach ($result as $data) {
            $gauntlets = new Gauntlets($data['Name'], $data['Armor'], $data['Weight']);
            $this->gauntlets[$counter++] = $gauntlets;
        }
        return $this->gauntlets;
    }
}