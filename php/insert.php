<?php
include_once("db.php");



function checkExist($nombre, $descripcion) {
    $params = [
        ":nombre" => 
    ];
    
    $sql = "SELECT * FROM tasks WHERE id = :id";

    $conexion = new Conexion();
    $conectar = $conexion->conectar();

    $pdo = $conectar->prepare($sql);
    $pdo->execute($params);

    return $pdo->rowCount();
}

function insert() {
    if (checkExist(1) > 0) {
        echo "Tarea ya existente";
        return;
    }


}
?>