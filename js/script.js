new WOW().init();

let menuVisible = false;

function mostrarOcultarMenu() {
    if(menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

/*
function efectoHabilidades() {
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("angular");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("mysql");
        habilidades[5].classList.add("wordpress");
        habilidades[6].classList.add("shopify");
        habilidades[7].classList.add("wix");
    }
}

window.onscroll = function() {
    efectoHabilidades();
}
*/
