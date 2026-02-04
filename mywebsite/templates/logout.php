<?php

if (isset($_POST["logout"])){
    unset($_SESSION["userInfo"]);
    unset($_SESSION["login_error"]);
    header("Location: ./login.php");
}

?>

<form method="post">
    <button type="submit" name="logout">Logout</button>
</form>