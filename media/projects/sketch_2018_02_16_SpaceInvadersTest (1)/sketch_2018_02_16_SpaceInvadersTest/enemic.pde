//Classe Enemic.
class Enemic {

//Diferents Variables que utilitzarem:
//Variables que defineixen el moviment.
int xe;
int ye;
boolean dreta = true;
boolean esquerra;
boolean abaix;
//Variable que dira si l'enemic esta viu o mort.
boolean viu = true;

      //L'enemic requereix d'un valor x i y per iniciar-se.
      Enemic(int x_inicial, int y_inicial){
      
          xe = x_inicial;
          ye = y_inicial;
      
      }

//Funció que dibuixarà el nostre enemic.
    void dibuixE(){

        fill (0,255,0);
        rect (xe,ye,40,20);
        
    }

//Funció que definiex el moviment dels nostres enemics.
    void moviment(){
         
        if(dreta == true){
          xe = xe + 5;
        }
        
        if (xe >= 755){
          dreta = false;
          esquerra = true;
          abaix = true;
          
           if (abaix == true){
          
             ye = ye + 30;
             abaix = false; 
              
          }
        
        }
        
        if(esquerra == true){
          xe = xe - 5;
        }
        
        if (xe <= 5){
          
          esquerra = false;
          dreta = true;
          abaix = true;
          
           if (abaix == true){
          
             ye = ye + 30;
             abaix = false; 
              
          }
                  
        }
    }

//Funció a traves de la cual obtindrem el valor x del enemic.
int getPosx(){
        
        int px;
      
        px = xe;
        
        return px;    
  }
  
//Funció a traves de la cual obtindrem el valor y del enemic.  
  int getPosy(){
  
        int py;
      
        py = ye;
        
        return py;
  }

//Funció que declara si el enemic esta viu o mort.    
    void viu(){
        if (viu == true){
          
          dibuixE();
          moviment();
          
    }        
    }
//Funció que s'activarà un cop un enemic rebi l'impacte d'un tret, i que el "matarà", es a dir el deixarà de dibuixar.    
        void mort(){

       viu = false; 
       ye = -200;
    
    } 
    
}