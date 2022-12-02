@extends('partials.admin.layout')
@section('title', 'Admin - Edit Pricing Plans')

@section('content')
    <x-admin.dashboard />
    <x-admin.wrapper>
        <x-admin.nametag />
        <x-admin.maincontent style="background-color:#d3caca24; padding-bottom: 0;" class="pb-0 ">
            <p class="font-italic m-4 h4"> You can update this feature...</p>   

            <form action="{{ route('pricingUpdate') }}" method="POST"  enctype="multipart/form-data" class="align-item-center">
                @csrf
                @method('PUT')
                <div class="form-row mx-auto d-flex" >                    
                    <div class="col-5 m-auto">
                        <label for="h2" class="col form-label h4">Lead Text</label>
                        <textarea rows="3" class="form-control" name="h2" placeholder="Write here...">{{ $pricing->h2 }}</textarea>
                    </div>
                    <div class="col-5 m-auto">
                        <label for="p" class="col form-label h4">Message About Product</label>
                        <textarea rows="3"class="form-control" name="p" placeholder="Write here...">{{ old('p', optional($pricing ?? null)->p) }}</textarea>
                    </div>
                </div>
                <div style="margin-top: 50px; width: 100%; ">
                    <input type="submit" value="Save Changes" class="btn  btn-primary" style="width: 35%; margin-left: 45px" >
                </div>
            </form>       
        </x-admin.maincontent>
    </x-admin.wrapper>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="{{ asset('js/admin-pcoded.js') }}"></script>
    <script src="{{ asset('js/jquery/admin-jquery.js') }}"></script>
    <script src="{{ asset('js/admin-vendor.js') }}"></script>
    <script src="{{ asset('js/admin-bootstrap.js') }}"></script>

@endsection