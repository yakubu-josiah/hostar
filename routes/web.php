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

Route::get('/admin/login', function() {
    return view('admin.auth.login');
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

                    // ----- CARD FEATURES ------ //
        Route::get('/overview/card-features', 'cardEdit')->name('card');
        Route::post('/overview/card-features/edit', 'cardStore')->name('cardStore');
        Route::put('/overview/card-features/edit/update', 'cardUpdate')->name('cardUpdate');  

                    // ----- PRICING PLANS ------ //
        Route::get('/overview/pricing-plans', 'pricingEdit')->name('pricing');
        Route::post('/overview/pricing-plans/edit', 'pricingStore')->name('pricingStore');
        Route::put('/overview/pricing-plans/edit/update', 'pricingUpdate')->name('pricingUpdate');

                    // ----- ALL PACKAGES ------ //
        Route::get('/overview/hosting-packages', 'packageIndex')->name('packages');
        Route::get('/overview/hosting-packages/create-form', 'packageCreate')->name('packagesForm');
        Route::post('/overview/hosting-packages/save-package', 'packageStore')->name('packageStore');
        Route::get('overview/hosting-packages/edit-form/{id}', 'packageEdit')->name('packageEdit');
        Route::put('/overview/hosting-packages/edit/{id}/update', 'packageUpdate')->name('packageUpdate');
        Route::delete('/overview/hosting-packages/package-delete/{id}', 'packageDestroy')->name('deletePack');

                    // ----- OUR SERVICES ------ //
        Route::get('/overview/our-services', 'serviceIndex')->name('service');
        Route::get('/overview/our-services/create-form', 'serviceCreate')->name('serviceForm');
        Route::post('/overview/our-services/store', 'serviceStore')->name('serviceStore');
        Route::get('/overview/our-services/edit/{id}', 'serviceEdit')->name('serviceEdit');
        Route::put('/overview/our-services/update/{id}', 'serviceUpdate')->name('serviceUpdate');
        Route::delete('/overview/our-services/delete/{id}', 'serviceDestroy')->name('serviceDelete');


    });
    
});
Route::middleware('admin:admin')->group(function (){
    Route::group(['prefix' => 'admin'], function (){
        Route::controller(AdminController::class)->group(function(){
            Route::get('/dashboard', 'dashboard')->name('adminDash');
        });
    });
});

Route::prefix('/shop')->group(function (){
    Route::controller(ShopController::class)->group(function (){
        Route::get('/', 'index')->name('shop');
        Route::get('/order-listings', 'single')->name('single');
    });
});