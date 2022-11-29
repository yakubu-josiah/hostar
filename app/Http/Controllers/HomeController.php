<?php

namespace App\Http\Controllers;

use App\Models\topBanner;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    
    public function home() {
        $banner = topBanner::first();

        return view('welcome', [
            'banner' => $banner
        ]);
    }

    public function regView() {
        return view('registration');
    }
}