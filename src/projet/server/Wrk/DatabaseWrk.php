<?php
include_once(realpath(__DIR__ . '/DBConnectionWrk.php'));
include_once(realpath(__DIR__ . '/../beans/Amulet.php'));
include_once(realpath(__DIR__ . '/../beans/Ring.php'));

class DatabaseWrk
{
    private $dbConnection;
    private $amulets;
    private $rings;

    public function __construct()
    {
        $this->dbConnection = DBConnectionWrk::getInstance();
        $this->amulets = array();
        $this->rings = array();
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
}