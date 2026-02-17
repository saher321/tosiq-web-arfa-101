
<?php
    include("../config/db.php");

    $staffs = mysqli_query($connection, "select * from staffs");
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<table border="1" cellpadding="20" cellspacing="0">
    <thead>
        <tr>
            <th>Id</th>
            <th>Picture</th>
            <th>Name</th>
            <th>Email</th>
            <th>More</th>
        </tr>
    </thead>

    <!-- 
    arra = [{}, {}]
    -->
    <tbody>
        <?php
            foreach($staffs as $staff){
        ?>
        <tr>
            <td><?php echo $staff['id']?></td>
            <td>
                <img 
                src="<?php
                        if ($staff['image'] == null){
                            echo './assets/uploads/staff_imgs/dummy-img.jpg';
                        } else {
                            echo './assets/uploads/staff_imgs/'. $staff["image"]; 
                        } 
                    ?>" width="36" height="36" alt="">
            </td>
            <td><?php echo $staff['name']?></td>
            <td><?php echo $staff['email']?></td>
            <td>Edit / Delete</td>
        </tr>
        <?php 
            }
        ?>
    </tbody>

</table>

</body>
</html>