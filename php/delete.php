<?php
include_once("db.php");

$params = [
    ":id" => $id,
];

$sql = "DELETE FROM tasks WHERE id = :id";

$conexion = new Conexion();
$conectar = $conexion->conectar();

$pdo = $conectar->prepare($sql);
$pdo->execute($params);

?>