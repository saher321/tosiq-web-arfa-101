<?php
include("../config/db.php");

if(isset($_POST["creat_staff"])) {
    $n      = $_POST["staff_name"];
    $e      = $_POST["staff_email"];
    $c      = $_POST["staff_contact"];
    $dn     = $_POST["staff_designation"]; // designation
    $dpt    = $_POST["staff_dept"]; // department

    $query = "insert into staffs (name, email, contact, designation, department) values ('$n', '$e', $c, '$dn', '$dpt')";

    $response = mysqli_query($connection, $query);

    if ($response) {
        $_SESSION["staff_info"] = [
            "status" => true,
            "message"=> "Data added successfully"
        ];
        header("Location: ./staff_create.php");
    } else {
        $_SESSION["staff_info"] = [
            "status" => false,
            "message"=> "ERR: Failed to add data"
        ];
        header("Location: ./staff_create.php");
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

<span>
    <?php
        if(isset($_SESSION["staff_info"]) && 
            $_SESSION["staff_info"]["status"] == true
        ) {
            echo $_SESSION["staff_info"]["message"];
        } else {
            echo $_SESSION["staff_info"]["message"];
        }
    ?>
</span>
<form action="" method="post">

<table border="1" cellpadding="10" cellspacing="0">
    <tr>
        <td colspan="2">Add new staff</td>
    </tr>
    <tr>
        <td>
            <label>Name:</label>
        </td>
        <td>
            <input type="text" name="staff_name" placeholder="Enter your name">
        </td>
    </tr>
    <tr>
        <td>
            Picture:
        </td>
        <td>
            <input type="file" name="staff_img" accept=".jpg, .png">
        </td>
    </tr>
    <tr>
        <td>
            Email:
        </td>
        <td>
            <input type="email" name="staff_email" placeholder="Enter your email">
        </td>
    </tr>
        <td>
            Contact:
        </td>
        <td>
            <input type="tel" name="staff_contact" placeholder="Enter your contact">
        </td>
    <tr>
        <td>
            Designation:
        </td>
        <td>
            <input type="text" name="staff_designation" placeholder="Enter your designation">
        </td>
    </tr>
    <tr>
        <td>
            Department:
        </td>
        <td>
            <input type="text" name="staff_dept" placeholder="Enter your department">
        </td>
    </tr>
    <tr>
        <td></td>
        <td>
            <button type="submit" name="creat_staff">Create Staff</button>
        </td>
    </tr>
</table>

</form>


</body>
</html>