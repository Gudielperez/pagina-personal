// Muestra un mensaje en la consola para confirmar
// que el archivo JavaScript se conectó correctamente.
console.log("Proyecto 2 conectado");


// Arreglo principal donde se almacenarán las tareas.
// Cada tarea tendrá la siguiente estructura:
// {
//     texto: "Descripción de la tarea",
//     completada: false
// }
let tareas = [];


// Selecciona los elementos del documento HTML mediante sus identificadores.
const form = document.querySelector("#form-tarea");
const input = document.querySelector("#input-tarea");
const lista = document.querySelector("#lista-tareas");
const mensaje = document.querySelector("#mensaje-error");
const resumen = document.querySelector("#resumen");
const btnLimpiar = document.querySelector("#btn-limpiar");


/**
 * Cuenta las tareas completadas y actualiza el resumen.
 *
 * Ejemplos:
 * "Sin tareas por ahora"
 * "2 de 5 completadas"
 */
function actualizarResumen() {
    // Variable que almacenará la cantidad de tareas completadas.
    let completadas = 0;

    // Recorre todas las tareas.
    for (let i = 0; i < tareas.length; i++) {
        // Si la tarea está completada, aumenta el contador.
        if (tareas[i].completada) {
            completadas++;
        }
    }

    // Si no existen tareas, muestra un mensaje predeterminado.
    if (tareas.length === 0) {
        resumen.textContent = "Sin tareas por ahora";
    } else {
        // Muestra cuántas tareas están completadas
        // respecto del total de tareas.
        resumen.textContent =
            completadas + " de " + tareas.length + " completadas";
    }
}


/**
 * Dibuja nuevamente la lista de tareas en el documento HTML.
 *
 * Esta función se ejecuta después de:
 * 1. Agregar una tarea.
 * 2. Completar o desmarcar una tarea.
 * 3. Eliminar una tarea.
 * 4. Limpiar las tareas completadas.
 */
function renderizarTareas() {
    // Limpia todo el contenido actual de la lista.
    // Esto evita que las tareas se dupliquen al volver a mostrarlas.
    lista.innerHTML = "";

    // Verifica si el arreglo de tareas está vacío.
    if (tareas.length === 0) {
        // Crea un elemento <li> para mostrar el mensaje de lista vacía.
        const vacia = document.createElement("li");

        // Agrega el texto del mensaje.
        vacia.textContent =
            "No tiene tareas pendientes. ¡Agrega la primera!";

        // Agrega una clase CSS para poder darle estilo.
        vacia.classList.add("vacia");

        // Inserta el mensaje dentro de la lista.
        lista.appendChild(vacia);
    } else {
        // Recorre todas las tareas almacenadas en el arreglo.
        for (let i = 0; i < tareas.length; i++) {
            // Obtiene la tarea correspondiente a la posición actual.
            const tarea = tareas[i];

            // Crea un elemento <li> para representar la tarea.
            const li = document.createElement("li");

            // Crea un elemento <span> para mostrar el texto.
            const texto = document.createElement("span");

            // Coloca el texto de la tarea dentro del <span>.
            texto.textContent = tarea.texto;

            // Agrega el <span> dentro del <li>.
            li.appendChild(texto);

            // Si la tarea está completada, agrega la clase CSS
            // "completada" al elemento <li>.
            if (tarea.completada) {
                li.classList.add("completada");
            }

            // Al hacer clic sobre la tarea, cambia su estado.
            li.addEventListener("click", function () {
                // Si estaba pendiente, pasa a completada.
                // Si estaba completada, vuelve a pendiente.
                tarea.completada = !tarea.completada;

                // Vuelve a mostrar la lista con el nuevo estado.
                renderizarTareas();
            });

            // Crea el botón para eliminar la tarea.
            const btnEliminar = document.createElement("button");

            // Define el texto visible del botón.
            btnEliminar.textContent = "Eliminar";

            // Agrega una clase CSS para darle estilo.
            btnEliminar.classList.add("btn-eliminar");

            // Evita que el botón actúe como botón de envío
            // si se encuentra dentro de un formulario.
            btnEliminar.type = "button";

            // Evento para eliminar únicamente esta tarea.
            btnEliminar.addEventListener("click", function (event) {
                // Evita que el clic del botón también active
                // el evento de completar la tarea.
                event.stopPropagation();

                // Elimina una tarea del arreglo usando su posición.
                tareas.splice(i, 1);

                // Vuelve a mostrar la lista actualizada.
                renderizarTareas();
            });

            // Agrega el botón Eliminar dentro del <li>.
            li.appendChild(btnEliminar);

            // Agrega el <li> completo dentro de la lista.
            lista.appendChild(li);
        }
    }

    // Actualiza el resumen después de dibujar la lista.
    actualizarResumen();
}


/**
 * Evento para agregar una nueva tarea.
 *
 * Se ejecuta cuando el usuario envía el formulario.
 */
form.addEventListener("submit", function (event) {
    // Evita que el formulario recargue la página.
    event.preventDefault();

    // Obtiene el valor escrito en el input.
    // trim() elimina espacios al inicio y al final.
    const textoNuevo = input.value.trim();

    // Verifica que el usuario haya escrito una tarea.
    if (textoNuevo === "") {
        // Muestra el mensaje de validación.
        mensaje.textContent =
            "Escribe una tarea antes de agregar.";

        // Devuelve el cursor al campo de texto.
        input.focus();

        // Detiene la ejecución para no agregar una tarea vacía.
        return;
    }

    // Limpia cualquier mensaje de error anterior.
    mensaje.textContent = "";

    // Agrega la nueva tarea al arreglo.
    // Toda tarea nueva comienza como no completada.
    tareas.push({
        texto: textoNuevo,
        completada: false
    });

    // Limpia el campo después de agregar la tarea.
    input.value = "";

    // Devuelve el cursor al campo para escribir otra tarea.
    input.focus();

    // Actualiza la lista visible.
    renderizarTareas();

    // Muestra en la consola el contenido actual del arreglo.
    // Es útil para comprobar el funcionamiento durante el desarrollo.
    console.log("Tareas ahora:", tareas);
});


/**
 * Evento para eliminar todas las tareas completadas.
 *
 * Las tareas pendientes se conservan.
 */
btnLimpiar.addEventListener("click", function () {
    // Arreglo temporal para guardar únicamente
    // las tareas que todavía están pendientes.
    const pendientes = [];

    // Recorre todas las tareas.
    for (let i = 0; i < tareas.length; i++) {
        // Si la tarea no está completada, la conserva.
        if (!tareas[i].completada) {
            pendientes.push(tareas[i]);
        }
    }

    // Reemplaza el arreglo original por el arreglo
    // que contiene únicamente las tareas pendientes.
    tareas = pendientes;

    // Actualiza la lista y el resumen.
    renderizarTareas();
});


// Ejecuta la función al cargar el archivo por primera vez.
// Esto muestra el mensaje de lista vacía y el resumen inicial.
renderizarTareas();