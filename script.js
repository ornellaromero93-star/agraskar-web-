//=============================
// AGRASKAR
//=============================

// BOTÓN MODO OSCURO

const boton = document.getElementById("modoOscuro");

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

window.onload = ()=>{

    if(localStorage.getItem("tema")=="claro"){

        document.body.classList.add("light");

        boton.innerHTML =
        '<i class="fas fa-sun"></i> <span>Modo Claro</span>';

    }

}

// SCROLL SUAVE

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const destino=document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({

            behavior:"smooth"

        });

    });

});
