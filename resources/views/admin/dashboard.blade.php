<html lang="en">

<head>
    <title>My Coin Auction - Your Dashboard</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <meta name="author" content="" />

    <!-- fontawesome icon -->
    <link rel="stylesheet" href="{{ asset('css/admin-font.css') }}">
    <!-- animation css -->
    <link rel="stylesheet" href="{{ asset('css/admin-animate.css') }}">
    <!-- vendor css -->

    <link href="{{ asset('css/admin-style.css') }}" rel="stylesheet">

    <style>
        .fixed-button.active {
            bottom: 50px;
            opacity: 1;
            visibility: hidden;
        }


        .fixed-button {
            bottom: 50px;
            opacity: 1;
            visibility: hidden;
        }
    </style>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-NGZW11GB1G"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-NGZW11GB1G');
        // 
    </script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

</head>

<body>
    <nav class="pcoded-navbar">
        <div class="navbar-wrapper">
            <div class="navbar-brand header-logo">
                <a href="{{ route('home')}}" class="b-brand">
                    <div class="b-bg">
                        <img class="b-brand b-bg" src="{{ asset('images/tr-logo.png') }}" alt="">
                    </div>
                </a>
                <a class="mobile-menu" id="mobile-collapse" href="javascript:"><span></span></a>
            </div>

            <div class="slimScrollDiv"
                style="position: relative; overflow: hidden; width: 100%; height: calc(100vh - 70px);">
                <div class="navbar-content scroll-div"
                    style="overflow: hidden; width: 100%; height: calc(100vh - 70px);">

                    <ul class="nav pcoded-inner-navbar">
                        <li class="nav-item pcoded-menu-caption">
                            <label>Navigation</label>
                        </li>
                        <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project"
                            class="nav-item active">
                            <a href="#" class="nav-link "><span class="pcoded-micon">
                                    <i class="feather icon-home"></i></span><span class="pcoded-mtext">Dashboard</span>
                            </a>
                        </li>
                        <li class="nav-item pcoded-menu-caption">
                            <label>UI Elements</label>
                        </li>
                        <li data-username="basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds"
                            class="nav-item pcoded-hasmenu">
                            <a href="javascript:" class="nav-link "><span class="pcoded-micon">
                                    <i class="feather icon-box"></i></span><span class="pcoded-mtext">Overview</span>
                            </a>
                            <ul class="pcoded-submenu">
                                <li class=""><a href="#" class="">Homepage Section</a></li>
                                <li class=""><a href="#" class="">About-us Section</a></li>
                                <li class=""><a href="#" class="">Hosting Section</a></li>
                                <li class=""><a href="#" class="">Pages Section</a></li>
                                <li class=""><a href="#" class="">Contact Section</a></li>
                            </ul>
                        </li>
                        <li class="nav-item pcoded-menu-caption">
                            <label>Advanced Settings</label>
                        </li>

                        <li data-username="Table bootstrap datatable footable" class="nav-item">
                            <a href="#" class="nav-link "><span class="pcoded-micon">
                                    <i class="feather icon-server"></i></span><span class="pcoded-mtext">Account
                                    Information</span></a>
                        </li>
                        <li data-username="Table bootstrap datatable footable" class="nav-item">
                            <a href="#" class="nav-link "><span class="pcoded-micon">
                                    <i class="feather icon-server"></i></span><span class="pcoded-mtext">Mail
                                    Box</span></a>
                        </li>
                        <li data-username="Table bootstrap datatable footable" class="nav-item">
                            <a href="#" class="nav-link "><span class="pcoded-micon">
                                    <i class="feather icon-user"></i></span><span class="pcoded-mtext">Profile
                                    Settings</span></a>
                        </li>
                        <li class="nav-item pcoded-menu-caption">
                            <label>Authentication</label>
                        </li>
                        <li data-username="Sample Page" class="nav-item">
                            <a class="nav-link" href="#"
                                onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                <span class="pcoded-micon"><i class="feather icon-power"></i></span>
                                <span class="pcoded-mtext">Sign Out</span>
                            </a>
                            <form id="logout-form" action="#" method="POST" class="d-none">
                                <input type="hidden" name="_token" value="RjysuUtiPlCCioGjlsf1R67pPbQTEBVPE1zs6Dg8">
                            </form>
                        </li>
                    </ul>


                </div>
                <div class="slimScrollBar"
                    style="background: rgba(0, 0, 0, 0.5); width: 5px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 595.2px;">
                </div>
                <div class="slimScrollRail"
                    style="width: 5px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;">
                </div>
            </div>


        </div>
    </nav>



    <header class="navbar pcoded-header navbar-expand-lg navbar-light">
        <div class="m-header">
            <a class="mobile-menu" id="mobile-collapse1" href="javascript:"><span></span></a>
            <a href="{{ route('home')}}"  class="b-brand">
                <div class="b-bg">
                    <img class="b-brand b-bg" src="{{ asset('images/tr-logo.png') }}" alt="">
                </div>
                {{-- <span class="b-title">My Coin Auction</span> --}}
            </a>
        </div>
        <a class="mobile-menu" id="mobile-header" href="javascript:">
            <i class="feather icon-more-horizontal"></i>
        </a>
        <div class="collapse navbar-collapse">
        </div>
    </header>


    <div class="pcoded-main-container">
        <div class="pcoded-wrapper">
            <div class="pcoded-content">
                <div class="pcoded-inner-content">

                    <div class="page-header">
                        <div class="page-block">
                            <div class="row align-items-center">
                                <div class="col-md-12">
                                    <div class="page-header-title">
                                        <h5 class="m-b-10">The Admin Dashboard</h5>
                                    </div>
                                    <ul class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="#"><i class="feather icon-home"></i></a>
                                        </li>
                                        <li class="breadcrumb-item"><a href="javascript:">home of </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="main-body">
                        <div class="page-wrapper">

                            <div class="row">
                                <div class="col-md-12 col-xl-4">
                                    <div class="card yearly-sales">
                                        <div class="card-block">
                                            <h6 class="mb-4">Components</h6>
                                            <div class="row d-flex align-items-center">
                                                <div class="col-9">
                                                    <h3 class="f-w-300 d-flex align-items-center  m-b-0"><i
                                                            class="feather icon-arrow-right text-c-green f-30 m-r-10"></i>
                                                        100
                                                    </h3>
                                                </div>
                                                <div class="col-3 text-right">
                                                    <p class="m-b-0">Add More</p>
                                                </div>
                                            </div>
                                            <div class="progress m-t-30" style="height: 7px;">
                                                <div class="progress-bar progress-c-theme" role="progressbar"
                                                    style="width: 100%;" aria-valuenow="70" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="col-xl-8 col-md-6">
                                    <div class="card Recent-Users">
                                        <div class="card-header">
                                            <h5>Elements </h5>
                                        </div>
                                        <div class="card-block px-0 py-3">
                                            <div class="table-responsive">
                                                <table class="table table-hover">
                                                    <tbody>





                                                    </tbody>
                                                </table>
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

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <script src="{{ asset('js/admin-pcoded.js') }}"></script>
    <script src="{{ asset('js/jquery/admin-jquery.js') }}"></script>
    <script src="{{ asset('js/admin-vendor.js') }}"></script>
    <script src="{{ asset('js/admin-bootstrap.js') }}"></script>

</body>

</html>