<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\HomeEdit;
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

Route::controller(HomeController::class)->group(function (){
    Route::get('/', 'home')->name('home');
    Route::get('/account-sign-in', 'regView')->name('regview');
});


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
    Route::controller(HomeEdit::class)->group(function (){ 
            // ----- TOP BANNER ------ //  
        Route::get('/overview/top-banner', 'bannerEdit')->name('banner');
        Route::post('/overview/top-banner/edit', 'bannerStore')->name('bannerStore');
        Route::put('/overview/top-banner/edit/update', 'bannerUpdate')->name('bannerUpdate');


    });
    
});

Route::prefix('/shop')->group(function (){
    Route::controller(ShopController::class)->group(function (){
        Route::get('/', 'index')->name('shop');
        Route::get('/order-listings', 'single')->name('single');
    });
});