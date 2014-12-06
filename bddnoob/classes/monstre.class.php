<?php

class Monstre{
    
    var $id ="";
    var $nom="" ;
    var $description = "";
    
    
    
    public function __get($name) {
        return $$name;
    }
    

}
?>