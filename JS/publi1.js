
const idiomaTextos = {
    espanol: {
        nav_acerca: 'Acerca',
        nav_enunciado: 'Áreas Prácticas',
        nav_equipo: 'Equipo',
        nav_publicaciones: 'Publicaciones',
        nav_contacto: 'Contacto',
        areasPractica: 'Áreas de práctica',

        publicacion1_titulo: 'Nos complace informarles que el estudio ha obtenido la titulación internacional LPEC (Leadership Professional in Ethics and Compliance) otorgado por la ECI internacional.',
        publicacion1_parrafo: 'Dicha titulación nos posiciona a la vanguardia del Compliance logrando brindar a nuestros clientes cada día mas y mejores servicios. <br> Por JULIAN COSSO Abogado (UBA), Magister (UCA) Diploma de honor y premio al mérito académico, especialista en derecho empresarial.',

    },
    ingles: {
        nav_acerca: 'About',
        nav_enunciado: 'Practice Areas',
        nav_equipo: 'Team',
        nav_publicaciones: 'Published content',
        nav_contacto: 'Contact us',
        areasPractica: 'Practice Areas',

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

    document.querySelector('#publicacion1_titulo').innerHTML = textos.publicacion1_titulo;
    document.querySelector('#publicacion1_parrafo').innerHTML = textos.publicacion1_parrafo;
}

const idiomaLinks = document.querySelectorAll('.idioma');

idiomaLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const idioma = this.id;
        cambiarIdioma(idioma);
    });
});

