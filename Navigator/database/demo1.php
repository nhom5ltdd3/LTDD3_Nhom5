<?php
require "db.php";

$qr = "SELECT * FROM sanpham";

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