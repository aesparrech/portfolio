var bol =document.getElementById ("bol");
var bolXoc =document.getElementById ("bolXoc");
var FonsForn =document.getElementById ("FonsForn");
var cascaras =document.getElementById ("cascaras");
var pastis =document.getElementById ("pastis");
var pastisP =document.getElementById ("pastisP");
var pastisE = document.getElementById ("pastisE");

var fornA =document.getElementById ("fornA");
var fornE =document.getElementById ("fornE");

var ous =document.getElementById ("ous");
var ousx =document.getElementById ("ousX");
var ousP =document.getElementById ("ousP");
var ousE =document.getElementById ("ousE");

var sucre =document.getElementById ("sucre");
var sucrex =document.getElementById ("sucreX");
var sucreP =document.getElementById ("sucreP");
var sucreE =document.getElementById ("sucreE");

var farina =document.getElementById ("farina");
var farinax =document.getElementById ("farinaX");
var farinaP =document.getElementById ("farinaP");
var farinaE =document.getElementById ("farinaE");

var llet =document.getElementById ("llet");
var lletx =document.getElementById ("lletX");
var lletP =document.getElementById ("lletP");
var lletE =document.getElementById ("lletE");

var xocolata =document.getElementById ("xocolata");
var xocolatax =document.getElementById ("xocolataX");
var xocolataP =document.getElementById ("xocolataP");
var xocolataE =document.getElementById ("xocolataE");

var credits =document.getElementById ("credits");

ous.onclick=function(){
    
    amagat();    
    ous.style.animation = "ousY 1.5s";
    ousx.style.animation = "ousX 1.5s";
    setTimeout(function(){ous.style.visibility = "hidden";},1400);
    setTimeout(function(){ousP.style.visibility="visible"; 
                          ousP.style.animation = "ousP 1s";},1250);
    
    setTimeout(function(){ousP.style.left ="200px"; 
                          ousP.style.top="200px"; 
                          ousE.style.animation ="fletxa 2s infinite";},2250);
    
}

ousE.onclick=function(){
    
   ousP.style.animation = "ousE 1s";    
   setTimeout(function(){ousE.style.visibility = "hidden"; 
                         amagat();
                         cascaras.style.visibility="visible"; 
                         cascaras.style.animation ="bolS 0.5s";},999);
       
}


sucre.onclick=function(){
    
    amagat();    
    sucre.style.animation = "sucreY 1.5s";
    sucrex.style.animation = "sucreX 1.5s";
    setTimeout(function(){sucre.style.visibility="hidden";},1400);
    setTimeout(function(){sucreP.style.visibility="visible"; 
                          sucreP.style.animation = "sucreP 1s";},1250);
    
    setTimeout(function(){sucreP.style.left ="100px"; 
                          sucreP.style.top="200px"; 
                          sucreE.style.animation ="fletxa 2s infinite";},2250);
    
}

sucreE.onclick=function(){
    
   sucreP.style.animation = "sucreE 1s";    
   setTimeout(function(){sucreE.style.visibility = "hidden"; 
                         amagat();
                         bol.src = "images/bol_sucre.png"; 
                         bol.style.animation ="bolS 0.5s";},999);
    
}


farina.onclick=function(){
    
    amagat();    
    farina.style.animation = "farinaY 1.5s";
    farinax.style.animation = "farinaX 1.5s";
    setTimeout(function(){farina.style.visibility = "hidden";},1400);
    setTimeout(function(){farinaP.style.visibility="visible";
    farinaP.style.animation = "farinaP 1s";},1250);
    
    setTimeout(function(){farinaP.style.left ="100px"; 
                          farinaP.style.top="200px"; 
                          farinaE.style.animation ="fletxa 2s infinite";},2250);
  }
            
farinaE.onclick=function(){
    
   farinaP.style.animation = "farinaE 1s";    
   setTimeout(function(){farinaE.style.visibility = "hidden"; 
                         amagat(); 
                         bol.src = "images/bol_farina.png"; 
                         bol.style.animation ="bolF 0.5s";},999);
    
}



llet.onclick=function(){
    
    amagat();    
    llet.style.animation = "lletY 1.5s";
    lletx.style.animation = "lletX 1.5s";
    setTimeout(function(){llet.style.visibility = "hidden";},1400);
    setTimeout(function(){lletP.style.visibility="visible";
                          lletP.style.animation = "lletP 1s";},1250);
    
    setTimeout(function(){lletP.style.left ="200px";
                          lletP.style.top="200px"; 
                          lletE.style.animation ="fletxa 2s infinite";},2250);
}

lletE.onclick=function(){
    
   lletP.style.animation = "lletE 1s";    
   setTimeout(function(){lletE.style.visibility = "hidden"; 
                         amagat(); 
                         bol.src = "images/bol_llet.png"; 
                         bol.style.animation ="bolL 0.5s";},999);
    
}

xocolata.onclick=function(){
    
    amagat();    
    xocolata.style.animation = "xocolataY 1.5s";
    xocolatax.style.animation = "xocolataX 1.5s";
    setTimeout(function(){xocolata.style.visibility = "hidden";},1400);
    setTimeout(function(){xocolataP.style.visibility="visible";
    xocolataP.style.animation = "xocolataP 1s";},1250);
    
    setTimeout(function(){xocolataP.style.left ="200px";
                          xocolataP.style.top="200px"; 
                          xocolataE.style.animation ="fletxa 2s infinite";},2250);
    
}

xocolataE.onclick=function(){
    
   xocolataP.style.animation = "xocolataE 1s";    
   setTimeout(function(){xocolataE.style.visibility = "hidden";
                         xocolataP.style.visibility ="hidden"; 
                         bolXoc.style.visibility="visible"; 
                         bol.style.visibility="hidden"; 
                         bolXoc.style.animation ="bolX 0.5s";},999);
    
}

bolXoc.onclick=function(){
    
    bolXoc.style.animation = "fornXoc 1s";
    cascaras.style.animation = "cascarasE 1s"
    FonsForn.style.backgroundColor = "orangered";
    setTimeout(function(){bolXoc.style.visibility ="hidden"; 
                          FonsForn.style.animation ="fornF 1s infinite";
                          cascaras.style.visibility = "hidden"; 
                          fornA.style.visibility="visible";
                          fornA.style.animation="pastisA 1s";
                          fornE.style.animation ="fletxa 2s infinite"; },999);    
}

fornE.onclick=function(){
    
    fornA.style.animation = "fornE 1s";
    setTimeout(function(){fornE.style.visibility="hidden";
                          FonsForn.style.visibility="hidden"; fornA.style.visibility="hidden";
                          pastis.style.visibility="visible";
                          pastis.style.animation= "pastis 1s";},999);
    
    setTimeout(function(){pastis.style.left="505";
                          pastis.style.top="545";
                          pastisP.style.visibility="visible";
                          pastisP.style.animation="pastisA 1s";
                          pastisE.style.animation ="fletxa 2s infinite";},1999);
    
}

pastisE.onclick=function(){
    
    
    pastisP.style.animation="fornE 1s";
    setTimeout(function(){amagat();},999);
    credits.style.visibility="visible";
    
}



function amagat(){
    
    ousP.style.visibility="hidden";
    
    sucreP.style.visibility="hidden";
    
    farinaP.style.visibility="hidden";
    
    lletP.style.visibility="hidden";
    
    xocolataP.style.visibility="hidden";
    
    fornA.style.visibility="hidden";
    
    pastisP.style.visibility="hidden";
    
}