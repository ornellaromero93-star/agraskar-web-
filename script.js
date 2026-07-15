//=============================
// AGRASKAR
//=============================

// BOTÓN MODO OSCURO

const boton = document.getElementById("modoOscuro");


if(boton){

    boton.addEventListener("click", () => {


        document.body.classList.toggle("light");


        if(document.body.classList.contains("light")){


            boton.innerHTML =
            '<i class="fas fa-sun"></i> <span>Modo Claro</span>';


            localStorage.setItem("tema","claro");


        }

        else{


            boton.innerHTML =
            '<i class="fas fa-moon"></i> <span>Modo Oscuro</span>';


            localStorage.setItem("tema","oscuro");


        }


    });



    // CARGAR TEMA

    if(localStorage.getItem("tema")=="claro"){


        document.body.classList.add("light");


        boton.innerHTML =
        '<i class="fas fa-sun"></i> <span>Modo Claro</span>';


    }

}

/*=========================================
        PESTAÑAS DE JUEGOS
=========================================*/


const botonesTabs = document.querySelectorAll(".tab-btn");

const contenidosTabs = document.querySelectorAll(".tab-content");


botonesTabs.forEach(boton => {


    boton.addEventListener("click", () => {


        // quitar selección de todos

        botonesTabs.forEach(btn => {

            btn.classList.remove("active");

        });



        // ocultar contenidos

        contenidosTabs.forEach(contenido => {

            contenido.classList.remove("active");

        });



        // activar botón elegido

        boton.classList.add("active");



        // mostrar contenido correspondiente

        const contenidoMostrar = document.getElementById(
            boton.dataset.tab
        );


        contenidoMostrar.classList.add("active");


    });


});
/*=========================================
        VISOR DE GALERÍA
=========================================*/


const imagenesGaleria = document.querySelectorAll(".imagen-galeria");

const visor = document.getElementById("visorImagen");

const imagenGrande = document.getElementById("imagenGrande");

const cerrarImagen = document.querySelector(".cerrar");



imagenesGaleria.forEach(imagen => {


    imagen.addEventListener("click",()=>{


        if(visor && imagenGrande){

            visor.classList.add("activo");

            imagenGrande.src = imagen.src;

        }


    });


});



if(cerrarImagen && visor){

    cerrarImagen.addEventListener("click",()=>{

        visor.classList.remove("activo");

    });

}
/*=================================
      MENU JUEGOS DESPLEGABLE
=================================*/


document.addEventListener("DOMContentLoaded", function(){

    const botonJuegos = document.querySelector(".juegos-btn");
    const menuJuegos = document.querySelector(".menu-juegos");


    if(botonJuegos && menuJuegos){

        botonJuegos.addEventListener("click", function(){

            alert("El botón Juegos funciona");

            menuJuegos.classList.toggle("activo");

        });

    }

});
