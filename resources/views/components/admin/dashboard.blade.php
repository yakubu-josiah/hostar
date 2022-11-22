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