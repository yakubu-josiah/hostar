<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;

class Admin extends Authenticatable

{
    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'number',
        'password'
    ];
    use HasFactory;
}
