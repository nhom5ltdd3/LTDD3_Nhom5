<?php
$json = file_get_contents("php://input");
$obj = json_decode($json, TRUE);

$id    = $obj["id"];
$password = $obj["password"];

$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con,"data");
mysqli_query($con, "SET NAMES 'utf8'");

$sql = "UPDATE dangky SET password =  $password WHERE id =  $id";
$result = mysqli_query($con, $sql);
?>