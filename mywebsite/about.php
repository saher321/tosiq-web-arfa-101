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

    <?php
        if (empty($_SESSION["username"])) {
            echo "User name not provided yet";
            return;
        }

        echo $_SESSION["username"] . $_SESSION["userage"];
    ?>

</body>
</html>