<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Learn-R</title>
    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
<script src="https://kit.fontawesome.com/1da240988f.js" crossorigin="anonymous"></script>
<style>
    section
    {
        padding: 200px 
    }
</style>


</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <div class="container-xxl">
          <a class="navbar-brand" href="#">Learn-R</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-start align-center" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              
            </ul>
      
            <div class="collapse navbar-collapse justify-content-end " id="navbarNavDropdown">
              <ul class="navbar-nav">
      
                {{-- tooltip --}}
                <li class="nav-item dropdown d-md-inline">
                <span class="tt" data-bs-toggle="tooltip" data-bs-custom-class="custom-tooltip" data-bs-title="Select a course..." data-bs-placement="left" >
                  
                    <a class="btn btn-outline-primary rounded me-3" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Courses
                    </a>
                    <ul class="dropdown-menu mt-3 text-center" aria-labelledby="navbarDropdownMenuLink">
                      <li><a class="dropdown-item" href="#">Courses 1</a></li>
                      <li><a class="dropdown-item" href="#">Courses 2</a></li>
                      <li><a class="dropdown-item" href="#">Courses 3</a></li>
                    </ul>
                  
                </span>
              </li>  
      
                
                {{-- tooltip --}}
      
                <li class="nav-item dropdown d-md-inline">
                  <span class="tt" data-bs-toggle="tooltip" data-bs-custom-class="custom-tooltip" data-bs-title="Your Account" data-bs-placement="top" >
                    
                      <a class="btn btn-outline-secondary rounded me-3" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-user"></i>
                        MH Myers
                        </a>
                      </a>
                      <ul class="dropdown-menu mt-3 text-center" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">User Profile</a></li>
                        <li><a class="dropdown-item" href="#">Sign Out</a></li>
                      </ul>
                    
                  </span>
                </li>  
      
                
      
                {{-- tooltip --}}
                <span class="tt" data-bs-toggle="tooltip" data-bs-custom-class="custom-tooltip" data-bs-title="Update Alerts" data-bs-placement="bottom" >
                  <li class="nav-item my-1 ">
                    <a class="border border-none btn btn-outline-primary rounded me-3" aria-current="page" href="#">
                      <i class="fa-solid fa-bell"></i>
                    </a>
                  </li>
                </span>

                {{-- tooltip --}}
                <span class="tt" data-bs-toggle="tooltip" data-bs-custom-class="custom-tooltip" data-bs-title="Mail Alerts" data-bs-placement="bottom" >
                    <li class="nav-item my-1 ">
                      <a class="border border-none btn btn-outline-primary rounded" aria-current="page" href="#">
                        <i class="fa-solid fa-envelope"></i>
                      </a>
                    </li>
                  </span>

                
      
              </ul>
          </div>
      
        </div>
      </nav>
    
    @yield('content')

    <!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>

<script>
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

</script>

</body>
</html>