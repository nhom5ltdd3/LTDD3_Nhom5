<?php
	
	/*$con=mysqli_connect('localhost','root','');
	mysqli_select_db($con,'demo');
	mysqli_query($con,'SET NAMES utf8');

	$data=json_decode(file_get_contents('php://input'),true);
	$id="3"
	$MonHoc="Lap Trinh React Native";
	$HocPhi=6666666;

	$sql="INSERT INTO `khoahoc`(`Id`, `MonHoc`, `HocPhi`) VALUES ($id,$MonHoc,$HocPhi)";
	$query=mysqli_query($con,$sql);*/

	$json = file_get_contents("php://input");
	$obj = json_decode($json, TRUE);

	
	$monhoc = $obj["MonHoc"];
	$hocphi = $obj["HocPhi"];

	$con = mysqli_connect("localhost", "root", "");
	mysqli_select_db($con,"demo");
	mysqli_query($con, "SET NAMES 'utf8'");

	$sql = "INSERT INTO khoahoc VALUES (null, '$monhoc', '$hocphi')";
	mysqli_query($con, $sql);
	echo "Thêm thành công";
?>