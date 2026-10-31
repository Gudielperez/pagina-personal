console.log("Conectado")

const estilo =  "background: #065a82; color: white; font-weight:bold; padding: 4px 10px; border-radius: 4px";

function seccion(texto) {
    console.log("%c" + texto, estilo);
}

seccion("1.2 - Arreglos");

const colores = ["rojo", "verde", "azul"];

console.log(colores[0]);
console.log(colores[2]);
console.log(colores.length);

colores.push("amarillo");
console.log(colores);
console.log(colores.length);

colores[1] = "turquesa";
console.log(colores);

const secciones = ["Sobre mi", "Mis Intereses", "Mis Avances", "Contactame"];

for (let i = 0; i < seccion.length; i++) {
    console.log("Seccion " + (i + 1) + " : " + secciones[i]);
}

seccion("1.3 - objetos");

const estudiantes = {
    nombre: "Gudiel",
    edad : 34,
    nivel: "Principiante",
}

console.log(estudiantes.nombre);
console.log(estudiantes.edad
);

seccion("1.3 - Arreglos de objetos: Mis Avances");

const avances = [
    {lenguaje: "HTML", nivel: "Básico", meses: 1},
    {lenguaje: "CSS", nivel: "Principiante", meses: 0},
    {lenguaje: "JavaScript", nivel: "Sin empezar", meses: 0},
];

for(let i = 0; i < avances.length; i++) {
    console.log(avances[i].lenguaje + " -> " +  avances[i].nivel + "(" + avances[i].meses + " meses)");
}

seccion("1.4 - El DOM de mi landing page");

seccion("2.2 - Ejemplo guiado");

const titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.textContent);

const enlaces = document.querySelectorAll("nav a");
console.log(enlaces.length);

for(let i = 0; i < enlaces.length; i++) {
    console.log("Enlace " + (i +1) + " : " + enlaces[i].textContent);
}

/* ===================================================
   2.3 EJERCICIOS PRÁCTICOS
   =================================================== */

/* ---------------------------------------------------
   EJERCICIO 1 · Arreglo con las secciones del main
   (Reutilizamos el arreglo "secciones" de arriba. Si lo
   escriben desde cero, usen otro nombre: no se puede
   declarar dos veces la misma const.)                    */
seccion("Ejercicio 1 · Secciones del main");

for (let i = 0; i < secciones.length; i++) {
  console.log(secciones[i]);
}


/* ---------------------------------------------------
   EJERCICIO 2 · Objeto perfil con tres propiedades     */
seccion("Ejercicio 2 · Mi perfil");

const perfil = {
  nombre: "Gudiel",
  curso: "Programación Web Básica",
  nivel: "Principiante",
};

console.log("Nombre: " + perfil.nombre);
console.log("Curso: " + perfil.curso);
console.log("Nivel: " + perfil.nivel);


/* ---------------------------------------------------
   EJERCICIO 3 · El texto del <h1> de mi página         */
seccion("Ejercicio 3 · Mi h1");

const miTitulo = document.querySelector("h1");
console.log(miTitulo.textContent);


/* ---------------------------------------------------
   EJERCICIO 4 · ¿Cuántos <li> tiene mi lista de intereses?
   "ul li" = los li que están dentro de un ul (selector
   descendiente, igual que en CSS).                       */
seccion("Ejercicio 4 · Mis intereses");

const intereses = document.querySelectorAll("ul li");
console.log("Tengo " + intereses.length + " intereses");

for (let i = 0; i < intereses.length; i++) {
  console.log("• " + intereses[i].textContent);
}


/* ---------------------------------------------------
   EJERCICIO 5 · Encontrar el elemento con .destacado
   Es el <strong class="destacado"> de "Sobre mí", el que
   pintamos de rojo en la Clase 4. El punto antes del
   nombre indica que es una CLASE, igual que en CSS.      */
seccion("Ejercicio 5 · El elemento .destacado");

const destacado = document.querySelector(".destacado");
console.log(destacado);
console.log("Texto destacado: " + destacado.textContent);

// ¿Qué pasa si el selector no existe? querySelector devuelve
// null (el "vacío a propósito" de la Clase 9). Si después
// intentamos leer .textContent de null, aparece un error rojo.
const noExiste = document.querySelector(".no-existe");
console.log("¿Encontró .no-existe?", noExiste);   // null

console.log("%c¡Clase 11 completa! En la Clase 12 la página empieza a reaccionar a clics.",
  "color:#3fb8af; font-weight:bold;");

  
