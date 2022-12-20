<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;


class CardSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('card_features')->insert([
            'fst_h2' => Str::random(12),
            'fst_p' => Str::random(50),
            'scd_h2' => Str::random(12),
            'scd_p' => Str::random(50),
            'thd_h2' => Str::random(12),
            'thd_p' => Str::random(50)
        ]);
    }
}