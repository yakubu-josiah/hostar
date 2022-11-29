@extends('partials.layout')
@section('title', 'Registration')


@section('content')
    @include('partials.svg')
    <div class="page-wrapper layout-full">
        <!-- #hostar-theme-wrapper -->
        <!-- start preloader -->
        <div class="preloader">
            <div class="sk-folding-cube">
                <div class="sk-cube1 sk-cube"></div>
                <div class="sk-cube2 sk-cube"></div>
                <div class="sk-cube4 sk-cube"></div>
                <div class="sk-cube3 sk-cube"></div>
            </div>
        </div>
        <!-- end preloader -->
        <x-headbar :banner="$banner"/>

        <!-- start wpo-page-title -->
        <section class="wpo-page-title   crumbs-area-6373cf3d8c21e " style="">
            <div class="container">
                <div class="row">
                    <div class="col col-xs-12" style="">
                        <div class="title">
                            <h2>My account</h2>
                        </div>
                    </div>
                </div> <!-- end row -->
            </div> <!-- end container -->
        </section>
        <!-- end wpo-page-title -->
        <div class="page-wrap section-padding" style="">
            <div class="container  full-width">
                <div class="row">
                    <div class="col-md-12">
                        <div class="page-wraper clearfix">
                            <div class="woocommerce">
                                <div class="woocommerce-notices-wrapper"></div>

                                <div class="u-columns col2-set" id="customer_login">

                                    <div class="u-column1 col-1">


                                        <h2>Login</h2>

                                        <form class="woocommerce-form woocommerce-form-login login" method="post">


                                            <p
                                                class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                <label for="username">Username or email address&nbsp;<span
                                                        class="required">*</span></label>
                                                <input type="text"
                                                    class="woocommerce-Input woocommerce-Input--text input-text"
                                                    name="username" id="username" autocomplete="username" value="" />
                                            </p>
                                            <p
                                                class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                <label for="password">Password&nbsp;<span
                                                        class="required">*</span></label>
                                                <input class="woocommerce-Input woocommerce-Input--text input-text"
                                                    type="password" name="password" id="password"
                                                    autocomplete="current-password" />
                                            </p>


                                            <p class="form-row">
                                                <label
                                                    class="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                                                    <input
                                                        class="woocommerce-form__input woocommerce-form__input-checkbox"
                                                        name="rememberme" type="checkbox" id="rememberme"
                                                        value="forever" /> <span>Remember me</span>
                                                </label>
                                                <input type="hidden" id="woocommerce-login-nonce"
                                                    name="woocommerce-login-nonce" value="742ae6a130" /><input
                                                    type="hidden" name="_wp_http_referer"
                                                    value="/wp/hostar/my-account/" /> <button type="submit"
                                                    class="woocommerce-button button woocommerce-form-login__submit wp-element-button"
                                                    name="login" value="Log in">Log in</button>
                                            </p>
                                            <p class="woocommerce-LostPassword lost_password">
                                                <a href="https://wpocean.com/wp/hostar/my-account/lost-password/">Lost
                                                    your password?</a>
                                            </p>


                                        </form>


                                    </div>

                                    <div class="u-column2 col-2">

                                        <h2>Register</h2>

                                        <form method="post" class="woocommerce-form woocommerce-form-register register">



                                            <p
                                                class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                <label for="reg_email">Email address&nbsp;<span
                                                        class="required">*</span></label>
                                                <input type="email"
                                                    class="woocommerce-Input woocommerce-Input--text input-text"
                                                    name="email" id="reg_email" autocomplete="email" value="" />
                                            </p>


                                            <p>A link to set a new password will be sent to your email address.</p>


                                            <div class="woocommerce-privacy-policy-text"></div>
                                            <p class="woocommerce-form-row form-row">
                                                <input type="hidden" id="woocommerce-register-nonce"
                                                    name="woocommerce-register-nonce" value="fc3d00c937" /><input
                                                    type="hidden" name="_wp_http_referer"
                                                    value="/wp/hostar/my-account/" /> <button type="submit"
                                                    class="woocommerce-Button woocommerce-button button wp-element-button woocommerce-form-register__submit"
                                                    name="register" value="Register">Register</button>
                                            </p>


                                        </form>

                                    </div>

                                </div>

                            </div>
                        </div>
                        <div class="page-link-wrap">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer -->
        <x-footer />
        <!-- Footer -->
    </div>
    <!--hostar-theme-wrapper -->
    @include('partials.scripts')
@endsection