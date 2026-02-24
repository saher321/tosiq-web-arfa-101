<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// http://localhost:8000/api/test
Route::get("/test", function (){
    $text = "Server is running...";
    return $text;
});
