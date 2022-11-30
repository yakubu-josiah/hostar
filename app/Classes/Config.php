<?php
namespace App\Classes;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Config
{
    public static function uploadHost(){
        if(self::isSecure() == 'on'){
            return 'https://'.$_SERVER['HTTP_HOST'];
        } else {
            return 'http://'.$_SERVER['HTTP_HOST'];
        }
        
    }

    public static function isSecure() {
        if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on'){
            return 'on';
        } else {
            return 'off';
        }
    }
}