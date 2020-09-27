<?php
$user = $_POST['usuario'];
$tipo = $_POST['tipo'];
include 'conexion/conectar.php';   
function buscar($consulta){
    $bd = new Conectar();
    $resultado = $bd->cnn->query($consulta) or die($bd->cnn->error);
    if($resultado->num_rows>0){
        $qry=$resultado->fetch_all(MYSQLI_ASSOC);
        echo json_encode($qry);        
    }else{        
        $msj="error";
        echo json_encode($msj);
    }
}
 if($tipo == 'Individual'){
     $consulta="SELECT Supervisor FROM usuario WHERE IdUsuario='".$user."'";
    buscar($consulta);
}
if($tipo == 'partner'){
    $consulta="SELECT Supervisor FROM usuario WHERE Supervisor!='' GROUP BY Supervisor";
    buscar($consulta);
}
if($tipo == 'buscaUser'){
    $supervisor=$_POST['superv'];
    $consulta="SELECT IdUsuario FROM usuario WHERE Supervisor='$supervisor' GROUP BY IdUsuario";
    buscar($consulta);
}