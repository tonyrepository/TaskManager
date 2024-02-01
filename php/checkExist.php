<?php
function checkExist($nombre, $descripcion) {
    $params = [
        ":nombre" => $nombre,
        ":descripcion" =>$descripcion
    ];
    
    $sql = "SELECT * FROM tasks WHERE nombre = :nombre AND descripcion = :descripcion";

    $conexion = new Conexion();
    $conectar = $conexion->conectar();

    $pdo = $conectar->prepare($sql);
    $pdo->execute($params);

    return $pdo->rowCount();
}
?>