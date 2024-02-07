<?php
include_once("db.php");

$id = $_GET["id"];
$nomTask = $_GET["nomTask"];
$descTask = $_GET["descTask"];

$params = [
    ":id" => $id
    
];

$sql = "SELECT * FROM tasks where id = :id";

$conexion = new Conexion();
$conectar = $conexion->conectar();

$pdo = $conectar->prepare($sql);
$pdo->execute($params);

$result = $pdo->fetch(PDO::FETCH_ASSOC);
echo json_encode($result);


$params = [
    ":id" => $id,
    ":nombre" => $nombre,
    ":descripcion" => $descripcion
];

$sql = "UPDATE tasks SET nombre = :nombre, descripcion = :descripcion WHERE id = :id";

$pdo = $conectar->prepare($sql);
$pdo->execute($params);

?>