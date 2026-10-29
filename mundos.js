/* ============================================================
   GENERALES
============================================================ */

const header =
    document.getElementById("header");


const hamburger =
    document.getElementById("hamburger");


const mobileMenu =
    document.getElementById("mobileMenu");


const mobileOverlay =
    document.getElementById("mobileOverlay");


const closeMobile =
    document.getElementById("closeMobile");


const topButton =
    document.getElementById("topButton");


const cursorRayman =
    document.getElementById("cursorRayman");


/* ============================================================
   HEADER
============================================================ */

let previousScroll =
    window.scrollY;


function manageHeader() {

    const current =
        window.scrollY;


    if (current > 35) {

        header.classList.add(
            "scrolled"
        );

    } else {

        header.classList.remove(
            "scrolled"
        );

    }


    if (current < 90) {

        header.classList.remove(
            "hidden"
        );

    }

    else if (
        current >
        previousScroll + 5
    ) {

        header.classList.add(
            "hidden"
        );

    }

    else if (
        current <
        previousScroll - 5
    ) {

        header.classList.remove(
            "hidden"
        );

    }


    previousScroll =
        Math.max(
            current,
            0
        );

}


window.addEventListener(
    "scroll",
    manageHeader,
    {
        passive: true
    }
);


/* ============================================================
   MOBILE MENU
============================================================ */

function openMobileMenu() {

    mobileMenu.classList.add(
        "active"
    );


    mobileOverlay.classList.add(
        "active"
    );


    document.body.classList.add(
        "menu-open"
    );

}


function closeMobileMenu() {

    mobileMenu.classList.remove(
        "active"
    );


    mobileOverlay.classList.remove(
        "active"
    );


    document.body.classList.remove(
        "menu-open"
    );

}


hamburger.addEventListener(
    "click",
    openMobileMenu
);


closeMobile.addEventListener(
    "click",
    closeMobileMenu
);


mobileOverlay.addEventListener(
    "click",
    closeMobileMenu
);


/* ============================================================
   MENU MORADO
============================================================ */

const worldPanel =
    document.getElementById(
        "worldPanel"
    );


const worldPanelToggle =
    document.getElementById(
        "worldPanelToggle"
    );


const worldPanelOverlay =
    document.getElementById(
        "worldPanelOverlay"
    );


function openWorldPanel() {

    worldPanel.classList.add(
        "open"
    );


    worldPanelOverlay.classList.add(
        "active"
    );

}


function closeWorldPanel() {

    worldPanel.classList.remove(
        "open"
    );


    worldPanelOverlay.classList.remove(
        "active"
    );

}


worldPanelToggle.addEventListener(
    "click",
    () => {

        if (
            worldPanel.classList.contains(
                "open"
            )
        ) {

            closeWorldPanel();

        }

        else {

            openWorldPanel();

        }

    }
);


worldPanelOverlay.addEventListener(
    "click",
    closeWorldPanel
);


/* ============================================================
   BOTON ARRIBA
============================================================ */

topButton.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* ============================================================
   REVEAL
============================================================ */

const revealObserver =
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
            threshold: .1
        }

    );


document
    .querySelectorAll(
        ".reveal, .reveal-card"
    )
    .forEach(
        element => {

            revealObserver.observe(
                element
            );

        }
    );


/* ============================================================
   INFORMACIÓN DE MUNDOS

   IMPORTANTE:
   LOS NOMBRES DE ARCHIVO COINCIDEN CON TU CAPTURA.
============================================================ */

