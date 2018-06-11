var selimg = document.getElementById ("selimg");
var selvid = document.getElementById ("selvid");
var selpro = document.getElementById ("selpro");

var scrollup = document.getElementById ("scrollup");
var html = document.body;

var images = document.getElementById ("images");
var videos = document.getElementById ("videos");
var projects = document.getElementById ("projects");

selimg.onclick = function(){
    
    amagar();
    images.style.visibility= "visible";
    selimg.style.backgroundColor= "lightslategray";
    
}

selvid.onclick = function(){
    
    amagar();
    videos.style.visibility= "visible";
    selvid.style.backgroundColor= "lightslategray";
}

selpro.onclick = function(){
    
    amagar();
    projects.style.visibility= "visible";
    selpro.style.backgroundColor= "lightslategray";
}

amagar = function(){
    
    projects.style.visibility= "hidden";
    videos.style.visibility= "hidden";
    images.style.visibility= "hidden";
    selimg.style.backgroundColor= "lightgray";
    selvid.style.backgroundColor= "lightgray";
    selpro.style.backgroundColor= "lightgray";
}

scrollup.onclick = function() {
    
  html.scrollTop = 0;
    
}