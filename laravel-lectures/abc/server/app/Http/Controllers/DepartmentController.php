<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Department;
use App\Models\Student;

class DepartmentController extends Controller
{
    //
    public function all_departments(){
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

    public function delete($id){

        $count_std = Student::where('department_id', $id)->count();
        if ($count_std > 0) {
            return json_encode([
                "status" => false,
                "message"=> "Dept. has many students, it can't be deleted!"
            ]);
        } else {
            $res = Department::where("id", $id)->first();
            if ($res) {
                $res->delete();
                return json_encode([
                    "status" => true,
                    "message"=> "Dept. has been deleted!"
                ]);
            } else {
                return json_encode([
                    "status" => false,
                    "message"=> "Dept. id not found!"
                ]);
            }
        }
        
    }

}
// php artisan install:api