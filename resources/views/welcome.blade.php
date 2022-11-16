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

        <x-headbar />
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
        <x-footer />
        <!-- Footer -->
    </div>
    @include('partials.scripts')
@endsection