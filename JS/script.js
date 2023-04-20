var btnPrimary = document.querySelector(".btn-primary");
var btnSecundary = document.querySelector(".btn-secundary");
var doll = document.querySelector(".section__two-containerDoll");
var containerResults = document.querySelector(".section__two-containerNotFound");
var textResults = document.querySelector(".textResults");

btnPrimary.onclick = primary;
btnSecundary.onclick = secundary;

function primary() {
  ocultarAdelante();
  mostrar();
  var cajatexto = recuperarTexto();
  textResults.textContent = encriptarTexto(cajatexto);
  resizeOutputContainer();
  height();
}

function secundary() {
  mostrar();
  ocultarAdelante();
  var cajatexto = recuperarTexto();
  textResults.textContent = desencriptarTexto(cajatexto);
  resizeOutputContainer();
  height();
}

function recuperarTexto() {
  var cajatexto = document.querySelector(".boxText");
  return cajatexto.value.toLowerCase();
}

function ocultarAdelante() {
  doll.classList.add("ocultar");
  containerResults.classList.add("ocultar");
}

function mostrar() {
  var btnCopiar = document.querySelector(".btn-copy");
  btnCopiar.classList.add("mostrar");
}

function height() {
  var height = document.querySelector(".section__two");
  height.classList.add("height");
}

function encriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal = textoFinal + "ai";
    } else if (texto[i] == "e") {
      textoFinal = textoFinal + "enter";
    } else if (texto[i] == "i") {
      textoFinal = textoFinal + "imes";
    } else if (texto[i] == "o") {
      textoFinal = textoFinal + "ober";
    } else if (texto[i] == "u") {
      textoFinal = textoFinal + "ufat";
    } else {
      textoFinal = textoFinal + texto[i];
    }
  }

  return textoFinal;
}

function desencriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal = textoFinal + "a";
      i = i + 1;
    } else if (texto[i] == "e") {
      textoFinal = textoFinal + "e";
      i = i + 4;
    } else if (texto[i] == "i") {
      textoFinal = textoFinal + "i";
      i = i + 3;
    } else if (texto[i] == "o") {
      textoFinal = textoFinal + "o";
      i = i + 3;
    } else if (texto[i] == "u") {
      textoFinal = textoFinal + "u";
      i = i + 3;
    } else {
      textoFinal = textoFinal + texto[i];
    }
  }

  return textoFinal;
}

const btnCopy = document.querySelector(".btn-copy");
btnCopy.addEventListener(
  "click",
  (copy = () => {
    var contenido = document.querySelector(".textResults").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
  })
);

function resizeOutputContainer() {
  var outputContainer = document.querySelector(".container__elements");
  outputContainer.style.display = "flex";
  outputContainer.style.height = "auto";
  outputContainer.style.width = "auto";
  outputContainer.style.whiteSpace = "pre-wrap"; // Añade esta línea para permitir saltos de línea
  outputContainer.style.wordWrap = "break-word"; // Añade esta línea para permitir saltos de línea
  outputContainer.style.height = outputContainer.scrollHeight + "px";
  outputContainer.style.width = outputContainer.scrollWidth + "px";
}

