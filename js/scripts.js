/*!
 * Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

window.onload = function () {
  // Variables
  const IMAGENES = [
    "assets/img/img1.jpg",
    "assets/img/img2.jpg",
    "assets/img/img3.jpg",
  ];
  const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
  let posicionActual = 0;
  let $botonRetroceder = document.querySelector("#retroceder");
  let $botonAvanzar = document.querySelector("#avanzar");
  let $imagen = document.querySelector("#imagen");
  let $botonPlay = document.querySelector("#play");
  let $botonStop = document.querySelector("#stop");
  let intervalo;

  // Funciones

  /**
   * Funcion que cambia la foto en la siguiente posicion
   */
  function pasarFoto() {
    if (posicionActual >= IMAGENES.length - 1) {
      posicionActual = 0;
    } else {
      posicionActual++;
    }
    renderizarImagen();
  }

  /**
   * Funcion que cambia la foto en la anterior posicion
   */
  function retrocederFoto() {
    if (posicionActual <= 0) {
      posicionActual = IMAGENES.length - 1;
    } else {
      posicionActual--;
    }
    renderizarImagen();
  }

  /**
   * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
   */
  function renderizarImagen() {
    $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
  }

  /**
   * Activa el autoplay de la imagen
   */
  function playIntervalo() {
    intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
    // Desactivamos los botones de control
    $botonAvanzar.setAttribute("disabled", true);
    $botonRetroceder.setAttribute("disabled", true);
    $botonPlay.setAttribute("disabled", true);
    $botonStop.removeAttribute("disabled");
  }

  /**
   * Para el autoplay de la imagen
   */
  function stopIntervalo() {
    clearInterval(intervalo);
    // Activamos los botones de control
    $botonAvanzar.removeAttribute("disabled");
    $botonRetroceder.removeAttribute("disabled");
    $botonPlay.removeAttribute("disabled");
    $botonStop.setAttribute("disabled", true);
  }

  // Eventos
  $botonAvanzar.addEventListener("click", pasarFoto);
  $botonRetroceder.addEventListener("click", retrocederFoto);
  $botonPlay.addEventListener("click", playIntervalo);
  $botonStop.addEventListener("click", stopIntervalo);
  // Iniciar
  renderizarImagen();
};
