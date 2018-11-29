<?php
$json = file_get_contents("php://input");
$obj = json_decode($json, TRUE);

$id    = $obj["id"];

$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con,"data");
mysqli_query($con, "SET NAMES 'utf8'");

$sql = "DELETE FROM sanpham WHERE id =  $id" ;

mysqli_query($con, $sql);
echo "xóa thành công";
?>