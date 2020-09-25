<?php

class Conectar{
    private $user="root";
    private $host="localhost";
    private $pswd="12345678";
    private $bd="sgc";
    public $cnn;

    public function __construct() {
        $this->cnn = new mysqli($this->host, $this->user, $this->pswd, $this->bd);

        if($this->cnn->connect_errno){
            echo "Fallo la conexion a MYSQL: (" .$this->cnn->connect_errno.")".$this->cnn->connect_error;
        }
        echo "Conexion Exitosa".$this->cnn->host_info."\n";
    }
}

?>