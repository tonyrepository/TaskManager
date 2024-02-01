<?php
include_once("db.php");

$sql = "SELECT * FROM tasks";

$conexion = new Conexion();
$conectar = $conexion->conectar();

$pdo = $conectar->prepare($sql);
$pdo->execute();

$result = $pdo->fetch(PDO::FETCH_ASSOC);

echo "<pre>";
print_r($result);

?>