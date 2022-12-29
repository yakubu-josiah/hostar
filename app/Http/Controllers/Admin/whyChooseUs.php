<?php

namespace App\Http\Controllers\Admin;

use App\Classes\FileUpload;
use App\Http\Controllers\Controller;
use App\Models\whyChooseUs as ModelsWhyChooseUs;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class whyChooseUs extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {   $lists = ModelsWhyChooseUs::orderBy('id', 'DESC')->get();
        return view('admin.whyChooseUs.index', [
            'lists' => $lists
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.whyChooseUs.form');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, ModelsWhyChooseUs $lists)
    {
        if($request->hasFile('image') ) {
            $image = $request->file('image')->store('lists');
        }

        $image = $request->file('image');

        if($image){
            $imgurl = FileUpload::upload($image, 'asset', 'siteImage'.Str::random(7));
        } else {
            $imgurl = $lists->image;
        }

        $validated['image'] = FileUpload::upload($image, 'asset', 'siteLogo'.Str::random(7));
        $lists->update($request->validated() + [
            'title' => $lists->title,
            'content' => $lists->content,
            'image' => $imgurl,
        ]);
        return redirect()->route('why-choose-us.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return view('admin.whyChooseUs.editform', ['lists' => ModelsWhyChooseUs::findOrFail($id)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validated();
        $lists = ModelsWhyChooseUs::findOrFail($id);
        $lists->fill($validated);
        $lists->save();

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $list = ModelsWhyChooseUs::findOrFail($id);
        $list->delete();

        return redirect()->back();
    }
}
