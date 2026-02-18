<?php

    class STAFF extends DB {

        function get_all_staffs() {
            $all_staff = $this->fetch_all_rows("select * from staffs");
            return $all_staff;
        }
    }

    $staff = new STAFF();

?>