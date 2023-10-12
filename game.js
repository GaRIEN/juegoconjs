const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

window.addEventListener("load", () => {
  setCanvasSize();
  startGame();
});


window.addEventListener("resize", setCanvasSize);

let canvasSize;
let elementsSize;

function setCanvasSize() {
  //calculamos el tamano de la ventana,
  //para que sea un cuadrado

  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }
  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);

  //calculamos el tamaño de los pixeles

  elementsSize = canvasSize / 10 - 1;
}

function startGame() {
  //definimos el tamaño de la bomba
  game.font = elementsSize + "px Verdana";
  game.textAlign = "";
  const map = maps[0];
  const mapsRows = maps[0].trim().split("\n");

  for (let row = 1; row < 11; row++) {
    for (let col = 0; col < 10; col++) {
      game.fillText(emojis["X"], elementsSize * col, elementsSize * row);
    }
  }

  // game.fillRect(0,0,100,100);
  // game.clearRect(0,0,10,10);
  // game.font='2rem verdana';
  // game.fillStyle ='purple';
  // game.textAlign ='center'
  // game.fillText('texto',0,100)
}
