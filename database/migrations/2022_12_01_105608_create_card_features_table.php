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
            $table->string('fst_h2')->nullable();
            $table->string('fst_p')->nullable();
            $table->string('scd_h2')->nullable();
            $table->string('scd_p')->nullable();
            $table->string('thd_h2')->nullable();
            $table->string('thd_p')->nullable();
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
