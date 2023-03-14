<!DOCTYPE html>
<!--[if !IE]><!-->
<html lang="en-US">
<!--<![endif]-->

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="msapplication-TileColor" content="">
    <meta name="theme-color" content="">
    <link rel="profile" href="//gmpg.org/xfn/11">
    <title>Hostar - Web Hosting &#8211; @yield('title')</title>
    <meta name="description" content="@yield('description') - {{ config('app.name') }}" />
    <meta name='robots' content='max-image-preview:large' />
    <link rel='dns-prefetch' href='//www.google.com' />
    <link rel='dns-prefetch' href='//fonts.googleapis.com' />
    <link rel="alternate" type="application/rss+xml" title="Hostar - Web Hosting &raquo; Feed"
        href="{{ route('home') }}" />
    {{-- <link rel="alternate" type="application/rss+xml" title="Hostar - Web Hosting &raquo; Comments Feed" /> --}}
        {{-- href="https://wpocean.com/wp/hostar/comments/feed/" /> --}}
    <link rel='stylesheet' id='google-fonts-1-css'
        href='https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=auto&#038;ver=6.1'
        type='text/css' media='all' />
        
    <link rel='stylesheet' id='wp-block-library-css' href="{{ asset('css/style.min.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='wc-blocks-vendors-style-css' href="{{ asset('css/wc-blocks-vendors-style.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='wc-blocks-style-css' href="{{ asset('css/wc-blocks-style.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='classic-theme-styles-css' href="{{ asset('css/classic-themes.min.css')}}" type='text/css' media='all' />
    <link rel='stylesheet' id='global-styles-inline-css' href="{{ asset('css/global-styles.css') }}" type='text/css'>
    <link rel='stylesheet' id='contact-form-7-css' href="{{ asset('css/styles.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='hostar-elementor-css' href="{{ asset('css/hostar-elementor.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='woocommerce-layout-css' href="{{ asset('css/woocommerce-layout.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='woocommerce-smallscreen-css' href="{{ asset('css/woocommerce-smallscreen.css') }}" type='text/css' media='only screen and (max-width: 768px)' />
    <link rel='stylesheet' id='woocommerce-general-css' href="{{ asset('css/woocommerce.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='themify-icons-css' href="{{ asset('css/themify-icons.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='flaticon-css' href="{{ asset('css/flaticon.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='bootstrap-css' href="{{ asset('css/bootstrap.min.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='animate-css' href="{{ asset('css/animate.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='odometer-css' href="{{ asset('css/odometer.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='owl-carousel-css' href="{{ asset('css/owl.carousel.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='owl-theme-css' href="{{ asset('css/owl.theme.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='slick-css' href="{{ asset('css/slick.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='swiper-css' href="{{ asset('css/swiper.min.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='slick-theme-css' href="{{ asset('css/slick-theme.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='owl-transitions-css' href="{{ asset('css/owl.transitions.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='fancybox-css' href="{{ asset('css/fancybox.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='hostar-style-css' href="{{ asset('css/styles.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='element-css' href="{{ asset('css/elements.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='hostar-gutenberg-editor-styles-css' href="{{ asset('css/gutenberg-editor-style.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='hostar-default-google-fonts-css' href='//fonts.googleapis.com/css?family=Rubik%3A400%2C500%26display%3Dswap%7COpen+Sans%3A300%2C400%2C600%2C700%26display%3Dswap&#038;ver=1.0' type='text/css' media='all' />
    <link rel='stylesheet' id='hostar-responsive-css' href="{{ asset('css/responsive.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='hostar-default-style-css' href="{{ asset('css/style.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='elementor-icons-css' href="{{ asset('css/elementor-icons.min.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='elementor-frontend-legacy-css' href="{{ asset('css/frontend-legacy.min.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='elementor-frontend-css' href="{{ asset('css/frontend.min.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='elementor-post-19-css' href="{{ asset('css/post-19.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='elementor-post-589-css' href="{{ asset('css/post-589.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='font-awesome-5-all-css' href="{{ asset('css/all.min.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='font-awesome-4-shim-css' href="{{ asset('css/v4-shims.min.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='elementor-post-59-css' href="{{ asset('css/post-59.css') }}" type='text/css' media='all' />
    <link rel='stylesheet' id='elementor-post-23-css' href="{{ asset('css/post-23.css') }}" type='text/css' media='all' />
    
    <style id='woocommerce-inline-inline-css' type='text/css'>
        .woocommerce form .form-row .required {
            visibility: visible;
        }
    </style>
    <style id='hostar-default-style-inline-css' type='text/css'>
        .layout-boxed {}
    </style>
    <style type="text/css">
        img.wp-smiley,
        img.emoji {
            display: inline !important;
            border: none !important;
            box-shadow: none !important;
            height: 1em !important;
            width: 1em !important;
            margin: 0 0.07em !important;
            vertical-align: -0.1em !important;
            background: none !important;
            padding: 0 !important;
        }
    </style>
    <script type="text/javascript">
        window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/wpocean.com\/wp\/hostar\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.1"}};
        /*! This file is auto-generated */
        !function(e,a,t){var n,r,o,i=a.createElement("canvas"),p=i.getContext&&i.getContext("2d");function s(e,t){var a=String.fromCharCode,e=(p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,e),0,0),i.toDataURL());return p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,t),0,0),e===i.toDataURL()}function c(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(o=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},r=0;r<o.length;r++)t.supports[o[r]]=function(e){if(p&&p.fillText)switch(p.textBaseline="top",p.font="600 32px Arial",e){case"flag":return s([127987,65039,8205,9895,65039],[127987,65039,8203,9895,65039])?!1:!s([55356,56826,55356,56819],[55356,56826,8203,55356,56819])&&!s([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]);case"emoji":return!s([129777,127995,8205,129778,127999],[129777,127995,8203,129778,127999])}return!1}(o[r]),t.supports.everything=t.supports.everything&&t.supports[o[r]],"flag"!==o[r]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[o[r]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(e=t.source||{}).concatemoji?c(e.concatemoji):e.wpemoji&&e.twemoji&&(c(e.twemoji),c(e.wpemoji)))}(window,document,window._wpemojiSettings);
    </script>
    <script type='text/javascript' src="{{ asset('js/jquery/jquery.min.js') }}" id='jquery-core-js'></script>
    <script type='text/javascript' src="{{ asset('js/jquery/jquery-migrate.min.js') }}" id='jquery-migrate-js'></script>
    <script type='text/javascript' src="{{ asset('js/v4-shims.min.js') }}" id='font-awesome-4-shim-js'></script>
    <meta name="generator" content="WordPress 6.1" />
    <meta name="generator" content="WooCommerce 7.0.1" />
    <noscript>
        <style>
            .woocommerce-product-gallery {
                opacity: 1 !important;
            }
        </style>
    </noscript>
    {{-- <link rel="alternate" type="application/json+oembed" href="https://wpocean.com/wp/hostar/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwpocean.com%2Fwp%2Fhostar%2F" />
    <link rel="alternate" type="text/xml+oembed" href="https://wpocean.com/wp/hostar/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwpocean.com%2Fwp%2Fhostar%2F&#038;format=xml" /> --}}
    {{-- <link rel="https://api.w.org/" href="https://wpocean.com/wp/hostar/wp-json/" /> --}}
    {{-- <link rel="alternate" type="application/json" href="https://wpocean.com/wp/hostar/wp-json/wp/v2/pages/59" /> --}}
    {{-- <link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://wpocean.com/wp/hostar/xmlrpc.php?rsd" /> --}}
    {{-- <link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://wpocean.com/wp/hostar/wp-includes/wlwmanifest.xml" /> --}}
</head>

<body>
    @yield('content')
</body>

