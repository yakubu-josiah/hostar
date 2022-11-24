<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class topBanner extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'h2' => 'bail|required|max:250',
            'p' => 'bail|required|max:500',
            'logo' => 'bail|required|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
            'image' => 'bail|required|image|mimes:jpg,png,jpeg,gif,svg|max:2048'
        ];
    }
}
