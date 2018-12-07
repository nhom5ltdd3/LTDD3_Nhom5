<?php
	
	$con=mysqli_connect('localhost','root','');
	mysqli_select_db($con,'demo');
	mysqli_query($con,'SET NAMES utf8');

	$sql="SELECT * FROM khoahoc";
	$query=mysqli_query($con,$sql);

	$arrKhoahoc=array();

	//Tao 1 class khoa hoc de chua du lieu.

	class khoahoc
	{
		var $id;
		var $MonHoc;
		var $HocPhi;

		function khoahoc($_id,$_monhoc,$_hocphi)
		{
			$this -> id = $_id ;
			$this -> MonHoc = $_monhoc ;
			$this -> HocPhi = $_hocphi ; 
		}
	}

	while ($row=mysqli_fetch_array( $query )){
		array_push($arrKhoahoc,new khoahoc( $row["Id"], $row["MonHoc"],$row["HocPhi"]));
	}
	sleep(5);
	echo json_encode($arrKhoahoc)

?>