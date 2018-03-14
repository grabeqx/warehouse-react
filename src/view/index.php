<?php
session_start();
require('connect.php');
if (isset($_POST['username']) and isset($_POST['password'])){
    $username = $_POST['username'];
    $password = $_POST['password'];
    $query = "SELECT * FROM `user` WHERE username='$username' and password='$password'";
    $result = mysqli_query($connection, $query) or die(mysqli_error($connection));
    $count = mysqli_num_rows($result);
if ($count == 1){
    $_SESSION['username'] = $username;
    }else{
    $fmsg = "Invalid Login Credentials.";
    }
}
if (isset($_SESSION['username'])){
    header("location: warehouse.php");
}else{
?>
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&amp;subset=latin-ext" rel="stylesheet">
    <link rel="stylesheet" href="styles/login.css">
    <title>Warehouse</title>
</head>
<body>
    <div id="login-form">
        <div class="container">
            <form class="form-signin" method="POST">
                <h2>Panel logowania</h2>
                <div>
                    <label for="inputPassword" class="sr-only">Login:</label>
                    <input type="text" name="username" class="form-control" placeholder="Username" required>
                    <label for="inputPassword" class="sr-only">Hasło:</label>
                    <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" required>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Zaloguj się</button>
                </div>
            </form>
        </div>
    </div>
</body>
</html>
<?php } ?>