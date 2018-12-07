<?php

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