@extends('partials.layout')
@section('title', 'Registration')


@section('content')
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
        style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;">
        <defs>
            <filter id="wp-duotone-dark-grayscale">
                <feColorMatrix color-interpolation-filters="sRGB" type="matrix"
                    values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
                <feComponentTransfer color-interpolation-filters="sRGB">
                    <feFuncR type="table" tableValues="0 0.49803921568627" />
                    <feFuncG type="table" tableValues="0 0.49803921568627" />
                    <feFuncB type="table" tableValues="0 0.49803921568627" />
                    <feFuncA type="table" tableValues="1 1" />
                </feComponentTransfer>
                <feComposite in2="SourceGraphic" operator="in" />
            </filter>
        </defs>
    </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
        style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;">
        <defs>
            <filter id="wp-duotone-grayscale">
                <feColorMatrix color-interpolation-filters="sRGB" type="matrix"
                    values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
                <feComponentTransfer color-interpolation-filters="sRGB">
                    <feFuncR type="table" tableValues="0 1" />
                    <feFuncG type="table" tableValues="0 1" />
                    <feFuncB type="table" tableValues="0 1" />
                    <feFuncA type="table" tableValues="1 1" />
                </feComponentTransfer>
                <feComposite in2="SourceGraphic" operator="in" />
            </filter>
        </defs>
    </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
        style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;">
        <defs>
            <filter id="wp-duotone-purple-yellow">
                <feColorMatrix color-interpolation-filters="sRGB" type="matrix"
                    values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
                <feComponentTransfer color-interpolation-filters="sRGB">
                    <feFuncR type="table" tableValues="0.54901960784314 0.98823529411765" />
                    <feFuncG type="table" tableValues="0 1" />
                    <feFuncB type="table" tableValues="0.71764705882353 0.25490196078431" />
                    <feFuncA type="table" tableValues="1 1" />
                </feComponentTransfer>
                <feComposite in2="SourceGraphic" operator="in" />
            </filter>
        </defs>
    </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
        style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;">
        <defs>
            <filter id="wp-duotone-blue-red">
                <feColorMatrix color-interpolation-filters="sRGB" type="matrix"
                    values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
                <feComponentTransfer color-interpolation-filters="sRGB">
                    <feFuncR type="table" tableValues="0 1" />
                    <feFuncG type="table" tableValues="0 0.27843137254902" />
                    <feFuncB type="table" tableValues="0.5921568627451 0.27843137254902" />
                    <feFuncA type="table" tableValues="1 1" />
                </feComponentTransfer>
                <feComposite in2="SourceGraphic" operator="in" />
            </filter>
        </defs>
    </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
        style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;">
        <defs>
            <filter id="wp-duotone-midnight">
                <feColorMatrix color-interpolation-filters="sRGB" type="matrix"
                    values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
                <feComponentTransfer color-interpolation-filters="sRGB">
                    <feFuncR type="table" tableValues="0 0" />
                    <feFuncG type="table" tableValues="0 0.64705882352941" />
                    <feFuncB type="table" tableValues="0 1" />
                    <feFuncA type="table" tableValues="1 1" />
                </feComponentTransfer>
                <feComposite in2="SourceGraphic" operator="in" />
            </filter>
        </defs>
    </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
        style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;">
        <defs>
            <filter id="wp-duotone-magenta-yellow">
                <feColorMatrix color-interpolation-filters="sRGB" type="matrix"
                    values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
                <feComponentTransfer color-interpolation-filters="sRGB">
                    <feFuncR type="table" tableValues="0.78039215686275 1" />
                    <feFuncG type="table" tableValues="0 0.94901960784314" />
                    <feFuncB type="table" tableValues="0.35294117647059 0.47058823529412" />
                    <feFuncA type="table" tableValues="1 1" />
                </feComponentTransfer>
                <feComposite in2="SourceGraphic" operator="in" />
            </filter>
        </defs>
    </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
        style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;">
        <defs>
            <filter id="wp-duotone-purple-green">
                <feColorMatrix color-interpolation-filters="sRGB" type="matrix"
                    values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
                <feComponentTransfer color-interpolation-filters="sRGB">
                    <feFuncR type="table" tableValues="0.65098039215686 0.40392156862745" />
                    <feFuncG type="table" tableValues="0 1" />
                    <feFuncB type="table" tableValues="0.44705882352941 0.4" />
                    <feFuncA type="table" tableValues="1 1" />
                </feComponentTransfer>
                <feComposite in2="SourceGraphic" operator="in" />
            </filter>
        </defs>
    </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
        style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;">
        <defs>
            <filter id="wp-duotone-blue-orange">
                <feColorMatrix color-interpolation-filters="sRGB" type="matrix"
                    values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
                <feComponentTransfer color-interpolation-filters="sRGB">
                    <feFuncR type="table" tableValues="0.098039215686275 1" />
                    <feFuncG type="table" tableValues="0 0.66274509803922" />
                    <feFuncB type="table" tableValues="0.84705882352941 0.41960784313725" />
                    <feFuncA type="table" tableValues="1 1" />
                </feComponentTransfer>
                <feComposite in2="SourceGraphic" operator="in" />
            </filter>
        </defs>
    </svg>
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
        <x-headbar />

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