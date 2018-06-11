/*Treball Realitzat per Andrea Tomàs i Arnau Espàrrech*/

//Cridem la classe Personatge.
Personatge a;
//Creem l'Array Enemics.
Enemic[] enemics = new Enemic[18];

//Creem les variables que seran imatges.
PImage portada;
PImage reset;
PImage victoria;

/*Variables de contador de punts i del "game" que en 0 serà la pantalla Inicial,
en 1 el joc, en 2 la pantalla de Reset(Per que hem perdut) i en 3 la pantalla de Victoria.*/
int pnt = 0;
int game = 0;

void setup (){
  size (800,800);
  
//Creem el nostre personatge en el valor de X = 370.
  a = new Personatge(370);
  
//Cridem la funció createEnemies() que ens crearà els nostres 18 enemics.
  createEnemies();

//Aquí carreguem les imatges que utilitzarem per a les diferents pantalles.
  portada = loadImage ("Portada.jpg");
  reset = loadImage ("Reset.jpg");
  victoria = loadImage ("Victoria.jpg");
  
}


void draw () {

//Diferents pantalles:

    //Pantalla d'Inici.
    if (game == 0) {
    
      PantallaI();
      
    }
    
    //Pantalla de Victoria.
    if (game == 3) {
  
      PantallaV();
    
    }
    
    //Pantalla de Derrota.
    if (game == 2) {
  
      PantallaR();
    
    }
    
    //Pantalla del Videojoc.
    if (game == 1){
    
      Joc();
    
    }
}


//Les diferents funcions amb les imatges de les Pantalles.

void PantallaI(){

      image(portada,0,0);

}

void PantallaR(){

       image(reset,0,0);

}

void PantallaV(){

       image(victoria,0,0);

}

//Funció en la que es troba la Pantalla del joc.

void Joc(){

  background (0);
  stroke(0,255,0);
  line(50,600,750,600);
  
//Text en el que trobem la puntuació.
  textSize(50);
  text(pnt,50,720);
  
//Funcions que defineix el moviment del personatge principal i la posibilitat de disparar.
  a.moviment();
  a.tret();


  for (int i = 0; i < enemics.length; i++) {

    
    //Variables de les que treiem la posició X i Y tant del tret que farà el nostre personatge com el dels enemics.
    
    int posxtret = a.getTretX();
    int posytret = a.getTretY();
    
    int posx = enemics[i].getPosx();
    int posy = enemics[i].getPosy();
    
    //Funció que s'aplica sobre tots els enemics i que pinten i defineixen el moviment dels enemics.
    enemics[i].viu();
    
        //Amb aquest if fem que si un dels enemics arriba fins el punt y=590, la partida finalitzi.
        if (posy >= 590) {
        
          game = 2;
          
        }
        
        //if que detecta la col·lisió entre el tret i els enemics.
        if ((posxtret >= posx )&&(posxtret <= posx+40)&&(posytret >= posy)&&(posytret <= posy+20)){
          
            /*Si la col·lisió s'efectua, el enemic desapereix gracies a la funció mort(),
            i el tret passa a false, a més es sumarà 20 punts al nostre marcador.*/
            enemics[i].mort();
            a.tret = false;
            pnt = pnt + 20;
        }
        
        /*En aquest if, farem que si la puntuació arriba a 360,
        que es la puntuació màxima que es pot arribar, 
        el joc s'acabarà i haurem guanyat.*/
        if (pnt == 360){
        
            game = 3;
          
        }
  } 

}

//Funció en la crearem els enemics en les seves posicions especifiques.
void createEnemies() {
  
  for (int i = 0; i < enemics.length; i++) {
  
    enemics[0] = new Enemic(50,50);
    enemics[1] = new Enemic(100,50); 
    enemics[2] = new Enemic(150,50); 
    enemics[3] = new Enemic(200,50); 
    enemics[4] = new Enemic(250,50);
    enemics[5] = new Enemic(300,50);
    enemics[6] = new Enemic(50,100);
    enemics[7] = new Enemic(100,100); 
    enemics[8] = new Enemic(150,100); 
    enemics[9] = new Enemic(200,100); 
    enemics[10] = new Enemic(250,100);
    enemics[11] = new Enemic(300,100);
    enemics[12] = new Enemic(50,150);
    enemics[13] = new Enemic(100,150); 
    enemics[14] = new Enemic(150,150); 
    enemics[15] = new Enemic(200,150); 
    enemics[16] = new Enemic(250,150);
    enemics[17] = new Enemic(300,150);
      
      }
    }

//Assignació de tecles.
void keyPressed(){

  //Tecles per a moure el nostre personatge i disparar amb ell.  
  a.tecla1();
  
  //Tecles que ens permeten cambiar de pantalles.
  if ((key == 'S') || (key == 's')) {
  game = 1;
}
  if ((key == 'R') || (key == 'r')) {
  game = 1;
  a = new Personatge(370);
  createEnemies();
  pnt = 0;
}
  
}

void keyReleased(){

  //Tecles que ens permeten cambiar de pantalles.  
  a.tecla12();
  
}