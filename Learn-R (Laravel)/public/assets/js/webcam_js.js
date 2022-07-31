document.addEventListener("DOMContentLoaded", () => {
    var submitb = document.getElementById("submitbttn");
    var video = document.getElementById("vid");
    var mediaDevices = navigator.mediaDevices;
    vid.muted = true;
    

      // Accessing the user camera and video.
      mediaDevices
        .getUserMedia({
          video: true,
          audio: true,
        })
        .then((stream) => {

          // Changing the source of video to current stream.
          video.srcObject = stream;
          video.addEventListener("loadedmetadata", () => {
            video.play();
          });
        })
        .catch(alert);
  });