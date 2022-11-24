<?php

namespace App\Http\Controllers;

use App\Http\Requests\topBanner;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function dashboard() {
        return view('admin.dashboard');
    }
    
    public function banner() {
        return view('admin.homepage.topBanner');
    }

    public function addbanner(topBanner $request) {
        $validated = $request->validated();
        $banner = topBanner::create($validated);

        return redirect()->route('banner', [$banner -> id]);
    }
}