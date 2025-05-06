<?php
include_once(realpath(__DIR__ . '/../beans/Amulet.php'));
include_once(realpath(__DIR__ . '/../beans/Ring.php'));
include_once(realpath(__DIR__ . '/../beans/Helmet.php'));
include_once(realpath(__DIR__ . '/../beans/Chestplate.php'));
include_once(realpath(__DIR__ . '/../beans/Greaves.php'));
include_once(realpath(__DIR__ . '/../beans/Gauntlets.php'));

/**
 * Class Build
 *
 * Beans for Builds 
 *
 * @version 2.0
 * @author Bergmann Leon
 * @project Remnant 2 Build Planner
 */
class Build
{
    private $name;
    private $amulet;
    private $helmet;
    private $chestplate;
    private $greaves;
    private $gauntlets;
    private $primaryArchetype;
    private $secondaryArchetype;
    private $ring1;
    private $ring2;
    private $ring3;
    private $ring4;

    /**
     * Constructor of the class Build
     *
     * @param string $name. Name of the Build
     * @param Amulet|null $amulet equipped amulet
     * @param Helmet|null $helmet equipped Helmet
     * @param Chestplate|null $chestplate equipped Chestplate
     * @param Greaves|null $greaves.equipped Greaves
     * @param Gauntlets|null $gauntlets. equipped Gauntlets
     */
    public function __construct($name, $amulet, $helmet, $chestplate, $greaves, $gauntlets)
    {
        $this->name = $name;
        $this->amulet = $amulet;
        $this->helmet = $helmet;
        $this->chestplate = $chestplate;
        $this->greaves = $greaves;
        $this->gauntlets = $gauntlets;
        $this->primaryArchetype = null;
        $this->secondaryArchetype = null;
        $this->ring1 = null;
        $this->ring2 = null;
        $this->ring3 = null;
        $this->ring4 = null;
    }

    /**
     * Getter for the name of the Build
     *
     * @return string name of the Build
     */
    public function getName()
    {
        return $this->name;
    }
    /**
     * Getter for the Amulet
     *
     * @return Amulet the amulet
     */
    public function getAmulet()
    {
        return $this->amulet;
    }

    /**
     * Getter for the Helmet
     *
     * @return Helmet the helmet
     */
    public function getHelmet()
    {
        return $this->helmet;
    }

    /**
     * Getter for the Chestplate
     *
     * @return Chestplate the Chestplate
     */
    public function getChestplate()
    {
        return $this->chestplate;
    }

    /**
     * Getter for the Greaves
     *
     * @return Greaves the Greaves
     */
    public function getGreaves()
    {
        return $this->greaves;
    }

    /**
     * Getter for the Gauntlets
     *
     * @return Gauntlets the Gauntlets
     */
    public function getGauntlets()
    {
        return $this->gauntlets;
    }

    /**
     * Getter for the Ring 1
     *
     * @return Ring the Ring 1
     */
    public function getRing1()
    {
        return $this->ring1;
    }

    /**
     * Getter for the Ring 2
     *
     * @return Ring the Ring 2
     */
    public function getRing2()
    {
        return $this->ring2;
    }

    /**
     * Getter for the Ring 3
     *
     * @return Ring the Ring 3
     */
    public function getRing3()
    {
        return $this->ring3;
    }

    /**
     * Getter for the Ring 4
     *
     * @return Ring the Ring 4
     */
    public function getRing4()
    {
        return $this->ring4;
    }

    /**
     * Getter for the primary Archetype
     *
     * @return Archetype the primary Archetype
     */
    public function getPrimaryArchetype()
    {
        return $this->primaryArchetype;
    }

    /**
     * Getter for the secondary Archetype
     *
     * @return Archetype the secondary Archetype
     */
    public function getSecondaryArchetype()
    {
        return $this->secondaryArchetype;
    }

    /**
     * Getter for all rings
     *
     * @return array an array containing all rings
     */
    public function getAllRings()
    {
        $return = array();
        if (!is_null($this->ring1)) {
            array_push($return, $this->ring1);
        }
        if (!is_null($this->ring2)) {
            array_push($return, $this->ring2);
        }
        if (!is_null($this->ring3)) {
            array_push($return, $this->ring3);
        }
        if (!is_null($this->ring4)) {
            array_push($return, $this->ring4);
        }
        return $return;

    }

    /**
     * setter for the Amulet
     * 
     *@param Amulet $amulet the amulet
     */
    public function setAmulet($amulet)
    {
        if ($amulet instanceof Amulet) {
            $this->amulet = $amulet;
        }
    }

