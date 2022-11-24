<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class topBanner extends Model
{
    protected $fillable = [
        'h2',
        'p',
        'logo',
        'image'
    ];

    use HasFactory;
}
