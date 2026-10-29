/* ============================================================
   ELEMENTOS
============================================================ */

const loader =
    document.getElementById("loader");


const header =
    document.getElementById("header");


const hamburguesa =
    document.getElementById("hamburguesa");


const menuMobile =
    document.getElementById("menuMobile");


const menuOverlay =
    document.getElementById("menuOverlay");


const cerrarMenu =
    document.getElementById("cerrarMenu");


const mobileLinks =
    document.querySelectorAll(".mobile-link");


const botonArriba =
    document.getElementById("botonArriba");


const botonMusica =
    document.getElementById("botonMusica");


const iconoMusica =
    document.getElementById("iconoMusica");


const cursorRayman =
    document.getElementById("cursorRayman");


const abrirTrailer =
    document.getElementById("abrirTrailer");


const trailerModal =
    document.getElementById("trailerModal");


const cerrarTrailer =
    document.getElementById("cerrarTrailer");


const cerrarFondoTrailer =
    document.getElementById("cerrarFondoTrailer");


const iframeModal =
    document.getElementById("iframeModal");



/* ============================================================
   LOADER
============================================================ */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                loader.classList.add(
                    "oculto"
                );

            },
            750
        );

    }
);



/* ============================================================
   HEADER
============================================================ */

let ultimoScroll =
    window.scrollY;


let popupTimer;


function controlarHeader() {

    const actual =
        window.scrollY;


    if (
        actual > 35
    ) {

        header.classList.add(
            "scrolled"
        );

    } else {

        header.classList.remove(
            "scrolled"
        );

    }


    if (
        actual < 90
    ) {

        header.classList.remove(
            "menu-oculto"
        );

    }


    else if (
        actual >
        ultimoScroll + 5
    ) {

        header.classList.add(
            "menu-oculto"
        );

    }


    else if (
        actual <
        ultimoScroll - 5
    ) {

        const estabaOculto =
            header.classList.contains(
                "menu-oculto"
            );


        header.classList.remove(
            "menu-oculto"
        );


        if (
            estabaOculto
        ) {

            header.classList.remove(
                "menu-popup"
            );


            void header.offsetWidth;


            header.classList.add(
                "menu-popup"
            );


            clearTimeout(
                popupTimer
            );


            popupTimer =
                setTimeout(
                    () => {

                        header.classList.remove(
                            "menu-popup"
                        );

                    },
                    600
                );

        }

    }


    ultimoScroll =
        Math.max(
            actual,
            0
        );

}


window.addEventListener(
    "scroll",
    controlarHeader,
    {
        passive: true
    }
);



/* ============================================================
   MENU MOBILE
============================================================ */

function abrirMenuMobile() {

    menuMobile.classList.add(
        "activo"
    );


    menuOverlay.classList.add(
        "activo"
    );


    document.body.classList.add(
        "menu-abierto"
    );


    hamburguesa.setAttribute(
        "aria-expanded",
        "true"
    );

}



function cerrarMenuMobile() {

    menuMobile.classList.remove(
        "activo"
    );


    menuOverlay.classList.remove(
        "activo"
    );


    document.body.classList.remove(
        "menu-abierto"
    );


    hamburguesa.setAttribute(
        "aria-expanded",
        "false"
    );

}


hamburguesa.addEventListener(
    "click",
    abrirMenuMobile
);


cerrarMenu.addEventListener(
    "click",
    cerrarMenuMobile
);


menuOverlay.addEventListener(
    "click",
    cerrarMenuMobile
);


mobileLinks.forEach(
    link => {

        link.addEventListener(
            "click",
            cerrarMenuMobile
        );

    }
);



/* ============================================================
   BOTON ARRIBA
============================================================ */

botonArriba.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior:
                "smooth"

        });

    }
);



/* ============================================================
   POP TARJETAS
============================================================ */

const explorar =
    document.getElementById(
        "explorar"
    );


const tarjetas =
    document.querySelectorAll(
        ".tarjeta-pop"
    );


