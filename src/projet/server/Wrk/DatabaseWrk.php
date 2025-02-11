<?php
include_once(realpath(__DIR__ . '/DBConnectionWrk.php'));
include_once(realpath(__DIR__ . '/../beans/Amulet.php'));
class DatabaseWrk
{
    private $dbConnection;
    private $amulets;

    public function __construct()
    {
        $this->dbConnection = DBConnectionWrk::getInstance();
        $this->amulets = array();

    }

    public function getAmulets()
    {
        $query = "SELECT * FROM t_amulet";
        $params = [];
        $counter = 0;
        $result = $this->dbConnection->selectQuery($query, $params);
        foreach ($result as $data) {
            $amulet = new Amulet($data['Name'], $data['ModifiedValue'], $data['Modifier'], $data['isPercentage'], $data['description']);
            $amulet->setSecondaryStats($data['secondaryModifier'], $data['secondaryValue'], $data['isPercentageSecondary']);
            $this->amulets[$counter] = $amulet;
            $counter++;
        }
        return $this->amulets;
    }
}