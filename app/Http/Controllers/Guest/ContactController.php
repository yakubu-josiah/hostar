<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index() {
        return view('contact.index');
    }
}
