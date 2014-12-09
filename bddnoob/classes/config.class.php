<?php

class Config{
    
    var $host = "db556191847.db.1and1.com";
    var $user = "dbo556191847";
    var $password ="tank3;nuis";
    var $db = "db556191847";
    
    public function __get($name) {
        return $$name;
    }
    

}

?>