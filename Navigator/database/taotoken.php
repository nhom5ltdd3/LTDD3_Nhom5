<?php
$json = file_get_contents("php://input");
$obj = json_decode($json, TRUE);

$USERNAME = $obj["USERNAME"];
$PASSWORD = md5($obj["PASSWORD"]);

$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con,"data");
mysqli_query($con, "SET NAMES 'utf8'");
require("jwt.php");

$qr = " SELECT * FROM dangky
        WHERE username='$USERNAME '
        AND   password = '$PASSWORD'
      ";

 $user = mysqli_query($con, $qr);

 if(mysqli_num_rows($user)==1){// có d? li?u tr? ra login thành công
    $u = mysqli_fetch_array($user);
    $token = array();
    $token["id"] = $u["id"];
    $token["hoten"] = $u["hoten"];
    $token["username"] = $u["username"];

    $jsonwebtoken = JWT::encode($token, "nguyenvannam");
    echo JsonHelper::getJson("token", $jsonwebtoken);
 }else{
     //login th?t b?i
     echo "{'token':'ERROR'}";
 }

?>