<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\QueryController;
use App\Http\Controllers\PublicController;
use App\Http\Controllers\PrivateController;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

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

Route::get('/', [PublicController::class,'index']);

Route::get('/login', [PublicController::class,'login']) -> name('login');
Route::post('/login', [PublicController::class,'log_sign']);

Route::get('/UserRegistration', [PublicController::class,'register']) -> name('register');
Route::post('/UserRegistration', [PublicController::class,'store']);

Route::get('/User/Dashboard',[PrivateController::class,'index']) ->name('dashboard');
Route::get('/User/Chat',[PrivateController::class,'chatIndex']) ->name('chatSection');

Route::get('/User/Chat/Queries',[PostsController::class,'index']) ->name('queries');

Route::post('/User/Chat', [PostsController::class,'store'])->name('chatSection');

// Route::resource('posts','App\Http\Controllers\PostsController');
