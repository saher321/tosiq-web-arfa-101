<?php
session_start();
error_reporting(~E_WARNING);

if (isset($_SESSION["userInfo"]["isAuthenticated"]) != true) {
    header("Location: ./login.php");
}
?>