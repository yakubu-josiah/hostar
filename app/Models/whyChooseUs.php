<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class whyChooseUs extends Model
{
    protected $fillable = [
        'title',
        'image',
        'content'
    ];
    use HasFactory;
}
