<?php
class Helmet
{
    private $name;
    private $armor;
    private $weight;
    public function __construct($name, $armor, $weight)
    {
        $this->name = $name;
        $this->armor = $armor;
        $this->weight = $weight;
    }

    public function setSecondaryStats($secondaryModifier, $secondaryValue, $isPercentageSecondary)
    {
        $this->secondaryModifier = $secondaryModifier;
        $this->secondaryValue = $secondaryValue;
        $this->isPercentage = $isPercentageSecondary;
    }

    public function getName()
    {
        return $this->name;
    }
    public function getArmor()
    {
        return $this->armor;
    }

    public function getWeight()
    {
        return $this->weight;
    }


    public function asXML()
    {
        $result = "<Helmet>";
        $result = $result . "<name>" . $this->name . "</name>";
        $result = $result . "<armor>" . $this->armor . "</armor>";
        $result = $result . "<weight>" . $this->weight . "</weight>";
        $result = $result . "</Helmet>";
        return $result;
    }

}