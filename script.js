/*==================================================
                    AGRASKAR
                  script.js
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==================================================
                    MODO CLARO / OSCURO
    ==================================================*/

    const botonModo = document.getElementById("modoOscuro");

    if (botonModo) {

        // Cargar el tema guardado

        const temaGuardado = localStorage.getItem("tema");

        if (temaGuardado === "claro") {

            document.body.classList.add("light");

            actualizarBotonModo(true);

        } else {

            actualizarBotonModo(false);

        }

        // Cambiar tema

        botonModo.addEventListener("click", () => {

            document.body.classList.toggle("light");

            const modoClaro = document.body.classList.contains("light");

            actualizarBotonModo(modoClaro);

            localStorage.setItem(
                "tema",
                modoClaro ? "claro" : "oscuro"
            );

        });

    }

    /**
     * Actualiza el texto e icono del botón de tema.
     */

    function actualizarBotonModo(modoClaro) {

        if (!botonModo) return;

        if (modoClaro) {

            botonModo.innerHTML = `
                <i class="fas fa-sun"></i>
                <span>Modo Claro</span>
            `;

        } else {

            botonModo.innerHTML = `
                <i class="fas fa-moon"></i>
                <span>Modo Oscuro</span>
            `;

        }

    }
      /*==================================================
                MENÚ DESPLEGABLE DE JUEGOS
    ==================================================*/

    const botonJuegos = document.querySelector(".juegos-btn");
    const menuJuegos = document.querySelector(".menu-juegos");

    if (botonJuegos && menuJuegos) {

        botonJuegos.addEventListener("click", () => {

            menuJuegos.classList.toggle("activo");

        });

    }


    /*==================================================
                    PESTAÑAS DE JUEGOS
    ==================================================*/

    const botonesTabs = document.querySelectorAll(".tab-btn");
    const contenidosTabs = document.querySelectorAll(".tab-content");

    if (botonesTabs.length > 0 && contenidosTabs.length > 0) {

        botonesTabs.forEach((tab) => {

            tab.addEventListener("click", () => {

                // Desactivar todos los botones

                botonesTabs.forEach((boton) => {

                    boton.classList.remove("active");

                });

                // Ocultar todos los contenidos

                contenidosTabs.forEach((contenido) => {

                    contenido.classList.remove("active");

                });

                // Activar el botón seleccionado

                tab.classList.add("active");

                // Mostrar el contenido correspondiente

                const contenidoMostrar = document.getElementById(tab.dataset.tab);

                if (contenidoMostrar) {

                    contenidoMostrar.classList.add("active");

                }

            });

        });

    }
   /*==================================================
                VISOR DE GALERÍA
==================================================*/

const imagenesGaleria = document.querySelectorAll(".imagen-galeria");

const visorImagen = document.getElementById("visorImagen");
const imagenGrande = document.getElementById("imagenGrande");

const botonCerrarImagen = document.querySelector(".cerrar");

const botonIzquierda = document.querySelector(".izquierda");
const botonDerecha = document.querySelector(".derecha");

let imagenActual = 0;


// Abrir imagen
if (
    imagenesGaleria.length > 0 &&
    visorImagen &&
    imagenGrande
) {

    imagenesGaleria.forEach((imagen, indice) => {

        imagen.addEventListener("click", () => {

            imagenActual = indice;

            mostrarImagen();

            visorImagen.classList.add("activo");

        });

    });

}


// Mostrar imagen actual
function mostrarImagen() {

    imagenGrande.src = imagenesGaleria[imagenActual].src;

    imagenGrande.alt = imagenesGaleria[imagenActual].alt;

}


// Flecha derecha
if (botonDerecha) {

    botonDerecha.addEventListener("click", () => {

        imagenActual++;

        if (imagenActual >= imagenesGaleria.length) {

            imagenActual = 0;

        }

        mostrarImagen();

    });

}


// Flecha izquierda
if (botonIzquierda) {

    botonIzquierda.addEventListener("click", () => {

        imagenActual--;

        if (imagenActual < 0) {

            imagenActual = imagenesGaleria.length - 1;

        }

        mostrarImagen();

    });

}


// Cerrar
if (botonCerrarImagen && visorImagen) {

    botonCerrarImagen.addEventListener("click", () => {

        visorImagen.classList.remove("activo");

    });

}


// Cerrar haciendo clic fuera
if (visorImagen) {

    visorImagen.addEventListener("click", (evento) => {

        if (evento.target === visorImagen) {

            visorImagen.classList.remove("activo");

        }

    });

}


// Teclado
document.addEventListener("keydown", (evento) => {

    if (!visorImagen.classList.contains("activo")) return;

    if (evento.key === "Escape") {

        visorImagen.classList.remove("activo");

    }

    if (evento.key === "ArrowRight") {

        imagenActual++;

        if (imagenActual >= imagenesGaleria.length) {

            imagenActual = 0;

        }

        mostrarImagen();

    }

    if (evento.key === "ArrowLeft") {

        imagenActual--;

        if (imagenActual < 0) {

            imagenActual = imagenesGaleria.length - 1;

        }

        mostrarImagen();

    }

});
  });

/*==================================================
            JUEGO EN PANTALLA COMPLETA
==================================================*/

function abrirJuego() {

    const juego = document.getElementById("contenedorJuego");
    const botonCerrar = document.querySelector(".boton-cerrar-fullscreen");


    if (juego) {

        juego.classList.add("fullscreen");

    }


    if (botonCerrar) {

        botonCerrar.style.display = "block";

    }

}


function cerrarJuego() {

    const juego = document.getElementById("contenedorJuego");
    const botonCerrar = document.querySelector(".boton-cerrar-fullscreen");


    if (juego) {

        juego.classList.remove("fullscreen");

    }


    if (botonCerrar) {

        botonCerrar.style.display = "none";

    }

}


document.addEventListener("keydown", function (e) {

    const juego = document.getElementById("contenedorJuego");


    if (
        e.key === "Escape" &&
        juego &&
        juego.classList.contains("fullscreen")
    ) {

        cerrarJuego();

    }

});

    }

});
