<?php
    class DB {
        private $conn;

        function __constructor(){

            try {
                $this->$conn = mysqli_connect("localhost", "root", "", "crud-101");
            }catch(Exception $e) {
                echo "Connection error: " . $e->getMessage();
                die();
            }

        }

        function fetch_all_rows ($q) {
            $result = mysqli_query($this->$conn, $q);
            return $result;
        }
    }

    $db = new DB();

?>