<?php
$_POST = json_decode(file_get_contents('php://input'), true);

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
}

if ($_GET['action'] == 'getProduct') {
	$id = $_GET['id'];
	$sql = "SELECT * FROM products WHERE id = $id";
	$result = $conn->query($sql);
	$outLista = [];
	while($row = mysqli_fetch_assoc($result)) {
		array_push($outLista,$row);
	}
	print_r(json_encode($outLista));	
}


if (isset($_POST["addProduct"])) {
	$name = $_POST['name'];
	$price = $_POST['price'];
	$quantity = $_POST['quantity'];
	$image = $_POST['image'];
	$sql = "INSERT INTO products (id, name, quantity, price, image) VALUES (NULL, '$name', $quantity, '$price', '/$image')";
	$result = $conn->query($sql);
	echo $result;
}

if ($_GET['action'] == 'getOrderProduct') {

	$query = $_GET['query'];
	$sql = "SELECT * FROM products WHERE name LIKE '%$query%' ";
	$sql .= "LIMIT 0, 10";
	$result = $conn->query($sql);
	$outLista = [];
	while($row = mysqli_fetch_assoc($result)) {
		array_push($outLista,$row);
	}
	print_r(json_encode($outLista));
}

if (isset($_POST["saveOrder"])) {
	$products = $_POST['products'];
	foreach ($products as $product) {
		$sql = "UPDATE products SET quantity = '".$product['newQuantity']."' WHERE id = ". $product['id'] ."; ";
		$conn->query($sql);
	}
	echo 1;
}

if (isset($_POST["addOrder"])) {
	$userId = $_POST['userId'];
	$products = $_POST['products'];
	$date = $_POST['date'];
	$productsIds = $_POST['productsIds'];
	$type = $_POST['type'];
	$sql = "INSERT INTO orders (id, products, userId, date, productsIds, type) VALUES (NULL, '$products', '$userId', '$date', '|$productsIds|', '$type')";
	$result = $conn->query($sql);
	echo $result;
}

if ($_GET['action'] == 'getProductOrders') {

	$productId = $_GET['productId'];
	$sql = "SELECT * FROM orders WHERE productsIds LIKE '%|$productId|%'";
	$sql .= "LIMIT 0, 30";
	$result = $conn->query($sql);
	$outLista = [];
	while($row = mysqli_fetch_assoc($result)) {
		array_push($outLista,$row);
	}
	print_r(json_encode($outLista));
}

if ($_GET['action'] == 'getDayOrders') {
	$sql = "SELECT * FROM orders WHERE type = 'empty' AND date >= CURDATE()";
	$result = $conn->query($sql);
	$outLista = [];
	while($row = mysqli_fetch_assoc($result)) {
		array_push($outLista,$row);
	}
	print_r(json_encode($outLista));	
}

if ($_GET['action'] == 'getWeekOrders') {
	$sql = "SELECT * FROM orders WHERE type = 'empty' AND YEARWEEK(date, 1) = YEARWEEK(CURRENT_DATE(), 1) AND YEAR(date) = YEAR(CURRENT_DATE())";
	$result = $conn->query($sql);
	$outLista = [];
	while($row = mysqli_fetch_assoc($result)) {
		array_push($outLista,$row);
	}
	print_r(json_encode($outLista));	
}

if ($_GET['action'] == 'getMonthOrders') {
	$sql = "SELECT * FROM orders WHERE type = 'empty' AND MONTH(date) = MONTH(CURRENT_DATE()) AND YEAR(date) = YEAR(CURRENT_DATE())";
	$result = $conn->query($sql);
	$outLista = [];
	while($row = mysqli_fetch_assoc($result)) {
		array_push($outLista,$row);
	}
	print_r(json_encode($outLista));	
}

if ($_GET['action'] == 'getProductsState') {

	$query = $_GET['query'];
	$sql = "SELECT * FROM products ";
	$result = $conn->query($sql);
	$outLista = [];
	while($row = mysqli_fetch_assoc($result)) {
		array_push($outLista,$row);
	}
	print_r(json_encode($outLista));
}


if ($_GET['action'] == 'getConfig') {
	
	$sql = "SELECT * FROM config ";
	$result = $conn->query($sql);
	$outLista = [];
	while($row = mysqli_fetch_assoc($result)) {
		array_push($outLista,$row);
	}
	print_r(json_encode($outLista));
}

if ($_GET['action'] == 'getUsers') {
	
	$sql = "SELECT id, username, isAdmin FROM users";
	$result = $conn->query($sql);
	$outLista = [];
	while($row = mysqli_fetch_assoc($result)) {
		array_push($outLista,$row);
	}
	print_r(json_encode($outLista));
}

if (isset($_POST["addUser"])) {
	$username = $_POST['username'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	$isAdmin = $_POST['isAdmin'];
	$sql = "INSERT INTO users (id, username, email, password, isAdmin) VALUES (NULL, '$username', '$email', '$password', $isAdmin)";
	$result = $conn->query($sql);
	echo $result;
}

if (isset($_POST["removeUser"])) {
	$userId = $_POST['userId'];
	$sql = "DELETE FROM users WHERE id = $userId";
	$result = $conn->query($sql);
	echo $result;
}

if (isset($_POST["saveConfig"])) {
	$productAlert = $_POST['productAlert'];
	$sql = "UPDATE config SET productAlert = $productAlert";
	$result = $conn->query($sql);
	echo $result;
}

if (isset($_POST["removeProduct"])) {
	$productId = $_POST['productId'];
	$sql = "DELETE FROM products WHERE id = $productId";
	$result = $conn->query($sql);
	echo $result;
}

?>