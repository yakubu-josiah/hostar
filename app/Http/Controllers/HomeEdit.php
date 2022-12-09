<?php

namespace App\Http\Controllers;

use App\Classes\FileUpload;
use App\Http\Requests\CardValidator;
use App\Http\Requests\PackageValidator;
use App\Http\Requests\topBanner;
use App\Models\CardFeatures;
use App\Models\Packages;
use App\Models\PricingPlan;
use App\Models\topBanner as ModelsTopBanner;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class HomeEdit extends Controller
{
    public function bannerEdit() {   
        return view('admin.homepage.topBanner', ['banner' => ModelsTopBanner::first()]);
    }

    public function bannerStore(topBanner $request) {
        $validated = $request->validated();

        $image = $request->file('image');
        $logo = $request->file('logo');

        $validated['image'] = FileUpload::upload($image, 'top_banner', 'bannerImage'.Str::random(4));
        $validated['logo'] = FileUpload::upload($logo, 'top_banner', 'bannerLogo'.Str::random(4));

        ModelsTopBanner::create($validated);

        return redirect()->route('adminDash');
    }
    
    public function bannerUpdate(topBanner $request, ModelsTopBanner $banner) {        
        if($request->hasFile('image') && $request->hasFile('logo')) {
            // Storage::delete($banner->image);
            // Storage::delete($banner->logo);
            // \public_path()::delete($banner->image);
            // \public_path()::delete($banner->logo);
            $image = $request->file('image')->store('banner');
            $logo = $request->file('logo')->store('banner');
            
            // $destinationPath = 'storage/images/';
            // $profileImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
            // $profileImages = date('YmdHis') . "." . $logo->getClientOriginalExtension();
            // $image->move($destinationPath, $profileImage);
            // $logo->move($destinationPath, $profileImages);
            // $input['image'] = "$profileImage";
            // $input['logo'] = "$profileImages";
            // $banner->update($input);
        }

        $image = $request->file('image');
        $logo = $request->file('logo');

        if($image){
            $imgurl = FileUpload::upload($image, 'asset', 'siteImage'.Str::random(7));
        } else {
            $imgurl = $banner->image;
        }
        if($logo){
            $logourl = FileUpload::upload($logo, 'asset', 'siteLogo'.Str::random(7));
        } else {
            $logourl = $banner->logo;
        }

        $validated['logo'] = FileUpload::upload($logo, 'asset', 'siteLogo'.Str::random(7));
        $banner->update($request->validated() + [
            'h2' => $banner->h2,
            'p' => $banner->p,
            'image' => $imgurl,
            'logo' => $logourl
        ]);

        return redirect()->route('adminDash');


        // $filename = $image->getClientOriginalName();
            // $filemame = $logo->getClientOriginalName();
            // $image->move(public_path('images/'), $filename);
            // $logo->move(public_path('images/'), $filemame);
            // $banner->image = $request->file('image')->getClientOriginalName();
            // $banner->logo = $request->file('logo')->getClientOriginalName();

    }

    public function cardEdit() {
        return view('admin.homepage.cardFeatures', ['card' => CardFeatures::first()]);
    }

    public function cardStore(CardValidator $request) {
        $validated = $request->validated();
        CardFeatures::create($validated);

        return redirect()->route('adminDash');
    }

    public function cardUpdate(CardValidator $request) {
        $card = CardFeatures::first();
        $validated = $request->validated();
        $card->fill($validated);
        $card->save();

        return redirect()->route('adminDash');
    }

    public function pricingEdit() {
        return view('admin.homepage.pricingPlans', ['pricing' => PricingPlan::first()]);
    }

    public function pricingStore(Request $request) {
        $validated = $request->validate([
            'h2' => 'max:40',
            'p' => 'max:250'
        ]);
        
        PricingPlan::create($validated);

        return redirect()->route('adminDash');
    }

    public function pricingUpdate(Request $request) {
        $validated = $request->validate([
            'h2' => 'max:40',
            'p' => 'max:250'
        ]);

        $pricing = PricingPlan::first();
        $pricing->fill($validated);
        $pricing->save();

        return redirect()->route('adminDash');
    }

    public function packageIndex() {
        $monthPack = Packages::guestPackage('monthly');
        $yearPack = Packages::guestPackage('yearly');

        return view('admin.homepage.packages.index', 
        [
            'month' => $monthPack,
            'year' => $yearPack
        ]);
    }

    public function packageCreate() {
        return view('admin.homepage.packages.form');
    }

    public function packageEdit($id) {      
        return view('admin.homepage.packages.editform', 
        [
            'package' => Packages::find($id)
        ]);
    }

    public function packageStore(PackageValidator $request) {
        $validated = $request->validated();
        $validated['sub_plan'] = json_encode($validated['sub_plan']);
        Packages::create($validated);
        
        return redirect()->back();
    }

    public function packageUpdate(PackageValidator $request, $id) {
        $validated = $request->validated();
        $package = Packages::findOrFail($id);
        $package->fill($validated);
        $package->save();

        return redirect()->back();
    }

    public function packageDestroy($id) {
        $package = Packages::findOrFail($id);
        $package->delete();

        return redirect()->back();
    }
}
