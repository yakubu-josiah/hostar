<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('card_features', function (Blueprint $table) {
            $table->id();
            $table->string('fst_h2');
            $table->string('fst_p');
            $table->string('scd_h2');
            $table->string('scd_p');
            $table->string('thd_h2');
            $table->string('thd_p');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('card_features');
    }
};
