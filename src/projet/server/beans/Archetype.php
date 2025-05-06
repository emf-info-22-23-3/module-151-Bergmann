<?php
/**
 * Class Archetype
 *
 * Beans for Archetypes 
 *
 * @version 2.0
 * @author Bergmann Leon
 * @project Remnant 2 Build Planner
 */
class Archetype
{
    private $name;

    /**
     * Constructor of the class Archetype
     *
     * @param string $name. name of the Archetype
     * 
     */
    public function __construct($name)
    {
        $this->name = $name;
    }

    /**
     * Getter for the name of the Archetype
     *
     * @return string name of the Archetype
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * method that returns the Archetype in an XML format
     *
     * @return string Archetype as XML
     */
    public function asXML()
    {
        $result = "<Archetype>";
        $result = $result . "<name>" . $this->name . "</name>";
        $result = $result . "</Archetype>";
        return $result;
    }

}