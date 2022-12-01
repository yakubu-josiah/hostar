<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CardValidator extends FormRequest
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
            'fst_h2' => 'max:250',
            'fst_p' => 'max:250',
            'scd_h2' => 'max:250',
            'scd_p' => 'max:250',
            'thd_h2' => 'max:250',
            'thd_p' => 'max:250'
        ];
    }
}