const worldsData = {


    /* ========================================================
       BOSQUE
    ======================================================== */

    bosque: {

        name:
            "EL BOSQUE DE LOS SUEÑOS",

        category:
            "BOSQUES",

        image:
            "img/MUNDOS/Mundo destacado.png",

        tags: [
            "BOSQUE",
            "MUNDO PRINCIPAL",
            "NATURALEZA"
        ],

        description:
            "Un lugar mágico lleno de naturaleza, vegetación y criaturas fantásticas. Sus caminos esconden numerosos secretos y desafíos, convirtiéndolo en uno de los lugares más representativos del universo de Rayman.",

        stats: [

            {
                icon:
                    "fa-solid fa-tree",

                label:
                    "TIPO",

                value:
                    "BOSQUE"
            },

            {
                icon:
                    "fa-solid fa-flag",

                label:
                    "NIVELES",

                value:
                    "8"
            },

            {
                icon:
                    "fa-solid fa-fire",

                label:
                    "DIFICULTAD",

                value:
                    "FÁCIL"
            },

            {
                icon:
                    "fa-solid fa-star",

                label:
                    "HABITANTES",

                value:
                    "ELECTOONS"
            },

            {
                icon:
                    "fa-solid fa-gift",

                label:
                    "SECRETOS",

                value:
                    "SÍ"
            }

        ]

    },


    /* ========================================================
       MONTAÑAS
    ======================================================== */

    montanas: {

        name:
            "LA CLARIDAD DE LAS MONTAÑAS",

        category:
            "MONTAÑAS",

        image:
            "img/MUNDOS/La claridad de las montañas.png",

        tags: [
            "MONTAÑAS",
            "ALTURAS",
            "AVENTURA"
        ],

        description:
            "Un majestuoso escenario de grandes montañas, cielos abiertos y caminos elevados. La altura y sus plataformas naturales convierten la exploración en una experiencia llena de desafíos.",

        stats: [

            {
                icon:
                    "fa-solid fa-mountain",

                label:
                    "TIPO",

                value:
                    "MONTAÑAS"
            },

            {
                icon:
                    "fa-solid fa-wind",

                label:
                    "AMBIENTE",

                value:
                    "ALTURAS"
            },

            {
                icon:
                    "fa-solid fa-fire",

                label:
                    "DIFICULTAD",

                value:
                    "MEDIA"
            },

            {
                icon:
                    "fa-solid fa-compass",

                label:
                    "EXPLORACIÓN",

                value:
                    "ALTA"
            }

        ]

    },


    /* ========================================================
       CAVERNAS
    ======================================================== */

    cavernas: {

        name:
            "LAS CAVERNAS OSCURAS",

        category:
            "CAVERNAS",

        image:
            "img/MUNDOS/Las Cavernas Oscuras.png",

        tags: [
            "CAVERNAS",
            "OSCURIDAD",
            "SECRETOS"
        ],

        description:
            "Profundas cavernas donde la oscuridad domina el ambiente. Sus túneles esconden criaturas, caminos secretos, elementos mágicos y numerosos peligros.",

        stats: [

            {
                icon:
                    "fa-solid fa-mound",

                label:
                    "TIPO",

                value:
                    "CAVERNAS"
            },

            {
                icon:
                    "fa-solid fa-moon",

                label:
                    "AMBIENTE",

                value:
                    "OSCURO"
            },

            {
                icon:
                    "fa-solid fa-fire",

                label:
                    "DIFICULTAD",

                value:
                    "ALTA"
            },

            {
                icon:
                    "fa-solid fa-key",

                label:
                    "SECRETOS",

                value:
                    "MUCHOS"
            }

        ]

    },


    /* ========================================================
       CIELOS
    ======================================================== */

    cielos: {

        name:
            "LOS CIELOS FLOTANTES",

        category:
            "CIELOS FLOTANTES",

        image:
            "img/MUNDOS/Los cielos flotantes.png",

        tags: [
            "CIELOS",
            "ISLAS FLOTANTES",
            "ALTURA"
        ],

        description:
            "Un espectacular mundo suspendido sobre las nubes. Islas, castillos y estructuras flotantes transforman la aventura en una experiencia vertical y sorprendente.",

        stats: [

            {
                icon:
                    "fa-solid fa-cloud",

                label:
                    "TIPO",

                value:
                    "CIELOS"
            },

            {
                icon:
                    "fa-solid fa-arrow-up",

                label:
                    "ALTURA",

                value:
                    "EXTREMA"
            },

            {
                icon:
                    "fa-solid fa-fire",

                label:
                    "DIFICULTAD",

                value:
                    "MEDIA"
            },

            {
                icon:
                    "fa-solid fa-wind",

                label:
                    "AMBIENTE",

                value:
                    "AÉREO"
            }

        ]

    },


    /* ========================================================
       DESIERTO

       ARCHIVO EXACTO:
       El desierto De los Krakoran.png
    ======================================================== */

    desierto: {

        name:
            "EL DESIERTO DE LOS KRAKORAN",

        category:
            "OTROS MUNDOS",

        image:
            "img/MUNDOS/El desierto De los Krakoran.png",

        tags: [
            "DESIERTO",
            "KRAKORAN",
            "PELIGRO"
        ],

        description:
            "Un territorio árido, cálido y misterioso. Las extensas zonas desérticas esconden trampas, enemigos y secretos entre sus paisajes.",

        stats: [

            {
                icon:
                    "fa-solid fa-sun",

                label:
                    "CLIMA",

                value:
                    "CÁLIDO"
            },

            {
                icon:
                    "fa-solid fa-mountain-sun",

                label:
                    "TIPO",

                value:
                    "DESIERTO"
            },

            {
                icon:
                    "fa-solid fa-fire",

                label:
                    "DIFICULTAD",

                value:
                    "ALTA"
            },

            {
                icon:
                    "fa-solid fa-triangle-exclamation",

                label:
                    "TRAMPAS",

                value:
                    "NUMEROSAS"
            }

        ]

    },


    /* ========================================================
       PLANETA
    ======================================================== */

    planeta: {

        name:
            "EL PLANETA AZUL",

        category:
            "OTROS MUNDOS",

        image:
            "img/MUNDOS/El planeta azul.png",

        tags: [
            "PLANETA",
            "AZUL",
            "EXPLORACIÓN"
        ],

        description:
            "Un mundo lejano dominado por tonalidades azules y paisajes extraordinarios. Su apariencia fantástica ofrece uno de los escenarios más diferentes de la aventura.",

        stats: [

            {
                icon:
                    "fa-solid fa-earth-americas",

                label:
                    "TIPO",

                value:
                    "PLANETA"
            },

            {
                icon:
                    "fa-solid fa-star",

                label:
                    "AMBIENTE",

                value:
                    "FANTÁSTICO"
            },

            {
                icon:
                    "fa-solid fa-fire",

                label:
                    "DIFICULTAD",

                value:
                    "MEDIA"
            },

            {
                icon:
                    "fa-solid fa-compass",

                label:
                    "EXPLORACIÓN",

                value:
                    "ALTA"
            }

        ]

    },


    /* ========================================================
       FACTORIA

       ARCHIVO EXACTO:
       La factoria de los piratas.png
       NO lleva tilde en el nombre del archivo.
    ======================================================== */

    piratas: {

        name:
            "LA FACTORÍA DE LOS PIRATAS",

        category:
            "OTROS MUNDOS",

        image:
            "img/MUNDOS/La factoria de los piratas.png",

        tags: [
            "PIRATAS",
            "FACTORÍA",
            "INDUSTRIAL"
        ],

        description:
            "Una construcción industrial dominada por piratas, maquinaria y estructuras peligrosas. Un lugar completamente diferente a los escenarios naturales de Rayman.",

        stats: [

            {
                icon:
                    "fa-solid fa-skull-crossbones",

                label:
                    "HABITANTES",

                value:
                    "PIRATAS"
            },

            {
                icon:
                    "fa-solid fa-gears",

                label:
                    "TIPO",

                value:
                    "FACTORÍA"
            },

            {
                icon:
                    "fa-solid fa-fire",

                label:
                    "DIFICULTAD",

                value:
                    "ALTA"
            },

            {
                icon:
                    "fa-solid fa-industry",

                label:
                    "AMBIENTE",

                value:
                    "INDUSTRIAL"
            }

        ]

    },


    /* ========================================================
       TORRE
    ======================================================== */

    torre: {

        name:
            "LA TORRE INVERTIDA",

        category:
            "OTROS MUNDOS",

        image:
            "img/MUNDOS/La torre invertida.png",

        tags: [
            "TORRE",
            "MISTERIO",
            "VERTICAL"
        ],

        description:
            "Una misteriosa estructura donde todo parece desafiar la lógica. Su arquitectura, plataformas y orientación generan una experiencia visual diferente.",

        stats: [

            {
                icon:
                    "fa-solid fa-building",

                label:
                    "TIPO",

                value:
                    "TORRE"
            },

            {
                icon:
                    "fa-solid fa-arrows-up-down",

                label:
                    "ORIENTACIÓN",

                value:
                    "INVERTIDA"
            },

            {
                icon:
                    "fa-solid fa-fire",

                label:
                    "DIFICULTAD",

                value:
                    "ALTA"
            },

            {
                icon:
                    "fa-solid fa-eye",

                label:
                    "ESTILO",

                value:
                    "MISTERIOSO"
            }

        ]

    },


    /* ========================================================
       POLAR
    ======================================================== */

    polar: {

        name:
            "EL REINO DE POLAR",

        category:
            "OTROS MUNDOS",

        image:
            "img/MUNDOS/El reino de polar.png",

        tags: [
            "NIEVE",
            "HIELO",
            "REINO"
        ],

        description:
            "Un reino cubierto por nieve, hielo y enormes estructuras congeladas. Su ambiente frío transforma cada recorrido en una aventura visualmente espectacular.",

        stats: [

            {
                icon:
                    "fa-solid fa-snowflake",

                label:
                    "CLIMA",

                value:
                    "HELADO"
            },

            {
                icon:
                    "fa-solid fa-crown",

                label:
                    "TIPO",

                value:
                    "REINO"
            },

            {
                icon:
                    "fa-solid fa-fire",

                label:
                    "DIFICULTAD",

                value:
                    "MEDIA"
            },

            {
                icon:
                    "fa-solid fa-icicles",

                label:
                    "ELEMENTO",

                value:
                    "HIELO"
            }

        ]

    },


    /* ========================================================
       SUEÑOS
    ======================================================== */

    suenos: {

        name:
            "EL MUNDO DE LOS SUEÑOS",

        category:
            "OTROS MUNDOS",

        image:
            "img/MUNDOS/El mundo de los sueños.png",

        tags: [
            "SUEÑOS",
            "MAGIA",
            "FANTASÍA"
        ],

        description:
            "Un escenario lleno de colores, criaturas mágicas y elementos fantásticos. En este lugar los sueños y la imaginación cobran vida.",

        stats: [

            {
                icon:
                    "fa-solid fa-moon",

                label:
                    "TIPO",

                value:
                    "SUEÑOS"
            },

            {
                icon:
                    "fa-solid fa-wand-magic-sparkles",

                label:
                    "ELEMENTO",

                value:
                    "MAGIA"
            },

            {
                icon:
                    "fa-solid fa-fire",

                label:
                    "DIFICULTAD",

                value:
                    "MEDIA"
            },

            {
                icon:
                    "fa-solid fa-star",

                label:
                    "ESTILO",

                value:
                    "FANTÁSTICO"
            }

        ]

    }

};


