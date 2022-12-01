<?php

namespace App\Http\Controllers;

use App\Models\CardFeatures;
use App\Models\topBanner;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    
    public function home() {
        $banner = topBanner::first();
        $card = CardFeatures::first();

        return view('welcome', [
            'banner' => $banner,
            'card' => $card
        ]);
    }

    public function regView() {
        return view('registration');
    }
}