seccion("Clase 12 - 1.2 Modificar Contenido");

const badge = document.querySelector(".badge-js");
badge.textContent ="⚡ JavaScript Activo - la págna ya reacciona a tus clics";

const saludo = document.querySelector("#saludo");
saludo.HTML =" 👋 Hola esta página ya <strong>reacciona<strong> " +
               "Prueba el modo oscuro, marca tus intereses y favoritos y envía el formulario";

console.log("Saludo (solo texto): ", saludo.textContent);

seccion("Clase 12 - 1.2 Modificar estilos");

badge.style.backgroundColor = "#1c6b5f";
badge.style.color = "white";

seccion("Clase 12 - 1.3 Evento click: Modo oscuro");

const botonTema = document.querySelector("#btn-tema");

botonTema.addEventListener("click", function () {
      document.body.classList.toggle("modo-oscuro");

      if (document.body.classList.contains("modo-oscuro")) {
         botonTema.textContent = "☀️ Modo Claro";
      } else {
         botonTema.textContent ="🌙 Modo oscuro";   
      }

      console.log("Modo oscuro activo", document.body.classList.contains("modo-oscuro"));
});

seccion("Clase 12 - 1.3 Evento click: intereses favoritos");

const contadorFavoritos = document.querySelector("#contador-favoritos");

function actualizarContador() {
    const favoritos = document.querySelectorAll("ul li.favorito");
    if (favoritos.length === 0) {
        contadorFavoritos.textContent = "";
    } else {
        contadorFavoritos.textContent = "★ " + favoritos.length + " favorito(s)";
    }
}

for (let i = 0; i < intereses.length; i++) {
    intereses[i].addEventListener("click", function () {
        intereses[i].classList.toggle("favorito");
        actualizarContador();
        console.log("Clic en: " + intereses[i].textContent);
    });
}

seccion("Clase 12 - 2.1 Validación del Formulario");

const formulario = document.querySelector("form");
const nombreInput = document.querySelector("#nombre");
const correoInput = document.querySelector("#correo");
const mensajeError = document.querySelector("#mensaje-error");

formulario.addEventListener("submit", function (event) {
   event.preventDefault();

   mensajeError.classList.remove("error", "éxito");
   nombreInput.classList.remove("campo-error");
   correoInput.classList.remove("campo-error");

   if (nombreInput.value ==="") {
      mensajeError.textContent= "✖ el nombre es obligatorio";
      mensajeError.classList.add("Error");
      nombreInput.classList.add("campo-error");
      nombreInput.focus();

   } else if (!correoInput.value.includes("@")) {
      mensajeError.textContent= "X el correo debe incluir una @ (ejemplo:  nombre@correo.com).";
      mensajeError.classList.add("Error");
      nombreInput.classList.add("campo-error");
      correoInput.focus();

   } else {
      mensajeError.textContent =" Gracias, " + nombreInput.value + "! Tu mensaje fue enviado correctamente";
      nombreInput.classList.add("éxito");
   }

   console.log("Formulario revisado - nombre:", nombreInput.value, "correo: " + correoInput.value);
});

seccion("Clase 12 - Evento Input");

const mensajeTexto = document.querySelector("#mensaje");
const contadorMensaje = document.querySelector("#contador-mensaje");

mensajeTexto.addEventListener("input", function () {
    contadorMensaje.textContent = mensajeTexto.value.length + " caracteres";
});

formulario.addEventListener("reset", function () {
    mensajeError.textContent = "";
    mensajeError.classList.remove("error", "exito");
    nombreInput.classList.remove("campo-error");
    correoInput.classList.remove("campo-error");
    contadorMensaje.textContent = "0 caracteres";
});

console.log("%c !Clase 12 Completa! La página ya cambia y valida el formulario",
   "color:#3fb8f; font_weight:bold;");





/* ===================================================
   TAREA PARA LA CLASE 12
   ===================================================
   Investigación: "Eventos en JavaScript", presentada como
   una INFOGRAFÍA (una sola página, en Canva o en la
   herramienta que prefieran, entregada como imagen o PDF).
   Debe incluir:
   1. Qué es un evento y para qué sirve addEventListener.
   2. Al menos 4 eventos comunes (click, mouseover, submit,
      input) con una frase y un ejemplo de cada uno.
   3. Cómo usarían UNO de esos eventos en su landing page
      (pueden retomar la función que pensaron en la tarea
      de la Clase 10).
   4. Las fuentes consultadas (por ejemplo, MDN Web Docs).
   =================================================== */