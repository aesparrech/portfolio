var meu_video = document.getElementById ("video");

var play = document.getElementById ("play");
var pause = document.getElementById ("pause");
var stop = document.getElementById ("stop");

var control = document.getElementById ("controls");

var volup = document.getElementById ("volup");
var voldown = document.getElementById ("voldown");
var mute = document.getElementById ("mute");

var jungla = document.getElementById ("jungla");
var matrix = document.getElementById ("matrix");
var killbill = document.getElementById ("killbill");

var jacket = document.getElementById ("jacket");
var enemygates = document.getElementById ("enemygates");
var bastards = document.getElementById ("bastards");

var interstellar = document.getElementById ("interstellar");
var _2001 = document.getElementById ("_2001");
var starwars = document.getElementById ("starwars");

var intocable = document.getElementById ("intocable");
var vidabella = document.getElementById ("vidabella");
var love = document.getElementById ("love");

var resplandor = document.getElementById ("resplandor");
var paranormal = document.getElementById ("paranormal");
var sinister = document.getElementById ("sinister");


var pjungla = document.getElementById ("pjungla");
var pmatrix = document.getElementById ("pmatrix");
var pkillbill = document.getElementById ("pkillbill");

var pjacket = document.getElementById ("pjacket");
var penemygates = document.getElementById ("penemygates");
var pbastards = document.getElementById ("pbastards");

var pinterstellar = document.getElementById ("pinterstellar");
var p_2001 = document.getElementById ("p_2001");
var pstarwars = document.getElementById ("pstarwars");

var pintocable = document.getElementById ("pintocable");
var pvidabella = document.getElementById ("pvidabella");
var plove = document.getElementById ("plove");

var presplandor = document.getElementById ("presplandor");
var pparanormal = document.getElementById ("pparanormal");
var psinister = document.getElementById ("psinister");

var tic = 0;
var video_actual = '';
var poster_actual = '';
var volum = meu_video.volume;

play.onclick=function(){
       
    meu_video.play();       
    timer();
}

pause.onclick=function(){
        
    meu_video.pause();       
    
}

stop.onclick=function(){
     
    reinici_valors();
    
}

volup.onclick=function(){
     
    meu_video.volume+= 0.1;
    
}

voldown.onclick=function(){
     
    meu_video.volume-= 0.1;
    
}

mute.onclick=function(){
     
    meu_video.volume = 0;
    
}

jungla.onclick = function(){
    
    video_actual = 'video/jungla.mp4';
    poster_actual = 'img/jungla.jpg';
    amagat();
    reinici_valors();
    pjungla.style.visibility="visible";
    
}

matrix.onclick = function(){
    
    amagat();
    video_actual = 'video/Matrix.mp4';
    poster_actual = 'img/matrix.jpg';
    reinici_valors();
    pmatrix.style.visibility="visible";
    
}

killbill.onclick = function(){
    
    amagat();
    video_actual = 'video/KillBill.mp4';
    poster_actual = 'img/kill.jpg';
    reinici_valors();
    pkillbill.style.visibility="visible";
    
}

jacket.onclick = function(){
    
    amagat();
    video_actual = 'video/chaquetametalica.mp4';
    poster_actual = 'img/jacket.jpg';
    reinici_valors();
    pjacket.style.visibility="visible";
    
}

enemygates.onclick = function(){
    
    amagat();
    video_actual = 'video/Enemigo.mp4';
    poster_actual = 'img/enemy.jpg';
    reinici_valors();
    penemygates.style.visibility="visible";
    
}

bastards.onclick = function(){
    
    amagat();
    video_actual = 'video/Bastardos.mp4';
    poster_actual = 'img/basterds.jpg';
    reinici_valors();
    pbastards.style.visibility="visible";
    
}

interstellar.onclick = function(){
    
    amagat();
    video_actual = 'video/Interstellar.mp4';
    poster_actual = 'img/interstellar.jpg';
    reinici_valors();
    pinterstellar.style.visibility="visible";
    
}

_2001.onclick = function(){
    
    amagat();
    video_actual = 'video/2001.mp4';
    poster_actual = 'img/2001.jpg';
    reinici_valors();
    p_2001.style.visibility="visible";
    
}

starwars.onclick = function(){
    
    amagat();
    video_actual = 'video/StarWars.mp4';
    poster_actual = 'img/starw.jpg';
    reinici_valors();
    pstarwars.style.visibility="visible";
    
}

intocable.onclick = function(){
    
    amagat();
    video_actual = 'video/Intocable.mp4';
    poster_actual = 'img/intocable.jpg';
    reinici_valors();
    pintocable.style.visibility="visible";
    
}

vidabella.onclick = function(){
    
    amagat();
    video_actual = 'video/vidabella.mp4';
    poster_actual = 'img/life.jpg';
    reinici_valors();
    pvidabella.style.visibility="visible";
    
}

love.onclick = function(){
    
    amagat();
    video_actual = 'video/love_actually.mp4';
    poster_actual = 'img/love.jpg';
    reinici_valors();
    plove.style.visibility="visible";
    
}

resplandor.onclick = function(){
    
    amagat();
    video_actual = 'video/resplandor.mp4';
    poster_actual = 'img/shining.jpg';
    reinici_valors();
    presplandor.style.visibility="visible";
    
}

paranormal.onclick = function(){
    
    amagat();
    video_actual = 'video/Paranormal.mp4';
    poster_actual = 'img/paranormal.jpg';
    reinici_valors();
    pparanormal.style.visibility="visible";
    
}

sinister.onclick = function(){
    
    amagat();
    video_actual = 'video/Sinister.mp4';
    poster_actual = 'img/sinister.jpg';
    reinici_valors();
    psinister.style.visibility="visible";
    
}


function reinici_valors (){
    
    
    meu_video.src = video_actual;
    meu_video.poster = poster_actual;
    tic = 0;
    control.style.visibility="visible";
}

function amagat(){

pjungla.style.visibility="hidden";
pmatrix.style.visibility="hidden";
pkillbill.style.visibility="hidden";
    
pjacket.style.visibility="hidden";
penemygates.style.visibility="hidden";
pbastards.style.visibility="hidden";
    
pinterstellar.style.visibility="hidden";
p_2001.style.visibility="hidden";
pstarwars.style.visibility="hidden";
    
pintocable.style.visibility="hidden";
pvidabella.style.visibility="hidden";
plove.style.visibility="hidden";


presplandor.style.visibility="hidden";
pparanormal.style.visibility="hidden";
psinister.style.visibility="hidden";
    
}

function timer(){
    
    setTimeout (time(), 1000);    
}   
    
function time (){
    
    tic = meu_video.currentTime;
    var minutes = Math.floor(tic / 60);   
    var seconds = Math.floor(tic - minutes * 60)
    var x = minutes < 10 ? "0" + minutes : minutes;
    var y = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("timer").innerHTML = x + ":" + y;
    setTimeout(time,1);
}