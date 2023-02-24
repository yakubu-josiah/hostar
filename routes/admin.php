<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AuthController;



Route::prefix('/admin')->group(function (){
    Route::controller(AuthController::class)->group(function (){
        Route::get('/login', 'loginAdmin')->name('loginAdmin');
        Route::post('/login', 'store')->name('adminStr');
        Route::get('/sign-up', 'adminRegister')->name('adminReg');
        Route::post('/register', 'reg')->name('adminRegs');
        Route::post('/sign-out', 'adminLogout')->name('sign_out');
    });
});

Route::middleware('admin:admin')->group(function (){
    Route::group(['prefix' => 'admin'], function (){
        Route::controller(AuthController::class)->group(function(){
            Route::get('/dashboard', 'dashboard')->name('adminDash');

        });   
        
        
        Route::group(['prefix' => 'content-management'], function(){
            Route::resource('why-choose-us', whyChooseUs::class);
        });
    });
});
