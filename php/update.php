<?php
include_once("db.php");

$params = [
    ":id" => $id,
    ":nombre" => $nombre,
    ":descripcion" => $descripcion
];

$sql = "UPDATE tasks SET nombre = :nombre, descripcion = :descripcion WHERE id = :id";

$conexion = new Conexion();
$conectar = $conexion->conectar();

$pdo = $conectar->prepare($sql);
$pdo->execute($params);

?>