const video = document.getElementById('v');

Promise.all([
  
])
function start(){
  navigator.getUserMedia(
    { video: {} } ,
     stream =>  video.srcObject = stream,
     err => console.error(err)
     );
}

start();