<?php

namespace App\Http\Controllers\Admin;

use App\Classes\FileUpload;
use App\Http\Controllers\Controller;
use App\Models\topBanner;
use App\Models\whyChooseUs as ModelsWhyChooseUs;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class whyChooseUs extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {   
        return view('admin.whyChooseUs.index', [
            'lists' => ModelsWhyChooseUs::orderBy('id', 'DESC')->get(),
            'banner' => topBanner::first()
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
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'bail|required|string',
            'content' => 'bail|required|string',
            'image'   => 'bail|required|string'         
        ]);
        ModelsWhyChooseUs::create($validated);
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
        return view('admin.whyChooseUs.editform', [
            'cards' => ModelsWhyChooseUs::findOrFail($id),
            'banner' => topBanner::first()
        ]);
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
        $validated = $request->validated([
            'title' => 'bail|required|string',
            'content' => 'bail|required|string',
            'image'   => 'bail|required|string'
        ]);
        $cards = ModelsWhyChooseUs::findOrFail($id);
        $cards->fill($validated);
        $cards->save();

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
