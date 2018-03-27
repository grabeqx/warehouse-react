<?php
header('Content-Type: text/html; charset=utf-8');

$servername = "localhost:3306";
$username = "root";
$password = "root";
$dbmane = "warehouse";

$conn = new mysqli($servername, $username, $password, $dbmane);
$conn->set_charset("utf8");

if ($_GET['action'] == 'getProducts') {

    $sql2 = "SELECT * FROM products";
	$result = $conn->query($sql2);
	$outLista = [];
	while($row = mysqli_fetch_assoc($result)) {
		array_push($outLista,$row);
	}
	print_r(json_encode($outLista));
}


?>