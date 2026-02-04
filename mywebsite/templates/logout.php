<?php

if (isset($_POST["logout"])){
    unset($_SESSION["userInfo"]);
    header("Location: ./login.php");
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <form method="post">
        <button type="submit" name="logout">Logout</button>
    </form>

</body>
</html>