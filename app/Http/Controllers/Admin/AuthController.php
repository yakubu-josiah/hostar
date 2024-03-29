<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Laravel\Fortify\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Laravel\Fortify\Contracts\RegisterResponse;
 

class AuthController extends Controller
{
     /**
     * The guard implementation.
     *
     * @var \Illuminate\Contracts\Auth\StatefulGuard
     */
    protected $guard;

    /**
     * Create a new controller instance.
     *
     * @param  \Illuminate\Contracts\Auth\StatefulGuard  $guard
     * @return void
     */

    public function loginAdmin(Request $request)
    {
        if (auth()->guard('admin')->user()) {
            return redirect()->route('adminDash');
        } else {
            return view('admin.auth.login');
        }
    }


    public function dashboard() 
    {
        return view('admin.dashboard');
    }

    public function reg(Request $request,
        CreatesNewUsers $creator): RegisterResponse
    {
        event(new Registered($user = $creator->create($request->all())));

        $this->guard->login($user);

        return app(RegisterResponse::class);
    }
    /**
     * Attempt to authenticate a new session.
     *
     * @param  \Laravel\Fortify\Http\Requests\LoginRequest  $request
     * @return mixed
     */
    public function store(LoginRequest $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'bail|required|email',
            'password' => 'required'
            ]);

            if ($validator->fails()) {
                return redirect()->back()
                                ->withErrors($validator)
                                ->withInput();
            }
            $email = $request->email;
            // dd($request->email);
            $password = $request->password;
            if (auth()->guard('admin')->attempt(['email' => $email, 'password' => $password])) {
               return redirect()->route('adminDash');
            }else{
                return back()->withInput($request->only('email'))->withErrors(['Opps!! Your credientials does not match our records']);
            }
    }

    public function adminLogout(Request $request)
    {
        auth()->guard('admin')->logout();
        $request->session()->invalidate();
        return redirect()->route('loginAdmin');
    }
}