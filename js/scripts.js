'use strict';

//funcion para mostrar el menu off-canvas
(function () {
    //casheamos los selectores para mejorar el rendimiento
    var button = document.getElementById('button');
    var menu = document.getElementById('main-menu');

    button.addEventListener('click', function () {
        menu.classList.toggle('mostrar');
    });
})();