const estiloTitulo = 
        "background: #065a82; color: white, font-weight; bold; padding: 4px 10px; border-radius:4px";
        
function titulo(texto) {
    console.log("%c" + texto, estiloTitulo);
}

titulo("1.2 - Variable con let y const");

const nombre = "Gudiel";
let meseDePractica = 1;

console.log("Nombre :", nombre);
console.log("Meses de práctica (antes):", meseDePractica);

meseDePractica +=1;
console.log("Meses de Práctica (después)", meseDePractica)

titulo("1.3 - Tipos de datos");

const lenguaje = "JavaScript";
const mesesHTML = 1;
const promedio = 87.5;
const terminoProyecto1 = true;
let proximoProyecto;
const segundoApellido = null;

console.log(lenguaje, "-->", typeof lenguaje);
console.log(mesesHTML, "-->", typeof mesesHTML);
console.log(promedio, "-->", typeof promedio);
console.log(terminoProyecto1, "-->", typeof terminoProyecto1);
console.log(proximoProyecto, "-->", typeof proximoProyecto);
console.log(segundoApellido, "-->", typeof segundoApellido);

titulo("1.4 - Operaciones aritméticos");

const mesesCSS = 0;
const totalMeses = mesesHTML + mesesCSS;

console.log("Total de meses (HTML + CSS): ", totalMeses);
console.log("10 - 4 =", 10 - 4);
console.log("6 * 3 =", 6 * 3);
console.log("20 / 4 =", 20 / 4);
console.log("17 % 5 =", 17 % 5);
console.log("¿8 es par?", 8/2===0);

console.log("Hola " + nombre);
console.log("5" + 3);

titulo("1.4 - Operadores de comparación");

console.log("5 === 5 -->", 5 === "5");
console.log('5 === "5" -->', 5 === "5");
console.log("5 !== 3 -->", 5 !== 3);
console.log("5 === 5 -->", 5 === "5");
console.log("mesesHTML > mesesCSS -->", mesesHTML > mesesCSS);
console.log("18 >= 18 -->", 18 >=18);

titulo("1.4 - Operadores lógicos");

const tieneComputadora = true;
const tieneInternet = false;
console.log("Computadora && internet -->", tieneComputadora && tieneInternet);
console.log("Computadora || internet -->", tieneComputadora || tieneInternet);
console.log("!Computadora -->", !tieneComputadora);

titulo("2.2 - Ejemplo guiado: inscripción");

const nombreEstudiante = "Gudiel";
let edad = 21;
let esEstudiante = true;

console.log(typeof nombreEstudiante, typeof edad, typeof esEstudiante);

if(edad >=18 && esEstudiante) {
    console.log(nombreEstudiante + " puede inscribirse con descuento estudiantil");
} else if(edad >=18) {
    console.log(nombreEstudiante + " puede inscribirse sin descuento");
} else {
    console.log(nombreEstudiante + " no cumple con la edad mínima");
}

titulo("2.3 - Switch con el nivel del formulario");

const nivel ="intermedio"

switch (nivel) {
    case "principiante":
        console.log("Empezando desde cero");
        break;
    case "intermedio":
        console.log("Ya tiene base sólida");
        break;
    default:
        console.log("Nivel no reconocido");
}


titulo("Ejercicio 1 - Etapa según la edad");

const edadPersona = 21;

if(edadPersona <13) {
    console.log(edadPersona + "años --> menor de edad");
} else if(edadPersona <=25) {
    console.log(edadPersona + "años --> adulto joven");
} else {
    console.log(edadPersona + "años --> adulto");
}

titulo("Ejercicio 2 · ¿Cuál es mayor?");

const numeroA = mesesHTML;   // 1
const numeroB = mesesCSS;    // 0

if (numeroA > numeroB) {
  console.log(numeroA + " es mayor que " + numeroB);
} else if (numeroA < numeroB) {
  console.log(numeroB + " es mayor que " + numeroA);
} else {
  console.log("Los dos números son iguales: " + numeroA);
}

titulo("Ejercicio 3 · Nota → letra");

const nota = 87;
let letra;   // let SIN valor: undefined hasta que el if le asigne una letra

if (nota >= 90) {
  letra = "A";
} else if (nota >= 80) {
  letra = "B";
} else if (nota >= 70) {
  letra = "C";
} else {
  letra = "F";
}
console.log("Nota " + nota + " → " + letra);

titulo("Ejercicio 4 · Día de la semana");

const diaSemana = 5;
let nombreDia;