    /**
     * setter for the Helmet
     * 
     *@param Helmet $helmet the helmet
     */
    public function setHelmet($helmet)
    {
        if ($helmet instanceof Helmet) {
            $this->helmet = $helmet;
        }
    }

    /**
     * setter for the Chestplate
     * 
     *@param Chestplate $chestplate the chestplate
     */
    public function setChestplate($chestplate)
    {
        if ($chestplate instanceof Chestplate) {
            $this->chestplate = $chestplate;
        }
    }

    /**
     * setter for the Greaves
     * 
     *@param Greaves $greaves the Greaves
     */
    public function setGreaves($greaves)
    {
        if ($greaves instanceof Greaves) {
            $this->greaves = $greaves;
        }
    }

    /**
     * setter for the Gauntlets
     * 
     *@param Gauntlets $gauntlets the Gauntlets
     */
    public function setGaunlets($gauntlets)
    {
        if ($gauntlets instanceof Gaunlets) {
            $this->gauntlets = $gauntlets;
        }
    }

    /**
     * setter for the Primary Archetype
     * 
     *@param Archetype $primaryArchetype the primary archetype
     */
    public function setPrimaryArchetype($primaryArchetype)
    {
        if ($primaryArchetype instanceof Archetype) {
            $this->primaryArchetype = $primaryArchetype;
        }
    }

    /**
     * setter for the Secondary Archetype
     * 
     *@param Archetype $secondaryArchetype the secondary archetype
     */
    public function setSecondaryArchetype($secondaryArchetype)
    {
        if ($secondaryArchetype instanceof Archetype) {
            $this->secondaryArchetype = $secondaryArchetype;
        }
    }

    /**
     * setter for the Ring 1
     * 
     *@param Ring $ring1 the ring 1
     */
    public function setRing1($ring1)
    {
        if ($ring1 instanceof Ring) {
            $this->ring1 = $ring1;
        }
    }

    /**
     * setter for the Ring 2
     * 
     *@param Ring $ring2 the ring 2
     */
    public function setRing2($ring2)
    {
        if ($ring2 instanceof Ring) {
            $this->ring2 = $ring2;
        }
    }

    /**
     * setter for the Ring 3
     * 
     *@param Ring $ring3 the ring 3
     */
    public function setRing3($ring3)
    {
        if ($ring3 instanceof Ring) {
            $this->ring3 = $ring3;
        }
    }

    /**
     * setter for the Ring 4
     * 
     *@param Ring $ring4 the ring 4
     */
    public function setRing4($ring4)
    {
        if ($ring4 instanceof Ring) {
            $this->ring4 = $ring4;
        }
    }

    /**
     * method that returns the Build in an XML format
     *
     * @return string build as XML
     */
    public function asXML(): string
    {
        $result = "<Build>";
        $result = $result . "<nameBuild>" . $this->name . "</nameBuild>";
        if (!empty($this->amulet)) {
            $result = $result . $this->amulet->asXML();
        }
        if (!empty($this->helmet)) {
            $result = $result . $this->helmet->asXML();
        }
        if (!empty($this->chestplate)) {
            $result = $result . $this->chestplate->asXML();
        }
        if (!empty($this->greaves)) {
            $result = $result . $this->greaves->asXML();
        }
        if (!empty($this->gauntlets)) {
            $result = $result . $this->gauntlets->asXML();
        }
        if (!empty($this->primaryArchetype)) {
            $result = $result . "<PrimaryArchetype>" . $this->primaryArchetype->asXML() . "</PrimaryArchetype>";
        }
        if (!empty($this->secondaryArchetype)) {
            $result = $result . "<SecondaryArchetype>" . $this->secondaryArchetype->asXML() . "</SecondaryArchetype>";
        }
        if (!empty($this->ring1)) {
            $result = $result . "<Ring1>" . $this->ring1->asXML() . "</Ring1>";
        }
        if (!empty($this->ring2)) {
            $result = $result . "<Ring2>" . $this->ring2->asXML() . "</Ring2>";
        }
        if (!empty($this->ring3)) {
            $result = $result . "<Ring3>" . $this->ring3->asXML() . "</Ring3>";
        }
        if (!empty($this->ring4)) {
            $result = $result . "<Ring4>" . $this->ring4->asXML() . "</Ring4>";
        }
        $result = $result . "</Build>";
        return $result;
    }

}