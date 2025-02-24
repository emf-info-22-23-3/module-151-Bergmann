<?php
include_once(realpath(__DIR__ . '/../beans/Amulet.php'));
include_once(realpath(__DIR__ . '/../beans/Ring.php'));
include_once(realpath(__DIR__ . '/../beans/Helmet.php'));
include_once(realpath(__DIR__ . '/../beans/Chestplate.php'));
include_once(realpath(__DIR__ . '/../beans/Greaves.php'));
include_once(realpath(__DIR__ . '/../beans/Gauntlets.php'));
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

    public function getName()
    {
        return $this->name;
    }
    public function setAmulet($amulet)
    {
        if ($amulet instanceof Amulet) {
            $this->amulet = $amulet;
        }
    }
    public function setHelmet($helmet)
    {
        if ($helmet instanceof Helmet) {
            $this->helmet = $helmet;
        }
    }
    public function setChestplate($chestplate)
    {
        if ($chestplate instanceof Chestplate) {
            $this->chestplate = $chestplate;
        }
    }
    public function setGreaves($greaves)
    {
        if ($greaves instanceof Greaves) {
            $this->greaves = $greaves;
        }
    }
    public function setGaunlets($gauntlets)
    {
        if ($gauntlets instanceof Gaunlets) {
            $this->gauntlets = $gauntlets;
        }
    }
    public function setPrimaryArchetype($primaryArchetype)
    {
        if ($primaryArchetype instanceof Archetype) {
            $this->primaryArchetype = $primaryArchetype;
        }
    }
    public function setSecondaryArchetype($secondaryArchetype)
    {
        if ($secondaryArchetype instanceof Archetype) {
            $this->secondaryArchetype = $secondaryArchetype;
        }
    }
    public function setRing1($ring1)
    {
        if ($ring1 instanceof Ring) {
            $this->ring1 = $ring1;
        }
    }
    public function setRing2($ring2)
    {
        if ($ring2 instanceof Ring) {
            $this->ring2 = $ring2;
        }
    }
    public function setRing3($ring3)
    {
        if ($ring3 instanceof Ring) {
            $this->ring3 = $ring3;
        }
    }
    public function setRing4($ring4)
    {
        if ($ring4 instanceof Ring) {
            $this->ring4 = $ring4;
        }
    }

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
            $result = $result . "<PrimaryArchetype>" . $this->primaryArchetype->asXML() . "</PrimaryArchetype";
        }
        if (!empty($this->secondaryArchetype)) {
            $result = $result . "<SecondaryArchetype>" . $this->secondaryArchetype->asXML() . "</SecondaryArchetype";
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