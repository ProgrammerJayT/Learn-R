<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" 
          content="width=device-width, initial-scale=1.0" />
    <title>WebCam</title>
    <script src="assets/js/webcam_js.js" ></script>
  </head>
  
  <style>
    div {
      width: 800px;
      height: 600px;
      border: 0px solid black;
      position: relative;
    }
    video {
      width: 800px;
      height: 600px;
      object-fit: cover;
    }
  </style>
  
  <body>
    <center>
      <div>
        <video id="vid"></video>
      </div>
      <br />
      <button id="submitbttn" autoplay>
        WebCam
      </button>
    </center>
  </body>
</html>