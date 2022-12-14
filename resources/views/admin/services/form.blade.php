@extends('partials.admin.layout')
@section('title', 'Admin - Create Services')

@section('content')
    <x-admin.dashboard />
    <x-admin.wrapper>
        <x-admin.nametag />
        <x-admin.maincontent style="background-color:#d3caca24; padding-bottom: 0;" class="pb-0 ">
               <form action="{{ route('serviceStore') }}" method="POST" enctype="multipart/form-data" class="align-item-center">
                @csrf
                <div class="form-row mx-auto d-flex" >
                    <div class="col-5 m-auto">
                        <label for="h2" class="col form-label h4">Service Title</label>
                        <textarea rows="2" class="form-control" name="h2" placeholder="Title here...">{{ old('h2', optional($service ?? null)->h2) }}</textarea>
                    </div>
                    <div class="col-5 m-auto">
                        <label for="p" class="col form-label h4">About the Service</label>
                        <textarea rows="2"class="form-control" name="p" placeholder="Write here...">{{ old('p', optional($service ?? null)->p) }}</textarea>
                    </div>
                </div>
                <div class="row d-flex mx-2">
                    <div class="mx-5">
                        <label for="logo" class="col form-label h4">Service Logo</label>
                        <div >
                            <input id="upfile" name="logo" type="file" value="{{ old('logo', optional($service ?? null)->logo) }}"/>
                        </div>
                    </div>
                    <div class="mt-5">
                        <input type="submit" value="Save Changes" class="btn btn-primary p-3 mt-3"/>
                    </div>
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