<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Staff;

class StaffController extends Controller
{
    // cmd :: php artisan make:controller ControllerName
    function staffList(){
        
        // $data = ["Wearing", "Electronics", "Foods"];

        // $data = Staff::all();
        $data = Staff::where("is_deleted", null)->get();
        $staffs= [
            'staffs' => $data,
            'totals' => $data->count()
        ];
        return $staffs;
    }
}
