<?php
    class DB {
        private $conn;

        function __construct(){

            try {
                if ($_SERVER["SERVER_NAME"] == "localhost") { // local connection
                    $this->$conn = mysqli_connect("localhost", "root", "", "crud-101");
                } else { // live connection
                    $this->$conn = mysqli_connect("localhost", "root", "", "crud-101");
                }
            }catch(Exception $e) {
                echo "Connection error: " . $e->getMessage();
                die();
            }

        }

        function query ($q) {
            $result = mysqli_query($this->$conn, $q);
            return $result;
        }
    }

    $db = new DB();

?>