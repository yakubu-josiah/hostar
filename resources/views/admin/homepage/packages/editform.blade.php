@extends('partials.admin.layout')
@section('title', 'Admin - Update Package')

@section('content')
    <x-admin.dashboard />
    <x-admin.wrapper>
        <x-admin.nametag />
        <x-admin.maincontent style="background-color:#d3caca24; padding-bottom: 0;" class="pb-0 ">
            <form action="{{ route('packageUpdate', [$package->id]) }}" method="POST" enctype="multipart/form-data" class="align-item-center">
                @method('PUT')
                @csrf
                <div class="form-row mx-auto">
                    <div class="form-group col-md-3">
                      <label class="" for="inlineFormInput">Subscription Plan</label>
                        <select name="duration" id="duration" class="form-select p-2">
                            <option selected>Choose subscription plan</option>
                            <option value="monthly" @if($package->duration == 'monthly') selected @endif class="badge bg-secondary  text-wrap">Monthly</option>
                            <option value="yearly" @if($package->duration == 'yearly') selected @endif class="badge bg-secondary  text-wrap">Yearly</option>
                        </select>
                    </div>

                    <div class="form-group col-md-4 mx-3">
                      <label c  lass="" for="inlineFormInput">Package Name</label>
                      <input type="text" name="title" class="form-control mb-2" id="inlineFormInput" placeholder="Cloud Hosting" value="{{ $package->title }}">
                    </div>
                    
                    <div class="form-group col-md-4">
                        <label class="" for="inlineFormInputGroup">Package Price</label>
                        <div class="input-groupx d-flex">
                            <div class="input-group-prepend">
                                <div class="input-group-text" style="font-size: 16px">$</div>
                            </div>
                            <div> <input type="number" name="amount" class="form-control" id="inlineFormInputGroup" placeholder="Amount" value="{{ $package->amount }}">
                            </div>
                        </div>
                    </div>
                     
                </div>                
                <table class="col text-center mb-4" id="dynamic_field"> 
                    <th class="mx-auto ">Features on Package Option </th> 
                    <td class=""><button type="button" id="add" class="btn btn-success mx-5">Add More</button></td>  
                    @foreach(json_decode($package->sub_plan) as $item)
                    <tr class="justify-content-between mb-3"> 
                        <td class="mx-4 mb-3">
                            <textarea id="add" rows="2"class="form-control" name="sub_plan[]" placeholder="Add features..." class="mb-3">{{ $item }}</textarea>
                        </td>                        
                    </tr>
                    @endforeach
                </table>            
                <input type="submit" id="submit" class="btn btn-info" value="Submit" />  
            </form>  
            {{-- <div class="alert alert-danger print-error-msg" style="display:none">
                        <ul></ul>
                        </div>
            
            
                        <div class="alert alert-success print-success-msg" style="display:none">
                        <ul></ul>
                        </div>
             --}}
            
            <script type="text/javascript">
                $(document).ready(function(){      
                  var postURL = "<?php echo url('addmore'); ?>";
                  var i=1;  
                    
            
                  $('#add').click(function(){  
                       i++;  
                       $('#dynamic_field').append('<tr id="row'+i+'" class="dynamic-added"><td class="mx-4"><textarea rows="2"class="form-control mt-3" name="sub_plan[]" placeholder="More features here..."></textarea></td><td><button type="button" name="remove" id="'+i+'" class="btn btn-danger btn_remove">X</button></td></tr>');  
                  }); 
                  
                  $(document).('#add', function(){
                    var button_id = $(this).attr("id");   
                    $('#row'+button_id+'').remove(); 
                  })
            
            
                  $(document).on('click', '.btn_remove', function(){  
                       var button_id = $(this).attr("id");   
                       $('#row'+button_id+'').remove();  
                  });  
            
            
                  $.ajaxSetup({
                      headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                      }
                  });
            
            
                  $('#submit').click(function(){            
                       $.ajax({  
                            url:postURL,  
                            method:"POST",  
                            data:$('#add_name').serialize(),
                            type:'json',
                            success:function(data)  
                            {
                                if(data.error){
                                    printErrorMsg(data.error);
                                }else{
                                    i=1;
                                    $('.dynamic-added').remove();
                                    $('#add_name')[0].reset();
                                    $(".print-success-msg").find("ul").html('');
                                    $(".print-success-msg").css('display','block');
                                    $(".print-error-msg").css('display','none');
                                    $(".print-success-msg").find("ul").append('<li>Record Inserted Successfully.</li>');
                                }
                            }  
                       });  
                  });  
            
            
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
        </x-admin.maincontent>
    </x-admin.wrapper>

    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    
    <script src="{{ asset('js/admin-pcoded.js') }}"></script>
    <script src="{{ asset('js/jquery/admin-jquery.js') }}"></script>
    <script src="{{ asset('js/admin-vendor.js') }}"></script>
    <script src="{{ asset('js/admin-bootstrap.js') }}"></script>

@endsection