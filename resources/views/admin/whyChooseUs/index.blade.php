@extends('partials.admin.layout')
@section('title', 'Admin - Update Package')

@section('content')
    <x-admin.dashboard />
    <x-admin.wrapper>
        <x-admin.nametag />
        <x-admin.maincontent style="background-color:#d3caca24; padding-bottom: 0;" class="pb-0">
            <div class="h3">
                <h3 class="mb-4">List of Services Offered</h3>
            </div>
            <div class="border border-info justify-content-center">
                <div class="row mx-auto px-3 w-100">
                    @foreach ($lists as $item)
                        <div class="card col-md-4 col-sm-6 col-12 border border-info custom-grid " style="background-color:#cdd2d6">
                            <h4 class="card-header mt-2 p-3">{{ $item->title }}</h4>
                            <div class="card-body">
                                <p class="pt_t text-success">Service was added: {{ $item->created_at->diffForHumans() }}!!</p>
                                @if (now()->diffInMinutes($item->created_at) < 5) <div class="alert alert-info">New Comment!!
                                @endif
                            </div>
                            <ul class="list-group list-group-flush text-center">
                                <li>{{ ucwords($item->content) }}</li>
                            </ul>
                            <div class="card-body inline">
                                <a href="{{ route('why-choose-us.edit', [$item->id]) }}" class="btn btn-outline-info text-body py-1">Edit</a>
                                <form action="{{ route('why-choose-us.destroy', [$item->id]) }}" method="POST" class="d-inline">
                                    @csrf @method('DELETE')
                                    <input type="submit" class="btn btn-danger text-body py-1" value="Delete" />
                                </form>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
    
        </x-admin.maincontent>

            <script type="text/javascript">
               

                $(document).ready(function(){      
                  var postURL = "<?php echo url('addmore'); ?>";
                  var i=1;  
            
                  $('#add').click(function(){  
                       i++;  
                       $('#dynamic_field').append(`<tr class="justify-content-between"> 
                        <td class="mb-3 d-flex">
                            <textarea id="add" rows="2" class="mx-4 form-control" name="sub_plan[]" placeholder="Add features..." class="mb-3"></textarea>
                            <button type="button" name="remove" id="${i}" class="btn btn-danger btn_remove">X</button>
                        </td>                        
                    </tr>`);  
                    $('.btn_remove').click(function(){  
                        this.parentElement.parentElement.remove();
                     });
                  }); 

                  $('.btn_remove').click(function(){  
                    this.parentElement.parentElement.remove();
                  });
                  
                
                  $.ajaxSetup({
                      headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                      }
                  });
            
            
                //   $('#submit').click(function(){            
                //        $.ajax({  
                //             url:postURL,  
                //             method:"POST",  
                //             data:$('#add_name').serialize(),
                //             type:'json',
                //             success:function(data)  
                //             {
                //                 if(data.error){
                //                     printErrorMsg(data.error);
                //                 }else{
                //                     i=1;
                //                     $('.dynamic-added').remove();
                //                     $('#add_name')[0].reset();
                //                     $(".print-success-msg").find("ul").html('');
                //                     $(".print-success-msg").css('display','block');
                //                     $(".print-error-msg").css('display','none');
                //                     $(".print-success-msg").find("ul").append('<li>Record Inserted Successfully.</li>');
                //                 }
                //             }  
                //        });  
                //   });  
            
                  function printErrorMsg (msg) {
                     $(".print-error-msg").find("ul").html('');
                     $(".print-error-msg").css('display','block');
                     $(".print-success-msg").css('display','none');
                     $.each( msg, function( key, value ) {
                        $(".print-error-msg").find("ul").append('<li>'+value+'</li>');
                     });
                  }
                });  
            </script>
        </div>
        {{-- </x-admin.maincontent> --}}
    </x-admin.wrapper>

    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    
    <script src="{{ asset('js/admin-pcoded.js') }}"></script>
    <script src="{{ asset('js/jquery/admin-jquery.js') }}"></script>
    <script src="{{ asset('js/admin-vendor.js') }}"></script>
    <script src="{{ asset('js/admin-bootstrap.js') }}"></script>

@endsection