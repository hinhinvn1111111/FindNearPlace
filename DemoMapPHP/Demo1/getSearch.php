<?php
	$localhost = "localhost";
	$usn = "root";
	$password = "";
	$database = "demomap";
	$conn = mysqli_connect($localhost,$usn,$password,$database);
	mysqli_set_charset($conn,'utf8');
	
	$json = file_get_contents('php://input');

	$obj = json_decode($json,true);

	$name = $obj['name'];
	
	echo $name;
?>