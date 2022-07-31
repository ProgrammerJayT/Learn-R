@extends('layout.app')

@section('content')

<section style="padding: 100px ">
<div class="container ">
<div class="container">
<div class="justify-content-center ">
    <div class="text-center ">
            <h1>
                <div class="display-4 fw-bold pb-1 "> Create an account</div>
            </h1>

            <p class="text-secondary text-opacity-75">Your learning journey starts now</p>
    </div>
</div>
</div>

<div class="container-lg ">
<div class="row justify-content-center my-5">
    <div class="col-lg-6">
        <form method="POST">
            @csrf
            {{-- email --}}
            <div class="mb-3">
                <label for="email" class="form-label fw-bold">Email address</label>
                <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                    <i class="fa-solid fa-at"></i>
                </span>
                <input type="email" name="email" class="form-control @error('email') border border-danger @enderror" id="email" placeholder="user@example.com" value="{{old('email')}}">
            </div>
                
                @error('email')
                <div class="text-danger text-center small">
                {{ $message }}
                </div>
                @enderror
            
            </div>
            {{-- name --}}
            <div class="mb-3">
                <label for="name" class="form-label fw-bold">First Name</label>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                        <i class="fa-solid fa-user"></i>
                    </span>
                    <input type="name" name="name" class="form-control @error('name') border border-danger @enderror" id="name" placeholder="Michael" value="{{old('name')}}">
                </div>

                @error('name')
                <div class="text-danger text-center small">
                {{ $message }}
                </div>
                @enderror
            </div>
            {{-- surname --}}
            <div class="mb-3">
                <label for="surname" class="form-label fw-bold">Last Name</label>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                        <i class="fa-solid fa-user"></i>
                    </span>
                    <input type="surname" name="surname" class="form-control @error('surname') border border-danger @enderror" id="surname" placeholder="Myers" value="{{old('surname')}}">
                </div>

                @error('surname')
                <div class="text-danger text-center small">
                {{ $message }}
                </div>
                @enderror

            </div>
            {{-- Student Number --}}
            <div class="mb-3">
                <label for="studentNumber" class="form-label fw-bold">Student Number</label>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                        <i class="fa-solid fa-id-card"></i>
                    </span>
                    <input type="studentNumber" name="studentNumber" class="form-control @error('studentNumber') border border-danger @enderror" id="studentNumber" placeholder="123456789" value="{{old('studentNumber')}}">
                </div>

                @error('studentNumber')
                <div class="text-danger text-center small">
                {{ $message }}
                </div>
                @enderror
            </div>
            {{-- University or school --}}
            <div class="mb-3">
                <label for="school" class="form-label fw-bold">University Or School Name</label>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                        <i class="fa-solid fa-school"></i>
                    </span>
                    <input type="school" name="school" class="form-control @error('school') border border-danger @enderror" id="school" placeholder="University of Johannesburg" value="{{old('school')}}">
                </div>

                @error('school')
                <div class="text-danger text-center small">
                {{ $message }}
                </div>
                @enderror
                
            </div>
            {{-- desired language --}}
            <label for="language" class="form-label fw-bold">Preferred language</label>
            
                <select name="language" id="language" name="language" class="form-select mb-3" value="{{old('language')}}">
                    <option value="English">English</option>
                    <option value="Afrikaans">Afrikaans</option>
                    <option value="IsiNdebele">IsiNdebele</option>
                    <option value="IsiZulu">IsiZulu</option>
                    <option value="IsiXhosa">IsiXhosa </option>
                    <option value="Xitsonga">Xitsonga</option>
                    <option value="Tshivenda">Tshivenda</option>
                    <option value="SiSwati">SiSwati</option>
                    <option value="Setswana">Setswana</option>
                    <option value="Sesotho">Sesotho</option>
                    <option value="Sepedi">Sepedi</option>
                </select >
                
            {{-- password --}}
            <div class="mb-3">
                <label for="password" class="form-label fw-bold">Password</label>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                        <i class="fa-solid fa-key"></i>
                    </span>
                    <input type="password" name="password" class="form-control @error('password') border border-danger @enderror" id="password" placeholder=>
                </div>

                @error('password')
                <div class="text-danger text-center small">
                {{ $message }}
                </div>
                @enderror
                </div>
            {{-- password_confrmation --}}
            <div class="mb-3">
                <label for="password_confirmation" class="form-label fw-bold">Retype Password</label>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                        <i class="fa-solid fa-key"></i>
                    </span>
                    <input type="password" name="password_confirmation" class="form-control @error('password_confirmation') border border-danger @enderror" id="password_confirmation">
                </div>

                @error('password_confirmation')
                <div class="text-danger text-center small">
                {{ $message }}
                </div>
                @enderror
                </div>
            
            
            <div class="mt-4">
                <button type="submit" class=" btn btn-primary pe-5 ps-5 shadow">Create Account</button>
            </div>
            <div class="mt-3">
                <p>Already have an account? <a href="{{ route('login') }}" class="text-decoration-none">Login</a></p>
                
            </div>
            </form>
    </div>
</div>
</div> 

</div>    
</section>

@endsection