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


$arrayLieu = array();

if(isset($_GET["id_Lieu"])) {
    

    $req = "SELECT id_Lieu , nom_Lieu, nom_TypeLieu ,description_Lieu FROM lieu INNER JOIN typelieu ON lieu.TypeLieu_id_typeLieu = typelieu.id_TypeLieu WHERE id_Lieu=".$_GET["id_Lieu"]." AND statut_Lieu = 0";
    
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
        
        //        $Lieu = new Lieu;
        //        $Lieu->id = $obj->id_Lieu;
        //        $Lieu->nom = $obj->nom_Lieu;
        //        $Lieu->description = addslashes($obj->description_Lieu);
        
        $obj->description_Lieu =  utf8_encode($obj->description_Lieu);
        $obj->nom_Lieu =  utf8_encode($obj->nom_Lieu);
        
        array_push($arrayLieu,$obj);
        
        
    }
    
}

# JSON-encode and return the response
echo json_encode($arrayLieu);  

?>