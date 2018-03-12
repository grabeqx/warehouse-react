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
    header("location: UserProfile.php");
}else{
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Warehouse</title>
</head>
<body>
    <div class="container">
        <form class="form-signin" method="POST">
            <?php if(isset($fmsg)){ ?><div class="alert alert-danger" role="alert"> <?php echo $fmsg; ?> </div><?php } ?>
            <h2 class="form-signin-heading">Logowanie</h2>
            <div class="input-group">
                <input type="text" name="username" class="form-control" placeholder="Username" required>
            </div>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" required>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        </form>
    </div>
</body>
</html>
<?php } ?>