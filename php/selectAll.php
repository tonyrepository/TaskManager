<?php
include_once("db.php");

$sql = "SELECT * FROM tasks";

$conexion = new Conexion();
$conectar = $conexion->conectar();

$pdo = $conectar->prepare($sql);
$pdo->execute();

$result = $pdo->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($result);

?>