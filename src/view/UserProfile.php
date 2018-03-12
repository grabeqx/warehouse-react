<html>
<title>userProfile.php</title>
<body>
<?php
    session_start();
    $username = $_SESSION['username'];
?>

<!-- Content -->
<div style="text-align: right"><a href="Logout.php">Logout</a></div>

<?php
if(!isset($_SESSION['username'])) {
    header("location:index.php");
}
?>
</body>
</html>