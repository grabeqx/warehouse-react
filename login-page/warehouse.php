<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&amp;subset=latin-ext" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="./dist/style.css">
        <title>Document</title>
    </head>
    <body>
    <?php
        session_start();
        $username = $_SESSION['username'];
    ?>

    <!-- Content -->
    <!-- <div style="text-align: right"><a href="logout.php">Logout</a></div> -->
    <div id="root">

    </div>


    <?php
    if(!isset($_SESSION['username'])) {
        header("location:index.php");
    }
    ?>
        <script src="./dist/vendor.js" type="text/javascript"></script>
        <script src="./dist/main.js" type="text/javascript"></script>
    </body>
</html>