function activarTarjetas() {

    tarjetas.forEach(
        tarjeta => {

            tarjeta.classList.remove(
                "pop-activo"
            );

        }
    );


    void explorar.offsetWidth;


    tarjetas.forEach(
        tarjeta => {

            tarjeta.classList.add(
                "pop-activo"
            );

        }
    );

}


const observerTarjetas =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        activarTarjetas();

                    }

                    else {

                        tarjetas.forEach(
                            tarjeta => {

                                tarjeta.classList.remove(
                                    "pop-activo"
                                );

                            }
                        );

                    }

                }
            );

        },

        {
            threshold: .23
        }

    );


observerTarjetas.observe(
    explorar
);



/* ============================================================
   ANIMACIONES SCROLL
============================================================ */

const animados =
    document.querySelectorAll(
        ".animar-scroll"
    );


const observerGeneral =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },

        {
            threshold: .15
        }

    );


animados.forEach(
    elemento => {

        observerGeneral.observe(
            elemento
        );

    }
);



/* ============================================================
   EFECTO 3D TARJETAS
============================================================ */

if (
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    tarjetas.forEach(
        tarjeta => {

            tarjeta.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        tarjeta.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const centroX =
                        rect.width / 2;


                    const centroY =
                        rect.height / 2;


                    const rotarY =
                        (
                            x -
                            centroX
                        ) / 26;


                    const rotarX =
                        (
                            centroY -
                            y
                        ) / 26;


                    tarjeta.style.transform =
                        `
                        perspective(900px)
                        translateY(-13px)
                        rotateX(${rotarX}deg)
                        rotateY(${rotarY}deg)
                        scale(1.035)
                        `;

                }
            );


            tarjeta.addEventListener(
                "mouseleave",
                () => {

                    tarjeta.style.transform =
                        "";

                }
            );

        }
    );

}



/* ============================================================
   PARTICULAS
============================================================ */

const particulasGlobales =
    document.getElementById(
        "particulasGlobales"
    );


function crearParticulas() {

    if (
        !particulasGlobales
    ) {
        return;
    }


    particulasGlobales.innerHTML =
        "";


    const cantidad =
        window.innerWidth <= 850
        ? 34
        : 62;


    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        const particula =
            document.createElement(
                "span"
            );


        particula.classList.add(
            "particula"
        );


        const left =
            Math.random() * 100;


        const size =
            window.innerWidth <= 850
            ? Math.random() * 5 + 4
            : Math.random() * 7 + 5;


        const duration =
            Math.random() * 7 + 8;


        const delay =
            Math.random() * 12;


        const movimiento =
            Math.random() * 90 - 45;


        particula.style.left =
            `${left}%`;


        particula.style.width =
            `${size}px`;


        particula.style.height =
            `${size}px`;


        particula.style.animationDuration =
            `${duration}s`;


        particula.style.animationDelay =
            `-${delay}s`;


        particula.style.setProperty(
            "--movimiento",
            `${movimiento}px`
        );


        particulasGlobales.appendChild(
            particula
        );

    }

}


crearParticulas();



/* ============================================================
   MUSICA
============================================================ */

let reproductorMusica =
    null;


let musicaActiva =
    false;


let musicaPausadaPorTrailer =
    false;



window.onYouTubeIframeAPIReady =
    function() {


        reproductorMusica =
            new YT.Player(
                "musicaYoutube",
                {

                    width: "1",

                    height: "1",

                    videoId:
                        "jjcCGQDmCA0",

                    playerVars: {

                        autoplay: 0,

                        controls: 0,

                        loop: 1,

                        playlist:
                            "jjcCGQDmCA0",

                        rel: 0,

                        playsinline: 1

                    },

                    events: {

                        onReady:
                            function(event) {

                                event.target.setVolume(
                                    30
                                );

                            }

                    }

                }
            );

    };



/* ============================================================
   BOTON MUSICA
============================================================ */

