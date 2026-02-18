<?php
    include "./classes/db.php";
    include "./classes/staff.php";

    include "./common/global.php";
    include "./common/functions.php";

    // echo "Server name:       ". BASE_URL . "<br>";
    // echo "Application name: " . APP_NAME . "<br>";

    // $product_name = "Khajur Cooking Oil";

    // echo $func->slug($product_name);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <ul>
        <?php 
            $rows = $staff->get_all_staffs();
            foreach($rows as $data){
        ?>

        <li>
            <?php $data['name'] ?>
        </li>

        <?php
            }
        ?>
    </ul>

</body>
</html>