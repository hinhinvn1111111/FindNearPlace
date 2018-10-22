<?php
	$localhost = "localhost";
	$usn = "root";
	$password = "";
	$database = "demomap";
	$conn = mysqli_connect($localhost,$usn,$password,$database);
	mysqli_set_charset($conn,'utf8');
	
	$query = "SELECT * FROM `place`";
	
	$data = mysqli_query($conn,$query);
	
	$arrLocation = array();
	
	while( $row = mysqli_fetch_assoc($data) ){
		array_push($arrLocation,new Location(
			$row['ID'],
			$row['Latitude'],
			$row['Longtitude'],
			$row['Title'],
			$row['Decription'],
			$row['Image']
			));	
	}
	echo json_encode($arrLocation);
	
	class Location{
		function Location($ID,$Latitude,$Longtitude,$Title,$Decription,$Image){
			$this->ID=$ID;
			$this->Latitude=$Latitude;
			$this->Longtitude=$Longtitude;
			$this->Title=$Title;
			$this->Decription=$Decription;
			$this->Image=$Image;
		}
	}
?>