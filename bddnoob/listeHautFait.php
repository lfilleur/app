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

$arrayHautFait = array();

$req = "SELECT id_HautFait , nom_HautFait, description_HautFait FROM hautfait WHERE statut_HautFait = 1";

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
    
    $obj->nom_HautFait =  utf8_encode($obj->nom_HautFait);
    array_push($arrayHautFait,$obj);
}

# JSON-encode and return the response
echo json_encode($arrayHautFait);  

?>