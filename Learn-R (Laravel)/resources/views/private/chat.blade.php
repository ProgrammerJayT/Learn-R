@extends('layout.app')

@section('content')


 <section style="padding: 25px ">
    <div class="container-lg">
        <div class="justify-content-center align-items-center">
            <div class="text-center shadow-sm p-3 mb-5 bg-light rounded">
                <h1>
                    <div class="h2">
                        Chat Section
                    </div>
                </h1>
                <p class="lead" >Engage with other Students by posting a question or help others solve their questions</p>

            </div>


            <div class="mb-3 ">
                <form action="" method="POST">
                    @csrf
                    <input type="text" name="title" class="form-control mb-3" id="exampleFormControlInput1" placeholder="Query Title">
                    <textarea name="body" class="form-control" placeholder="Enquire about a lesson or Course related matter" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <button type="submit" class=" mt-1 btn btn-primary">Submit</button>
                </form>
            </div>

            <a href="{{route('queries')}}" class="bt btn btn-primary" >View Enquiries</a>
            

        </div>
    </div>
</section>  


@endsection