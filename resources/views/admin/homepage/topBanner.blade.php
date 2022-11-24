@extends('partials.admin.layout')
@section('title', 'Admin - Edit Banner')

@section('content')
    <x-admin.dashboard />
    <x-admin.wrapper>
        <x-admin.nametag />
        <x-admin.maincontent style="background-color:#d3caca24; padding-bottom: 0;" class="pb-0 ">
            <p class="font-italic m-4 h4"> You can update this feature...</p>
            <div class="form-row mx-auto d-flex" >
                <div class="col-5 m-auto">
                    <label for="h2" class="col form-label h4">Lead Text Haeder</label>
                    <textarea rows="3"class="form-control" name="h2" placeholder="Write here...">{{ old('content', optional($posts ?? null)->h2) }}</textarea>
                    {{-- <input type="text" name="title" value="{{ old('title', optional($posts ?? null)->title) }}" class="form-control"> --}}
                </div>
                <div class="col-5 m-auto">
                    <label for="p" class="col form-label h4">Sub Text Content</label>
                    <textarea rows="3"class="form-control" name="p" placeholder="Write here...">{{ old('content', optional($posts ?? null)->p) }}</textarea>
                    {{-- <input type="text" name="h2" value="{{ old('title', optional($posts ?? null)->title) }}" class="form-control"> --}}
                </div>
            </div>
            <div class="form-row mx-auto d-flex m-3" >
                <div class="col-5 m-auto">
                    <label for="logo" class="col form-label h4">Brand Logo</label>
                    <div id="yourBtn" style="height: 100px; width: 300px;border: 1px dashed #BBB; text-align:center; cursor:pointer;" onclick="getFile()">Click to upload!</div>
                    <!-- this is your file input tag, so i hide it!-->
                    <div style='height: 300px;width:300px; overflow:hidden;'>
                        <input id="upfile" name="logo" type="file" value="upfile"/>
                    </div>
                </div>
                <div class="col-5 m-auto">
                    <label for="file" class="col form-label h4">Background Image</label>
                    <div id="yourBtn" style="height: 100px; width: 300px;border: 1px dashed #BBB; text-align:center; cursor:pointer;" onclick="getFile()">Click to upload!</div>
                    <!-- this is your file input tag, so i hide it!-->
                    <div style='height: 300px;width:300px; overflow:hidden;'>
                        <input id="upfile" name="upfile" type="file" value="upfile"/>
                    </div>
                    <!-- here you can have file submit button or you can write a simple script to upload the file automatically-->
                    <script type="text/javascript">
                        function getFile(){
                            document.getElementById("upfile").click();
                        }
                        $(document).ready(function (e) {
                            $('#upfile').chage(function(){
                                let reader = new FileReader();
                                reader.onload = (e) => {
                                    $('#upfile').attr('src', e.target.result)
                                }
                                reader.readAsDataURL(this.files[0]);
                            });
                        });
                        function sub(obj) {
                            var file = obj.value;
                            var fileName = file.split("\\");
                            document.getElementById("yourBtn").innerHTML = fileName[fileName.length - 1];
                            document.myForm.submit();
                            event.preventDefault();
                        }
                    </script>
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