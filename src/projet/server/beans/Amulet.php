<?php
class Amulet
{
    private $name;
    private $modifiedValue;
    private $modifier;
    private $isPercentage;
    private $description;
    private $secondaryValue;
    private $secondaryModifier;
    private $isPercentageSecondary;
    public function __construct($name, $modifiedValue, $modifier, $isPercentage, $description)
    {
        $this->name = $name;
        $this->modifiedValue = $modifiedValue;
        $this->modifier = $modifier;
        $this->isPercentage = $isPercentage;
        $this->description = $description;
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

    public function getModifiedValue()
    {
        return $this->modifiedValue;
    }
    public function getModifier()
    {
        return $this->modifier;
    }
    public function isPercentage()
    {
        return $this->isPercentage;
    }
    public function getDescription()
    {
        return $this->description;
    }
    public function getSecondaryValue()
    {
        return $this->secondaryValue;
    }
    public function getSecondaryModifier()
    {
        return $this->secondaryModifier;
    }
    public function isPercentageSecondary()
    {
        return $this->isPercentageSecondary;
    }


}