/* ============================================================
   MODAL
============================================================ */

const worldModal =
    document.getElementById(
        "worldModal"
    );


const worldModalOverlay =
    document.getElementById(
        "worldModalOverlay"
    );


const worldModalClose =
    document.getElementById(
        "worldModalClose"
    );


const modalWorldImage =
    document.getElementById(
        "modalWorldImage"
    );


const modalWorldImageTitle =
    document.getElementById(
        "modalWorldImageTitle"
    );


const modalWorldCategory =
    document.getElementById(
        "modalWorldCategory"
    );


const modalWorldName =
    document.getElementById(
        "modalWorldName"
    );


const modalWorldTags =
    document.getElementById(
        "modalWorldTags"
    );


const modalWorldDescription =
    document.getElementById(
        "modalWorldDescription"
    );


const modalWorldStats =
    document.getElementById(
        "modalWorldStats"
    );


/* ============================================================
   ABRIR MUNDO
============================================================ */

function openWorldModal(
    worldKey
) {

    const world =
        worldsData[
            worldKey
        ];


    if (!world) {

        return;

    }


    modalWorldImage.src =
        world.image;


    modalWorldImage.alt =
        world.name;


    modalWorldImageTitle.textContent =
        world.name;


    modalWorldCategory.textContent =
        world.category;


    modalWorldName.textContent =
        world.name;


    modalWorldDescription.textContent =
        world.description;


    /* TAGS */

    modalWorldTags.innerHTML =
        "";


    world.tags.forEach(
        tag => {

            const span =
                document.createElement(
                    "span"
                );


            span.textContent =
                tag;


            modalWorldTags.appendChild(
                span
            );

        }
    );


    /* ESTADISTICAS */

    modalWorldStats.innerHTML =
        "";


    world.stats.forEach(
        stat => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "modal-stat";


            item.innerHTML =
                `
                    <i class="${stat.icon}"></i>

                    <div>

                        <small>
                            ${stat.label}
                        </small>

                        <strong>
                            ${stat.value}
                        </strong>

                    </div>
                `;


            modalWorldStats.appendChild(
                item
            );

        }
    );


    worldModal.classList.add(
        "active"
    );


    document.body.classList.add(
        "modal-open"
    );

}


