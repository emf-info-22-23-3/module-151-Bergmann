<?php
include_once(realpath(__DIR__ . '/DBConnectionWrk.php'));
include_once(realpath(__DIR__ . '/../beans/Amulet.php'));
include_once(realpath(__DIR__ . '/../beans/Ring.php'));
include_once(realpath(__DIR__ . '/../beans/Helmet.php'));
include_once(realpath(__DIR__ . '/../beans/Chestplate.php'));
include_once(realpath(__DIR__ . '/../beans/Greaves.php'));
include_once(realpath(__DIR__ . '/../beans/Gauntlets.php'));
include_once(realpath(__DIR__ . '/../beans/Archetype.php'));
include_once(realpath(__DIR__ . '/../beans/Build.php.php'));


class DatabaseWrk
{
    private $dbConnection;
    private $amulets;
    private $rings;
    private $helmets;
    private $chestplates;
    private $greaves;
    private $gauntlets;
    private $builds;
    private $archetypes;

    public function __construct()
    {
        $this->dbConnection = DBConnectionWrk::getInstance();
        $this->amulets = array();
        $this->rings = array();
        $this->helmets = array();
        $this->greaves = array();
        $this->gauntlets = array();
        $this->chestplates = array();
        $this->builds = array();
        $this->archetypes = array();

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

    public function getArchetypes(): array
    {
        $query = "SELECT * FROM t_archetype";
        $params = [];
        $counter = 0;
        $result = $this->dbConnection->selectQuery($query, $params);
        foreach ($result as $data) {
            $archetype = new Archetype($data['Name']);
            $this->archetypes[$counter++] = $archetype;
        }
        return $this->archetypes;
    }

    public function getBuilds($user): array
    {
        $query = "SELECT PK_User FROM t_user WHERE Name = :name";
        $params = [':name' => ["$user", PDO::PARAM_STR]];
        $result = $this->dbConnection->selectQuery($query, $params);

        $query2 = "SELECT * from t_build WHERE FK_User =:pk";
        $params2 = [':pk' => ["$result", PDO::PARAM_STR]];
        $result2 = $this->dbConnection->selectQuery($query2, $params2);
        $counterBuilds = 0;
        foreach ($result2 as $data) {
            $pkBuild = $data["PK_Build"];
            $amulet = $this->getAmuletByPK($data["FK_Amulet"]);
            $helmet = $this->getHelmetByPK($data["FK_Helmet"]);
            $chestplate = $this->getChestplateByPK($data["FK_Chestplate"]);
            $greaves = $this->getGreavesByPK($data["FK_Greaves"]);
            $gauntlets = $this->getGauntletsByPK($data["FK_Gauntlets"]);
            $primaryArchetype = $this->getArchetypeByPK($data["FK_Archetype_Primary"]);
            $secondaryArchetype = $this->getArchetypeByPK($data["FK_Archetype_Secondary"]);
            $build = new Build($data["Name"], $amulet, $helmet, $chestplate, $greaves, $gauntlets);
            $build->setPrimaryArchetype($primaryArchetype);
            $build->setSecondaryArchetype($secondaryArchetype);
            $query3 = "SELECT * FROM tr_build_ring where FK_Build=:fkbuild";
            $params3 = [':pk' => ["$pkBuild", PDO::PARAM_STR]];
            $counterRings = 0;
            $temp = array();
            $result3 = $this->dbConnection->selectQuery($query3, $params3);
            foreach ($result3 as $data3) {
                $ring = $this->getRingByPK($data3["FK_Ring"]);
                $temp[$counterRings] = $ring;
                $counterRings++;
            }
            $build->setRing1($temp[0]);
            $build->setRing2($temp[1]);
            $build->setRing3($temp[2]);
            $build->setRing4($temp[3]);
            $this->builds[$counterBuilds] = $build;
        }
        return $this->builds;
    }

    public function getRingByPK($pk): Ring|null
    {
        $query = "SELECT * FROM t_ring WHERE PK_Ring = :pk";
        $params = [':pk' => ["$pk", PDO::PARAM_STR]];
        $result = $this->dbConnection->selectQuery($query, $params);
        $ring = null;
        foreach ($result as $data) {
            $ring = new Ring($data['Name'], $data['ModifiedValue'], $data['Modifier'], $data['isPercentage'], $data['description']);
            $ring->setSecondaryStats($data['secondaryModifier'], $data['secondaryValue'], $data['isPercentageSecondary']);
        }
        return $ring;
    }
    public function getAmuletByPK($pk): Amulet|null
    {
        $query = "SELECT * FROM t_amulet WHERE PK_Amulet = :pk";
        $params = [':pk' => ["$pk", PDO::PARAM_STR]];
        $result = $this->dbConnection->selectQuery($query, $params);
        $amulet = null;
        foreach ($result as $data) {
            $amulet = new Amulet($data['Name'], $data['ModifiedValue'], $data['Modifier'], $data['isPercentage'], $data['description']);
            $amulet->setSecondaryStats($data['secondaryModifier'], $data['secondaryValue'], $data['isPercentageSecondary']);
        }
        return $amulet;
    }

    public function getHelmetByPK($pk)
    {
        $query = "SELECT * FROM t_helmet WHERE PK_Helmet = :pk";
        $params = [':pk' => ["$pk", PDO::PARAM_STR]];
        $result = $this->dbConnection->selectQuery($query, $params);
        $helmet = null;
        foreach ($result as $data) {
            $helmet = new Helmet($data['Name'], $data['Armor'], $data['Weight']);
        }
        return $helmet;
    }

    public function getChestplateByPK($pk)
    {
        $query = "SELECT * FROM t_chestplate WHERE PK_Chestplate = :pk";
        $params = [':pk' => ["$pk", PDO::PARAM_STR]];
        $result = $this->dbConnection->selectQuery($query, $params);
        $chestplate = null;
        foreach ($result as $data) {
            $chestplate = new Chestplate($data['Name'], $data['Armor'], $data['Weight']);
        }
        return $chestplate;
    }

    public function getGreavesByPK($pk)
    {
        $query = "SELECT * FROM t_greaves WHERE PK_Greaves = :pk";
        $params = [':pk' => ["$pk", PDO::PARAM_STR]];
        $result = $this->dbConnection->selectQuery($query, $params);
        $greaves = null;
        foreach ($result as $data) {
            $greaves = new Greaves($data['Name'], $data['Armor'], $data['Weight']);
        }
        return $greaves;
    }

    public function getGauntletsByPK($pk)
    {
        $query = "SELECT * FROM t_gauntlets WHERE PK_Gauntlets = :pk";
        $params = [':pk' => ["$pk", PDO::PARAM_STR]];
        $result = $this->dbConnection->selectQuery($query, $params);
        $gauntlets = null;
        foreach ($result as $data) {
            $gauntlets = new Gauntlets($data['Name'], $data['Armor'], $data['Weight']);
        }
        return $gauntlets;
    }

    public function getArchetypeByPK($pk)
    {
        $query = "SELECT * FROM t_archetype WHERE PK_Archetype = :pk";
        $params = [':pk' => ["$pk", PDO::PARAM_STR]];
        $result = $this->dbConnection->selectQuery($query, $params);
        $archetype = null;
        foreach ($result as $data) {
            $archetype = new Archetype($data['Name']);
        }
        return $archetype;
    }
}