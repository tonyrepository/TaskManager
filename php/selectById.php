<?php
include_once("db.php");

$val = $_GET["id"];

$conexion = new Conexion();
$conectar = $conexion->conectar();

$params = [
    ":id" => $val
];

$sql = "SELECT * FROM tasks WHERE id = :id";

$pdo = $conectar->prepare($sql);
$pdo->execute($params);

$result = $pdo->fetch(PDO::FETCH_ASSOC);

echo json_encode($result);

?>