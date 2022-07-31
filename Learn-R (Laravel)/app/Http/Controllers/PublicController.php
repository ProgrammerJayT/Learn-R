<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PublicController extends Controller
{
   public function index()
   {
    return view('public.welcome');
   }

   public function login()
   {
    return view('public.login');
   }

   public function register()
   {
    return view('public.register');
   }

   public function store(Request $request)
   {

      // dd($request->name);

      //validation
      $this -> validate($request,[
            'email' => 'required',
            'name' => 'required',
            'surname' => 'required',
            'studentNumber' => 'required',
            'school' => 'required',
            'password' => 'required|confirmed',
            'password_confirmation' => 'required',
      ]);
      //Create User

   }

   public function log_sign(Request $request)
   {
      $this -> validate($request,[
         'email' => 'required',
         'password' => 'required',
   ]);
   }
}
