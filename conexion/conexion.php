<?php

class Conectar extends mysqli{



    public function __construct($host, $user, $password, $bd) {
        parent::__construct($host, $user, $password, $bd);

        if (mysqli_connect_error()) {
            die('Error de Conexión (' . mysqli_connect_errno() . ') '
                    . mysqli_connect_error());
        }
    }
}

 $user="root";
 $host="localhost";
 $password="12345678";
 $bd="sgc";

$bd = new Conectar($host, $user, $password, $bd);

echo 'Éxito... ' . $bd->host_info . "\n";

 $bd->close();

