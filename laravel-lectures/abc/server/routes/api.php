<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeeController;
// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

// REST API (CRUD)

// post     => insert data into database table
// get      => one/more records shows
// put/patch=> update data from database table
// delete   => deleting from database table

Route::get("/staff-list", [EmployeeController::class, "staffList"])->name("staff.list");
