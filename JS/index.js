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

const toggleNavButton = document.getElementById('toggleNav');
const mainNav = document.getElementById('mainNav');

toggleNavButton.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

const idiomaTextos = {
    espanol: {
        nav_acerca: 'Acerca',
        nav_enunciado: 'Áreas Prácticas',
        nav_equipo: 'Equipo',
        nav_publicaciones: 'Publicaciones',
        nav_contacto: 'Contacto',
        encabezado: 'Entender<br>Acompañar<br>Solucionar',
        areasPractica: 'Áreas de práctica',

        economicoEmpresarial: 'Económico Empresarial',
        empresarial_texto1: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Asesoramiento a empresas Fintech, emprendedores y StartUps',
        empresarial_texto2: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Asesoramiento general en derecho de los negocios',
        empresarial_texto3: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Litigios de complejidad',
        empresarial_texto4: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Contratos comerciales',
        empresarial_texto5: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Financiamiento y desarrollo de nuevos negocios',
        empresarial_texto6: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Reestructuración de pasivos y procesos concursales',

        derechoLaboral: 'Derecho Laboral',
        laboral_texto1: '',
        laboral_texto2: '',
        laboral_texto3: '',
        laboral_texto4: '',
        laboral_texto5: '',
        laboral_texto6: '',

        civilComercial: 'Civil y Comercial',
        societario: 'Societario',
        societario_texto: 'Asesoramos a clientes tanto nacionales como internacionales en la creación y seguimiento diario de estructuras societarias, para llevar adelante sus asuntos societarios cotidianos y el giro comercial propio',

    },
    ingles: {
        nav_acerca: 'About',
        nav_enunciado: 'Practice Areas',
        nav_equipo: 'Team',
        nav_publicaciones: 'Published content',
        nav_contacto: 'Contact us',
        encabezado: 'Understand<br>Accompany<br>Solve',
        areasPractica: 'Practice Areas',

        economicoEmpresarial: 'Business and Economics',
        empresarial_texto1: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Advice to Fintech companies, entrepreneurs and startups',
        empresarial_texto2: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Litigation and claims',
        empresarial_texto3: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Commercial contracts',
        empresarial_texto4: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Funding and development of new business',
        empresarial_texto5:'<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Restructuring liabilities and bankruptcy procedures',
        empresarial_texto6: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> General advice on business law',

        derechoLaboral: 'Labor Law',
        laboral_texto1: '',
        laboral_texto2: '',
        laboral_texto3: '',
        laboral_texto4: '',
        laboral_texto5: '',
        laboral_texto6: '',

        civilComercial: 'Civil and Commercial',
        societario: 'Corporate law',
        societario_texto: 'We advise both national and international clients in the creation and daily monitoring of corporate structures',

    }
};

function cambiarIdioma(idioma) {
    const textos = idiomaTextos[idioma];
    
    // Cambiar los textos en la página
    document.querySelector('.nav_acerca').innerHTML = textos.nav_acerca;
    document.querySelector('.nav_enunciado').innerHTML = textos.nav_enunciado;
    document.querySelector('.nav_equipo').innerHTML = textos.nav_equipo;
    document.querySelector('.nav_publicaciones').innerHTML = textos.nav_publicaciones;
    document.querySelector('.nav_contacto').innerHTML = textos.nav_contacto;
    document.querySelector('.encabezado').innerHTML = textos.encabezado;
    document.querySelector('.sub-titulo').innerHTML = textos.areasPractica;

    document.querySelector('.Económico-Empresarial h2').innerHTML = textos.economicoEmpresarial;
    document.querySelector('.empresarial_texto1').innerHTML = textos.empresarial_texto1;
    document.querySelector('.empresarial_texto2').innerHTML = textos.empresarial_texto2;
    document.querySelector('.empresarial_texto3').innerHTML = textos.empresarial_texto3;
    document.querySelector('.empresarial_texto4').innerHTML = textos.empresarial_texto4;
    document.querySelector('.empresarial_texto5').innerHTML = textos.empresarial_texto5;
    document.querySelector('.empresarial_texto6').innerHTML = textos.empresarial_texto6;

    document.querySelector('.Derecho-Laboral h2').innerHTML = textos.derechoLaboral;
    document.querySelector('.laboral_texto1').innerHTML = textos.laboral_texto1;
    document.querySelector('.laboral_texto2').innerHTML = textos.laboral_texto2;
    document.querySelector('.laboral_texto3').innerHTML = textos.laboral_texto3;
    document.querySelector('.laboral_texto4').innerHTML = textos.laboral_texto4;
    document.querySelector('.laboral_texto5').innerHTML = textos.laboral_texto5;
    document.querySelector('.laboral_texto6').innerHTML = textos.laboral_texto6;

    document.querySelector('.Civil-y-comercial h2').innerHTML = textos.civilComercial;


    document.querySelector('.Societario h2').innerHTML = textos.societario;
    document.querySelector('.societario_texto').innerHTML = textos.societario_texto;


}

const idiomaLinks = document.querySelectorAll('.idioma');

idiomaLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const idioma = this.id;
        cambiarIdioma(idioma);
    });
});




  