switch (diaSemana) {
  case 1: nombreDia = "Lunes"; break;
  case 2: nombreDia = "Martes"; break;
  case 3: nombreDia = "Miércoles"; break;
  case 4: nombreDia = "Jueves"; break;
  case 5: nombreDia = "Viernes"; break;
  case 6: nombreDia = "Sábado"; break;
  case 7: nombreDia = "Domingo"; break;
  default: nombreDia = "Número de día no válido (debe ser del 1 al 7)";
}
console.log("Día " + diaSemana + " → " + nombreDia);

titulo("Ejercicio 5 · ¿Puede tomar el curso?");

const edadAspirante = 17;

if (edadAspirante >= 16 && tieneComputadora) {
  console.log("Puede tomar el curso ✔");
} else {
  console.log("Todavía no puede tomar el curso ✖");
}

console.log("%c¡Lógica de la Clase 9 completa! La Clase 10 la conecta al index.html.",
  "color:#3fb8af; font-weight:bold;");

//CLASE 10
titulo("1.2 - Ciclo for");

for(let i = 0; i < 5; i++) {
  console.log("Vuelta número " + i)
}

for(let i = 1; i <= 5; i++) {
  console.log("Contando: " + i);
}

for (let i = 3; i >=1; i--) {
  console.log("Hacia atrás: " + i);
}

titulo("1.2 - for recorriendo mis intereses");

const misIntereses = ["Programación", "Análisis de Datos", "Oratoria","Música"];

for(let i = 0; i < misIntereses.length; i++) {
  console.log("Interés " + (i + 1) +" : " + misIntereses[i]);
}

titulo("1.3 - while")

let intentos = 0;

while(intentos < 3 ) {
  console.log("Intento número " + intentos);
  intentos++;
}

let mesesActuales = 1;
let bloque = 0;

while( mesesActuales < 6) {
  mesesActuales = mesesActuales + 2;
  bloque++;
}
  console.log("Necesito " + bloque + " bloques para llegar a 6 meses o más (quedo en " + mesesActuales +")");

titulo("1.4 · Funciones");

function saludar(nombre) {
  return "Hola, " + nombre + "!";
}

console.log(saludar("Astrid"));    
console.log(saludar("Ana"));       
console.log(saludar("Gudiel"));

function sumar(a, b) {
  return a + b;
}
console.log("sumar(3, 4) =", sumar(3, 4));


function saludarSinReturn(nombre) {
  console.log("Hola desde adentro, " + nombre);
}
const resultado = saludarSinReturn("Astrid");
console.log("¿Qué devolvió?", resultado);   // undefined

function describirNivel(nivelElegido) {
  switch (nivelElegido) {
    case "principiante":
      return "Empezando desde cero.";
    case "intermedio":
      return "Ya tiene bases sólidas.";
    default:
      return "Nivel no reconocido.";
  }
}
console.log("principiante →", describirNivel("principiante"));
console.log("intermedio   →", describirNivel("intermedio"));

titulo("2.1 · Ejemplo guiado: notas con for + función");

function obtenerLetra(nota) {
  if (nota >= 90) return "A";
  if (nota >= 80) return "B";
  if (nota >= 70) return "C";
  return "F";
}

const notas = [95, 82, 68, 74];

for (let i = 0; i < notas.length; i++) {
  console.log(notas[i] + " -> " + obtenerLetra(notas[i]));
}

/* ===================================================
   CAMBIO DE HOY (Clase 12): DEMO EN VIVO DEL LABORATORIO
   ===================================================
   Un ejemplo pequeño de lo que hoy hacemos en script.js, para
   probarlo aquí mismo en practica-js.html (sección Clase 12):
   1. Seleccionamos el botón y la tarjeta (Clase 11).
   2. Escuchamos el "click" del botón (addEventListener).
   3. Cambiamos la clase (classList.toggle) y el texto
      (textContent) de la tarjeta.                          */
titulo("Clase 12 · Demo: click + classList + textContent");
 
const demoBoton = document.querySelector("#demo-boton");
const demoTarjeta = document.querySelector("#demo-tarjeta");
const demoTexto = document.querySelector("#demo-texto");
let clics = 0;
 
demoBoton.addEventListener("click", function () {
  clics++;                                   // contador (Clase 9)
  demoTarjeta.classList.toggle("encendida"); // pone o quita la clase
 
  if (demoTarjeta.classList.contains("encendida")) {
    demoTexto.textContent = "💡 ¡Encendida! Llevas " + clics + " clic(s).";
  } else {
    demoTexto.textContent = "Apagada. Llevas " + clics + " clic(s). Vuelve a presionar el botón.";
  }
  console.log("Clic número", clics);
});