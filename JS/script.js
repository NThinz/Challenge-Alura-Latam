var btnPrimary = document.querySelector(".btn-primary");
var btnSecundary = document.querySelector(".btn-secundary");
var div4 = document.querySelector(".div4");
var div5 = document.querySelector(".div5");
var textResults = document.querySelector(".textResults");

btnPrimary.onclick = primary;
btnSecundary.onclick = secundary;

function primary() {
  ocultarAdelante();
  mostrarAdelante();
  var cajatexto = recuperarTexto();
  textResults.textContent = encriptarTexto(cajatexto);
}

function secundary() {
  ocultarAdelante();
  mostrarAdelante();
  var cajatexto = recuperarTexto();
  textResults.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto() {
  var cajatexto = document.querySelector(".boxText");
  return cajatexto.value.toLowerCase();
}

function ocultarAdelante() {
  div4.classList.add("ocultar");
}
function mostrarAdelante() {
  div5.classList.add("mostrar");
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
