<?php
include_once(realpath(__DIR__ . '/DBConnectionWrk.php'));
include_once(realpath(__DIR__ . '/../beans/Amulet.php'));
include_once(realpath(__DIR__ . '/../beans/Ring.php'));
include_once(realpath(__DIR__ . '/../beans/Helmet.php'));
include_once(realpath(__DIR__ . '/../beans/Chestplate.php'));
include_once(realpath(__DIR__ . '/../beans/Greaves.php'));
include_once(realpath(__DIR__ . '/../beans/Gauntlets.php'));
include_once(realpath(__DIR__ . '/../beans/Archetype.php'));
include_once(realpath(__DIR__ . '/../beans/Build.php'));
/**
 * Class DatabaseWrk
 *
 * Manages database requests 
 *
 * @version 2.0
 * @author Bergmann Leon
 * @project Remnant 2 Build Planner
 */

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

    /**
     * Constructor of the class Amulet
     *
     */
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

    /**
     * Getter for the list of Amulets
     *
     * @return array list of amulets
     */
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

    /**
     * Getter for the list of Rings
     *
     * @return array list of rings
     */
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

    /**
     * Getter for the list of Helmets
     *
     * @return array list of Helmets
     */
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

    /**
     * Getter for the list of chestplates
     *
     * @return array list of chestplates
     */
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

    /**
     * Getter for the list of greaves
     *
     * @return array list of greaves
     */
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

    /**
     * Getter for the list of gauntlets
     *
     * @return array list of gauntlets
     */
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

    /**
     * Getter for the list of archetypes
     *
     * @return array list of archetypes
     */
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

    /**
     * Getter for the list of Builds
     *
     * @return array list of Builds
     */
    public function getBuilds($user): array
    {
        $query = "SELECT PK_User FROM t_user WHERE Name = :name";
        $params = [':name' => ["$user", PDO::PARAM_STR]];
        $result = $this->dbConnection->selectQuery($query, $params);
        $pk = null;
        foreach ($result as $data) {
            $pk = $data["PK_User"];
        }
        $query2 = "SELECT * from t_build WHERE FK_User =:pk";
        $params2 = [':pk' => ["$pk", PDO::PARAM_STR]];
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
            $params3 = [':fkbuild' => ["$pkBuild", PDO::PARAM_STR]];
            $counterRings = 0;
            $temp = array();
            $result3 = $this->dbConnection->selectQuery($query3, $params3);
            if (!empty($result3)) {
                foreach ($result3 as $data3) {
                    $ring = $this->getRingByPK($data3["FK_Ring"]);
                    $temp[$counterRings] = $ring;
                    $counterRings++;
                }
                $build->setRing1($temp[0]);
                $build->setRing2($temp[1]);
                $build->setRing3($temp[2]);
                $build->setRing4($temp[3]);
            }
            $counterBuilds++;

            $this->builds[$counterBuilds] = $build;
        }
        return $this->builds;
    }

    /**
     * method to create a new build
     * @param Build $build
     * @return bool success
     */
    public function newBuild($build, $user)
    {
        $return = false;
        if ($build instanceof Build) {
            $query = "SELECT PK_User FROM t_user WHERE Name = :name";
            $params = [':name' => ["$user", PDO::PARAM_STR]];
            $result = $this->dbConnection->selectQuery($query, $params);
            $pk = null;
            foreach ($result as $data) {
                $pk = $data["PK_User"];
            }

            //remove all special characters that could lead to a Html, Js injection
            $name = $this->sanitizeInput($build->getName());

            $query = "INSERT INTO t_build (Name, FK_User, FK_Amulet, FK_Helmet, FK_Chestplate, FK_Gauntlets, FK_Greaves, FK_Archetype_Primary, FK_Archetype_Secondary) VALUES ( :Name, :FK_User, :FK_Amulet, :FK_Helmet, :FK_Chestplate, :FK_Gauntlets, :FK_Greaves, :FK_Archetype_Primary, :FK_Archetype_Secondary)";
            $params = [
                ':Name' => [$name, PDO::PARAM_STR],
                ':FK_User' => [$pk, PDO::PARAM_STR],
                ':FK_Amulet' => [null, PDO::PARAM_STR],
                ':FK_Helmet' => [null, PDO::PARAM_STR],
                ':FK_Chestplate' => [null, PDO::PARAM_STR],
                ':FK_Gauntlets' => [null, PDO::PARAM_STR],
                ':FK_Greaves' => [null, PDO::PARAM_STR],
                ':FK_Archetype_Primary' => [null, PDO::PARAM_STR],
                ':FK_Archetype_Secondary' => [null, PDO::PARAM_STR],
            ];
            $result = $this->dbConnection->selectQuery($query, $params);
            if ($result) {
                $return = true;
            }
        }
        return $return;

    }

    /**
     * method to save a build
     * @param array $buildAsArray
     * @return string success
     */
    public function saveBuild($build, $user)
    {
        $return = false;

        if ($build instanceof Build) {
            // Combine user and build retrieval using JOIN
            $query = "
                SELECT b.PK_Build, u.PK_User 
                FROM t_user u
                INNER JOIN t_build b ON b.FK_User = u.PK_User
                WHERE u.Name = :name AND b.Name = :buildname
            ";
            $params = [
                ':name' => [$user, PDO::PARAM_STR],
                ':buildname' => [$build->getName(), PDO::PARAM_STR]
            ];
            $result = $this->dbConnection->selectQuery($query, $params);

            if (!empty($result)) {
                $pkbuild = $result[0]['PK_Build'];

                // Update build gear and archetypes
                $queryUpdate = "
                    UPDATE t_build SET
                        FK_Amulet = :fkamulet,
                        FK_Helmet = :fkhelmet,
                        FK_Chestplate = :fkchestplate,
                        FK_Greaves = :fkgreaves,
                        FK_Gauntlets = :fkgauntlets,
                        FK_Archetype_Primary = :fkarchetypeprimary,
                        FK_Archetype_Secondary = :fkarchetypesecondary
                    WHERE PK_Build = :pkbuild
                ";
                $paramsUpdate = [
                    ':fkamulet' => [$this->getPKAmuletByName($build->getAmulet()), PDO::PARAM_STR],
                    ':fkhelmet' => [$this->getPKHelmetByName($build->getHelmet()), PDO::PARAM_STR],
                    ':fkchestplate' => [$this->getPKChestplateByName($build->getChestplate()), PDO::PARAM_STR],
                    ':fkgreaves' => [$this->getPKGreavesByName($build->getGreaves()), PDO::PARAM_STR],
                    ':fkgauntlets' => [$this->getPKGauntletsByName($build->getGauntlets()), PDO::PARAM_STR],
                    ':fkarchetypeprimary' => [$this->getPKArchetypeByName($build->getPrimaryArchetype()), PDO::PARAM_STR],
                    ':fkarchetypesecondary' => [$this->getPKArchetypeByName($build->getSecondaryArchetype()), PDO::PARAM_STR],
                    ':pkbuild' => [$pkbuild, PDO::PARAM_STR]
                ];
                $this->dbConnection->executeQuery($queryUpdate, $paramsUpdate);

                // Clear previous ring associations
                $queryDelete = "DELETE FROM tr_build_ring WHERE FK_Build = :fkbuild";
                $paramsDelete = [':fkbuild' => [$pkbuild, PDO::PARAM_STR]];
                $this->dbConnection->executeQuery($queryDelete, $paramsDelete);

                $listRings = $build->getAllRings();


                foreach ($listRings as $ring) {
                    if (!empty($ring->getName())) {
                        $queryInsert = "INSERT INTO tr_build_ring (FK_Build, FK_Ring) VALUES (:fkbuild, :fkring)";
                        $paramsInsert = [
                            ':fkbuild' => [$pkbuild, PDO::PARAM_STR],
                            ':fkring' => [$this->getPKRingByName($ring), PDO::PARAM_STR]
                        ];
                        $resultInsert = $this->dbConnection->executeQuery($queryInsert, $paramsInsert);
                        if ($resultInsert === true) {
                            $return = true;
                        }
                    } else {
                        $result = true;
                    }

                }


            }
        }

        return $return;
    }

    /**
     * method to delete a build
     * @param string $buildname
     * @return bool success
     */
    public function deleteBuild($buildname, $user)
    {
        $return = false;
        $pkuser = $this->getPKUserByName($user);
        $pkbuild = $this->getPKBuild($buildname, $pkuser);

        $query = "DELETE FROM tr_build_ring where FK_Build =:fkbuild";
        $params = [':fkbuild' => ["$pkbuild", PDO::PARAM_STR]];
        $result = $this->dbConnection->executeQuery($query, $params);
        if ($result === true) {
            $query2 = "DELETE FROM t_build where PK_Build =:pkbuild AND FK_User=:fkuser";
            $params2 = [
                ':pkbuild' => ["$pkbuild", PDO::PARAM_STR],
                ':fkuser' => ["$pkuser", PDO::PARAM_STR]
            ];
            $result2 = $this->dbConnection->executeQuery($query2, $params2);
            if ($result2 === true) {
                $return = true;
            }
        }
        return $return;
    }

    /**
     * method to get a ring by PK
     * @param int $pk
     * @return Ring $ring
     */
    public function getRingByPK($pk): Ring
    {
        $ring = null;
        if (!empty($pk)) {
            $query = "SELECT * FROM t_ring WHERE PK_Ring = :pk";
            $params = [':pk' => ["$pk", PDO::PARAM_STR]];
            $result = $this->dbConnection->selectQuery($query, $params);
            foreach ($result as $data) {
                $ring = new Ring($data['Name'], $data['ModifiedValue'], $data['Modifier'], $data['isPercentage'], $data['description']);
                $ring->setSecondaryStats($data['secondaryModifier'], $data['secondaryValue'], $data['isPercentageSecondary']);
            }
        }
        return $ring;

    }

    /**
     * method to get an Amulet by PK
     * @param int $pk
     * @return Amulet $amulet
     */
    public function getAmuletByPK($pk): Amulet
    {
        $amulet = null;
        if (!empty($pk)) {
            $query = "SELECT * FROM t_amulet WHERE PK_Amulet = :pk";
            $params = [':pk' => ["$pk", PDO::PARAM_STR]];
            $result = $this->dbConnection->selectQuery($query, $params);
            foreach ($result as $data) {
                $amulet = new Amulet($data['Name'], $data['ModifiedValue'], $data['Modifier'], $data['isPercentage'], $data['description']);
                $amulet->setSecondaryStats($data['secondaryModifier'], $data['secondaryValue'], $data['isPercentageSecondary']);
            }
        }
        return $amulet;
    }

    /**
     * method to get a Helmet by PK
     * @param int $pk
     * @return Helmet $helmet
     */
    public function getHelmetByPK($pk)
    {
        $helmet = null;
        if (!empty($pk)) {
            $query = "SELECT * FROM t_helmet WHERE PK_Helmet = :pk";
            $params = [':pk' => ["$pk", PDO::PARAM_STR]];
            $result = $this->dbConnection->selectQuery($query, $params);
            foreach ($result as $data) {
                $helmet = new Helmet($data['Name'], $data['Armor'], $data['Weight']);
            }
        }
        return $helmet;
    }

    /**
     * method to get a Chestplate by PK
     * @param int $pk
     * @return Chestplate $chestplate
     */
    public function getChestplateByPK($pk)
    {
        $chestplate = null;
        if (!empty($pk)) {
            $query = "SELECT * FROM t_chestplate WHERE PK_Chestplate = :pk";
            $params = [':pk' => ["$pk", PDO::PARAM_STR]];
            $result = $this->dbConnection->selectQuery($query, $params);
            foreach ($result as $data) {
                $chestplate = new Chestplate($data['Name'], $data['Armor'], $data['Weight']);
            }
        }
        return $chestplate;
    }

    /**
     * method to get a Greaves by PK
     * @param int $pk
     * @return Greaves $greaves
     */
    public function getGreavesByPK($pk)
    {
        $greaves = null;
        if (!empty($pk)) {
            $query = "SELECT * FROM t_greaves WHERE PK_Greaves = :pk";
            $params = [':pk' => ["$pk", PDO::PARAM_STR]];
            $result = $this->dbConnection->selectQuery($query, $params);
            foreach ($result as $data) {
                $greaves = new Greaves($data['Name'], $data['Armor'], $data['Weight']);
            }
        }
        return $greaves;
    }

    /**
     * method to get a Gauntlets by PK
     * @param int $pk
     * @return Gauntlets $gauntlets
     */
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

    /**
     * method to get an Archetype by PK
     * @param int $pk
     * @return Archetype $archetype
     */
    public function getArchetypeByPK($pk)
    {
        $archetype = null;
        if (!empty($pk)) {
            $query = "SELECT * FROM t_archetype WHERE PK_Archetype = :pk";
            $params = [':pk' => ["$pk", PDO::PARAM_STR]];
            $result = $this->dbConnection->selectQuery($query, $params);
            foreach ($result as $data) {
                $archetype = new Archetype($data['Name']);
            }
        }
        return $archetype;
    }

    /**
     * method to get the PK of a Ring by name
     * @param Ring $ring
     * @return string|null 
     */
    public function getPKRingByName($ring)
    {
        $pk = null;
        if (!empty($ring)) {
            $query = "SELECT * FROM t_ring WHERE Name = :name";
            $params = [':name' => [$ring->getName(), PDO::PARAM_STR]];
            $result = $this->dbConnection->selectQuery($query, $params);
            foreach ($result as $data) {
                $pk = $data["PK_Ring"];
            }
            return $pk;
        }

    }

    /**
     * method to get the PK of an Amulet by name
     * @param Amulet $amulet
     * @return string|null 
     */
    public function getPKAmuletByName($amulet)
    {
        $pk = null;
        if (!empty($amulet)) {
            $query = "SELECT * FROM t_amulet WHERE Name = :name";
            $params = [':name' => [$amulet->getName(), PDO::PARAM_STR]];
            $result = $this->dbConnection->selectQuery($query, $params);
            foreach ($result as $data) {
                $pk = $data["PK_Amulet"];
            }
        }
        return $pk;
    }

    /**
     * method to get the PK of a Helmet by name
     * @param Helmet $helmet
     * @return string|null 
     */
    public function getPKHelmetByName($helmet)
    {
        $pk = null;
        if (!empty($helmet)) {
            $query = "SELECT * FROM t_helmet WHERE Name = :name";
            $params = [':name' => [$helmet->getName(), PDO::PARAM_STR]];
            $result = $this->dbConnection->selectQuery($query, $params);
            foreach ($result as $data) {
                $pk = $data["PK_Helmet"];
            }
        }
        return $pk;
    }

    /**
     * method to get the PK of a Chestplate by name
     * @param Chestplate $chestplate
     * @return string|null 
     */
    public function getPKChestplateByName($chestplate)
    {
        $pk = null;
        if (!empty($chestplate)) {
            $query = "SELECT * FROM t_chestplate WHERE Name = :name";
            $params = [':name' => [$chestplate->getName(), PDO::PARAM_STR]];
            $result = $this->dbConnection->selectQuery($query, $params);
            foreach ($result as $data) {
                $pk = $data["PK_Chestplate"];
            }
        }
        return $pk;
    }

    /**
     * method to get the PK of a Greaves by name
     * @param Greaves $greaves
     * @return string|null 
     */
    public function getPKGreavesByName($greaves)
    {
        $pk = null;
        if (!empty($greaves)) {
            $query = "SELECT * FROM t_greaves WHERE Name = :name";
            $params = [':name' => [$greaves->getName(), PDO::PARAM_STR]];
            $result = $this->dbConnection->selectQuery($query, $params);
            foreach ($result as $data) {
                $pk = $data["PK_Greaves"];
            }
        }
        return $pk;
    }

    /**
     * method to get the PK of a Gauntlets by name
     * @param Gauntlets $gauntlets
     * @return string|null 
     */
    public function getPKGauntletsByName($gauntlets)
    {
        $pk = null;
        if (!empty($gauntlets)) {
            $query = "SELECT * FROM t_gauntlets WHERE Name = :name";
            $params = [':name' => [$gauntlets->getName(), PDO::PARAM_STR]];
            $result = $this->dbConnection->selectQuery($query, $params);
            foreach ($result as $data) {
                $pk = $data["PK_Gauntlets"];
            }
        }
        return $pk;
    }

    /**
     * method to get the PK of a Archetype by name
     * @param Archetype $archetype
     * @return string|null 
     */
    public function getPKArchetypeByName($archetype)
    {
        $pk = null;
        if (!empty($archetype)) {
            $query = "SELECT * FROM t_archetype WHERE Name = :name";
            $params = [':name' => [$archetype->getName(), PDO::PARAM_STR]];
            $result = $this->dbConnection->selectQuery($query, $params);
            foreach ($result as $data) {
                $pk = $data["PK_Archetype"];
            }
        }
        return $pk;
    }

    /**
     * method to get the PK of a User by name
     * @param User $user
     * @return string|null 
     */
    public function getPKUserByName($name)
    {
        $pkuser = null;
        if (!empty($name)) {
            $query = "SELECT PK_User FROM t_user WHERE Name = :name";
            $params = [':name' => ["$name", PDO::PARAM_STR]];
            $result = $this->dbConnection->selectQuery($query, $params);
            foreach ($result as $data) {
                $pkuser = $data["PK_User"];
            }
        }
        return $pkuser;
    }

    /**
     * method to get the PK of a Helmet by name
     * @param string $name 
     * @param string $fkuser
     * @return string|null 
     */
    public function getPKBuild($name, $fkUser)
    {
        $pkbuild = null;
        if (!empty($name)) {
            $query = "SELECT PK_Build FROM t_build WHERE Name = :name AND FK_User =:fkuser";
            $params = [
                ':name' => ["$name", PDO::PARAM_STR],
                ':fkuser' => ["$fkUser", PDO::PARAM_STR]
            ];
            $result = $this->dbConnection->selectQuery($query, $params);
            foreach ($result as $data) {
                $pkbuild = $data["PK_Build"];
            }
        }
        return $pkbuild;
    }

    /**
     * method to remove special characters to prevent injections
     * @param string $input 
     * @return string 
     */
    public function sanitizeInput(string $input): string
    {
        $stripped = strip_tags($input);

        $safe = htmlspecialchars($stripped, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');

        return $safe;
    }
}