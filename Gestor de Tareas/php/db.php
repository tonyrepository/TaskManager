<?php
    class Conexion {
        private $conn = NULL;
        public function __construct() {
        
        }
    
        public function conectar() {
            try {
                $this ->conn = new PDO("mysql:host=localhost;dbname=tasks","root","");
            } catch (PDOException $e){
                echo "Error ".$e->getMessage();
            }
            return $this->conn;
        }
    }
?>