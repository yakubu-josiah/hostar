@extends('partials.admin.layout')
@section('title', 'Admin - Edit Card Features')

@section('content')
    <x-admin.dashboard :banner="$banner"/>
    <x-admin.wrapper>
        <x-admin.nametag />
        <x-admin.maincontent style="background-color:#d3caca24; padding-bottom: 0;" class="pb-0 ">
            <p class="font-italic m-4 h4"> You can update this feature...</p>
            <form action="{{ route('why-choose-us.update', [$cards->id]) }}" method="POST"  enctype="multipart/form-data" class="align-item-center">
                @csrf
                @method('PUT')
                <div class="form-row mx-auto d-flex" >
                    <div class="col-5 m-auto">
                        <label for="title" class="col form-label h4">Title</label>
                        <input class="form-control" name="title" placeholder="Write here..." value="{{ $cards->title }}" />
                    </div>
                    <div class="row col-5 m-auto">
                        <label for="image" class="col form-label h4">Icon Name</label>
                        <input class="form-control" name="image" placeholder="Paste Icon name here..." value="{{ $cards->image }}" />
                    </div>
                </div>
                <div class="form-row d-flex m-5">                   
                    <div class="col-5 mr-4">
                        <label for="p" class="col form-label h4">Content</label>
                        <textarea rows="2" class="form-control" name="content" placeholder="Write here...">{{ $cards->content }}</textarea>
                    </div>
                    <div class="col-5 align-self-end">
                        <input type="submit" value="Save Changes" class="btn btn-danger p-2">
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