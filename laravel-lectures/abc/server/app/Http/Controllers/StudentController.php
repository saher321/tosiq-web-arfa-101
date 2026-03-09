<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    //
    function all_students(){
        $data = Student::with('department')->get();
        $students = [
            "students"   => $data,
            "totals"     => $data->count()
        ];
        return $students;
    }
    public function store(Request $request){
        
        $data = [
            "name"          => $request->name,
            "department_id" => $request->department_id,
            "email"         => $request->email,
            "phone"         => $request->phone,
        ];
        
        $result   = Student::insert($data);

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
