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
    <h1>User page</h1>
    <?php include("./templates/logout.php");?>
    <?php 
        if(isset($_SESSION["userInfo"])) 
        echo $_SESSION["userInfo"]["id"] . "<br />";
        echo $_SESSION["userInfo"]["email"] . "<br />";
        echo $_SESSION["userInfo"]["password"] . "<br />";
        echo $_SESSION["userInfo"]["isAdmin"] . "<br />";
        echo $_SESSION["userInfo"]["role"] . "<br />";
    ?>
</body>
</html>