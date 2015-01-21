<?php
//header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *"); 
include("classes/config.class.php");
include("classes/noobMobileException.class.php");

$config = new Config;


# Connect to the database
try {
    
    $mysqlDbObj = new mysqli($config->host, $config->user, $config->password, $config->db);
    
    if ($mysqlDbObj->connect_error) {
        throw new NoobMobileException("Error connecting to DB ".$mysqlDbObj->connect_error,$mysqlDbObj->connect_errno);
    }
    
} catch (NoobMobileException $e){
    echo json_encode($e->getErrorArray());
    exit;
}


$arrayPersonnage = array();

if(isset($_GET["id_Personnage"])) {
    

    $req = "SELECT id_Personnage , nom_Personnage ,description_Personnage,faction_Personnage FROM personnage WHERE id_Personnage=".$_GET["id_Personnage"]." AND statut_Personnage = 0";
    
    $res = null;
    # Perform the query
    try{
        $res = $mysqlDbObj->query($req);
        
        if (!$res) {
            throw new NoobMobileException("Error during query execution ".$req." ".$mysqlDbObj->error,$mysqlDbObj->errno);
        }
            
    } catch (NoobMobileException $e){
        echo json_encode($e->getErrorArray());
        exit;
    }
    
    # Collect the results
    while($obj = mysqli_fetch_object($res)) {
        
        //        $Personnage = new Personnage;
        //        $Personnage->id = $obj->id_Personnage;
        //        $Personnage->nom = $obj->nom_Personnage;
        //        $Personnage->description = addslashes($obj->description_Personnage);
        
        $obj->description_Personnage =  utf8_encode($obj->description_Personnage);
        $obj->nom_Personnage =  utf8_encode($obj->nom_Personnage);
        
        array_push($arrayPersonnage,$obj);
        
        
    }
    
}

# JSON-encode and return the response
echo json_encode($arrayPersonnage);  

?>