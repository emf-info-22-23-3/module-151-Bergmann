<?php
/**
 * Class Greaves
 *
 * Beans for greaves 
 *
 * @version 2.0
 * @author Bergmann Leon
 * @project Remnant 2 Build Planner
 */
class Greaves
{
    private $name;
    private $armor;
    private $weight;

    /**
     * Constructor of the class Greaves
     *
     * @param string $name. Name of the Greaves
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
     * Getter for the name of the Greaves
     *
     * @return string name of the Greaves
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Getter for the Armor of the Greaves
     *
     * @return string Armor of the Greaves
     */
    public function getArmor()
    {
        return $this->armor;
    }

    /**
     * Getter for the Weight of the Greaves
     *
     * @return string Weight of the Greaves
     */
    public function getWeight()
    {
        return $this->weight;
    }


    /**
     * method that returns the Greaves in an XML format
     *
     * @return string Greaves as XML
     */
    public function asXML()
    {
        $result = "<Greaves>";
        $result = $result . "<name>" . $this->name . "</name>";
        $result = $result . "<armor>" . $this->armor . "</armor>";
        $result = $result . "<weight>" . $this->weight . "</weight>";
        $result = $result . "</Greaves>";
        return $result;
    }

}