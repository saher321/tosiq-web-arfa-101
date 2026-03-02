<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Student extends Model
{
    //
    protected $table    = "lms_students";
    
    protected $fillable = [
        'department_id',
        'name',
        'email',
        'image',
        'phone',
    ];

    function department(): BelongsTo{
        return $this->belongsTo(Department::class);
    }
}
