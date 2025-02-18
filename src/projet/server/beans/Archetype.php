<?php
class Archetype
{
    private $name;

    public function __construct($name)
    {
        $this->name = $name;
    }

    public function getName()
    {
        return $this->name;
    }
    public function asXML()
    {
        $result = "<Archetype>";
        $result = $result . "<name>" . $this->name . "</name>";
        $result = $result . "</Archetype>";
        return $result;
    }

}