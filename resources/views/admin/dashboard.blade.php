@extends('partials.admin.layout')
@section('title', 'Admin - Dashboard')

@section('content')
    <x-admin.dashboard />
        <x-admin.wrapper>
            <div class="page-header">
                <div class="page-block">
                    <div class="row align-items-center">
                        <div class="col-md-12">
                            <div class="page-header-title">
                                <h2 class="m-b-10">The Admin Dashboard</h2>
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
                                    <h4 class="mb-4">Homepage Components</h4>
                                    <div class="row d-flex align-items-center">
                                        <div class="col-9">
                                            {{-- ui elements --}}
                                            <x-admin.uiElement>
                                                <a href="#">
                                                    <div class="card-header">                                                  
                                                        <h5>Top Banner</h5>
                                                    </div>
                                                </a>  
                                            </x-admin.uiElement>

                                            <x-admin.uiElement>
                                                <a href="#">
                                                    <div class="card-header">                                                  
                                                        <h5>Cards Features</h5>
                                                    </div>
                                                </a>    
                                            </x-admin.uiElement>

                                            <x-admin.uiElement>
                                                <a href="#">
                                                    <div class="card-header">                                                  
                                                        <h5>Pricing Plans</h5>
                                                    </div>
                                                </a>    
                                            </x-admin.uiElement>

                                            <x-admin.uiElement>
                                                <a href="#">
                                                    <div class="card-header">                                                  
                                                        <h5>Products</h5>
                                                    </div>
                                                </a>    
                                            </x-admin.uiElement>
                                            
                                            <x-admin.uiElement>
                                                <a href="#">
                                                    <div class="card-header">                                                  
                                                        <h5>Promo Page</h5>
                                                    </div>
                                                </a>    
                                            </x-admin.uiElement>
                                            <x-admin.uiElement>
                                                <a href="#">
                                                    <div class="card-header">                                                  
                                                        <h5>Testimonials</h5>
                                                    </div>
                                                </a>    
                                            </x-admin.uiElement>
                                            <x-admin.uiElement>
                                                <a href="#">
                                                    <div class="card-header">                                                  
                                                        <h5>Footer Contact</h5>
                                                    </div>
                                                </a>    
                                            </x-admin.uiElement>                            
                                        </div>
                                    </div>
                                    <div class="progress m-t-30" style="height: 7px;">
                                        <div class="progress-bar progress-c-theme" role="progressbar" style="width: 100%;"
                                            aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </x-admin.wrapper>
 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="{{ asset('js/admin-pcoded.js') }}"></script>
    <script src="{{ asset('js/jquery/admin-jquery.js') }}"></script>
    <script src="{{ asset('js/admin-vendor.js') }}"></script>
    <script src="{{ asset('js/admin-bootstrap.js') }}"></script>

@endsection