<?php
    session_start();
    error_reporting(~E_WARNING);
    $connection = mysqli_connect(
        "localhost", // server/host name
        "root", // dbms admin username
        "",  // dbms admin password
        "crud-101" // datababase name
    );

    if($connection) {
        $_SESSION["db_info"] = [
            "status" => true,
            "message"=> "Database connected successfully"
        ];
    } else {
        $_SESSION["db_info"] = [
            "status" => false,
            "message"=> "ERR: Database isn't connected"
        ];
    }
    return $connection;
?>