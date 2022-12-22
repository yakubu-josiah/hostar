@extends('partials.admin.layout')
@section('title', 'Admin - Edit Card Features')

@section('content')
    <x-admin.dashboard />
    <x-admin.wrapper>
        <x-admin.nametag />
        <x-admin.maincontent style="background-color:#d3caca24; padding-bottom: 0;" class="pb-0 ">
            <p class="font-italic m-4 h4"> You can update this feature...</p>   

            {{-- <form action="{{ route('cardUpdate') }}" method="POST"  enctype="multipart/form-data" class="align-item-center">
                @csrf
                @method('PUT')
                <h4 class="text-center"> First Card </h4>
                <div class="form-row mx-auto d-flex" >                    
                    <div class="col-5 m-auto">
                        <label for="fst_h2" class="col form-label h4">Title</label>
                        <textarea rows="3" class="form-control" name="fst_h2" placeholder="Write here...">{{ old('p', optional($card ?? null)->fst_h2) }}</textarea>
                    </div>
                    <div class="col-5 m-auto">
                        <label for="fst_p" class="col form-label h4">Sub Text Content</label>
                        <textarea rows="3"class="form-control" name="fst_p" placeholder="Write here...">{{ $card->fst_p }}</textarea>
                    </div>
                </div>
                <h4 class="text-center mt-5"> Second Card </h4>
                <div class="form-row mx-auto d-flex" >                    
                    <div class="col-5 m-auto ">
                        <label for="scd_h2" class="col form-label h4">Title</label>
                        <textarea rows="3" class="form-control" name="scd_h2" placeholder="Write here...">{{ $card->scd_h2 }}</textarea>
                    </div>
                    <div class="col-5 m-auto">
                        <label for="scd_p" class="col form-label h4">Sub Text Content</label>
                        <textarea rows="3"class="form-control" name="scd_p" placeholder="Write here...">{{ $card->scd_p }}</textarea>
                    </div>
                </div>
                <h4 class="text-center mt-5"> Third Card </h4>
                <div class="form-row mx-auto d-flex" >                    
                    <div class="col-5 m-auto ">
                        <label for="thd_h2" class="col form-label h4">Title</label>
                        <textarea rows="3" class="form-control" name="thd_h2" placeholder="Write here...">{{ $card->thd_h2 }}</textarea>
                    </div>
                    <div class="col-5 m-auto">
                        <label for="thd_p" class="col form-label h4">Sub Text Content</label>
                        <textarea rows="3"class="form-control" name="thd_p" placeholder="Write here...">{{ $card->thd_p }}</textarea>
                    </div>
                </div>
                <div style="margin-top: 50px; width: 100%; ">
                    <input type="submit" value="Save Changes" class="btn  btn-primary" style="width: 35%; margin-left: 45px" >
                </div>
            </form>        --}}
        </x-admin.maincontent>
    </x-admin.wrapper>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="{{ asset('js/admin-pcoded.js') }}"></script>
    <script src="{{ asset('js/jquery/admin-jquery.js') }}"></script>
    <script src="{{ asset('js/admin-vendor.js') }}"></script>
    <script src="{{ asset('js/admin-bootstrap.js') }}"></script>

@endsection