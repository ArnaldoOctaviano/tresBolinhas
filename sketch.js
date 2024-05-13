let cor;        // cria a variavel cor
let circuloX;   // cria a variavel circuloX para definir a posição horizontal
let circuloY;   // cria a variavel circuloY para definir a posição vertical

function setup() {
  createCanvas(600, 400);    // cria a tela e define tamanho (x,y)(larguara/altura)
  background("#BE552F");  // cor de fundo da tela
  cor = color(random(0, 255), random(0, 255), random(0, 255));
              // define uma cor aleatória considerando os valores (rgba) 
              //RGBA é o sistema de cores formado pelas cores:
              //vermelho (red), verde (green), azul (blue) e pelo canal alfa (transparencia).
              // canal alfa (transparencia) = 0 transparente - 100 solido
              // para as cores RGB = os valores vão de 0 a 255.
  
  circuloX = [0, 0, 0];  // Difino o valor de circuloX como sendo um array com 3 valores
              //para definir a variavel como sendo um array usa-se os colchetes [  ]
              // no caso [0,0,0] estamos definindo um array com 3 valores 0
              // sendo um para cada circulo, 0 pois vão iniciar na posição horizontal 0
  
              // ATENCAO: o 1º valor de um array é a posição [0].
                        // então no array teste = [5,6,7]  -- teste[1] vai ser 6 (posição2)
  
  
  circuloY = [random(height), random(height), random(height)];  //crio um array circuloY
        // defino 3 valores randomicos (aleatório) para o array 
        // sendo que random(height)=random(0,400) sabendose que a altura da tela é 400
        // Assim (height) pega o tamanho y da tela e escolhe um valor aleatorio.  
}

function draw() {    // afunção para desenhar (draw) (nativa do javascript)
  
  fill(cor);    // define a cor da caneta / objeto
  
  for(let contador in circuloX) {     //for: cria um laço de repetição
        // (let contador in circuloX) dentro do laço cria uma variavel (contador) e
              // atribui a ela o valor da posição de cada item do array 
                //ou seja no aray circuloX tem 3 variaveis internas
                // sendo as posições [0],[1],[2] 
                // Assim a cada 
    
    circle(circuloX[contador], circuloY[contador], 50); //clia um circulo 
              // na posição x,y com diametro 30
              //x = [0,0,0]      --  y = valor randomico (aleatorio) [?,?,?]
    
    circuloX[contador]+= random(-6,9); //soma um valor aleatorio entre 0 e 3 a cada um dos
                  // volores do array
    
    circuloY[contador]+= random(-6,6); //soma um valor aleatorio entre -3 e 3 a cada um dos
                  // volores do array
    
    if(circuloX[contador] >= width){  // Se o objeto  cirluoX chega ao final da tela
                    // executa a sequencia
                    // o comando width - pega o tamanho  (largura)da tela
      
      circuloX[contador] = 0; // zera o valor de circuloX [0,0,0] reinicia
      
      circuloY[contador] = random(height); // define valores aleatorios para Y 
      
    }
  }
  
  if(mouseIsPressed){ //Se o mouse for clicado executa a sequencia....
    
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
        // redefine a variavel com no formato RGBA com valores aleatorios
              //RGBA é o sistema de cores formado pelas cores:
              //vermelho (red), verde (green), azul (blue) e pelo canal alfa (transparencia).
              // canal alfa (transparencia) = 0 transparente - 100 solido
              // para as cores RGB = os valores vão de 0 a 255.
        
  }
}