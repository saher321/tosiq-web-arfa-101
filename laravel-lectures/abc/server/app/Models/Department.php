<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Department extends Model
{
    //
    protected $table    = "lms_departments";
    
    protected $fillable = [
        'name',
    ];

    function students(): HasMany {
        return $this->hasMany(Student::class, "department_id");
    }
}
