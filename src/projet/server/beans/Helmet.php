<?php
/**
 * Class Helmet
 *
 * Beans for Helmet 
 *
 * @version 2.0
 * @author Bergmann Leon
 * @project Remnant 2 Build Planner
 */
class Helmet
{
    private $name;
    private $armor;
    private $weight;

    /**
     * Constructor of the class Helmet
     *
     * @param string $name. Name of the Helmet
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
     * Getter for the name of the Helmet
     *
     * @return string name of the Helmet
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Getter for the Armor of the Helmet
     *
     * @return string Armor of the Helmet
     */
    public function getArmor()
    {
        return $this->armor;
    }

    /**
     * Getter for the Weight of the Helmet
     *
     * @return string Weight of the Helmet
     */
    public function getWeight()
    {
        return $this->weight;
    }


     /**
     * method that returns the Helmet in an XML format
     *
     * @return string Helmet as XML
     */
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