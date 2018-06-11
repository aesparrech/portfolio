//Class Personatge.
class Personatge {

//Variable de l'imatge que utilitzarem per al nostre enemic.
PImage nau;

//Variables que utilitzarem per al nostre tret.
boolean tret = false;
int y=650;
int x3;

//Variables del moviment del nostre personatge.
boolean esquerra = false;
boolean dreta = false;
int x;

    //El Personatge necesita una posició x per a iniciar-se.
    Personatge(int x_inicial){
    
      x = x_inicial;

    }


  
//Funcio que defineix com mourem el personatge.
void moviment(){
  
 if ((esquerra == true)&&(x>=5)) {
  x = x - 7;
 }else{
   esquerra = false;
 }
  if ((dreta == true)&&(x<=745)) {
  x = x + 7;
 }else{
   dreta = false;
 }
   
  nau = loadImage ("NAU.png");

  image (nau,x,650);

}

//Funció que utilitzarem per el tret.
void tret (){

  if (tret == false){
  
    y = 645;
  
  } 
  
  if (tret == true){
           
    rect (x3,y,10,30);
    esquerra = false;
    dreta = false;
    
    y = y - 15;
    
        
  if (y <= 0){
    
    tret = false;
  }    
}

}

//Funció amb la qual obtindrem el valor x del tret.    
  int getTretX(){
    
    int tretx;
  
    tretx = x3;
    
    return tretx;    
  }

//Funció amb la qual obtindrem el valor y del tret.
  int getTretY(){
  
    int trety;
  
    trety = y;
    
    return trety;
  
    
  }
//Tecles que utilitzarem per a els controls del personatge.
void tecla1 () {
if ((key == 'A') || (key == 'a')) {
esquerra = true;
}
if ((key == 'D') || (key == 'd')) {
dreta = true;
}
if ((key == 'W') || (key == 'w')) {

x3=x+25;
tret = true;

}
}

void tecla12() {

if ((key == 'A') || (key == 'a')) {
esquerra = false;
}
if ((key == 'D') || (key == 'd')) {
dreta = false;
}
if ((key == 'W') || (key == 'w')) {

}}}