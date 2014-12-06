<?php
//header('Content-Type: application/json; charset=utf-8');

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


$arrayMonstre = array();

if(isset($_GET["id_Bete"])) {
    

    $req = "SELECT id_Bete , nom_Bete, nom_TypeBete ,description_Bete, urlImage_Bete FROM bete INNER JOIN typebete ON bete.TypeBete_id_typeBete = typebete.id_TypeBete WHERE id_bete=".$_GET["id_Bete"]." AND statut_Bete = 0";
    
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
        
        //        $monstre = new Monstre;
        //        $monstre->id = $obj->id_Bete;
        //        $monstre->nom = $obj->nom_Bete;
        //        $monstre->description = addslashes($obj->description_Bete);
        
        $obj->description_Bete =  utf8_encode($obj->description_Bete);
        $obj->nom_Bete =  utf8_encode($obj->nom_Bete);
        
        array_push($arrayMonstre,$obj);
        
        
    }
    
}

# JSON-encode and return the response
echo json_encode($arrayMonstre);  

?>