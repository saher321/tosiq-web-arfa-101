<?php

session_start();

if (isset($_POST["submit_login"])){
    $e = $_POST["email"];
    $p = $_POST["pswd"];
    $r = $_POST["role"];

    // dummy login credentials
    $admin_email = "admin@gmail.com";
    $admin_pass  = "admin@123";
    $admin_role  = "admin";

    $user_email = "user@gmail.com";
    $user_pass  = "user@123";
    $user_role  = "user";

    if ($e == $admin_email && $p == $admin_pass && $r == $admin_role) {
        $_SESSION["userInfo"] = [
            "id" => 1,
            "isAdmin" => true,
            "isAuthenticated" => true,
            "email" => $e,
            "password" => $p,
            "role" => $r
        ];
        header("Location: ./admin.php");

    } else if ($e == $user_email && $p == $user_pass && $r == $user_role) {
            $_SESSION["userInfo"] = [
                "id" => 2,
                "isAdmin" => false,
                "isAuthenticated" => true,
                "email" => $e,
                "password" => $p,
                "role" => $r
            ];
        header("Location: ./user.php");

    } else {
        $_SESSION["login_error"] = "Crendentials don't matched!";
        header("Location: ./login.php");
    }
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
        <table border="1" cellspacing="0" cellpadding="10">
            <tr>
                <td colspan="2" align="center">
                    <h3>Login to continue</h3>
                    <?php if(isset($_SESSION["login_error"])) echo $_SESSION["login_error"]?>
                </td>
            </tr>
            <tr>
                <td>Email</td>
                <td>
                    <input type="email" name="email" placeholder="Enter your email">
                </td>
            </tr>    
            <tr>
                <td>Password</td>
                <td><input type="password" name="pswd" placeholder="Enter your password"></td>
            </tr>   
            <tr>
                <td>Role</td>
                <td>
                    <select name="role">
                        <option disabled selected>Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </td>
            </tr>   
            <tr>
                <td></td>
                <td>
                    <button type="submit" name="submit_login">Login</button>
                </td>
            </tr>   
        </table>
    </form>
    
</body>
</html>