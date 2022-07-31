<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FindTutor extends Controller
{
    //
    public function showMap() {
        return view("tutor.find");
    }
}
