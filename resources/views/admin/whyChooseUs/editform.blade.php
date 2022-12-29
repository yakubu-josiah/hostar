@extends('partials.admin.layout')
@section('title', 'Admin - Edit Card Features')

@section('content')
    <x-admin.dashboard />
    <x-admin.wrapper>
        <x-admin.nametag />
        <x-admin.maincontent style="background-color:#d3caca24; padding-bottom: 0;" class="pb-0 ">
            <p class="font-italic m-4 h4"> You can update this feature...</p>   

            <form action="{{ route('why-choose-us.update', [$lists->id]) }}" method="POST"  enctype="multipart/form-data" class="align-item-center">
                @csrf
                <div class="form-row mx-auto d-flex" >
                    <div class="col-5 m-auto">
                        <label for="h2" class="col form-label h4">Title</label>
                        <textarea rows="3" class="form-control" name="title" placeholder="Write here...">{{ $lists->title }}</textarea>
                    </div>
                    <div class="col-5 m-auto">
                        <label for="p" class="col form-label h4">Content</label>
                        <textarea rows="3"class="form-control" name="content" placeholder="Write here...">{{ $lists->content }}</textarea>
                    </div>
                </div>
                <div class="form-row mx-auto d-flex m-5">
                    <div class="row col-5 m-auto">
                        <label for="logo" class="col form-label h4">Image</label>
                        <div style=' overflow:hidden;'>
                            <input id="upfile" name="image" type="file" />
                        </div>
                    </div>
                    <input type="submit" value="Save Changes" class="btn btn-danger px-4">
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