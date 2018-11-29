<?php
$json = file_get_contents("php://input");
$obj = json_decode($json, TRUE);


$username = $obj["username"];
$password = $obj["password"];

$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con,"data");
mysqli_query($con, "SET NAMES 'utf8'");

$qr = "SELECT * FROM dangky WHERE username = '$username' AND password = '$password'";
$result = mysqli_query($con, $qr);

$row = mysqli_fetch_array($result);

if($row['username'] != ""){
    if($row['username'] == $username && $row['password'] == $password){
        echo json_encode("true");
    }else{
        echo json_encode("false");
    }
}else{
    echo json_encode("@");
}

?>