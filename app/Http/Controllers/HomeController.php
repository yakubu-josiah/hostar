<?php

namespace App\Http\Controllers;

use App\Models\CardFeatures;
use App\Models\PricingPlan;
use App\Models\topBanner;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    
    public function home() {
        $banner = topBanner::first();
        $card = CardFeatures::first();
        $pricing = PricingPlan::first();

        return view('welcome', [
            'banner' => $banner,
            'card' => $card,
            'pricing' => $pricing
        ]);
    }

    public function regView() {
        return view('registration');
    }
}