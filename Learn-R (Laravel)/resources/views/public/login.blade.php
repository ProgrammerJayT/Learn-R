@extends('layout.app')

@section('content')

<section >
    <div class="container">
        <div class="container">
            <div class="justify-content-center ">
                <div class="text-center ">
                        <h1>
                            <div class="display-4 fw-bold pb-1 "> Welcome Back!</div>
                        </h1>
    
                        <p class="text-secondary text-opacity-75">We're so excited to see you again!</p>
                </div>
            </div>
        </div>
        
        <div class="container-lg ">
            <div class="row justify-content-center my-5">
                <div class="col-lg-6">
                    <form method="POST">
                        @csrf
                        <div class="mb-3">
                            <label for="email" class="form-label fw-bold">Email address</label>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                    <i class="fa-solid fa-at"></i>
                                </span>
                                <input type="email" name="email" class="form-control @error('email') border border-danger @enderror" id="email" placeholder="user@example.com" value="{{old('email')}}">
                            </div>
                            <div id="emailHelp" class="form-text text-opacity-50">Remember, We'll never share your email with anyone else.</div>

                            @error('email')
                            <div class="text-danger text-center small">
                                {{ $message }}
                            </div>
                            @enderror 

                        </div>
                            <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label fw-bold">Password</label>
                            <input type="password" class="form-control @error('password') border border-danger @enderror"  id="exampleInputPassword1">

                                @error('password')
                                <div class="text-danger text-center small">
                                {{ $message }}
                                </div>
                                @enderror

                            </div>
                    
                        <div class="mt-4">
                            <button type="submit" class=" btn btn-primary pe-5 ps-5">Submit</button>
                        </div>
                        <div class="mt-3">
                            <p>Need an account? <a href="{{route ('register') }}" class="text-decoration-none">Register</a></p>
                            
                        </div>
                      </form>
                </div>
            </div>
        </div> 
    
    </div>    
    </section>
    
@endsection