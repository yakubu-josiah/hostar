<?php

namespace App\Http\Controllers;

use App\Classes\FileUpload;
use App\Http\Requests\topBanner;
use App\Models\topBanner as ModelsTopBanner;
use Illuminate\Support\Str;

class AdminController extends Controller
{
    public function dashboard() {
        return view('admin.dashboard');
    }
    
    public function banner() {   
        return view('admin.homepage.topBanner', ['banner' => ModelsTopBanner::first()]);
    }

    public function bannerStore(topBanner $request) {
        $validated = $request->validated();

        $image = $request->file('image');
        $logo = $request->file('logo');

        $validated['image'] = FileUpload::upload($image, 'top_banner', 'bannerImage'.Str::random(4));
        $validated['logo'] = FileUpload::upload($logo, 'top_banner', 'bannerLogo'.Str::random(4));

        ModelsTopBanner::create($validated);

        return redirect()->route('adminDash');
    }
    
    
}
        