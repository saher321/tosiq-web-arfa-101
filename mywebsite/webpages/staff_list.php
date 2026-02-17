
<?php
    include("../config/db.php");

    $staffs = mysqli_query($connection, "select * from staffs");


    if (isset($_GET['id'])) {

        $query = "delete from staffs where id=". $_GET['id'];

        unlink("./assets/uploads/staff_imgs/".$_GET['img']);
        mysqli_query($connection, $query);


        header('Location: ./staff_list.php');
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

<a href="./staff_create.php">Add Staff</a>

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
        <?php if(mysqli_num_rows($staffs) == 0){
        ?>
            <tr>
                <td colspan="5">No record were found</td>
            </tr>
        <?php
        } else {
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
            <td>Edit /
                <!-- <a href="./staff_list.php?id=
                 <php echo $staff['id']?>">
                    Delete
                </a> -->
                <a href="#" onclick="del(<?php echo $staff['id']?>, <?php echo $staff['image']?>)">Delete</a>
            </td>
        </tr>
        <?php 

            }
        }
        ?>
    </tbody>

</table>

<!-- js -->
 <script>
    function del(id, img){
        console.log(id)
        if(confirm("Delete this record?")){
            window.location = `./staff_list.php?id=${id}&img=${img}`;
        } else {
            return;
        }
    }
 </script>


</body>
</html>