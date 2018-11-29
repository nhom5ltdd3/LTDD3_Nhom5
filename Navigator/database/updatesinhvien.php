<?php
$json = file_get_contents("php://input");
$obj = json_decode($json, TRUE);

$id       = $obj["id"];
$Name    = $obj["Name"];
$Lop    = $obj["Lop"];

$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con,"data");
mysqli_query($con, "SET NAMES 'utf8'");

$sql = "UPDATE sanpham SET Name =  '$Name', Lop = '$Lop' WHERE id =  $id";
mysqli_query($con, $sql);
echo "Sửa thành công";
?>