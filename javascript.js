var spectrum = ['#f00', '#f66', '#969', '#00F', '#0FB53F'];
var cycle = spectrum.length-1;

var speed = 300;
var i = 0;
    window.setInterval(function(){
    document.getElementById('ex').style.color = spectrum[i];
    if (i < cycle) i++;
    else i = 0;
}, speed);

function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}