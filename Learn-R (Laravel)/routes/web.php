<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Dashboard;
use App\Http\Controllers\FindTutor;
use App\Http\Controllers\Courses;
use App\Http\Controllers\Engagement;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/StudentDashboard', [Dashboard::class, 'studentDashboard']);
Route::get('/FindTutor', [FindTutor::class, 'showMap']);
Route::get('/Courses', [Courses::class, 'allCourses']);
Route::get('/Engage', [Engagement::class, 'engagement']);
