<?php 

    $username   = $_GET["username"];
    $age        = $_GET["age"];
    // $email      = $_GET["email"];
    // $password   = $_GET["password"];

    if (!$username || !$age) {
        header("Location: ./home.php");
        return;
    }

    header("Location: ./success.html");
    // echo "Your name: $username \n";
    // echo "Your email: $email \n";
    // echo "Your password: $password \n";

    // $eng    = 39;
    // $math   = 89;
    // $urdu   = 76;
    // $com    = 100;
    // $sst    = 67;

    // $sum  = $eng + $math + $urdu + $com + $sst;
    // $avg  = $sum / 5;

    // echo "Average of five subject is $avg";
    
    // $fahrenite = 67;
    // output : 19.4


?>