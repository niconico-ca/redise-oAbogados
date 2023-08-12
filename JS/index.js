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
        laboral_texto1: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Elaboración de planes globales para reducir la litigiosidad en la empresa',
        laboral_texto2: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Medidas para fortalecer el control de ausentismo y licencias laborales',
        laboral_texto3: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Representación y patrocinio jurídico en asuntos litigiosos',
        laboral_texto4: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Consultoría en derecho individual y colectivo del trabajo',
        laboral_texto5: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Aspectos laborales del Derecho Migratorio',
        laboral_texto6: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Despidos y enfermedades profesionales',

        civilComercial: 'Civil y Comercial',
        comercial_texto1: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Defensa del consumidor y lealtad comercial',
        comercial_texto2: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Litigios individuales y colectivos',
        comercial_texto3: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Reclamos y asistencia a audiencias extrajudiciales',
        comercial_texto4: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Manejo de cartera de reclamos masivos',
        comercial_texto5: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Consultoría en planes internos de mitigación de conflictos',

        societario: 'Societario',
        societario_texto1: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Asesoramos a clientes tanto nacionales como internacionales en la creación y seguimiento diario de estructuras societarias, para llevar adelante sus asuntos societarios cotidianos y el giro comercial propio',

        academia: 'Academia y consultoría',
        academia_texto1: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Brindamos asesoramiento y consultoría a partir de talleres, cursos y clases sobre las materias de nuestra especialidad',

        normativo: 'Cumplimiento normativo',
        normativo_texto1: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Desarrollo de programas de cumplimiento e implementación de herramientas y elementos en los programas de integridad empresarial',

        equipo: 'Equipo',
        cossol: 'Abogado por la Universidad de Buenos Aires, diploma de honor y premio al mérito académico. El Dr. Cosso es especialista en derecho empresarial y ha realizado diversos cursos de perfeccionamiento en las áreas de litigio comercial y derecho laboral, además de ser miembro activo institutos de investigación jurídica de la Universidad de Buenos Aires. Autor de diversas publicaciones, en el año 2018 ha finalizado el Premaster en la Universidad Austral con uno de los más altos promedios académicos. En el 2020 ha completado los estudios en la Maestria en Derecho Empresarial Económico de la Universidad Católica Argentina',
        silva: 'Abogado por la Universidad Nacional de Cuyo (2016). Especialista en derecho familiar y gestión patrimonial.',
        cristaldi: 'Estudiante avanzada de la Facultad de Derecho y Ciencias Sociales de la Universidad de Buenos Aires (UBA), con orientación en derecho empresarial.',
        asociado: 'Consultor asociado',
        centurion: 'Abogado (UNSAM), diploma de honor y premio al mérito académico, con orientación en derecho privado. Asistente y orador de numerosos congresos y conferencias, actualmente se desempeña como of counsel en las materias de su especialidad.',
        monachesi: 'Contador (UB), especialista en asesoramiento contable e impositivo junto al área de Payroll. Encargado de planificación impositiva y consultoría.',

        publicacion1_titulo: 'Nos complace informarles que el estudio ha obtenido la titulación internacional LPEC (Leadership Professional in Ethics and Compliance) otorgado por la ECI internacional.',
        publicacion1_parrafo: 'Dicha titulación nos posiciona a la vanguardia del Compliance logrando brindar a nuestros clientes cada día mas y mejores servicios. <br> Por JULIAN COSSO Abogado (UBA), Magister (UCA) Diploma de honor y premio al mérito académico, especialista en derecho empresarial.',

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
        laboral_texto1: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Global strategies to reduce litigation',
        laboral_texto2: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Strategic plans to strengthen the control of absenteeism and work licenses',
        laboral_texto3: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Legal Sponsorship in litigation matters',
        laboral_texto4: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Consulting on individual and collective labor law',
        laboral_texto5: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Labor aspects of Immigration Law',
        laboral_texto6: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Layoffs and professional illnesses',

        civilComercial: 'Civil and Commercial',
        comercial_texto1: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Consumer protection claims',
        comercial_texto2: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Individual and collective litigation',
        comercial_texto3: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Claims and attendance to extrajudicial instances',
        comercial_texto4: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Management of massive claims portfolios',
        comercial_texto5: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Consulting on internal conflict mitigation plans',

        societario: 'Corporate law',
        societario_texto1: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> We advise both national and international clients in the creation and daily monitoring of corporate structures',

        academia: 'Consulting',
        academia_texto1: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> We provide advice and consulting through workshops and trainings on all our specialty areas',

        normativo: 'Compliance',
        normativo_texto1: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Development of compliance programs and implementation of required tools and trainings to guarantee business integrity programs',

        equipo: 'Team',
        cossol: 'Lawyer by the University of Buenos Aires (UBA), Summa Cum Laude. Dr. Cosso expertise area is business and economics law. He has taken several advanced courses in the areas of commercial litigation and labor law, in addition to being an active member of the legal research institute of the Universidad de Buenos Aires (UBA). Author of several published articles, in 2018 he finished a Premaster at Universidad Austral with one of the highest academic averages. In 2020 he has completed a Master in Economic Business Law of the Universidad Católica de Buenos Aires (UCA).',
        silva: 'Lawyer by Universidad Nacional de Cuyo (2016). Expertise area in family law and wealth planning.',
        cristaldi: 'Advanced student by Facultad de Derecho y Ciencias Sociales University of Buenos Aires (UBA), orientation in corporative law.',
        asociado: 'Of Counsel',
        centurion: 'Lawyer (UNSAM), Summa Cum Laude, expertise area in private law. Assistant and speaker at numerous congresses and conferences, currently works as an of counsel for the firm',
        monachesi: 'Accountant (UB), specialist in accounting and tax advice in the Payroll area. Responsible for tax planning and consulting.',

        publicaciones: 'Published content',
        publi1: 'New achievement obtained - Ethics and Compliance Initiative',
        publi2: 'Law for the defense of competition (27.4872)',
        publi3: 'Analysis of the ruling of the Supreme Court "Editorial Río Negro SA"',

        acerca: 'About',
        acerca_texto: 'CYT Abogados is a group of highly trained professionals, with expertise in several law areas. We provide services to individuals and companies, with a vocation for service and a result-based orientation. Our professionals are under continuous training programs. We care to understand our client industry and the permanent changes they are exposed to. We seek to advise and solve our clients matters by working close to them so we can guarantee technical quality on our practice areas and client-based solutions.',

        asociaciones: 'Memberships',

        tituloform: 'Contact Us',
        nombre: 'Name',
        correo: 'Email',
        telefono: 'Phone number',
        mensaje: 'Message',

        publicacion1_titulo: 'We are proud to announce that CYT has received LPEC certification (Leadership Professional in Ethics and Compliance) awarded by the ECI (Ethics and Compliance Initiative).',
        publicacion1_parrafo: 'As part of ECI, LPEC certification shows that we have the requisite, working knowledge to build and sustain thriving E&C programs with the highest possible standards, guaranteeing our clients high level models in Compliance Programs. <br> JULIAN COSSO Lawyer(UBA), Master(UCA), Specialist in Labour law and Founding Partner of CyT Abogados.',
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
    document.querySelector('#areas').innerHTML = textos.areasPractica;

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
    document.querySelector('.comercial_texto1').innerHTML = textos.comercial_texto1;
    document.querySelector('.comercial_texto2').innerHTML = textos.comercial_texto2;
    document.querySelector('.comercial_texto3').innerHTML = textos.comercial_texto3;
    document.querySelector('.comercial_texto4').innerHTML = textos.comercial_texto4;
    document.querySelector('.comercial_texto5').innerHTML = textos.comercial_texto5;

    document.querySelector('.Societario h2').innerHTML = textos.societario;
    document.querySelector('.societario_texto1').innerHTML = textos.societario_texto1;

    document.querySelector('.Academia-y-consultoría h2').innerHTML = textos.academia;
    document.querySelector('.academia_texto1').innerHTML = textos.academia_texto1;

    document.querySelector('.Cumplimiento-normativo h2').innerHTML = textos.normativo;
    document.querySelector('.normativo_texto1').innerHTML = textos.normativo_texto1;

    document.querySelector('#team').innerHTML = textos.equipo;
    document.querySelector('.cossol').innerHTML = textos.cossol;
    document.querySelector('.silva').innerHTML = textos.silva;
    document.querySelector('.cristaldi').innerHTML = textos.cristaldi;
    document.querySelector('.asociado').innerHTML = textos.asociado;
    document.querySelector('.centurion').innerHTML = textos.centurion;
    document.querySelector('.monachesi').innerHTML = textos.monachesi;

    document.querySelector('#published').innerHTML = textos.publicaciones;
    document.querySelector('#publi1').innerHTML = textos.publi1;
    document.querySelector('#publi2').innerHTML = textos.publi2;
    document.querySelector('#publi3').innerHTML = textos.publi3;

    document.querySelector('.acerca').innerHTML = textos.acerca;
    document.querySelector('.acerca_texto').innerHTML = textos.acerca_texto;

    document.querySelector('#asociations').innerHTML = textos.asociaciones;

    document.querySelector('.tituloform').innerHTML = textos.tituloform;
    document.querySelector('.nombre').innerHTML = textos.nombre;
    document.querySelector('.correo').innerHTML = textos.correo;
    document.querySelector('.telefono').innerHTML = textos.telefono;
    document.querySelector('.mensaje').innerHTML = textos.mensaje;

    document.querySelector('#publicacion1_titulo').innerHTML = textos.publicacion1_titulo;
    document.querySelector('#publicacion1_parrafo').innerHTML = textos.publicacion1_parrafo;
}

const idiomaLinks = document.querySelectorAll('.idioma');

idiomaLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const idioma = this.id;
        cambiarIdioma(idioma);
    });
});




  

