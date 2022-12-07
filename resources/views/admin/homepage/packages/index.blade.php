@extends('partials.admin.layout')
@section('title', 'Admin - Edit Packages')

@section('content')
<x-admin.dashboard />
<x-admin.wrapper>
    <x-admin.nametag />
    <x-admin.maincontent style="background-color:#d3caca24; padding-bottom: 0;" class="pb-0">
        <div class="h3">
            <h3 class="mb-4">List of All Available Packages</h3>
        </div>
        <div class="border border-info justify-content-center">
            <h5 class="px-4 text-muted">Monthly Packages</h5>
            <div class="row mx-auto px-3 w-100">
                @foreach ($package as $months)
                <div class="card col-md-4 col-sm-6 col-12 border border-info custom-grid " style="background-color:#cdd2d6">
                    <h4 class="card-header">{{ $months->title }}</h4>
                    <div class="card-body">
                        <h4> Package Price: ${{ number_format($months->amount) }}</h4>
                        <p class="pt_t text-success">This package was added: {{ $months->created_at->diffForHumans() }}!!</p>
                        @if (now()->diffInMinutes($months->created_at) < 5) <div class="alert alert-info">New Post!!
                        @endif
                    </div>
                   
                
                <ul class="list-group list-group-flush text-center">
                    @foreach ($month as $key => $item)
                        <li>{{ ucwords($item) }}</li>
                    @endforeach
                </ul>
                <div class="card-body inline">
                    <a href="#" class="btn btn-outline-info text-body">Edit Package</a>
                    <a href="#" class="btn btn-danger">Delete Package</a>
                </div></div>
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