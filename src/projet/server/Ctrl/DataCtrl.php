<?php
include_once(realpath(__DIR__ . '/../Wrk/DatabaseWrk.php'));
include_once(realpath(__DIR__ . '/SessionCtrl.php'));
include_once(realpath(__DIR__ . '/../beans/Amulet.php'));
include_once(realpath(__DIR__ . '/../beans/Ring.php'));
include_once(realpath(__DIR__ . '/../beans/Helmet.php'));
include_once(realpath(__DIR__ . '/../beans/Chestplate.php'));
include_once(realpath(__DIR__ . '/../beans/Greaves.php'));
include_once(realpath(__DIR__ . '/../beans/Gauntlets.php'));

/**
 * Class DataCtrl
 *
 * manages the Data
 *
 * @version 2.0
 * @author Bergmann Leon
 * @project Remnant 2 Build Planner
 */

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

    /**
     * Getter for the list of Amulets
     *
     * @return string amulets as XML or error code
     */
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

    /**
     * Getter for the list of Rings
     *
     * @return string rings as XML or error code
     */
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

    /**
     * Getter for the list of Helmets
     *
     * @return string Helmets as XML or error code
     */
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

    /**
     * Getter for the list of Chestplates
     *
     * @return string Chestplates as XML or error code
     */
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

    /**
     * Getter for the list of Greaves
     *
     * @return string Greaves as XML or error code
     */
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

    /**
     * Getter for the list of Gauntlets
     *
     * @return string Gauntlets as XML or error code
     */
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

    /**
     * Getter for the list of Archetypes
     *
     * @return string Archetypes as XML or error code
     */
    public function getArchetypes(): string
    {
        $result = "<listArchetypes>";
        $this->gauntlets = $this->databaseWrk->getArchetypes();
        foreach ($this->gauntlets as $gauntlets) {
            $result = $result . $gauntlets->asXML();
        }
        $result = $result . "</listArchetypes>";
        return $result;
    }

    /**
     * Getter for the list of Builds
     *
     * @return string Builds as XML or error code
     */
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

    /**
     * method to create a new build
     * @param string $build
     * @return bool success
     */
    public function createBuild($build)
    {
        $result = null;
        if (SessionCtrl::getInstance()->isConnected()) {

            $newBuild = new Build($build, null, null, null, null, null);
            $user = SessionCtrl::getInstance()->currentUser();
            $result = $this->databaseWrk->newBuild($newBuild, $user->getName());
        }
        return $result;
    }

    /**
     * method to save a build
     * @param array $buildAsArray
     * @return string success
     */
    public function updateBuild($buildAsArray)
    {
        $result = null;
        if (SessionCtrl::getInstance()->isConnected()) {
            $user = SessionCtrl::getInstance()->currentUser();
            $amulet = null;
            $helmet = null;
            $chestplate = null;
            $greaves = null;
            $gauntlets = null;
            $primaryArchetype = null;
            $secondaryArchetype = null;
            $ring1 = null;
            $ring2 = null;
            $ring3 = null;
            $ring4 = null;
            if (!empty($buildAsArray["build"]["_amulet"])) {
                $amulet = new Amulet($buildAsArray["build"]["_amulet"]["_name"], $buildAsArray["build"]["_amulet"]["_modifiedValue"], $buildAsArray["build"]["_amulet"]["_modifier"], $buildAsArray["build"]["_amulet"]["_isPercentage"], $buildAsArray["build"]["_amulet"]["_description"]);
                $amulet->setSecondaryStats($buildAsArray["build"]["_amulet"]["_secondaryModifier"], $buildAsArray["build"]["_amulet"]["_secondaryValue"], $buildAsArray["build"]["_amulet"]["_isPercentageSecondary"]);
            }
            if (!empty($buildAsArray["build"]["_ring1"])) {
                $ring1 = new Ring($buildAsArray["build"]["_ring1"]["_name"], $buildAsArray["build"]["_ring1"]["_modifiedValue"], $buildAsArray["build"]["_ring1"]["_modifier"], $buildAsArray["build"]["_ring1"]["_isPercentage"], $buildAsArray["build"]["_ring1"]["_description"]);
                $ring1->setSecondaryStats($buildAsArray["build"]["_ring1"]["_secondaryModifier"], $buildAsArray["build"]["_ring1"]["_secondaryValue"], $buildAsArray["build"]["_ring1"]["_isPercentageSecondary"]);
            }
            if (!empty($buildAsArray["build"]["_ring2"])) {
                $ring2 = new Ring($buildAsArray["build"]["_ring2"]["_name"], $buildAsArray["build"]["_ring2"]["_modifiedValue"], $buildAsArray["build"]["_ring2"]["_modifier"], $buildAsArray["build"]["_ring2"]["_isPercentage"], $buildAsArray["build"]["_ring2"]["_description"]);
                $ring2->setSecondaryStats($buildAsArray["build"]["_ring2"]["_secondaryModifier"], $buildAsArray["build"]["_ring2"]["_secondaryValue"], $buildAsArray["build"]["_ring2"]["_isPercentageSecondary"]);
            }
            if (!empty($buildAsArray["build"]["_ring3"])) {
                $ring3 = new Ring($buildAsArray["build"]["_ring3"]["_name"], $buildAsArray["build"]["_ring3"]["_modifiedValue"], $buildAsArray["build"]["_ring3"]["_modifier"], $buildAsArray["build"]["_ring3"]["_isPercentage"], $buildAsArray["build"]["_ring3"]["_description"]);
                $ring3->setSecondaryStats($buildAsArray["build"]["_ring3"]["_secondaryModifier"], $buildAsArray["build"]["_ring3"]["_secondaryValue"], $buildAsArray["build"]["_ring3"]["_isPercentageSecondary"]);
            }
            if (!empty($buildAsArray["build"]["_ring4"])) {
                $ring4 = new Ring($buildAsArray["build"]["_ring4"]["_name"], $buildAsArray["build"]["_ring4"]["_modifiedValue"], $buildAsArray["build"]["_ring4"]["_modifier"], $buildAsArray["build"]["_ring4"]["_isPercentage"], $buildAsArray["build"]["_ring4"]["_description"]);
                $ring4->setSecondaryStats($buildAsArray["build"]["_ring4"]["_secondaryModifier"], $buildAsArray["build"]["_ring4"]["_secondaryValue"], $buildAsArray["build"]["_ring4"]["_isPercentageSecondary"]);
            }
            if (!empty($buildAsArray["build"]["_helmet"])) {
                $helmet = new Helmet($buildAsArray["build"]["_helmet"]["_name"], $buildAsArray["build"]["_helmet"]["_armor"], $buildAsArray["build"]["_helmet"]["_weight"]);
            }
            if (!empty($buildAsArray["build"]["_chestplate"])) {
                $chestplate = new Chestplate($buildAsArray["build"]["_chestplate"]["_name"], $buildAsArray["build"]["_chestplate"]["_armor"], $buildAsArray["build"]["_chestplate"]["_weight"]);
            }
            if (!empty($buildAsArray["build"]["_greaves"])) {
                $greaves = new Greaves($buildAsArray["build"]["_greaves"]["_name"], $buildAsArray["build"]["_greaves"]["_armor"], $buildAsArray["build"]["_greaves"]["_weight"]);
            }
            if (!empty($buildAsArray["build"]["_gauntlets"])) {
                $gauntlets = new Gauntlets($buildAsArray["build"]["_gauntlets"]["_name"], $buildAsArray["build"]["_gauntlets"]["_armor"], $buildAsArray["build"]["_gauntlets"]["_weight"]);
            }
            if (!empty($buildAsArray["build"]["_primaryArchetype"])) {
                $primaryArchetype = new Archetype($buildAsArray["build"]["_primaryArchetype"]["_name"]);
            }
            if (!empty($buildAsArray["build"]["_secondaryArchetype"])) {
                $secondaryArchetype = new Archetype($buildAsArray["build"]["_secondaryArchetype"]["_name"]);
            }

            $build = new Build($buildAsArray["build"]["_name"], $amulet, $helmet, $chestplate, $greaves, $gauntlets);
            $build->setRing1($ring1);
            $build->setRing2($ring2);
            $build->setRing3($ring3);
            $build->setRing4($ring4);
            $build->setPrimaryArchetype($primaryArchetype);
            $build->setSecondaryArchetype($secondaryArchetype);
            $result = $this->databaseWrk->saveBuild($build, $user->getName());
        }
        return $result;
    }

    /**
     * method to delete a build
     * @param string $buildname
     * @return bool success
     */
    public function deleteBuild($buildname)
    {
        $result = null;
        if (SessionCtrl::getInstance()->isConnected()) {
            $user = SessionCtrl::getInstance()->currentUser();
            $result = $this->databaseWrk->deleteBuild($buildname, $user->getName());
        }
        return $result;
    }

}