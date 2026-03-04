<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Department;

class DepartmentController extends Controller
{
    //
    function all_departments(){
        $data = Department::with('students')->get();
        $departments = [
            "departments"   => $data,
            "totals"        => $data->count()
        ];
        return $departments;
    }
    public function store(Request $request){
        dd($request->all());
    }
}
// php artisan install:api