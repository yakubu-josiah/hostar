<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ShopController extends Controller
{
    public function index(){
        return view('shop.index');
    }

    public function single(){
        return view('shop.single');
    }
}
