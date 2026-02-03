<?php 
include("./config/session.php");

if (!empty($_GET["username"])) {
    $age = 45;
    $_SESSION["username"] = $_GET["username"];
    $_SESSION["userage"] = $age;
    header("Location: ./about.php");

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

    <?php include("./templates/navbar.php") ?>

    <h2>Session form</h2>

    <form method="get">
        <input type="text" name="username" placeholder="Enter your name">

        <button type="submit">Submit</button>
    </form>

    <?php include("./templates/footer.php") ?>

</body>
</html>