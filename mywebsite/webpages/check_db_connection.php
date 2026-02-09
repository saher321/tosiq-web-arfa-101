<?php
include("../config/db.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>
        <?php
        if(isset($_SESSION["db_info"]) && 
            $_SESSION["db_info"]["status"] == true
        ) {
            echo $_SESSION["db_info"]["message"];
        } else {
            echo $_SESSION["db_info"]["message"];
        }
        ?>
    </h1>
</body>
</html>