var cv = document.getElementById ("CV");
var fletxa = document.getElementById ("fletxa");
var fletxaO = document.getElementById ("fletxaO");

var DivImg = document.getElementById ("DivImg");
var DivVid = document.getElementById ("DivVid");
var DivPro = document.getElementById ("DivPro");

var selimg = document.getElementById ("selimg");
var selvid = document.getElementById ("selvid");
var selpro = document.getElementById ("selpro");

var scrollup = document.getElementById ("scrollup");
var html = document.body;
var menu = document.getElementById ("menu");

var images = document.getElementById ("images");
var videos = document.getElementById ("videos");
var projects = document.getElementById ("projects");

var cuina = document.getElementById ("cuina");

var paintimg;
var paintvid;
var paintpro;


fletxa.onclick = function(){
    
    fletxa.style.visibility="hidden";
    fletxaO.style.visibility="visible";
    CV.style.visibility="visible";
    
}

fletxaO.onclick = function(){
    
    fletxa.style.visibility="visible";
    fletxaO.style.visibility="hidden";
    CV.style.visibility="hidden"; 
    
}

selimg.onclick = function(){
    
    amagar();
    paintimg=1;
    images.style.visibility= "visible";
    selimg.style.backgroundColor= "lightslategray";
    DivImg.style.visibility="visible";
}

selvid.onclick = function(){
    
    amagar();
    paintvid=1;
    videos.style.visibility= "visible";
    selvid.style.backgroundColor= "lightslategray";
    DivVid.style.visibility="visible";
}

selpro.onclick = function(){
    
    amagar();
    paintpro=1;
    projects.style.visibility= "visible";
    selpro.style.backgroundColor= "lightslategray";
    DivPro.style.visibility="visible";
}

selimg.onmouseover = function(){

    selimg.style.backgroundColor= "lightslategray";
    
}

selimg.onmouseout = function(){
    
    selimg.style.backgroundColor= "lightgray";
    sel();
}

selvid.onmouseover = function(){
    
    selvid.style.backgroundColor= "lightslategray";
    
}

selvid.onmouseout = function(){
    
    selvid.style.backgroundColor= "lightgray";
    sel();
}

selpro.onmouseover = function(){
    
    selpro.style.backgroundColor= "lightslategray";
    
}

selpro.onmouseout = function(){
    
    selpro.style.backgroundColor= "lightgray";
    sel();
}

amagar = function(){
    
    canvi();
    DivImg.style.visibility="hidden";
    DivVid.style.visibility="hidden";
    DivPro.style.visibility="hidden";
    projects.style.visibility= "hidden";
    videos.style.visibility= "hidden";
    images.style.visibility= "hidden";
    selimg.style.backgroundColor= "lightgray";
    selvid.style.backgroundColor= "lightgray";
    selpro.style.backgroundColor= "lightgray";
    paintimg=0;
    paintvid=0;
    paintpro=0;
}

scrollup.onclick = function() {
    
  html.scrollTop = 0;
    
}

window.onscroll = function() {menuS()};

function menuS() {
    
    if (html.scrollTop > 900) {
        
        menu.style.position = "fixed";
        menu.style.top = "-900px";
        menu.style.left = "0px";
        scrollup.style.visibility = "visible";
        
    }else{
        
        menu.style.position = "absolute";
        menu.style.top = "0px";
        menu.style.left = "0px";
        scrollup.style.visibility = "hidden";
    }
}

function sel(){
    
    if (paintimg == 1){
        
        selimg.style.backgroundColor ="lightslategray";
        
    }else{
        
        selimg.style.backgroundColor= "lightgray";
        
    }
    
        if (paintvid == 1){
        
        selvid.style.backgroundColor ="lightslategray";
        
    }else{
        
        selvid.style.backgroundColor= "lightgray";
        
    }
    
        if (paintpro == 1){
        
        selpro.style.backgroundColor ="lightslategray";
        
    }else{
        
        selpro.style.backgroundColor= "lightgray";
        
    }
    
}

function canvi(){

    if (html.scrollTop > 800) {
        
        html.scrollTop = 900;
        
    }else{
        
    }
}


cuina.onclick = function(){
    
    window.open ("media/projects/AppAnimada/index.html",height=768,width=1024);
    
}