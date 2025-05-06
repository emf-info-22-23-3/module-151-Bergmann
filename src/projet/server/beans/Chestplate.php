<?php
/**
 * Class Chestplate
 *
 * Beans for Chestplates 
 *
 * @version 2.0
 * @author Bergmann Leon
 * @project Remnant 2 Build Planner
 */
class Chestplate
{
    private $name;
    private $armor;
    private $weight;

    /**
     * Constructor of the class Chestplate
     *
     * @param string $name. Name of the Chestplate
     * @param int $armor the provided Armor value
     * @param double $weight the weight
     */
    public function __construct($name, $armor, $weight)
    {
        $this->name = $name;
        $this->armor = $armor;
        $this->weight = $weight;
    }

    /**
     * Getter for the name of the Chestplate
     *
     * @return string name of the Chestplate
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Getter for the Armor of the Chestplate
     *
     * @return string Armor of the Chestplate
     */
    public function getArmor()
    {
        return $this->armor;
    }

    /**
     * Getter for the Weight of the chestplate
     *
     * @return string Weight of the chestplate
     */
    public function getWeight()
    {
        return $this->weight;
    }

    /**
     * method that returns the Chestplate in an XML format
     *
     * @return string chestplate as XML
     */
    public function asXML()
    {
        $result = "<Chestplate>";
        $result = $result . "<name>" . $this->name . "</name>";
        $result = $result . "<armor>" . $this->armor . "</armor>";
        $result = $result . "<weight>" . $this->weight . "</weight>";
        $result = $result . "</Chestplate>";
        return $result;
    }

}