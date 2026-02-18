<?php
include("../config/db.php");

$id = $_GET['id'];

$query = "select * from staffs where id=".$id;

$query_conn = mysqli_query($connection, $query);

$staff = mysqli_fetch_assoc($query_conn);

if (!$staff){
    echo "Staff data not found";
    return;
}

if (isset($_POST['update_staff'])) {

    $img    = $_FILES["staff_img"]["name"];

    $n      = $_POST["staff_name"];
    $e      = $_POST["staff_email"];
    $c      = $_POST["staff_contact"];
    $dn     = $_POST["staff_designation"]; // designation
    $dpt    = $_POST["staff_dept"]; // department

    if ($img) {
        $query  = "update staffs set name='$n', image='$img', email='$e', 
        contact='$c', designation='$dn', department='$dpt' where id=$id";

        move_uploaded_file($_FILES["staff_img"]["tmp_name"], "./assets/uploads/staff_imgs/".$img);
        
    } else {
        $query  = "update staffs set name='$n', email='$e', 
        contact='$c', designation='$dn', department='$dpt' where id=$id";
    }

    $result = mysqli_query($connection, $query);

    if ($result) {
        $_SESSION["staff_info"] = [
            "status" => true,
            "message"=> "Data update successfully"
        ];
        header("Location: ./staff_list.php");
    } else {
        $_SESSION["staff_info"] = [
            "status" => true,
            "message"=> "Failed to update data"
        ];
        return;
    }
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        .form-top{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        small{
            color: green;
        }
    </style>

</head>
<body>

<form action="" method="post" enctype='multipart/form-data'>

<table border="1" cellpadding="10" cellspacing="0">
    <tr>
        <td colspan="2">
            <div class="form-top">
                <div>
                    Update staff data
                </div>
                <div>
                    <a href="./staff_list.php" target="_blank">
                        View List
                    </a>
                </div>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <label>Name:</label>
        </td>
        <td>
            <input type="text" name="staff_name" value="<?php echo $staff['name']?>" placeholder="Enter your name">
        </td>
    </tr>
    <tr>
        <td>
            Picture:
        </td>
        <td>
            <input type="file" name="staff_img" accept=".jpg, .png"> <br>
            <small>
                <?php 
                    if(isset($staff['image'])){
                        echo "Image already exist";
                    }
                ?>
            </small>
        </td>
    </tr>
    <tr>
        <td>
            Email:
        </td>
        <td>
            <input type="email" value="<?php echo $staff['email']?>" name="staff_email" placeholder="Enter your email">
        </td>
    </tr>
        <td>
            Contact:
        </td>
        <td>
            <input type="tel" value="<?php echo $staff['contact']?>" name="staff_contact" placeholder="Enter your contact">
        </td>
    <tr>
        <td>
            Designation:
        </td>
        <td>
            <input type="text" value="<?php echo $staff['designation']?>" name="staff_designation" placeholder="Enter your designation">
        </td>
    </tr>
    <tr>
        <td>
            Department:
        </td>
        <td>
            <input type="text" value="<?php echo $staff['department']?>" name="staff_dept" placeholder="Enter your department">
        </td>
    </tr>
    <tr>
        <td></td>
        <td>
            <button type="submit" name="update_staff">Update Staff</button>
        </td>
    </tr>
</table>

</form>


</body>
</html>