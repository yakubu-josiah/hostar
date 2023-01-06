@extends('partials.admin.layout')
@section('title', 'Admin - All Testimonials')

@section('content')
<x-admin.dashboard />
<x-admin.wrapper>
    <x-admin.nametag />
    <x-admin.maincontent style="background-color:#d3caca24; padding-bottom: 0;" class="pb-0">
        <div class="h3">
            <h3 class="mb-4">List of commented Testimonials</h3>
        </div>
        <div class="border border-info justify-content-center">
            <div class="row mx-auto px-3 w-100">
                @foreach ($testimony as $item)
                    <div class="card col-md-4 col-sm-6 col-12 border border-info custom-grid " style="background-color:#cdd2d6">
                        <h4 class="card-header mt-2 p-3">{{ $item->name }}</h4>
                        <div class="card-body">
                            <h4> {{ ucwords($item->title) }}</h4>
                            <p class="pt_t text-success">Testimony was added: {{ $item->created_at->diffForHumans() }}!!</p>
                            @if (now()->diffInMinutes($item->created_at) < 5) <div class="alert alert-info">New Comment!!
                            @endif
                        </div>
                        <ul class="list-group list-group-flush text-center">
                            <li>{{ ucwords($item->content) }}</li>
                        </ul>
                        <div class="card-body inline">
                            <a href="{{ route('users-experience.edit', [$item->id]) }}" class="btn btn-outline-info text-body py-1">Edit</a>
                            <form action="{{ route('users-experience.destroy', [$item->id]) }}" method="POST" class="d-inline">
                                @csrf @method('DELETE')
                                <input type="submit" class="btn btn-danger text-body py-1" value="Delete" />
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