<?php
include_once("db.php");

$id = $_GET["id"];
$nomTask = $_GET["nomTask"];
$descTask = $_GET["descTask"];

$params = [
    ":id" => $id,
    ":nomTask" => $nomTask,
    ":descTask" => $descTask
];

$conexion = new Conexion();
$conectar = $conexion->conectar();

$sql = "UPDATE tasks SET nombre = :nomTask, descripcion = :descTask WHERE id = :id";

$pdo = $conectar->prepare($sql);
$pdo->execute($params);

?>