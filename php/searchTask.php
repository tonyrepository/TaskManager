<?php
include_once("db.php");

$params = [
    ":id" => 1,
];

$sql = "SELECT * FROM tasks WHERE id = :id";

$conexion = new Conexion();
$conectar = $conexion->conectar();

$pdo = $conectar->prepare($sql);
$pdo->execute($params);

$result = $pdo->fetch(PDO::FETCH_ASSOC);

echo "<pre>";
print_r($result);

?>