botonMusica.addEventListener(
    "click",
    () => {


        if (
            !reproductorMusica ||
            typeof reproductorMusica.playVideo !==
            "function"
        ) {

            return;

        }


        if (
            !musicaActiva
        ) {


            reproductorMusica.unMute();


            reproductorMusica.setVolume(
                30
            );


            reproductorMusica.playVideo();


            musicaActiva =
                true;


            botonMusica.classList.add(
                "activa"
            );


            iconoMusica.className =
                "fa-solid fa-volume-high";


            botonMusica.title =
                "Pausar música";


        }


        else {


            reproductorMusica.pauseVideo();


            musicaActiva =
                false;


            botonMusica.classList.remove(
                "activa"
            );


            iconoMusica.className =
                "fa-solid fa-volume-xmark";


            botonMusica.title =
                "Reproducir música";


        }


    }
);



/* ============================================================
   MODAL TRAILER
============================================================ */

function abrirModalTrailer() {


    iframeModal.src =
        "https://www.youtube.com/embed/zFUZYpRIFUo?autoplay=1&rel=0";


    trailerModal.classList.add(
        "activo"
    );


    document.body.classList.add(
        "modal-abierto"
    );


    if (
        reproductorMusica &&
        musicaActiva
    ) {


        reproductorMusica.pauseVideo();


        musicaPausadaPorTrailer =
            true;


    }


}



function cerrarModalTrailer() {


    trailerModal.classList.remove(
        "activo"
    );


    document.body.classList.remove(
        "modal-abierto"
    );


    iframeModal.src =
        "";


    if (
        reproductorMusica &&
        musicaActiva &&
        musicaPausadaPorTrailer
    ) {


        reproductorMusica.playVideo();


    }


    musicaPausadaPorTrailer =
        false;


}


abrirTrailer.addEventListener(
    "click",
    abrirModalTrailer
);


cerrarTrailer.addEventListener(
    "click",
    cerrarModalTrailer
);


cerrarFondoTrailer.addEventListener(
    "click",
    cerrarModalTrailer
);



/* ============================================================
   CURSOR
============================================================ */

if (
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {


    let mouseX = 0;

    let mouseY = 0;

    let cursorX = 0;

    let cursorY = 0;


    document.addEventListener(
        "mousemove",
        event => {


            mouseX =
                event.clientX;


            mouseY =
                event.clientY;


            cursorRayman.classList.add(
                "visible"
            );


        }
    );


    function animarCursor() {


        cursorX +=
            (
                mouseX -
                cursorX
            )
            * .23;


        cursorY +=
            (
                mouseY -
                cursorY
            )
            * .23;


        cursorRayman.style.left =
            `${cursorX}px`;


        cursorRayman.style.top =
            `${cursorY}px`;


        requestAnimationFrame(
            animarCursor
        );


    }


    animarCursor();



    const interactivos =
        document.querySelectorAll(
            "a, button, .titulo-hero, .tarjeta"
        );


    interactivos.forEach(
        elemento => {


            elemento.addEventListener(
                "mouseenter",
                () => {


                    cursorRayman.classList.add(
                        "hover"
                    );


                }
            );


            elemento.addEventListener(
                "mouseleave",
                () => {


                    cursorRayman.classList.remove(
                        "hover"
                    );


                }
            );


        }
    );


}



/* ============================================================
   ESC
============================================================ */

document.addEventListener(
    "keydown",
    event => {


        if (
            event.key ===
            "Escape"
        ) {


            cerrarMenuMobile();


            cerrarModalTrailer();


        }


    }
);



/* ============================================================
   RESIZE
============================================================ */

let resizeTimer;


window.addEventListener(
    "resize",
    () => {


        clearTimeout(
            resizeTimer
        );


        resizeTimer =
            setTimeout(
                () => {


                    crearParticulas();


                    if (
                        window.innerWidth >
                        850
                    ) {


                        cerrarMenuMobile();


                    }


                },
                250
            );


    }
);