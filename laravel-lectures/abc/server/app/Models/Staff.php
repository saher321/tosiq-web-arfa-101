<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Staff extends Model
{
    //
    protected $table    = "staffs";
    
    protected $fillable = [
        'name',
        'email',
        'image',
        'contact',
        'designation',
        'department'
    ];
}
