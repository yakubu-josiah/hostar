<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HostingController;
use App\Http\Controllers\ShopController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::get('/account-sign-in', function () {
    return view('registration');
})->name('regview');


Route::prefix('/about')->group(function () {
    Route::controller(AboutController::class)->group(function (){
        Route::get('/', 'index')->name('about');
    });
});

Route::prefix('/hosting')->group(function (){
    Route::controller(HostingController::class)->group(function (){
        Route::get('/', 'index')->name('hosting');
        Route::get('/our-services', 'services')->name('services');
    });
});

Route::prefix('/contact')->group(function (){
    Route::controller(ContactController::class)->group(function (){
        Route::get('/', 'index')->name('contact');
    });
});

Route::prefix('/admin')->group(function (){
    Route::controller(AdminController::class)->group(function (){
        Route::get('/dashboard', 'dashboard')->name('adminDash');
    });
});

Route::prefix('/shop')->group(function (){
    Route::controller(ShopController::class)->group(function (){
        Route::get('/', 'index')->name('shop');
        Route::get('/order-listings', 'single')->name('single');
    });
});

Route::get('/sis', function () {
    return view('admin.homepage.topBanner');
})->name('ban');