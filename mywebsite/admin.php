<?php 
include("./config/session.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Admin page</h1>
    <?php include("./templates/logout.php");?>
    <?php if(isset($_SESSION["userInfo"])) echo $_SESSION["userInfo"]["email"]?>
</body>
</html>