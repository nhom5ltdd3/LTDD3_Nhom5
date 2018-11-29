<?php
$json = file_get_contents("php://input");
$obj = json_decode($json, TRUE);

$hoten    = $obj["HOTEN"];
$username = $obj["USERNAME"];
$password = $obj["PASSWORD"];

$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con,"data");
mysqli_query($con, "SET NAMES 'utf8'");

$sql = "INSERT INTO dangky VALUES (null, '$hoten', '$username', '$password')";
mysqli_query($con, $sql);
echo "Thêm thành công";
?>