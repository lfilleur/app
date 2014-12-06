<?php

class Config{
    
    var $host = "localhost";
    var $user = "root";
    var $password ="";
    var $db = "applinoob";
    
    public function __get($name) {
        return $$name;
    }
    

}

?>