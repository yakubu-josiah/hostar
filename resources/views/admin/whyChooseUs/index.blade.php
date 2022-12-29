@extends('partials.admin.layout')
@section('title', 'Admin - Update Package')

@section('content')
    <x-admin.dashboard />
    <x-admin.wrapper>
        <x-admin.nametag />
        <div class="d-flex w-100 flex-column flex-md-row mb-4">
            <div><h3 class="text-left mx-3">List of All</h3></div>
            <div class="my-auto"><a href="{{ route('why-choose-us.create') }}" class="h5 text-info bg-light shadow p-2">Add New</a></div>
        </div>
        <div class="border border-info justify-content-center">
            <div class="row mx-auto px-2">
                @foreach ($lists as $item)
                <div class="card col-md-4 col-sm-6 col-12 border border-info custom-grid mx-auto  mt-5" style="background-color:#cdd2d6">
                    <div>
                        <img src="{{ $item->image }}" alt="" />
                        <h4>{{ $item->title }}</h4>
                        <p>{{ $item->content }}</p>
                    </div>
                     @endforeach
                    <div class="align-middle justify-content-center p-4">
                        <a href="{{ route('why-choose-us.edit', [$item->id]) }}" class="btn btn-outline-info text-body p-2">Edit</a>
                        <form action="{{ route('why-choose-us.destroy', $item->id) }}" method="POST" class="d-inline">
                            @csrf @method('DELETE')
                            <input type="submit" value="Delete" class="btn btn-danger p-2">            
                        </form>
                    </div>
                </div>

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