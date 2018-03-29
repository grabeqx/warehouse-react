<?php
header('Content-Type: text/html; charset=utf-8');

$servername = "localhost:3306";
$username = "root";
$password = "root";
$dbmane = "warehouse";

$conn = new mysqli($servername, $username, $password, $dbmane);
$conn->set_charset("utf8");

if ($_GET['action'] == 'getProducts') {

	$step = $_GET['step'];
	$limitFrom = $_GET['limitFrom'];
	$query = $_GET['query'];
	$filterStart = $_GET['filterStart'];
	$filterEnd = $_GET['filterEnd'];
	$sql = "SELECT * FROM products WHERE name LIKE '%$query%' ";
	if($filterStart !== '') {
		$sql .= "AND quantity >= $filterStart ";
	}
	if($filterEnd !== '') {
		$sql .= "AND quantity <= $filterEnd ";
	}
	$sql .= "LIMIT $limitFrom, $step";
	$result = $conn->query($sql);
	$outLista = [];
	while($row = mysqli_fetch_assoc($result)) {
		array_push($outLista,$row);
	}
	print_r(json_encode($outLista));
	// echo $sql;
	
}


?>