@extends('partials.admin.layout')
@section('title', 'Admin - Edit Testimonials')

@section('content')
    <x-admin.dashboard />
    <x-admin.wrapper>
        <x-admin.nametag />
        <x-admin.maincontent style="background-color:#d3caca24; padding-bottom: 0;" class="pb-0 ">
            <form action="{{ route('users-testimonials.store') }}" method="POST"  enctype="multipart/form-data" class="align-item-center">
                @csrf
                <div class="form-row mx-auto d-flex" >
                    <div class="col-5 m-auto">
                        <label for="name" class="col form-label h4">Name</label>
                        <input class="form-control" name="name" placeholder="Write here..." value="{{ $testimony->name }}" />
                    </div>
                    <div class="row col-5 m-auto">
                        <label for="title" class="col form-label h4">Title / Place of work</label>
                        <input class="form-control" name="title" placeholder="Write here..." {{ $testimony->title }} />
                    </div>
                </div>
                <div class="form-row d-flex m-5">                   
                    <div class="col-5 mr-4">
                        <label for="p" class="col form-label h4">User Experience</label>
                        <textarea rows="2"class="form-control" name="content" placeholder="Write here...">{{ $testimony->content }}</textarea>
                    </div>
                    <div class="col-5 m-auto">
                        <label for="logo" class="col form-label h4">Upload Photo</label>
                        <div style=' overflow:hidden;'>
                            <input id="upfile" name="image" type="file" />
                        </div>
                    </div>
                    <div class="col-5 mt-5">
                       <input type="submit" value="Save Changes" class="btn p-20" style="background: linear-gradient(150deg, #32267d 0%, #9584ee 100%); color: #fff;border-radius: 3pc">
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