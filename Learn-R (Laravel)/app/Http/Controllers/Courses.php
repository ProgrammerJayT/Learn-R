<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Courses extends Controller
{
    //
    public function allCourses() {
        return view("content.courses");
    }
}
