@extends('partials.layout')
@section('title', 'Homepage')

@section ('content')
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
        <header id="header" class="wpo-site-header header-style-1">
            <nav class="navigation  sticky-menu-on  navbar navbar-default">
                <!-- Navigation & Search -->
                <div class="container has-menu ">
                    <div class="navbar-header">
                        <button type="button" class="open-btn">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <div class="wpo-site-logo  has_menu " style="">
                            <a class="navbar-brand" href="#">
                                <img src="{{ asset('images/tr-logo.png') }}"
                                alt="Hostar – Web Hosting">
                            </a>
                        </div>
                    </div>
                    <div id="navbar"
                        class="navbar-collapse collapse navbar-left navigation-holder  has-menu  has-cart  has-search ">
                        <button class="close-navbar"><i class="ti-close"></i></button>
                        <ul id="menu-main-menu" class="nav navbar-nav">
                            <li id="menu-item-65"
                                class="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-65">
                                <a href="https://wpocean.com/wp/hostar/home-style-2/">Home</a>
                                <ul class="sub-menu">
                                    <li id="menu-item-706"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-59 current_page_item menu-item-706">
                                        <a href="https://wpocean.com/wp/hostar/" aria-current="page">Home Style 1</a>
                                    </li>
                                    <li id="menu-item-673"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-673">
                                        <a href="https://wpocean.com/wp/hostar/home-style-2/">Home Style 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li id="menu-item-26"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-26"><a
                                    href="{{ route('about') }}">About</a></li>
                            <li id="menu-item-32"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-32">
                                <a href="https://wpocean.com/wp/hostar/hosting/">Hosting</a>
                                <ul class="sub-menu">
                                    <li id="menu-item-300"
                                        class="menu-item menu-item-type-post_type menu-item-object-service menu-item-300">
                                        <a href="https://wpocean.com/wp/hostar/service/shared-hosting/">Shared
                                            Hosting</a>
                                    </li>
                                    <li id="menu-item-298"
                                        class="menu-item menu-item-type-post_type menu-item-object-service menu-item-298">
                                        <a href="https://wpocean.com/wp/hostar/service/cloud-hosting/">Cloud Hosting</a>
                                    </li>
                                    <li id="menu-item-295"
                                        class="menu-item menu-item-type-post_type menu-item-object-service menu-item-295">
                                        <a href="https://wpocean.com/wp/hostar/service/domain-name/">WordPress
                                            Hosting</a>
                                    </li>
                                    <li id="menu-item-296"
                                        class="menu-item menu-item-type-post_type menu-item-object-service menu-item-296">
                                        <a href="https://wpocean.com/wp/hostar/service/dedicated-hosting/">Dedicated
                                            Hosting</a>
                                    </li>
                                    <li id="menu-item-299"
                                        class="menu-item menu-item-type-post_type menu-item-object-service menu-item-299">
                                        <a href="https://wpocean.com/wp/hostar/service/vps-hosting/">VPS Hosting</a>
                                    </li>
                                    <li id="menu-item-297"
                                        class="menu-item menu-item-type-post_type menu-item-object-service menu-item-297">
                                        <a href="https://wpocean.com/wp/hostar/service/reseller-hosting/">Reseller
                                            Hosting</a>
                                    </li>
                                </ul>
                            </li>
                            <li id="menu-item-36"
                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-36">
                                <a href="#">Pages</a>
                                <ul class="sub-menu">
                                    <li id="menu-item-303"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-303">
                                        <a href="https://wpocean.com/wp/hostar/about/">About</a>
                                    </li>
                                    <li id="menu-item-302"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-302">
                                        <a href="https://wpocean.com/wp/hostar/contact/">Contact</a>
                                    </li>
                                    <li id="menu-item-305"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-305">
                                        <a href="https://wpocean.com/wp/hostar/hosting/">Service</a>
                                    </li>
                                    <li id="menu-item-304"
                                        class="menu-item menu-item-type-post_type menu-item-object-service menu-item-304">
                                        <a href="https://wpocean.com/wp/hostar/service/dedicated-hosting/">Service
                                            single</a>
                                    </li>
                                    <li id="menu-item-310"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-310">
                                        <a href="https://wpocean.com/wp/hostar/pricing/">Pricing</a>
                                    </li>
                                    <li id="menu-item-316"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-316">
                                        <a href="https://wpocean.com/wp/hostar/faq/">FAQ</a>
                                    </li>
                                    <li id="menu-item-311"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-311"><a
                                            href="https://wpocean.com/wp/hostar/404">404</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-35"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-35">
                                <a href="https://wpocean.com/wp/hostar/shop/">Shop</a>
                                <ul class="sub-menu">
                                    <li id="menu-item-527"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-527">
                                        <a href="https://wpocean.com/wp/hostar/shop/">Shop</a>
                                    </li>
                                    <li id="menu-item-526"
                                        class="menu-item menu-item-type-post_type menu-item-object-product menu-item-526">
                                        <a href="https://wpocean.com/wp/hostar/product/cloud-hosting/">Shop Single</a>
                                    </li>
                                </ul>
                            </li>
                            <li id="menu-item-27"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-27">
                                <a href="https://wpocean.com/wp/hostar/blog/">Blog</a>
                                <ul class="sub-menu">
                                    <li id="menu-item-317"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-317">
                                        <a href="https://wpocean.com/wp/hostar/blog/">Blog Default</a>
                                    </li>
                                    <li id="menu-item-318"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-318"><a
                                            href="https://wpocean.com/wp/hostar/blog/?sidebar=sidebar-left">Blog left
                                            sidebar</a></li>
                                    <li id="menu-item-320"
                                        class="menu-item menu-item-type-post_type menu-item-object-post menu-item-320">
                                        <a
                                            href="https://wpocean.com/wp/hostar/the-definitive-list-of-digital-products-you-can-sell/">Blog
                                            Single</a>
                                    </li>
                                </ul>
                            </li>
                            <li id="menu-item-30"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-30"><a
                                    href="https://wpocean.com/wp/hostar/contact/">Contact</a></li>
                        </ul>
                    </div><!-- end of nav-collapse -->
                    <div class="wpo-cart-search-contact">

                        <div class="wpo-mini-cart">
                            <button class="cart-toggle-btn"> <i class="fi flaticon-bag"></i> <span
                                    class="cart-count">0</span></button>
                            <div class="wpo-mini-cart-content">
                                <div class="wpo-mini-cart-title">
                                    <p>Shopping Cart</p>
                                </div>
                                <span class="no-products"> No products in the cart.</span>
                                <div class="wpo-mini-cart-action clearfix">
                                    <span class="mini-checkout-price"><span
                                            class="woocommerce-Price-amount amount"><bdi><span
                                                    class="woocommerce-Price-currencySymbol">&#36;</span>0.00</bdi></span></span>
                                    <a href="https://wpocean.com/wp/hostar/shop/" class="view-cart-btn"> Go To Shop </a>
                                </div>
                            </div>
                        </div>
                        <div class="wpo-header-search-form-wrapper">
                            <button class="search-toggle-btn"><i class="fi flaticon-search"></i></button>
                            <div class="wpo-header-search-form">
                                <form method="get" class="searchform" action="#">
                                    <div>
                                        <input type="text" name="s" class="form-control" placeholder="Search...">
                                        <button type="submit"><i class="fi flaticon-search"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div><!-- end of container -->


            </nav>
        </header>

        <div data-elementor-type="wp-page" data-elementor-id="59" class="elementor elementor-59">
            <div class="elementor-inner">
                <div class="elementor-section-wrap">
                    <section
                        class="elementor-section elementor-top-section elementor-element elementor-element-8a216db elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="8a216db" data-element_type="section"
                        data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
                        <div class="elementor-background-overlay"></div>
                        <div class="elementor-container elementor-column-gap-no">
                            <div class="elementor-row">
                                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d94acfc"
                                    data-id="d94acfc" data-element_type="column">
                                    <div class="elementor-column-wrap elementor-element-populated">
                                        <div class="elementor-widget-wrap">
                                            <div class="elementor-element elementor-element-57adda0 elementor-widget elementor-widget-tmx-hostar_banner"
                                                data-id="57adda0" data-element_type="widget"
                                                {{-- data-settings="{&quot;hero_image&quot;:{&quot;url&quot;:&quot;http:\/\/wpocean.com\/wp\/hostar\/wp-content\/uploads\/2020\/03\/hero-2vec.png&quot;,&quot;id&quot;:729},&quot;bg_image&quot;:{&quot;url&quot;:&quot;&quot;,&quot;id&quot;:&quot;&quot;}}" --}}
                                                data-widget_type="tmx-hostar_banner.default">
                                                <div class="elementor-widget-container">
                                                    <div class="wpo-hero-area  wpo-hero-style-2">
                                                        <div class="container">
                                                            <div class="row">
                                                                <div class="col col-lg-6 col-md-7">
                                                                    <div class="wpo-hero-text">
                                                                        <div class="wpo-hero-title">
                                                                            <h2>Fast &amp; Secure best web hosting</h2>
                                                                        </div>
                                                                        <div class="wpo-hero-para">
                                                                            <p>Extremely fast &amp; secure website
                                                                                hosting WordPress Theme. We offer Best
                                                                                Web Hosting &amp; Domain.

                                                                            </p>
                                                                        </div>
                                                                        <div class="btns">
                                                                            <a href="https://wpocean.com/wp/hostar/service/shared-hosting/"
                                                                                class="theme-btn">Get Started</a><a
                                                                                href="https://wpocean.com/wp/hostar/contact/"
                                                                                class="theme-btn-s2">Know More</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> <!-- end container -->
                                                        <div class="right-vec"
                                                            style="background-image: url( {{ asset('images/hero-2vec.png') }} );">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        class="elementor-section elementor-top-section elementor-element elementor-element-b97a3a7 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="b97a3a7" data-element_type="section">
                        <div class="elementor-container elementor-column-gap-default">
                            <div class="elementor-row">
                                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-37f82ab"
                                    data-id="37f82ab" data-element_type="column">
                                    <div class="elementor-column-wrap elementor-element-populated">
                                        <div class="elementor-widget-wrap">
                                            <div class="elementor-element elementor-element-e53720d elementor-widget elementor-widget-tmx-hostar_domain"
                                                data-id="e53720d" data-element_type="widget"
                                                data-widget_type="tmx-hostar_domain.default">
                                                <div class="elementor-widget-container">
                                                    <div class="wpo-search-section">
                                                        <div class="wpo-search-wrap sda-form-area">
                                                            <div class="wpo-search-area">
                                                                <div id='domain-form' class='hostar-form'>
                                                                    <div id='hostar-style'>
                                                                        <form method='post' action='#' id='form'
                                                                            class='clearfix pure-form domain-search-form'>
                                                                            <div>
                                                                                <input type='hidden' name='item_id'
                                                                                    value='https://demo.whmcsadmintheme.com/'>
                                                                                <input type='hidden' name='tld'
                                                                                    value=''>
                                                                                <input type='text'
                                                                                    class='iddomainname form-control'
                                                                                    autocomplete='off' id='Search'
                                                                                    name='domain'
                                                                                    placeholder='Enter Your Domain Name'>

                                                                            </div>
                                                                            <div>
                                                                                <input id='find' type='submit'
                                                                                    value='Search Domain'>
                                                                            </div>
                                                                        </form>

                                                                        <div id='loading'><img decoding="async"
                                                                                src="{{ asset('images/load.gif') }}"
                                                                                alt></div>
                                                                        <div class='domain-search-result'
                                                                            style='max-width:900px;'>
                                                                            <div id='results' class='result large'>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="wpo-host-list">
                                                                    <ul>
                                                                        <li><span>.com </span>$11.25</li>
                                                                        <li><span>.org</span> $12.50</li>
                                                                        <li><span>.net</span> $14.50</li>
                                                                        <li><span>.co</span> $11.50</li>
                                                                        <li><span>.info</span> $9.00</li>
                                                                        <li><span>.xyz</span> $0.99</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        class="elementor-section elementor-top-section elementor-element elementor-element-a4944c6 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="a4944c6" data-element_type="section">
                        <div class="elementor-container elementor-column-gap-no">
                            <div class="elementor-row">
                                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-44d68b2"
                                    data-id="44d68b2" data-element_type="column">
                                    <div class="elementor-column-wrap elementor-element-populated">
                                        <div class="elementor-widget-wrap">
                                            <div class="elementor-element elementor-element-14a731e elementor-widget elementor-widget-tmx-hostar_feature"
                                                data-id="14a731e" data-element_type="widget"
                                                data-widget_type="tmx-hostar_feature.default">
                                                <div class="elementor-widget-container">
                                                    <div class="hostar-feature wpo-features-area">
                                                        <div class="container">
                                                            <div class="row">
                                                                <div class="col-md-4 col-sm-6 custom-grid col-12">
                                                                    <div class="wpo-features-item">
                                                                        <div class="wpo-features-single">
                                                                            <div class="wpo-features-icon">
                                                                                <i class='fi flaticon-startup'></i>
                                                                            </div>
                                                                            <div class="wpo-features-text">
                                                                                <h2>Faster Loading Speed</h2>
                                                                                <p>Getting your website live is as
                                                                                    simple as a click of a button.
                                                                                    Everything you need - provided in a
                                                                                    clear way.</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="wpo-features-img">
                                                                            <img decoding="async"
                                                                                src="{{ asset('images/feature-1.png') }}"
                                                                                alt="">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4 col-sm-6 custom-grid col-12">
                                                                    <div class="wpo-features-item">
                                                                        <div class="wpo-features-single">
                                                                            <div class="wpo-features-icon">
                                                                                <i class='fi flaticon-label'></i>
                                                                            </div>
                                                                            <div class="wpo-features-text">
                                                                                <h2>99% Uptime Guarantee</h2>
                                                                                <p>Getting your website live is as
                                                                                    simple as a click of a button.
                                                                                    Everything you need - provided in a
                                                                                    clear way.</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="wpo-features-img">
                                                                            <img decoding="async"
                                                                                src="{{ asset('images/feature-2.png') }}"
                                                                                alt="">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4 col-sm-6 custom-grid col-12">
                                                                    <div class="wpo-features-item">
                                                                        <div class="wpo-features-single">
                                                                            <div class="wpo-features-icon">
                                                                                <i class='fi flaticon-support'></i>
                                                                            </div>
                                                                            <div class="wpo-features-text">
                                                                                <h2>24/7 Customer Support</h2>
                                                                                <p>Getting your website live is as
                                                                                    simple as a click of a button.
                                                                                    Everything you need - provided in a
                                                                                    clear way.</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="wpo-features-img">
                                                                            <img decoding="async"
                                                                                src="{{ asset('images/feature-3.png') }}"
                                                                                alt="">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        class="elementor-section elementor-top-section elementor-element elementor-element-eaf1461 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="eaf1461" data-element_type="section"
                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div class="elementor-container elementor-column-gap-no">
                            <div class="elementor-row">
                                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-275b0fc"
                                    data-id="275b0fc" data-element_type="column">
                                    <div class="elementor-column-wrap elementor-element-populated">
                                        <div class="elementor-widget-wrap">
                                            <div class="elementor-element elementor-element-8b5c7c8 elementor-widget elementor-widget-tmx-hostar_title"
                                                data-id="8b5c7c8" data-element_type="widget"
                                                data-widget_type="tmx-hostar_title.default">
                                                <div class="elementor-widget-container">
                                                    <div class="col col-lg-12">
                                                        <div class="section-title">
                                                            <h2>Our Pricing Plan</h2>
                                                            <p>Start saving today.If you are not happy with our services
                                                                for whatever reason, we’ll refund your payment.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-0cf20f4 elementor-widget elementor-widget-tmx-hostar_pricing"
                                                data-id="0cf20f4" data-element_type="widget"
                                                data-widget_type="tmx-hostar_pricing.default">
                                                <div class="elementor-widget-container">
                                                    <div class="wpo-pricing-area-2">
                                                        <div class="container">
                                                            <div class="row">
                                                                <div class="col-12">
                                                                    <div class="Pricing-header">
                                                                        <ul class="nav nav-tabs">
                                                                            <li class="active"><a data-toggle="tab"
                                                                                    href="#Monthly">Monthly</a></li>
                                                                            <li><a data-toggle="tab"
                                                                                    href="#Yearly">Yearly</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="tab-content">
                                                                <div id="Monthly" class="tab-pane active">
                                                                    <div class="row">
                                                                        <div
                                                                            class="col-md-4 col-sm-6 col-12 custom-grid">
                                                                            <div class="wpo-pricing-item">
                                                                                <h3>Cloud Hosting</h3>

                                                                                <h2>$15.00<span>/Monthly</span></h2>
                                                                                <div class="wpo-pricing-list">
                                                                                    <ul>
                                                                                        <li>10GB Space</li>
                                                                                        <li>100% High Performence</li>
                                                                                        <li>300GB SSD Disk</li>
                                                                                        <li>5 Domain Hosted Support</li>
                                                                                        <li>Unlimited Support</li>
                                                                                    </ul>
                                                                                </div>
                                                                                <a href="https://wpocean.com/wp/hostar/product/cloud-hosting/"
                                                                                    class="wpo-pricing-btn ">Started
                                                                                    Now</a>
                                                                                <div class="shape-1"></div>
                                                                                <div class="shape-2"></div>
                                                                                <div class="shape-3"></div>
                                                                                <div class="shape-4"></div>
                                                                                <div class="shape-5"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            class="col-md-4 col-sm-6 col-12 custom-grid">
                                                                            <div class="wpo-pricing-item">
                                                                                <h3>VPS Hosting</h3>

                                                                                <h2>$25.00<span>/Monthly</span></h2>
                                                                                <div class="wpo-pricing-list">
                                                                                    <ul>
                                                                                        <li>10GB Space</li>
                                                                                        <li>100% High Performence</li>
                                                                                        <li>300GB SSD Disk</li>
                                                                                        <li>5 Domain Hosted Support</li>
                                                                                        <li>Unlimited Support</li>
                                                                                    </ul>
                                                                                </div>
                                                                                <a href="https://wpocean.com/wp/hostar/product/dedicated-hosting/"
                                                                                    class="wpo-pricing-btn ">Started
                                                                                    Now</a>
                                                                                <div class="shape-1"></div>
                                                                                <div class="shape-2"></div>
                                                                                <div class="shape-3"></div>
                                                                                <div class="shape-4"></div>
                                                                                <div class="shape-5"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            class="col-md-4 col-sm-6 col-12 custom-grid">
                                                                            <div class="wpo-pricing-item">
                                                                                <h3>Shared Hosting</h3>

                                                                                <h2>$49.00<span>/Monthly</span></h2>
                                                                                <div class="wpo-pricing-list">
                                                                                    <ul>
                                                                                        <li>10GB Space</li>
                                                                                        <li>100% High Performence</li>
                                                                                        <li>300GB SSD Disk</li>
                                                                                        <li>5 Domain Hosted Support</li>
                                                                                        <li>Unlimited Support</li>
                                                                                    </ul>
                                                                                </div>
                                                                                <a href="https://wpocean.com/wp/hostar/product/reseller-hosting/"
                                                                                    class="wpo-pricing-btn ">Started
                                                                                    Now</a>
                                                                                <div class="shape-1"></div>
                                                                                <div class="shape-2"></div>
                                                                                <div class="shape-3"></div>
                                                                                <div class="shape-4"></div>
                                                                                <div class="shape-5"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="Yearly" class="tab-pane">
                                                                    <div class="row">
                                                                        <div
                                                                            class="col-md-4 col-sm-6 col-12 custom-grid">
                                                                            <div class="wpo-pricing-item">
                                                                                <h3>Shared Hosting</h3>

                                                                                <h2>$20.00<span>/Yearly</span></h2>
                                                                                <div class="wpo-pricing-list">
                                                                                    <ul>
                                                                                        <li>10GB Space</li>
                                                                                        <li>100% High Performence</li>
                                                                                        <li>300GB SSD Disk</li>
                                                                                        <li>5 Domain Hosted Support</li>
                                                                                        <li>Unlimited Support</li>
                                                                                    </ul>
                                                                                </div>
                                                                                <a href="https://wpocean.com/wp/hostar/product/reseller-hosting/"
                                                                                    class="wpo-pricing-btn">Chose Plan
                                                                                    Now</a>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            class="col-md-4 col-sm-6 col-12 custom-grid">
                                                                            <div class="wpo-pricing-item">
                                                                                <h3>VPS Hosting</h3>

                                                                                <h2>$29.00<span>/Yearly</span></h2>
                                                                                <div class="wpo-pricing-list">
                                                                                    <ul>
                                                                                        <li>10GB Space</li>
                                                                                        <li>100% High Performence</li>
                                                                                        <li>300GB SSD Disk</li>
                                                                                        <li>5 Domain Hosted Support</li>
                                                                                        <li>Unlimited Support</li>
                                                                                    </ul>
                                                                                </div>
                                                                                <a href="https://wpocean.com/wp/hostar/product/dedicated-hosting/"
                                                                                    class="wpo-pricing-btn">Chose Plan
                                                                                    Now</a>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            class="col-md-4 col-sm-6 col-12 custom-grid">
                                                                            <div class="wpo-pricing-item">
                                                                                <h3>Cloud Hosting</h3>

                                                                                <h2>$59.00<span>/Yearly</span></h2>
                                                                                <div class="wpo-pricing-list">
                                                                                    <ul>
                                                                                        <li>10GB Space</li>
                                                                                        <li>100% High Performence</li>
                                                                                        <li>300GB SSD Disk</li>
                                                                                        <li>5 Domain Hosted Support</li>
                                                                                        <li>Unlimited Support</li>
                                                                                    </ul>
                                                                                </div>
                                                                                <a href="https://wpocean.com/wp/hostar/product/cloud-hosting/"
                                                                                    class="wpo-pricing-btn">Chose Plan
                                                                                    Now</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        class="elementor-section elementor-top-section elementor-element elementor-element-ea3c156 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="ea3c156" data-element_type="section">
                        <div class="elementor-container elementor-column-gap-no">
                            <div class="elementor-row">
                                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-af322cf"
                                    data-id="af322cf" data-element_type="column">
                                    <div class="elementor-column-wrap elementor-element-populated">
                                        <div class="elementor-widget-wrap">
                                            <div class="elementor-element elementor-element-d836813 elementor-widget elementor-widget-tmx-hostar_title"
                                                data-id="d836813" data-element_type="widget"
                                                data-widget_type="tmx-hostar_title.default">
                                                <div class="elementor-widget-container">
                                                    <div class="col col-lg-12">
                                                        <div class="section-title">
                                                            <h2>Our Services</h2>
                                                            <p>If you are not happy with our services for whatever
                                                                reason, we'll refund your payment. No hassle, no risk.

                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-64b94e2 elementor-widget elementor-widget-tmx-hostar_service"
                                                data-id="64b94e2" data-element_type="widget"
                                                data-widget_type="tmx-hostar_service.default">
                                                <div class="elementor-widget-container">
                                                    <div class="wpo-service-area">
                                                        <div class="container">
                                                            <div class="row">
                                                                <div class="col-lg-4 col-sm-6 col-12 custom-grid">
                                                                    <div class="wpo-service-item">
                                                                        <div class="wpo-service-icon">
                                                                            <img decoding="async"
                                                                                src="{{ asset('images/server.png') }}"
                                                                                alt="">
                                                                        </div>
                                                                        <div class="wpo-service-text">
                                                                            <h2><a
                                                                                    href="https://wpocean.com/wp/hostar/service/domain-name/">WordPress
                                                                                    Hosting</a></h2>
                                                                            <p>Web hosting is a service that allows
                                                                                organizations and individuals to post a
                                                                                website or web page.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-sm-6 col-12 custom-grid">
                                                                    <div class="wpo-service-item">
                                                                        <div class="wpo-service-icon">
                                                                            <img decoding="async"
                                                                                src="{{ asset('images/refresh.png') }}"
                                                                                alt="">
                                                                        </div>
                                                                        <div class="wpo-service-text">
                                                                            <h2><a
                                                                                    href="https://wpocean.com/wp/hostar/service/dedicated-hosting/">Dedicated
                                                                                    Hosting</a></h2>
                                                                            <p>Web hosting is a service that allows
                                                                                organizations and individuals to post a
                                                                                website or web page.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-sm-6 col-12 custom-grid">
                                                                    <div class="wpo-service-item">
                                                                        <div class="wpo-service-icon">
                                                                            <img decoding="async"
                                                                                src="{{ asset('images/database.png') }}"
                                                                                alt="">
                                                                        </div>
                                                                        <div class="wpo-service-text">
                                                                            <h2><a
                                                                                    href="https://wpocean.com/wp/hostar/service/reseller-hosting/">Reseller
                                                                                    Hosting</a></h2>
                                                                            <p>Web hosting is a service that allows
                                                                                organizations and individuals to post a
                                                                                website or web page.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-sm-6 col-12 custom-grid">
                                                                    <div class="wpo-service-item">
                                                                        <div class="wpo-service-icon">
                                                                            <img decoding="async"
                                                                                src="{{ asset('images/web.png') }}"
                                                                                alt="">
                                                                        </div>
                                                                        <div class="wpo-service-text">
                                                                            <h2><a
                                                                                    href="https://wpocean.com/wp/hostar/service/cloud-hosting/">Cloud
                                                                                    Hosting</a></h2>
                                                                            <p>Web hosting is a service that allows
                                                                                organizations and individuals to post a
                                                                                website or web page.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-sm-6 col-12 custom-grid">
                                                                    <div class="wpo-service-item">
                                                                        <div class="wpo-service-icon">
                                                                            <img decoding="async"
                                                                                src="{{ asset('images/technology.png') }}"
                                                                                alt="">
                                                                        </div>
                                                                        <div class="wpo-service-text">
                                                                            <h2><a
                                                                                    href="https://wpocean.com/wp/hostar/service/vps-hosting/">VPS
                                                                                    Hosting</a></h2>
                                                                            <p>Web hosting is a service that allows
                                                                                organizations and individuals to post a
                                                                                website or web page.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-sm-6 col-12 custom-grid">
                                                                    <div class="wpo-service-item">
                                                                        <div class="wpo-service-icon">
                                                                            <img decoding="async"
                                                                                src="{{ asset('images/server-1.png') }}"
                                                                                alt="">
                                                                        </div>
                                                                        <div class="wpo-service-text">
                                                                            <h2><a
                                                                                    href="https://wpocean.com/wp/hostar/service/shared-hosting/">Shared
                                                                                    Hosting</a></h2>
                                                                            <p>Web hosting is a service that allows
                                                                                organizations and individuals to post a
                                                                                website or web page.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        class="elementor-section elementor-top-section elementor-element elementor-element-37a05d6 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="37a05d6" data-element_type="section"
                        data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
                        <div class="elementor-background-overlay"></div>
                        <div class="elementor-container elementor-column-gap-default">
                            <div class="elementor-row">
                                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-34c264e"
                                    data-id="34c264e" data-element_type="column">
                                    <div class="elementor-column-wrap elementor-element-populated">
                                        <div class="elementor-widget-wrap">
                                            <div class="elementor-element elementor-element-3e57c27 elementor-widget elementor-widget-tmx-hostar_cta"
                                                data-id="3e57c27" data-element_type="widget"
                                                data-widget_type="tmx-hostar_cta.default">
                                                <div class="elementor-widget-container">
                                                    <div class="wpo-cta-area">
                                                        <div class="wpo-cta-text">
                                                            <h2>Limited time offer:</h2>
                                                            <p>Limited time offer: get an SSL for FREE Lets Get Started
                                                                with Hostar Now Limited time also customer support
                                                                responses are fast. </p>
                                                            <div class="btns-wpo-cta">
                                                                <a href="https://wpocean.com/wp/hostar/my-account/"
                                                                    class="theme-btn-s4">Creat Your Account</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        class="elementor-section elementor-top-section elementor-element elementor-element-fb1a8a5 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="fb1a8a5" data-element_type="section"
                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div class="elementor-container elementor-column-gap-default">
                            <div class="elementor-row">
                                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5d2c269"
                                    data-id="5d2c269" data-element_type="column">
                                    <div class="elementor-column-wrap elementor-element-populated">
                                        <div class="elementor-widget-wrap">
                                            <div class="elementor-element elementor-element-51a28d6 elementor-widget elementor-widget-heading"
                                                data-id="51a28d6" data-element_type="widget"
                                                data-widget_type="heading.default">
                                                <div class="elementor-widget-container">
                                                    <span
                                                        class="elementor-heading-title elementor-size-default">TESTIMONIALS
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-e6cfe30 elementor-widget elementor-widget-heading"
                                                data-id="e6cfe30" data-element_type="widget"
                                                data-widget_type="heading.default">
                                                <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">What
                                                        People Say’s About Us
                                                    </h2>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-52f7cfe elementor-widget elementor-widget-tmx-hostar_testimonial"
                                                data-id="52f7cfe" data-element_type="widget"
                                                data-widget_type="tmx-hostar_testimonial.default">
                                                <div class="elementor-widget-container">

                                                    <div class="testimonials-section">
                                                        <div class="row">
                                                            <div class="col col-xs-12">
                                                                <div class="testimonial-grids clearfix">

                                                                    <div class="grid">
                                                                        <div class="quote">
                                                                            <p>Awesome theme, easy to use. Should there
                                                                                be any problem, the customer support
                                                                                responses are fast and very helpful
                                                                                support.</p>
                                                                        </div>
                                                                        <div class="client-info">
                                                                            <div class="img-holder">
                                                                                <img decoding="async"
                                                                                    src="{{ asset('images/testi-1.1.jpg') }}"
                                                                                    alt="">
                                                                            </div>
                                                                            <div class="details">
                                                                                <h5>Robert Frost</h5>
                                                                                <p>- CEO of Brabantio</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="grid">
                                                                        <div class="quote">
                                                                            <p>Awesome theme, easy to use. Should there
                                                                                be any problem, the customer support
                                                                                responses are fast and very helpful
                                                                                support.</p>
                                                                        </div>
                                                                        <div class="client-info">
                                                                            <div class="img-holder">
                                                                                <img decoding="async"
                                                                                    src="{{ asset('images/testti-2.2.jpg') }}"
                                                                                    alt="">
                                                                            </div>
                                                                            <div class="details">
                                                                                <h5>Jhone Duo</h5>
                                                                                <p>- CEO of Hostar</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="grid">
                                                                        <div class="quote">
                                                                            <p>Awesome theme, easy to use. Should there
                                                                                be any problem, the customer support
                                                                                responses are fast and very helpful
                                                                                support.</p>
                                                                        </div>
                                                                        <div class="client-info">
                                                                            <div class="img-holder">
                                                                                <img decoding="async"
                                                                                    src="{{ asset('images/testi-3.3.jpg') }}"
                                                                                    alt="">
                                                                            </div>
                                                                            <div class="details">
                                                                                <h5>Nickel Jhon</h5>
                                                                                <p>- CEO of Hostar</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        class="elementor-section elementor-top-section elementor-element elementor-element-b2a8231 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="b2a8231" data-element_type="section">
                        <div class="elementor-container elementor-column-gap-default">
                            <div class="elementor-row">
                                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3d54a1c"
                                    data-id="3d54a1c" data-element_type="column">
                                    <div class="elementor-column-wrap elementor-element-populated">
                                        <div class="elementor-widget-wrap">
                                            <div class="elementor-element elementor-element-d7abc4b elementor-widget elementor-widget-tmx-hostar_title"
                                                data-id="d7abc4b" data-element_type="widget"
                                                data-widget_type="tmx-hostar_title.default">
                                                <div class="elementor-widget-container">
                                                    <div class="col col-lg-12">
                                                        <div class="section-title">
                                                            <h2>Latest News </h2>
                                                            <p>If you are not happy with our services for whatever
                                                                reason, we'll refund your payment. No hassle, no risk.

                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-6698531 elementor-widget elementor-widget-wpo-hostar_blog"
                                                data-id="6698531" data-element_type="widget"
                                                data-settings="{&quot;blog_column&quot;:&quot;col-3&quot;}"
                                                data-widget_type="wpo-hostar_blog.default">
                                                <div class="elementor-widget-container">

                                                    <div class="blog-section">
                                                        <div class="blog-grids">
                                                            <div class="grid">
                                                                <div class="entry-media">
                                                                    <img decoding="async"
                                                                        src="{{ asset('images/grid-1-1.jpg') }}"
                                                                        alt="">
                                                                    <div class="date">
                                                                        <p>Jan<span>09</span></p>
                                                                    </div>
                                                                </div>
                                                                <div class="entry-details">
                                                                    <h3><a
                                                                            href="https://wpocean.com/wp/hostar/improving-website-performance-with-litespeed/">Improving
                                                                            Website Performance with LiteSpeed</a></h3>
                                                                    <div class="entry-meta clearfix">
                                                                        <ul>
                                                                            <li>
                                                                                <i class="ti-user"></i>
                                                                                By: <a
                                                                                    href="https://wpocean.com/wp/hostar/author/developer/"
                                                                                    rel="author">Developer</a>
                                                                            </li>
                                                                            <li>
                                                                                <a class="hostar-comment"
                                                                                    href="https://wpocean.com/wp/hostar/improving-website-performance-with-litespeed/#respond">
                                                                                    <i class="ti-comment-alt"></i>
                                                                                    Comments (<span
                                                                                        class="comment">0</span>) </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="grid">
                                                                <div class="entry-media">
                                                                    <img decoding="async"
                                                                        src="{{ asset('images/grid-2-1.jpg') }}"
                                                                        alt="">
                                                                    <div class="date">
                                                                        <p>Jan<span>09</span></p>
                                                                    </div>
                                                                </div>
                                                                <div class="entry-details">
                                                                    <h3><a
                                                                            href="https://wpocean.com/wp/hostar/the-definitive-list-of-digital-products-you-can-sell/">The
                                                                            definitive list of digital products you can
                                                                            sell</a></h3>
                                                                    <div class="entry-meta clearfix">
                                                                        <ul>
                                                                            <li>
                                                                                <i class="ti-user"></i>
                                                                                By: <a
                                                                                    href="https://wpocean.com/wp/hostar/author/developer/"
                                                                                    rel="author">Developer</a>
                                                                            </li>
                                                                            <li>
                                                                                <a class="hostar-comment"
                                                                                    href="https://wpocean.com/wp/hostar/the-definitive-list-of-digital-products-you-can-sell/#respond">
                                                                                    <i class="ti-comment-alt"></i>
                                                                                    Comments (<span
                                                                                        class="comment">0</span>) </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="grid">
                                                                <div class="entry-media">
                                                                    <img decoding="async"
                                                                        src="{{ asset('images/grid-3-1.jpg') }}"
                                                                        alt="">
                                                                    <div class="date">
                                                                        <p>Jan<span>09</span></p>
                                                                    </div>
                                                                </div>
                                                                <div class="entry-details">
                                                                    <h3><a
                                                                            href="https://wpocean.com/wp/hostar/25-best-hosting-compani-all-over-the-world/">25
                                                                            Best Hosting Compani All Over the World</a>
                                                                    </h3>
                                                                    <div class="entry-meta clearfix">
                                                                        <ul>
                                                                            <li>
                                                                                <i class="ti-user"></i>
                                                                                By: <a
                                                                                    href="https://wpocean.com/wp/hostar/author/developer/"
                                                                                    rel="author">Developer</a>
                                                                            </li>
                                                                            <li>
                                                                                <a class="hostar-comment"
                                                                                    href="https://wpocean.com/wp/hostar/25-best-hosting-compani-all-over-the-world/#respond">
                                                                                    <i class="ti-comment-alt"></i>
                                                                                    Comments (<span
                                                                                        class="comment">0</span>) </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="page-pagination-wrap">
                                                                <div class="paginations"></div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <!-- Footer -->
        <footer class="wpo-site-footer">
            <!-- Footer Widgets -->
            <div class="upper-footer">
                <div class="footer-widget-area">
                    <div class="container">
                        <div class="row">
                            <div class="col col-lg-3 col-md-3 col-sm-6">
                                <div class=" widget text-widget">
                                    <div class="widget about-widget ">
                                        <div class="logo widget-title">
                                            <img src="{{ asset('images/tr-logo.png') }}"
                                                alt="">
                                        </div>
                                        <p>High Quality Hosting WordPress Theme in Envato Market. We offer Best Web
                                            Hosting &amp; Domain.</p>
                                        <div class="social-icons">
                                            <ul>
                                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                                <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                </div> <!-- end widget -->
                            </div>
                            <div class="col col-lg-3 col-md-3 col-sm-6">
                                <div class="widget_text link-widget resource-widget widget widget_custom_html">
                                    <div class="widget-title">
                                        <h3>Resources</h3>
                                    </div>
                                    <div class="textwidget custom-html-widget">
                                        <ul>
                                            <li><a href="#">WordPress Hosting</a></li>
                                            <li><a href="#">Cloud Hosting</a></li>
                                            <li><a href="#">Shared Hosting</a></li>
                                            <li><a href="#">VPS Hosting</a></li>
                                            <li><a href="#">Dedicated Hosting</a></li>
                                        </ul>
                                    </div>
                                    <div class="clear"></div>
                                </div> <!-- end widget -->
                            </div>
                            <div class="col col-lg-3 col-md-3 col-sm-6">
                                <div class="widget_text link-widget  widget widget_custom_html">
                                    <div class="widget-title">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <div class="textwidget custom-html-widget">
                                        <ul>
                                            <li><a href="https://wpocean.com/wp/hostar/about/">About Us</a></li>
                                            <li><a href="https://wpocean.com/wp/hostar/hosting/">Our Services</a></li>
                                            <li><a href="https://wpocean.com/wp/hostar/pricing/">Our Pricing</a></li>
                                            <li><a href="https://wpocean.com/wp/hostar/blog/">Latest News</a></li>
                                            <li><a href="https://wpocean.com/wp/hostar/contact/">Contact Us</a></li>
                                        </ul>
                                    </div>
                                    <div class="clear"></div>
                                </div> <!-- end widget -->
                            </div>
                            <div class="col col-lg-3 col-md-3 col-sm-6">
                                <div class=" widget text-widget">
                                    <div class="widget-title">
                                        <h3>Contact</h3>
                                    </div>
                                    <div class="contact-widget service-link-widget">
                                        <ul>
                                            <li>online store with lots of cool and exclusive wp-features</li>
                                            <li><span>Address:</span>28 Street, New York City, USA</li>
                                            <li><span>Phone:</span>+000123456789</li>
                                            <li><span>Email:</span>hostar@gmail.com</li>
                                        </ul>
                                    </div>
                                    <div class="clear"></div>
                                </div> <!-- end widget -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer Widgets -->
            <div class="wpo-lower-footer  has-not-copyright text-center">
                <div class="container">
                    <div class="row">
                        <div class="separator"></div>
                        <div class="col col-xs-12">
                            <p>&copy; Copyright 2022 | <a href="https://wpocean.com/wp/hostar">Hostar – Web Hosting</a>
                                | All right reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- Footer -->
    </div>
    <!--hostar-theme-wrapper -->
    <script type="text/javascript">
        (function () {
			var c = document.body.className;
			c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
			document.body.className = c;
		})();
    </script>
    <link rel='stylesheet' id='e-animations-css' href={{ asset('css/animations.min.css') }} type='text/css' media='all' />
    <script type='text/javascript' src="{{ asset('js/index.js') }}" id='swv-js'></script>
    <script type='text/javascript' id='contact-form-7-js-extra'>
            /* <![CDATA[ */
    var wpcf7 = {"api":{"root":"https:\/\/wpocean.com\/wp\/hostar\/wp-json\/","namespace":"contact-form-7\/v1"}};
    /* ]]> */
    </script>
    <script type='text/javascript' src="{{('js/includes-js-index.js') }}" id='contact-form-7-js'></script>
    <script type='text/javascript' src="{{ asset('js/plugin-scripts.js') }}" id='plugin-scripts-js'></script>
    <script type='text/javascript' src="{{ asset('js/jquery/jquery.blockUI.min.js') }}" id='jquery-blockui-js'></script>
    <script type='text/javascript' id='wc-add-to-cart-js-extra'>
        /* <![CDATA[ */
        var wc_add_to_cart_params = {"ajax_url":"\/wp\/hostar\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/wp\/hostar\/?wc-ajax=%%endpoint%%","i18n_view_cart":"View cart","cart_url":"https:\/\/wpocean.com\/wp\/hostar\/cart\/","is_cart":"","cart_redirect_after_add":"no"};
        /* ]]> */
    </script>
    <script type='text/javascript' src="{{ asset('js/add-to-cart.min.js') }}" id='wc-add-to-cart-js'></script>
    <script type='text/javascript' src="{{ asset('js/js.cookie.min.js') }}" id='js-cookie-js'></script>
    <script type='text/javascript' id='woocommerce-js-extra'>
        /* <![CDATA[ */
        var woocommerce_params = {"ajax_url":"\/wp\/hostar\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/wp\/hostar\/?wc-ajax=%%endpoint%%"};
        /* ]]> */
    </script>
    <script type='text/javascript' src="{{ asset('js/woocommerce.min.js') }}" id='woocommerce-js'></script>
    <script type='text/javascript' id='wc-cart-fragments-js-extra'>
        /* <![CDATA[ */
        var wc_cart_fragments_params = {"ajax_url":"\/wp\/hostar\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/wp\/hostar\/?wc-ajax=%%endpoint%%","cart_hash_key":"wc_cart_hash_c1056b798542b05b0807850da6870a1d","fragment_name":"wc_fragments_c1056b798542b05b0807850da6870a1d","request_timeout":"5000"};
        /* ]]> */
    </script>
    <script type='text/javascript' src="{{ asset('js/cart-fragments.min.js') }}" id='wc-cart-fragments-js'></script>
    <script type='text/javascript' src="{{ asset('js/bootstrap.min.js') }}" id='bootstrap-js'></script>
    <script type='text/javascript' src="{{ asset('js/imagesloaded.min.js') }}" id='imagesloaded-js'></script>
    <script type='text/javascript' src="{{ asset('js/isotope.min.js') }}" id='isotope-js'></script>
    <script type='text/javascript' src="{{ asset('js/fancybox.min.js') }}" id='fancybox-js'></script>
    <script type='text/javascript' src="{{ asset('js/masonry.min.js') }}" id='masonry-js'></script>
    <script type='text/javascript' src="{{ asset('js/owl-carousel.js') }}" id='owl-carousel-js'></script>
    <script type='text/javascript' src="{{ asset('js/jquery-easing.js') }}" id='jquery-easing-js'></script>
    <script type='text/javascript' src="{{ asset('js/wow.min.js') }}" id='wow-js'></script>
    <script type='text/javascript' src="{{ asset('js/odometer.min.js') }}" id='odometer-js'></script>
    <script type='text/javascript' src="{{ asset('js/magnific-popup.js') }}" id='magnific-popup-js'></script>
    <script type='text/javascript' src="{{ asset('js/slick-slider.js') }}" id='slick-slider-js'></script>
    <script type='text/javascript' src="{{ asset('js/swiper.min.js') }}" id='swiper-js'></script>
    <script type='text/javascript' src="{{ asset('js/niceSelect.js') }}" id='niceSelect-js'></script>
    <script type='text/javascript' src="{{ asset('js/wc-quantity-increment.js') }}" id='wc-quantity-increment-js'></script>
    <script type='text/javascript' src="{{ asset('js/scripts.js') }}" id='hostar-scripts-js'></script>
    <script type='text/javascript' src="{{ asset('js/jquery/jquery.validate.min.js') }}" id='hostar-validate-js'></script>
    <script type='text/javascript' src='https://www.google.com/recaptcha/api.js?render=6LeqIUYgAAAAABqyScypouxuLGm-ae0cEnKamFCe&#038;ver=3.0' id='google-recaptcha-js'></script>
    <script type='text/javascript' src="{{ asset('js/regenerator-runtime.min.js') }}" id='regenerator-runtime-js'></script>
    <script type='text/javascript' src="{{ asset('js/wp-polyfill.min.js') }}" id='wp-polyfill-js'></script>
    <script type='text/javascript' id='wpcf7-recaptcha-js-extra'>
        /* <![CDATA[ */
        var wpcf7_recaptcha = {"sitekey":"6LeqIUYgAAAAABqyScypouxuLGm-ae0cEnKamFCe","actions":{"homepage":"homepage","contactform":"contactform"}};
        /* ]]> */
    </script>
    <script type='text/javascript' src="{{ asset('js/index.js') }}" id='wpcf7-recaptcha-js'></script>
    <script type='text/javascript' id='hostar-script-js-extra'>
        /* <![CDATA[ */
        var hostar_script = {"req_domain_text":"Please enter your domain.","recaptcha_text":"Please verify that you are not a robot."};
        var hostar_ajax = {"ajaxurl":"\/wp\/hostar\/wp-admin\/admin-ajax.php","hostar_nonce":"54e62c4f2c"};
        /* ]]> */
    </script>
    <script type='text/javascript' src="{{ asset('js/script.js') }}" id='hostar-script-js'></script>
    <script type='text/javascript' src="{{ asset('js/webpack.runtime.min.js') }}" id='elementor-webpack-runtime-js'></script>
    <script type='text/javascript' src="{{ asset('js/frontend-modules.min.js') }}" id='elementor-frontend-modules-js'></script>
    <script type='text/javascript' src="{{ asset('js/waypoints.min.js') }}" id='elementor-waypoints-js'></script>
    <script type='text/javascript' src="{{ asset('js/jquery/core.min.js') }}" id='jquery-ui-core-js'></script>
    <script type='text/javascript' rc="{{ asset('js/share-link.min.js') }}" id='share-link-js'></script>
    <script type='text/javascript' src="{{ asset('js/dialog.min.js') }}" id='elementor-dialog-js'></script>
    <script type='text/javascript' id='elementor-frontend-js-before'>
        var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Extra","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Extra","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}}},"version":"3.8.0","is_static":false,"experimentalFeatures":{"e_import_export":true,"e_hidden_wordpress_widgets":true,"landing-pages":true,"elements-color-picker":true,"favorite-widgets":true,"admin-top-bar":true},"urls":{"assets":"https:\/\/wpocean.com\/wp\/hostar\/wp-content\/plugins\/elementor\/assets\/"},"settings":{"page":[],"editorPreferences":[]},"kit":{"global_image_lightbox":"yes","active_breakpoints":["viewport_mobile","viewport_tablet"],"lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":59,"title":"Hostar%20%E2%80%93%20Web%20Hosting%20%E2%80%93%20WordPress%20Theme","excerpt":"","featuredImage":false}};
    </script>
    <script type='text/javascript' src="{{ asset('js/frontend.min.js') }}" id='elementor-frontend-js'></script>
    <script type='text/javascript' src="{{ asset('js/preloaded-modules.min.js') }}" id='preloaded-modules-js'></script>
    <script type='text/javascript' src="{{ asset('js/hostar-elementor.js') }}" id='hostar-elementor-js'></script>
@endsection