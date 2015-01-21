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


$arrayStuff = array();

if(isset($_GET["id_Stuff"])) {
    

    $req = "SELECT id_Stuff , nom_Stuff ,description_Stuff FROM stuff WHERE id_Stuff=".$_GET["id_Stuff"]." AND statut_Stuff = 0";
    
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
        
        //        $Stuff = new Stuff;
        //        $Stuff->id = $obj->id_Stuff;
        //        $Stuff->nom = $obj->nom_Stuff;
        //        $Stuff->description = addslashes($obj->description_Stuff);
        
        $obj->description_Stuff =  utf8_encode($obj->description_Stuff);
        $obj->nom_Stuff =  utf8_encode($obj->nom_Stuff);
        
        array_push($arrayStuff,$obj);
        
        
    }
    
}

# JSON-encode and return the response
echo json_encode($arrayStuff);  

?>