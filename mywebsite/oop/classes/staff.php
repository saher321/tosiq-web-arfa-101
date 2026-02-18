<?php

    class STAFF extends DB {

        function get_all_staffs() {
            $all_staff = $this->query("select * from staffs");
            return $all_staff;
        }

        function delete_staff($id) {
            $result = $this->query("delete from staffs where id=$id");
            return $result;
        }
        
    }

    $staff = new STAFF();

?>