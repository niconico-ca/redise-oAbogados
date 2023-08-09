 // Función para mostrar u ocultar los párrafos al hacer clic en el botón "Ver más"
 document.addEventListener("DOMContentLoaded", function () {
    const verMasElements = document.querySelectorAll(".ver-mas");
    verMasElements.forEach(function (verMas) {
        verMas.addEventListener("click", function () {
            const pElement = verMas.parentElement;
            const pElements = pElement.parentElement.querySelectorAll("p");
            pElements.forEach(function (p) {
                p.classList.toggle("expanded");
            });
        });
    });

    const h2Elements = document.querySelectorAll(".Económico-Empresarial h2, .Derecho-Laboral h2, .Civil-y-comercial h2, .Societario h2, .Academia-y-consultoría h2, .Cumplimiento-normativo h2");
    h2Elements.forEach(function (h2) {
        h2.addEventListener("click", function () {
            const pElement = h2.parentElement;
            const pElements = pElement.querySelectorAll("p");
            pElements.forEach(function (p) {
                p.classList.toggle("expanded");
            });
        });
    });
});





  

