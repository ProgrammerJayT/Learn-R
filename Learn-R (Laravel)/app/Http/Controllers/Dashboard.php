<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Dashboard extends Controller
{
    public function studentDashboard()
    {
        return view("dashboard.student");
    }

    public function teacherDashboard()
    {
        return "Teacher";
    }
}
