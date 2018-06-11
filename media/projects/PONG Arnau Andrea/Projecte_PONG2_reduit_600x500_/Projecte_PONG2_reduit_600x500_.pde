//Andrea Tomás i Arnau Espàrrech 
//Es necessita la llibreria Minim per escoltar l'audio.

//Audio
 import ddf.minim.*;
 Minim minim;
 AudioPlayer song;

//Estat del JOC inicial.
int joc = 0;

//Variables.
int recty = 220;
int recty2 = 220;
boolean amunt = false;
boolean abaix = false;
boolean amunt2 = false;
boolean abaix2 = false;

//Pilota.
int posx;
int posy;
boolean movx = true;
boolean movy = true;

//Variables de puntuació.
int punt1 = 0;
int punt2 = 0;

//Restart.
boolean restart = false;


//Audio.
void setup (){
size (600,500);
posx=300;
posy=250;
minim = new Minim(this);
song = minim.loadFile("collision.mp3");

}

void draw () {
  
if (joc == 0){

//Escenari : Parts Fixes.  
background (0);
stroke (0,255,0);
strokeWeight (5);
textSize (30);
fill (0,255,0);
text ("Press X to MultiPlayer",100,300);
text ("Press Z to SinglePlayer (Training Mode)",10,200);
text ("W - Amunt",50,100);
text ("S - Avall",50,400);
text ("O - Amunt",400,100);
text ("L - Avall",400,400);
}

//VIDEOJOC 1JUGADOR.

if (joc == 3){
  
background (0);
stroke (0,255,0);
line (300,100,300,400);
strokeWeight (5);
textSize (20);
text ("Press M to Menu ",400,400);


//JUGADOR Nº1
  if (amunt) {
  recty = recty - 7; 
  }else{
  amunt = false; 
 }
  if (abaix) {
  recty = recty + 7; 
  }else{
  abaix = false; 
 }
  fill(0,255,0);
  rect (50,recty,5,60);




//JUGADOR Nº2
  if (amunt2) {
  recty2 = recty2 - 7; 
  }else{
  amunt2 = false; 
 }
  if (abaix2) {
  recty2 = recty2 + 7; 
  }else{
  abaix2 = false; 
 }
  fill(0,255,0);
  rect (550,recty2,5,60);




//Moviments Pilota;

ellipse (posx,posy,10,10);
  
    if(movx){
    posx = posx + 4;
  }

  if (posx >= 600) {
    movx=false;
  }

  if (movx == false) {

    posx = posx - 4;
  }

  if (posx <= 0) {
      movx=true;
  }
  
    if(movy){
    posy = posy + 4;
  }

  if (posy >= 500) {
    movy=false;
  }

  if (movy == false) {

    posy = posy - 4;
  }

  if (posy <= 0) {
      movy=true;
  }
  
  
  
  
//Col·lisions.


  if ((posy >= recty) && (posy <= recty+60)&&(posx == 60)&&( movy==true)) { 
    movy = true; movx=true;
     song = minim.loadFile("collision.mp3");
     song.play();
}

  if ((posy >= recty) && (posy <= recty+60)&&(posx == 60)&&( movy==false)) { 
    movy = false; movx=true;
     song = minim.loadFile("collision.mp3");
     song.play();
}

  if ((posy >= recty2) && (posy <= recty2+60)&&(posx == 548)&&( movy==true)) { 
    movy = true; movx=false;
     song = minim.loadFile("collision.mp3");
     song.play();
}
  if ((posy >= recty2) && (posy <= recty2+60)&&(posx == 548)&&( movy==false)) { 
    movy = false; movx=false;
     song = minim.loadFile("collision.mp3");
     song.play();
}

//Jugador2 és mou de forma automatica.
recty2 = posy-30;



//Posició Inici quan és faci punt i PUNTUACIÓ.

  if (posx >= 595) {
  
  posy=250;
  posx=300;
  movx=false;

  }
  if (posx <= 0) {
  
  posy=250;
  posx=300;
  movx=true;
 
  }
}                                                        


//VIDEOJOC MULTIPLAYER.

if (joc == 1){

background (0);
stroke (0,255,0);
line (300,100,300,400);
strokeWeight (5);


//Puntuació.
textSize (20);
text (punt1,70,50);
text (punt2,530,50);



//JUGADOR Nº1
  if (amunt) {
  recty = recty - 7; 
  }else{
  amunt = false; 
 }
  if (abaix) {
  recty = recty + 7; 
  }else{
  abaix = false; 
 }
  fill(0,255,0);
  rect (50,recty,5,60);




//JUGADOR Nº2
  if (amunt2) {
  recty2 = recty2 - 7; 
  }else{
  amunt2 = false; 
 }
  if (abaix2) {
  recty2 = recty2 + 7; 
  }else{
  abaix2 = false; 
 }
  fill(0,255,0);
  rect (550,recty2,5,60);




//Pilota;

ellipse (posx,posy,10,10);
  
    if(movx){
    posx = posx + 4;
  }

  if (posx >= 600) {
    movx=false;
  }

  if (movx == false) {

    posx = posx - 4;
  }

  if (posx <= 0) {
      movx=true;
  }
  
    if(movy){
    posy = posy + 4;
  }

  if (posy >= 500) {
    movy=false;
  }

  if (movy == false) {

    posy = posy - 4;
  }

  if (posy <= 0) {
      movy=true;
  }
  
  
  
  
//Col·lisions.


  if ((posy >= recty) && (posy <= recty+60)&&(posx == 60)&&( movy==true)) { 
    movy = true; movx=true;
     song = minim.loadFile("collision.mp3");
     song.play();
}

  if ((posy >= recty) && (posy <= recty+60)&&(posx == 60)&&( movy==false)) { 
    movy = false; movx=true;
     song = minim.loadFile("collision.mp3");
     song.play();
}

  if ((posy >= recty2) && (posy <= recty2+60)&&(posx == 548)&&( movy==true)) { 
    movy = true; movx=false;
     song = minim.loadFile("collision.mp3");
     song.play();
}
  if ((posy >= recty2) && (posy <= recty2+60)&&(posx == 548)&&( movy==false)) { 
    movy = false; movx=false;
     song = minim.loadFile("collision.mp3");
     song.play();
}





//Posició Inici quan és faci punt i PUNTUACIÓ.

  if (posx >= 595) {
  
  posy=250;
  posx=300;
  movx=false;
  //Puntuació.
  punt1=punt1+1;
  }
  if (posx <= 0) {
  
  posy=250;
  posx=300;
  movx=true;
  punt2=punt2+1;
  
  }
}
  

//Restart.
if ((punt1 == 10) || (punt2 == 10)){ 
joc = 2;
}

if ( joc == 2){

  posy = 250;
  posx = 300;
  recty = 220 ;
  recty2= 220 ;
  
  
  
  
  
//DECLARAR GUANYADORS.  
  
if (punt1 == 10){
  
  text ("Jugador 1 GUANYA",100,360); 
  text ("Press R to restart",100,400);
  text ("Press M to Menu",100,440);
  punt1 = 0;
  punt2 = 0;
}
  
if (punt2 == 10){

  text ("Jugador 2 GUANYA",350,360);
  text ("Press R to restart",350,400);
  text ("Press M to Menu",350,440);
  punt1 = 0;
  punt2 = 0;
}  
}
}


void keyPressed () {

//Controls Jugador1

if ((key == 'W') || (key == 'w')) {
amunt = true;
}

if ((key == 'S') || (key == 's')) {
abaix = true;
}

//Controls Jugador2

if ((key == 'O') || (key == 'o')) {
amunt2 = true;
}

if ((key == 'L') || (key == 'l')) {
abaix2 = true;
}

//RESTART/START.

if ((key == 'R') || (key == 'r')) {
joc = 1; }

if ((key == 'X') || (key == 'x')) {
joc = 1; }


if ((key == 'Z') || (key == 'z')) {
joc = 3; }

if ((key == 'M') || (key == 'm')) {
joc = 0;
  recty = 220 ;
  recty2= 220 ;
  posy = 250;
  posx = 300;
  punt1=0;
  punt2=0;
}


}


//TECLES.
void keyReleased() {

if ((key == 'W') || (key == 'w')) {
amunt = false; 
}
if ((key == 'S') || (key == 's')) {
abaix = false;
}

if ((key == 'O') || (key == 'o')) {
amunt2 = false; 
}
if ((key == 'L') || (key == 'l')) {
abaix2 = false;
}
}