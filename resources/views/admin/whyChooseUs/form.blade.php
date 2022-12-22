@extends('partials.admin.layout')
@section('title', 'Admin - All Packages')

@section('content')
    <x-admin.dashboard />
    <x-admin.wrapper>
        <x-admin.nametag />
        <x-admin.maincontent style="background-color:#d3caca24; padding-bottom: 0;" class="pb-0">
            <div class="d-flex w-100 flex-column flex-md-row mb-4">
                <div><h3 class="text-left mx-3">List of All Available Packages</h3></div>
                {{-- <div class="my-auto"><a href="{{ route('packagesForm') }}" class="h5 text-info bg-light shadow p-2">Add New Package</a></div>
            </div>
            <div class="border border-info justify-content-center">
                <h5 class="text-center my-5 text-muted">All Monthly Packages</h5>
                <div class="row mx-auto px-2">
                    @foreach ($month as $months)
                    <div class="card col-md-4 col-sm-6 col-12 border border-info custom-grid mx-auto"
                        style="background-color:#cdd2d6">
                        <h4 class="card-header mx-0">{{ ucwords($months->title) }}</h4>
                        <div class="card-body pt-0">
                            <p class="text-right"><i>This package was last updated at: <span class="text-success ">{{ $months->created_at }}</span></i></p>
                            @if (now()->diffInMinutes($months->created_at) < 5) <div class="alert alert-info">New!!
                            @endif
                            <h4><span> Package Price: $</span>{{ number_format($months->amount) }}</h4>
                        </div>


                        <ul class="list-group list-group-flush text-center">
                            @foreach ($months['sub_plan'] as $item)
                            <li class="list-group-item">{{ ucwords($item) }}</li>
                            @endforeach
                        </ul>
                        <div class="align-middle justify-content-center p-4">
                            <a href="{{ route('packageEdit', [$months->id]) }}" class="btn btn-outline-info text-body p-2">Edit Package</a>
                            <form action="{{ route('deletePack', $months->id) }}" method="POST" class="d-inline">
                                @csrf @method('DELETE')
                                <input type="submit" value="Delete Package" class="btn btn-danger p-2">            
                            </form>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>


            <div class="border border-info justify-content-center">
                <h5 class="text-center my-5 text-muted">All Yearly Packages</h5>
                <div class="row mx-auto px-2">
                    @foreach ($year as $years)
                    <div class="card col-md-4 col-sm-6 col-12 border border-info custom-grid mx-auto"
                        style="background-color:#cdd2d6">
                        <h4 class="card-header mx-0">{{ ucwords($years->title) }}</h4>
                        <div class="card-body pt-0">
                            <p class="text-right"><i>This package was last updated at: <span class="text-success ">{{ $years->created_at }}</span></i></p>
                            @if (now()->diffInMinutes($years->created_at) < 5) <div class="alert alert-info">New Post!!
                            @endif
                            <h4><span> Package Price: $</span>{{ number_format($years->amount) }}</h4>
                        </div>


                        <ul class="list-group list-group-flush text-center">
                            @foreach ($years['sub_plan'] as $item)
                            <li class="list-group-item">{{ ucwords($item) }}</li>
                            @endforeach
                        </ul>
                        <div class="align-middle justify-content-center p-4">
                            <a href="{{ route('packageEdit', [$years->id]) }}" class="btn btn-outline-info text-body p-2">Edit Package</a>
                            <form action="{{ route('deletePack', [$years->id]) }}" method="POST" class="d-inline">
                                @csrf
                                @method('DELETE')
                                <input type="submit" value="Delete Package" class="btn btn-danger p-2">            
                            </form>
                        </div>
                    </div>
                    @endforeach
                </div> --}}
            </div>



        </x-admin.maincontent>
    </x-admin.wrapper>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script src="{{ asset('js/admin-pcoded.js') }}"></script>
<script src="{{ asset('js/jquery/admin-jquery.js') }}"></script>
<script src="{{ asset('js/admin-vendor.js') }}"></script>
<script src="{{ asset('js/admin-bootstrap.js') }}"></script>

@endsection