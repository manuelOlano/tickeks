<?php
// include 'conexion/conectar.php';

$user = $_POST['user'];
echo json_encode($user.'este es el dato'.$_GET['user']);


// funcion para obtener el supervisor del asesor que esta en la sesion

// function supervisor($dato){
//     $bd = new Conectar();
//     $resultado = $bd->cnn->query("SELECT Supervisor FROM usuario WHERE IdUsuario='".$dato."'") or die($bd->cnn->error);
//     if($resultado->num_rows>0){
//         $qry=$resultado->fetch_all(MYSQLI_ASSOC);
//         //    foreach ($qry as $value)
//         //  echo $value['empresa']."<br>";
//         return json_encode($qry);
        
//     }else{
//         // return false;
//         $msj="error";
//         return $msj;
//     }



// }

// $valor=supervisor($x);
// echo $valor;



        
    



// if($resultad=$bd->buscar())
//    foreach ($resultad as $value)
//       echo $value['idempresa']."<br>";
// else
//     echo  "No hay registros";

?>