<?php
$json = file_get_contents("php://input");
$obj = json_decode($json, TRUE);

$HOTEN    = $obj["HOTEN"];
$ANH      = $obj["ANH"];
$LOP      = $obj["LOP"];

$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con,"data");
mysqli_query($con, "SET NAMES 'utf8'");

$sql = "INSERT INTO sanpham VALUES (null, '$HOTEN', '$ANH', '$LOP')";
mysqli_query($con, $sql);
echo "Thêm thành công";
?>