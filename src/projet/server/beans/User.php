<?php

/**
 * Class User
 *
 * Beans for User 
 *
 * @version 2.0
 * @author Bergmann Leon
 * @project Remnant 2 Build Planner
 */
class User
{
    private $name;
    private $password;

    /**
     * Constructor of the class User
     *
     * @param string $name. Name of the User
     * @param string $password. password of the user
     */
    public function __construct($name, $password)
    {
        $this->name = $name;
        $this->password = $password;
    }

    /**
     * Getter for the name of the User
     *
     * @return string name of the User
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Getter for the Password of the User
     *
     * @return string password of the User
     */
    public function getPassword()
    {
        return $this->password;
    }

}