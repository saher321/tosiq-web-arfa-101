<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

// REST API (CRUD)

// post     => insert data into database table
// get      => one/more records shows
// put/patch=> update data from database table
// delete   => deleting from database table

Route::get("/category", function () {
    $category = ["Wearing", "Electronics", "Foods"];
    return $category;
    // return json_encode(["status"=>true, "data"=>$category]);
});
