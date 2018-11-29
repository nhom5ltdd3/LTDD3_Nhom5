<?php
require "db.php";

$trang = $_GET["trang"];
settype($trang, "int");
$sotin1trang = 5;
$from = ($trang - 1) * $sotin1trang;

$qr = "SELECT * FROM sanpham LIMIT $from, $sotin1trang";

$ds = mysqli_query($con, $qr);

$mang = array();

while($row = mysqli_fetch_array($ds)){
    array_push($mang, new sanpham(
        $row["id"],
        $row["Name"],
        $row["Hinh"],
        $row["Lop"]
    ));
}
sleep(5);
echo json_encode($mang);
?>