@extends('layout.app')

@section('content')
 <section>
    <div class="container-lg">
        <div class="justify-content-center align-items-center">
            <div class="text-center">
                <h1>
                    <div class="display-1">
                        Learn-R
                    </div>
                    <div class="display-6 lead text-muted">
                        Virtual Learning Environment
                    </div>
                </h1>
                <p class="text-muted lead ">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                
                <div class="pt-2">
                    <a href="{{ route('login') }}" class="btn btn-primary ps-4 pe-4 me-2 shadow">Sign In</a>
                    <a href="{{ route('register') }}" class="btn btn-primary ps-4 pe-4 shadow">Sign Up</a>
                </div>
            </div>
        </div>
    </div>
</section>   
@endsection