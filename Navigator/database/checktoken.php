<?php
$token = $_GET["token"];

require("jwt.php");

$json = JWT::decode($token, "nguyenvannam", true);
echo json_encode($json);
?>