/* ============================================================
   CERRAR MUNDO
============================================================ */

function closeWorldModal() {

    worldModal.classList.remove(
        "active"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


/* BOTONES */

document
    .querySelectorAll(
        ".open-world-modal"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    openWorldModal(
                        button.dataset.world
                    );

                }
            );

        }
    );


worldModalOverlay.addEventListener(
    "click",
    closeWorldModal
);


worldModalClose.addEventListener(
    "click",
    closeWorldModal
);


/* ============================================================
   FILTROS
============================================================ */

const filterButtons =
    document.querySelectorAll(
        ".world-filter-button"
    );


const worldCards =
    [
        ...document.querySelectorAll(
            ".world-card"
        )
    ];


const emptyFilterMessage =
    document.getElementById(
        "emptyFilterMessage"
    );


function applyWorldFilter(
    filter
) {

    let visible =
        0;


    worldCards.forEach(
        card => {

            const show =
                filter === "all"
                ||
                card.dataset.category ===
                filter;


            card.classList.toggle(
                "filter-hidden",
                !show
            );


            if (show) {
                visible++;
            }

        }
    );


    /* BOTONES PRINCIPALES */

    filterButtons.forEach(
        button => {

            button.classList.toggle(
                "active",
                button.dataset.filter === filter
            );

        }
    );


    /* PANEL */

    document
        .querySelectorAll(
            "[data-panel-filter]"
        )
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset.panelFilter === filter
                );

            }
        );


    /* MOBILE */

    document
        .querySelectorAll(
            "[data-mobile-filter]"
        )
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset.mobileFilter === filter
                );

            }
        );


    emptyFilterMessage.classList.toggle(
        "active",
        visible === 0
    );

}


