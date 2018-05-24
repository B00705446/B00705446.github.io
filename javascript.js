var spectrum = ['#fad1d', '#f7bbb', '#f4a4a4', '#f28d8d', '#ef7676', '#ed6464', '#ec5f5f', '#ea4848', '#e73232', '#e41b1b'];
var cycle = spectrum.length-1;

var speed = 200;
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