@extends('partials.admin.layout')
@section('title', 'Admin - Edit Banner')

@section('content')
    <x-admin.dashboard />
    <x-admin.wrapper>
        <x-admin.nametag />
        <x-admin.maincontent style="background-color:#d3caca24; padding-bottom: 0;" class="pb-0 ">
            <p class="font-italic m-4 h4"> You can update this feature...</p>
            <form action="{{ route('bannerUpdate') }}" method="POST"  enctype="multipart/form-data">
                @csrf
                <div class="form-row mx-auto d-flex" >
                    <div class="col-5 m-auto">
                        <label for="h2" class="col form-label h4">Lead Text Header</label>
                        <textarea rows="3" class="form-control" name="h2" placeholder="Write here...">{{ old('p', optional($banner ?? null)->h2) }}</textarea>
                    </div>
                    <div class="col-5 m-auto">
                        <label for="p" class="col form-label h4">Sub Text Content</label>
                        <textarea rows="3"class="form-control" name="p" placeholder="Write here...">{{ old('p', optional($banner ?? null)->p) }}</textarea>
                    </div>
                </div>
                <div class="form-row mx-auto d-flex m-3" >
                    <div class="col-5 m-auto">
                        <label for="logo" class="col form-label h4">Brand Logo</label>
                        <div style=' overflow:hidden;'>
                           {{-- <img src="{{ asset($banner->logo) }}" width="300px" height="100px" id="upfile" style=" cursor:pointer;" onclick="getFile()"> --}}
                           <img src="{{ $banner->logo }}" alt="Hostar - Web Hosting">
                            <input id="upfile" name="logo" type="file" value="{{ old('p', optional($banner ?? null)->logo) }}"/>
                        </div>
                    </div>
                    <div class="col-5 m-auto">
                        <label for="file" class="col form-label h4">Background Image</label>
                        {{-- <div id="" style="height: 100px; width: 300px;border: 1px dashed #BBB; text-align:center; cursor:pointer;" onclick="getFile()">Click to upload!</div> --}}
                        <div style='overflow:hidden;'>
                           {{-- <img src="/public/images/{{ $banner->image }}" width="100%" height="100px" id="upfile" style=" cursor:pointer;" onclick="getFile()"> --}}
                            <input id="upfile" name="image" type="file" value="{{ old('p', optional($banner ?? null)->image) }}"/>
                            {{-- <img src="/images/{{ $banner->image }}" width="300px" height="100px"> --}}
                        </div>
                        <!-- here you can have file submit button or you can write a simple script to upload the file automatically-->
                        <script type="text/javascript">
                            function getFile(){
                                document.getElementById("upfile").click();
                            }
                        </script>
                    </div>                    
                </div>
                <div>
                    <input type="submit" value="Add Changes" class="form-control btn btn-primary btn-block my-3 btn-lg">
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