<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Faker\Factory as Faker;

class TopBannerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        DB::table('top_banners')->insert([
            'h2' => $faker->name,
            'p' => Str::random(35),
            'logo' => 'https://source.unsplash.com/random',
            'image' => 'https://source.unsplash.com/random'
       ]);
    }
}
