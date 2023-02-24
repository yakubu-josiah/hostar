<?php

namespace App\Http\Controllers;

use App\Models\CardFeatures;
use App\Models\Packages;
use App\Models\PricingPlan;
use App\Models\Services;
use App\Models\topBanner;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    
    public function home() {
        $banner = topBanner::first();
        // $card = CardFeatures::first();
        $pricing = PricingPlan::first();
        
        $monthPack = Packages::guestPackage('monthly');
        $yearPack = Packages::guestPackage('yearly');
        $service = Services::all();

        return view('welcome', [
            'banner' => $banner,
            // 'card' => $card,
            'pricing' => $pricing,
            'monthPack' => $monthPack,
            'yearPack' => $yearPack,
            'service' => $service
        ]);
    }

    public function regView() {
        return view('registration');
    }
}