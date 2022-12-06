<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Packages extends Model
{
    protected $fillable = [
        'title',
        'duration',
        'amount',
        'sub_plan'
    ];
    use HasFactory;

    public static function guestPackage($dura){
        $resp = self::where('duration', $dura)->get();
        if($resp){
            foreach ($resp as $value) {
                $value['sub_plan'] = json_decode($value->sub_plan);
            }
        }
        return $resp;
    }
}
