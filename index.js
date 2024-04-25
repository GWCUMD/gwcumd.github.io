var i = 1;
var len = 6;
var speed = 1000; /* The speed/duration of the effect in milliseconds */

window.onload = function() {
  typeWriter();
}

function typeWriter() {
  if (i < len) {
    console.log(i);
    document.getElementById(`t${i}`).style.textShadow = "5px 5px 3px lightcyan";
    i++;
    setTimeout(typeWriter, speed);
  }
}