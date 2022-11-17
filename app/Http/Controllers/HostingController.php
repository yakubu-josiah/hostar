<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HostingController extends Controller
{
    public function index() {
        return view('hosting.index');
    }

    public function services() {
        return view('hosting.services');
    }
}