/* ============================================================
   FILTRO PRINCIPAL

   NO HACE SCROLL.
   EL CONTENIDO SIMPLEMENTE CAMBIA DEBAJO.
============================================================ */

filterButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                applyWorldFilter(
                    button.dataset.filter
                );

            }
        );

    }
);


/* ============================================================
   FILTRO PANEL MORADO
============================================================ */

const panelFilterLinks =
    document.querySelectorAll(
        "[data-panel-filter]"
    );


panelFilterLinks.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                applyWorldFilter(
                    button.dataset.panelFilter
                );


                closeWorldPanel();

            }
        );

    }
);


/* ============================================================
   FILTRO MOBILE
============================================================ */

const mobileFilterLinks =
    document.querySelectorAll(
        "[data-mobile-filter]"
    );


mobileFilterLinks.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                applyWorldFilter(
                    button.dataset.mobileFilter
                );


                closeMobileMenu();

            }
        );

    }
);


/* ============================================================
   TRAILER
============================================================ */

const heroTrailerButton =
    document.getElementById(
        "heroTrailerButton"
    );


const trailerModal =
    document.getElementById(
        "trailerModal"
    );


const trailerModalOverlay =
    document.getElementById(
        "trailerModalOverlay"
    );


const trailerModalClose =
    document.getElementById(
        "trailerModalClose"
    );


const trailerFrame =
    document.getElementById(
        "trailerFrame"
    );


function openTrailer() {

    trailerFrame.src =
        "https://www.youtube.com/embed/zFUZYpRIFUo?autoplay=1&rel=0&playsinline=1";


    trailerModal.classList.add(
        "active"
    );


    document.body.classList.add(
        "modal-open"
    );

}


function closeTrailer() {

    trailerModal.classList.remove(
        "active"
    );


    trailerFrame.src =
        "";


    document.body.classList.remove(
        "modal-open"
    );

}


heroTrailerButton.addEventListener(
    "click",
    openTrailer
);


trailerModalOverlay.addEventListener(
    "click",
    closeTrailer
);


trailerModalClose.addEventListener(
    "click",
    closeTrailer
);


/* ============================================================
   BURBUJAS
============================================================ */

const backgroundBubbles =
    document.getElementById(
        "backgroundBubbles"
    );


function createBubbles() {

    backgroundBubbles.innerHTML =
        "";


    const colors = [

        "purple",
        "yellow",
        "blue",
        "green"

    ];


    const quantity =
        window.innerWidth <= 560
            ? 23
            : 46;


    for (
        let i = 0;
        i < quantity;
        i++
    ) {

        const bubble =
            document.createElement(
                "span"
            );


        const color =
            colors[
                Math.floor(
                    Math.random()
                    *
                    colors.length
                )
            ];


        bubble.classList.add(
            "world-bubble",
            color
        );


        const size =
            Math.random()
            * 95
            + 35;


        bubble.style.width =
            `${size}px`;


        bubble.style.height =
            `${size}px`;


        bubble.style.left =
            `${Math.random() * 100}%`;


        bubble.style.top =
            `${Math.random() * 100}%`;


        bubble.style.animationDuration =
            `${Math.random() * 13 + 15}s`;


        bubble.style.animationDelay =
            `-${Math.random() * 15}s`;


        backgroundBubbles.appendChild(
            bubble
        );

    }

}


