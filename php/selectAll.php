<?php
include_once("db.php");

$val = $_GET["filter"];

$conexion = new Conexion();
$conectar = $conexion->conectar();


if($_GET["filter"] != "") {
    $params = [":nombre" => "%".$val."%"];
    $sql = "SELECT * FROM tasks WHERE nombre LIKE :nombre";

    $pdo = $conectar->prepare($sql);
    $pdo->execute($params);
} else {
    $sql = "SELECT * FROM tasks";

    $pdo = $conectar->prepare($sql);
    $pdo->execute();

}

$result = $pdo->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($result);

?>