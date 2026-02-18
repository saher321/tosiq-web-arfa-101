<?php

define("APP_NAME", "OOP CRUD");

if ($_SERVER["SERVER_NAME"] == "localhost") {
    
    define("BASE_URL", "http://localhost/tosiq/tosiq-web-arfa-101/mywebsite/oop/staffs.php");

} else {
    
    define("BASE_URL", "https://yourdomain.com");
    
}

?>