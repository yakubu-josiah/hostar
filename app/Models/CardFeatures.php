<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CardFeatures extends Model
{
    protected $fillable = [
        'fst_h2',
        'fst_p',
        'scd_h2',
        'scd_p',
        'thd_h2',
        'thd_p'

    ];
    use HasFactory;
}
