<?php
    // INDEXING ARRAY
    $list = ["Apple", "Mouse", "USB", "Shoes", "Men", "Sky"];
    // echo $list[1];
    // foreach($list as $data) {
    //     echo $data;
    //     echo "<br>";
    // }

    // ASSOCIATIVE ARRAY
    $assoc = [
        "name" => "Tosiq", 
        "email"=> "test@email.com",
        "hobbies"=> ["Games", "Eating"]
        ];

    // echo json_encode($assoc);

    foreach($assoc["hobbies"] as $data){
        echo $data;
        echo "<br>";
    }


?>