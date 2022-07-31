<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Engagement extends Controller
{
    //
    public function engagement() {
        return view("engagement.engage");
    }
}
