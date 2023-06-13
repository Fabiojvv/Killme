//-------------------------- CONFIGURACIÓN -----------------------------------------
let tam = 30;
let mic;
let amp;
let sonidoOn = false;
let ampMin = 0.01;
let ampMax = 1;
//........................ clases
let fondo;
let formas;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100); //HSB (color, saturación y brillo)
  mic = new p5.AudioIn();
  mic.start();
  userStartAudio(); // esto lo utilizo porque en algunos navigadores se cuelga el audio. Esto hace un reset del motor de audio (audio context)
  fondo = new Fondo(tam);
  formas = new Formas();
  background(0);
}

function draw() {
  amp = mic.getLevel();
  sonidoOn = amp > ampMin;
  fondo.dibujaFondo();
  fondo.dibujaFiltros();
  formas.dibujarFormas();

}


