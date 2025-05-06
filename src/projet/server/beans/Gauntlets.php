<?php
/**
 * Class Gauntlets
 *
 * Beans for Gauntlets 
 *
 * @version 2.0
 * @author Bergmann Leon
 * @project Remnant 2 Build Planner
 */
class Gauntlets
{
    private $name;
    private $armor;
    private $weight;

    /**
     * Constructor of the class Gauntlets
     *
     * @param string $name. Name of the Gauntlets
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
     * Getter for the name of the Gauntlets
     *
     * @return string name of the Gauntlets
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Getter for the Armor of the Gauntlets
     *
     * @return string Armor of the Gauntlets
     */
    public function getArmor()
    {
        return $this->armor;
    }

    /**
     * Getter for the Weight of the Gauntlets
     *
     * @return string Weight of the Gauntlets
     */
    public function getWeight()
    {
        return $this->weight;
    }


    /**
     * method that returns the Gauntlets in an XML format
     *
     * @return string Gauntlets as XML
     */
    public function asXML()
    {
        $result = "<Gauntlets>";
        $result = $result . "<name>" . $this->name . "</name>";
        $result = $result . "<armor>" . $this->armor . "</armor>";
        $result = $result . "<weight>" . $this->weight . "</weight>";
        $result = $result . "</Gauntlets>";
        return $result;
    }

}