createBubbles();


/* ============================================================
   PARTICULAS DE CONTENIDO
============================================================ */

const risingParticles =
    document.getElementById(
        "risingParticles"
    );


function createRisingParticles() {

    risingParticles.innerHTML =
        "";


    const quantity =
        window.innerWidth <= 560
            ? 18
            : 36;


    for (
        let i = 0;
        i < quantity;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.className =
            "rising-particle";


        const size =
            Math.random()
            * 7
            + 3;


        particle.style.width =
            `${size}px`;


        particle.style.height =
            `${size}px`;


        particle.style.left =
            `${Math.random() * 100}%`;


        particle.style.animationDuration =
            `${Math.random() * 10 + 14}s`;


        particle.style.animationDelay =
            `-${Math.random() * 15}s`;


        risingParticles.appendChild(
            particle
        );

    }

}


createRisingParticles();


/* ============================================================
   PARTICULAS FOOTER
============================================================ */

const footerParticles =
    document.getElementById(
        "footerParticles"
    );


function createFooterParticles() {

    footerParticles.innerHTML =
        "";


    const quantity =
        window.innerWidth <= 560
            ? 30
            : 50;


    for (
        let i = 0;
        i < quantity;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.className =
            "footer-particle";


        const size =
            Math.random()
            * 8
            + 3;


        particle.style.width =
            `${size}px`;


        particle.style.height =
            `${size}px`;


        particle.style.left =
            `${Math.random() * 100}%`;


        particle.style.animationDuration =
            `${Math.random() * 6 + 7}s`;


        particle.style.animationDelay =
            `-${Math.random() * 10}s`;


        footerParticles.appendChild(
            particle
        );

    }

}


createFooterParticles();


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


    document.addEventListener(
        "mouseleave",
        () => {

            cursorRayman.classList.remove(
                "visible"
            );

        }
    );


    function animateCursor() {

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
            animateCursor
        );

    }


    animateCursor();


    document
        .querySelectorAll(
            "a, button, select"
        )
        .forEach(
            element => {

                element.addEventListener(
                    "mouseenter",
                    () => {

                        cursorRayman.classList.add(
                            "hover"
                        );

                    }
                );


                element.addEventListener(
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
   MUSICA
============================================================ */

const musicButton =
    document.getElementById(
        "musicButton"
    );


const musicIcon =
    document.getElementById(
        "musicIcon"
    );


let musicPlayer =
    null;


let musicActive =
    false;


/* ============================================================
   API YOUTUBE
============================================================ */

window.onYouTubeIframeAPIReady =
    function() {

        musicPlayer =
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

                        onReady(event) {

                            event.target.setVolume(
                                30
                            );

                        }

                    }

                }
            );

    };


/* ============================================================
   ACTIVAR / PAUSAR
============================================================ */

musicButton.addEventListener(
    "click",
    () => {

        if (
            !musicPlayer
            ||
            typeof musicPlayer.playVideo
            !== "function"
        ) {

            return;

        }


        if (
            !musicActive
        ) {

            musicPlayer.unMute();


            musicPlayer.setVolume(
                30
            );


            musicPlayer.playVideo();


            musicActive =
                true;


            musicIcon.className =
                "fa-solid fa-volume-high";

        }

        else {

            musicPlayer.pauseVideo();


            musicActive =
                false;


            musicIcon.className =
                "fa-solid fa-volume-xmark";

        }

    }
);


/* ============================================================
   ESC
============================================================ */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !==
            "Escape"
        ) {

            return;

        }


        closeMobileMenu();


        closeWorldPanel();


        if (
            worldModal.classList.contains(
                "active"
            )
        ) {

            closeWorldModal();

        }


        if (
            trailerModal.classList.contains(
                "active"
            )
        ) {

            closeTrailer();

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

                    createBubbles();

                    createRisingParticles();

                    createFooterParticles();


                    if (
                        window.innerWidth > 900
                    ) {

                        closeMobileMenu();

                    }

                    else {

                        closeWorldPanel();

                    }

                },
                250
            );

    }
);