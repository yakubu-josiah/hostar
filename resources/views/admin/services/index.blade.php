@extends('partials.admin.layout')
@section('title', 'Admin - All Packages')

@section('content')
    <x-admin.dashboard />
    <x-admin.wrapper>
        <x-admin.nametag />
        <x-admin.maincontent style="background-color:#d3caca24; padding-bottom: 0;" class="pb-0">
            <div class="d-flex w-100 flex-column flex-md-row mb-4">
                <div>
                    <h3 class="text-left mr-5 p-3">List of all added Services </h3>
                </div>
                <div class="my-auto">
                    <a href="{{ route('serviceForm') }}" class="h5 text-info bg-light shadow p-2">
                        Add More Services
                    </a>
                </div>
            </div>
            <div class="border border-info justify-content-center mx-0">
                <div class="row mx-auto px-2">
                    @foreach ($services as $service)
                    <div class="card col-md-4 col-sm-6 col-12 border border-info custom-grid mx-auto"
                        style="background-color:#cdd2d6">
                        <h4 class="card-header mx-0">{{ ucwords($service->h2) }}</h4>
                        <div class="card-body pt-0">
                            <p class="text-right">
                                <i>This package was last updated at: <span class="text-success ">{{ $service->created_at }}</span></i>
                            </p>
                            @if (now()->diffInMinutes($service->created_at) < 5) <div class="alert alert-info">New!!
                            @endif                              
                        </div>


                        <div class="list-group list-group-flush text-center">                           
                            <p class="list-group-item">{{ ucwords($service->p) }}</p>                            
                        </div>
                        <div class="align-middle justify-content-center p-2">
                            <a href="{{ route('serviceEdit', [$service->id]) }}"
                                class="btn btn-outline-info text-body p-2">Edit Service</a>
                            <form action="{{ route('serviceDelete', $service->id) }}" method="POST" class="d-inline">
                                @csrf @method('DELETE')
                                <input type="submit" value="Delete Service" class="btn btn-danger p-2">
                            </form>
                        </div>
                    </div>
                    @endforeach
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