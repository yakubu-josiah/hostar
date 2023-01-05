<?php

namespace App\Http\Controllers;

use App\Models\topBanner;
use App\Models\whyChooseUs;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function index() {
        $banner = topBanner::first();
        $card = whyChooseUs::all();
    
        return view('about.index', [
            'banner' => $banner,
            'card' => $card
        ]);
    }
}
