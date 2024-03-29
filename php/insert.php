<?php
include_once("db.php");
include_once("checkExist.php");

$nombre = $_GET["nomTask"];
$descripcion = $_GET["descTask"];

if (checkExist($nombre, $descripcion) != 0) {
    echo "Tarea ya existente";
    return;
}

$params = [
    ":nombre" => $nombre,
    ":descripcion" =>$descripcion
];

$sql = "INSERT INTO tasks VALUES (default, :nombre, :descripcion)";

$conexion = new Conexion();
$conectar = $conexion->conectar();

$pdo = $conectar->prepare($sql);
$pdo->execute($params);

return $pdo->rowCount();

?>