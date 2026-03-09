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

        $deptName = $request->department;
        
        $data = [
            "name" => $deptName
        ];
        
        $result   = Department::insert($data);

        if ($result) {
            $response = [
              "status" => true,
              "message"=> "Data saved successfully"
            ];
        } else {
            $response = [
              "status" => false,
              "message"=> "Failed to insert data"  
            ];
        }
        return json_encode($response);
    }
}
// php artisan install:api