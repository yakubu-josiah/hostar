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
                            <x-admin.nametag />
                        </div>
                    </div>
                </div>
            </div>
                <x-admin.maincontent>
                    <h4 class="mb-4">Homepage Components</h4>
                    <div class="row d-flex align-items-center">
                        <div class="col-12">
                            {{-- ui elements --}}
                            <x-admin.uiElement>
                                <a href="{{ route('banner') }}">
                                    <div class="card-header">                                                  
                                        <h5>Top Banner</h5>                                        
                                    </div>
                                </a>  
                            </x-admin.uiElement>

                            <x-admin.uiElement>
                                <a href="{{ route('card') }}">
                                    <div class="card-header">                                                  
                                        <h5>Cards Features</h5>
                                    </div>
                                </a>    
                            </x-admin.uiElement>

                            <x-admin.uiElement>
                                <a href="{{ route('pricing') }}">
                                    <div class="card-header">                                                  
                                        <h5>Pricing Plans</h5>
                                    </div>
                                </a>    
                            </x-admin.uiElement>

                            <x-admin.uiElement>
                                <a href="{{ route('packages') }}">
                                    <div class="card-header">                                                  
                                        <h5>Packages</h5>
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
                </x-admin.maincontent>                
        </x-admin.wrapper>
 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="{{ asset('js/admin-pcoded.js') }}"></script>
    <script src="{{ asset('js/jquery/admin-jquery.js') }}"></script>
    <script src="{{ asset('js/admin-vendor.js') }}"></script>
    <script src="{{ asset('js/admin-bootstrap.js') }}"></script>

@endsection