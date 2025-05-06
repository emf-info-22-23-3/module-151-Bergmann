<?php
/**
 * Class Ring
 *
 * Beans for Ring 
 *
 * @version 2.0
 * @author Bergmann Leon
 * @project Remnant 2 Build Planner
 */
class Ring
{
    private $name;
    private $modifiedValue;
    private $modifier;
    private $isPercentage;
    private $description;
    private $secondaryValue;
    private $secondaryModifier;
    private $isPercentageSecondary;

    /**
     * Constructor of the class Ring
     *
     * @param string $name. Name of the Ring
     * @param string $modifiedValue value that is modified
     * @param double $modifier ammount by which the value is modified
     * @param double $isPercentage indicates if the modifier is a percentage
     * @param string $description. description of the Ring
     */
    public function __construct($name, $modifiedValue, $modifier, $isPercentage, $description)
    {
        $this->name = $name;
        $this->modifiedValue = $modifiedValue;
        $this->modifier = $modifier;
        $this->isPercentage = $isPercentage;
        $this->description = $description;
    }

    /**
     * Setter for the secondary stats
     *
     * @param string $secondaryValue value that is modified
     * @param double $secondaryModifier ammount by which the value is modified
     * @param double $isPercentageSecondary indicates if the modifier is a percentage
     */
    public function setSecondaryStats($secondaryModifier, $secondaryValue, $isPercentageSecondary)
    {
        $this->secondaryModifier = $secondaryModifier;
        $this->secondaryValue = $secondaryValue;
        $this->isPercentage = $isPercentageSecondary;
    }

    /**
     * Getter for the name of the Ring
     *
     * @return string name of the Ring
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Getter for the modified value of the Ring
     *
     * @return string modified value
     */
    public function getModifiedValue()
    {
        return $this->modifiedValue;
    }

    /**
     * Getter for the modifier of the Ring
     *
     * @return double modifier of the Ring
     */
    public function getModifier()
    {
        return $this->modifier;
    }

    /**
     * Getter that indicates if the modifier is a percentage
     *
     * @return bool is it a percentage
     */
    public function isPercentage()
    {
        return $this->isPercentage;
    }

    /**
     * Getter for the description of the Ring
     *
     * @return string description
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Getter for the secondary value of the Ring
     *
     * @return string secondary value
     */
    public function getSecondaryValue()
    {
        return $this->secondaryValue;
    }

    /**
     * Getter for the secondary modifier of the Ring
     *
     * @return double secondary modifier of the Ring
     */
    public function getSecondaryModifier()
    {
        return $this->secondaryModifier;
    }

    /**
     * Getter that indicates if the secondary modifier is a percentage
     *
     * @return bool is it a percentage
     */
    public function isPercentageSecondary()
    {
        return $this->isPercentageSecondary;
    }

    /**
     * method that returns the Ring in an XML format
     *
     * @return string Ring as XML
     */
    public function asXML()
    {
        $result = "<Ring>";
        $result = $result . "<name>" . $this->name . "</name>";
        $result = $result . "<modifiedvalue>" . $this->modifiedValue . "</modifiedvalue>";
        $result = $result . "<modifier>" . $this->modifier . "</modifier>";
        $result = $result . "<ispercentage>" . $this->isPercentage . "</ispercentage>";
        $result = $result . "<description>" . $this->description . "</description>";
        $result = $result . "<secondaryvalue>" . $this->secondaryValue . "</secondaryvalue>";
        $result = $result . "<secondarymodifier>" . $this->secondaryModifier . "</secondarymodifier>";
        $result = $result . "<ispercentagesecondary>" . $this->isPercentageSecondary . "</ispercentagesecondary>";
        $result = $result . "</Ring>";
        return $result;
    }

}