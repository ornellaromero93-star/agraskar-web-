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


    if (
        imagenesGaleria.length > 0 &&
        visorImagen &&
        imagenGrande
    ) {


        imagenesGaleria.forEach((imagen) => {


            imagen.addEventListener("click", () => {


                visorImagen.classList.add("activo");


                imagenGrande.src = imagen.src;

                imagenGrande.alt = imagen.alt;


            });


        });


    }



    // Cerrar con botón X

    if (botonCerrarImagen && visorImagen) {


        botonCerrarImagen.addEventListener("click", () => {


            visorImagen.classList.remove("activo");


        });


    }



    // Cerrar haciendo clic fuera de la imagen

    if (visorImagen) {


        visorImagen.addEventListener("click", (evento) => {


            if (evento.target === visorImagen) {


                visorImagen.classList.remove("activo");


            }


        });


    }



    // Cerrar con tecla ESC

    document.addEventListener("keydown", (evento) => {


        if (
            evento.key === "Escape" &&
            visorImagen &&
            visorImagen.classList.contains("activo")
        ) {


            visorImagen.classList.remove("activo");


        }


    });


});
