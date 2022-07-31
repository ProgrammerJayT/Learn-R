@extends('layout.app')

@section('content')


 <section style="padding: 25px ">
    <div class="container-lg">
        <div class="justify-content-center align-items-center">
            <div class="text-center shadow-sm p-3 mb-5 bg-light rounded">
                <h1>
                    <div class="h2">
                        Previous Queries
                    </div>
                </h1>

                
            </div>

            @if(count($posts) > 0)

                <ul>
                 @foreach ($posts as $item)
                     
                        <div class="">
                         <a href="" class=" h4 text-decoration-none bg-light rounded p-4">{{$item -> title}}  </a>
                         <p class="text-muted bg-light rounded p-4 "> {{$item -> body}}</p> <br>
                        </div>
                        
                    
                 @endforeach
                </ul>
             
                @else
             
                <h3>No Posts Available</h3>   
                
                @endif



            

        </div>
    </div>

   
</section>  


@endsection