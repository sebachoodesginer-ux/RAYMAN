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

    }

    else {

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

const characterPanel =
    document.getElementById(
        "characterPanel"
    );

const characterPanelToggle =
    document.getElementById(
        "characterPanelToggle"
    );

const characterPanelOverlay =
    document.getElementById(
        "characterPanelOverlay"
    );


function openCharacterPanel() {

    characterPanel.classList.add(
        "open"
    );

    characterPanelOverlay.classList.add(
        "active"
    );

}


function closeCharacterPanel() {

    characterPanel.classList.remove(
        "open"
    );

    characterPanelOverlay.classList.remove(
        "active"
    );

}


characterPanelToggle.addEventListener(
    "click",
    () => {

        if (
            characterPanel.classList.contains(
                "open"
            )
        ) {

            closeCharacterPanel();

        }

        else {

            openCharacterPanel();

        }

    }
);


characterPanelOverlay.addEventListener(
    "click",
    closeCharacterPanel
);


/* ============================================================
   VOLVER ARRIBA
============================================================ */

topButton.addEventListener(
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
   PERSONAJES
============================================================ */

const charactersData = {


    rayman: {

        name: "RAYMAN",

        category:
            "HÉROE PRINCIPAL",

        image:
            "img/PERSONAJES/Personaje destacado.png",

        tags: [
            "HÉROE",
            "PROTAGONISTA",
            "AVENTURERO"
        ],

        description:
            "Rayman es el protagonista central de la saga. Se caracteriza por su optimismo, valentía y enorme sentido de la justicia. Aunque su diseño carece de brazos y piernas, posee extraordinarias habilidades para recorrer mundos fantásticos y enfrentarse a sus enemigos.",

        features: [

            {
                icon:
                    "fa-solid fa-heart",

                title:
                    "Gran corazón",

                text:
                    "Siempre busca proteger a sus amigos."
            },

            {
                icon:
                    "fa-solid fa-person-running",

                title:
                    "Gran agilidad",

                text:
                    "Corre, salta y supera obstáculos rápidamente."
            },

            {
                icon:
                    "fa-solid fa-hand-fist",

                title:
                    "Combate",

                text:
                    "Puede enfrentarse a numerosos enemigos."
            },

            {
                icon:
                    "fa-solid fa-star",

                title:
                    "Héroe",

                text:
                    "Defiende el Claro de los Sueños."
            }

        ]

    },


    globox: {

        name: "GLOBOX",

        category: "ALIADO",

        image:
            "img/PERSONAJES/Globox.png",

        tags: [
            "ALIADO",
            "AMIGO",
            "COMPAÑERO"
        ],

        description:
            "Globox es uno de los compañeros más reconocibles de Rayman. Su personalidad divertida, amistosa y algo torpe contrasta con su enorme tamaño.",

        features: [

            {
                icon:
                    "fa-solid fa-face-laugh",

                title:
                    "Divertido",

                text:
                    "Aporta humor a las aventuras."
            },

            {
                icon:
                    "fa-solid fa-handshake",

                title:
                    "Leal",

                text:
                    "Permanece al lado de Rayman."
            },

            {
                icon:
                    "fa-solid fa-people-group",

                title:
                    "Compañero",

                text:
                    "Forma parte del grupo de aliados."
            },

            {
                icon:
                    "fa-solid fa-shield-heart",

                title:
                    "Buen corazón",

                text:
                    "Valora profundamente a sus amigos."
            }

        ]

    },


    teensies: {

        name: "TEENSIES",

        category: "ALIADOS",

        image:
            "img/PERSONAJES/Teensies.png",

        tags: [
            "ALIADOS",
            "CRIATURAS",
            "MÁGICOS"
        ],

        description:
            "Los Teensies son pequeñas criaturas mágicas presentes en numerosas aventuras del universo de Rayman.",

        features: [

            {
                icon:
                    "fa-solid fa-wand-magic-sparkles",

                title:
                    "Mágicos",

                text:
                    "Relacionados con la magia."
            },

            {
                icon:
                    "fa-solid fa-people-group",

                title:
                    "Numerosos",

                text:
                    "Existen muchos Teensies."
            },

            {
                icon:
                    "fa-solid fa-map-location-dot",

                title:
                    "Exploradores",

                text:
                    "Aparecen en diversos mundos."
            },

            {
                icon:
                    "fa-solid fa-face-smile",

                title:
                    "Carismáticos",

                text:
                    "Tienen personalidades variadas."
            }

        ]

    },


    ly: {

        name: "LY",

        category: "ALIADA",

        image:
            "img/PERSONAJES/Ly.png",

        tags: [
            "ALIADA",
            "HADA",
            "MAGIA"
        ],

        description:
            "Ly está relacionada con la magia y la naturaleza del mundo de Rayman, representando sabiduría y equilibrio.",

        features: [

            {
                icon:
                    "fa-solid fa-wand-magic-sparkles",

                title:
                    "Magia",

                text:
                    "Posee conexión con fuerzas mágicas."
            },

            {
                icon:
                    "fa-solid fa-leaf",

                title:
                    "Naturaleza",

                text:
                    "Relacionada con el equilibrio."
            },

            {
                icon:
                    "fa-solid fa-hand-holding-heart",

                title:
                    "Aliada",

                text:
                    "Ayuda a Rayman."
            },

            {
                icon:
                    "fa-solid fa-lightbulb",

                title:
                    "Sabiduría",

                text:
                    "Guía cuando es necesario."
            }

        ]

    },


    barbara: {

        name: "BARBARA",

        category: "ALIADA",

        image:
            "img/PERSONAJES/Barbara.png",

        tags: [
            "ALIADA",
            "GUERRERA",
            "AVENTURERA"
        ],

        description:
            "Barbara es una guerrera enérgica y valiente cuya personalidad decidida la convierte en una poderosa compañera.",

        features: [

            {
                icon:
                    "fa-solid fa-shield",

                title:
                    "Guerrera",

                text:
                    "Preparada para el combate."
            },

            {
                icon:
                    "fa-solid fa-person-running",

                title:
                    "Ágil",

                text:
                    "Se mueve rápidamente."
            },

            {
                icon:
                    "fa-solid fa-heart",

                title:
                    "Valiente",

                text:
                    "No teme a los peligros."
            },

            {
                icon:
                    "fa-solid fa-user-group",

                title:
                    "Compañera",

                text:
                    "Participa junto a otros héroes."
            }

        ]

    },


    darktoons: {

        name: "DARKTOONS",

        category: "VILLANOS",

        image:
            "img/PERSONAJES/DarkToons.png",

        tags: [
            "VILLANOS",
            "OSCURIDAD",
            "ENEMIGOS"
        ],

        description:
            "Los Darktoons son criaturas oscuras que generan caos dentro del universo de Rayman.",

        features: [

            {
                icon:
                    "fa-solid fa-skull",

                title:
                    "Enemigos",

                text:
                    "Se enfrentan a Rayman."
            },

            {
                icon:
                    "fa-solid fa-moon",

                title:
                    "Oscuros",

                text:
                    "Poseen estética siniestra."
            },

            {
                icon:
                    "fa-solid fa-burst",

                title:
                    "Caóticos",

                text:
                    "Generan problemas."
            },

            {
                icon:
                    "fa-solid fa-users",

                title:
                    "Numerosos",

                text:
                    "Existen diferentes variantes."
            }

        ]

    },


    mrdark: {

        name: "MR. DARK",

        category: "VILLANO",

        image:
            "img/PERSONAJES/MrDark.png",

        tags: [
            "VILLANO",
            "MISTERIOSO",
            "ENEMIGO"
        ],

        description:
            "Mr. Dark es uno de los villanos clásicos y más misteriosos del universo de Rayman.",

        features: [

            {
                icon:
                    "fa-solid fa-mask",

                title:
                    "Misterioso",

                text:
                    "Su identidad es enigmática."
            },

            {
                icon:
                    "fa-solid fa-moon",

                title:
                    "Oscuridad",

                text:
                    "Relacionado con las sombras."
            },

            {
                icon:
                    "fa-solid fa-skull",

                title:
                    "Antagonista",

                text:
                    "Es una amenaza directa."
            },

            {
                icon:
                    "fa-solid fa-crown",

                title:
                    "Clásico",

                text:
                    "Uno de los villanos más recordados."
            }

        ]

    },


    raymessis: {

        name: "RAYMESSIS",

        category: "VILLANO",

        image:
            "img/PERSONAJES/RayMessis.png",

        tags: [
            "VILLANO",
            "CONTRAPARTE",
            "OSCURIDAD"
        ],

        description:
            "RayMessis representa una contraparte oscura de Rayman, con una estética siniestra y misteriosa.",

        features: [

            {
                icon:
                    "fa-solid fa-user-secret",

                title:
                    "Contraparte",

                text:
                    "Su diseño recuerda a Rayman."
            },

            {
                icon:
                    "fa-solid fa-moon",

                title:
                    "Oscuro",

                text:
                    "Tiene una estética siniestra."
            },

            {
                icon:
                    "fa-solid fa-bolt",

                title:
                    "Peligroso",

                text:
                    "Representa una amenaza."
            },

            {
                icon:
                    "fa-solid fa-eye",

                title:
                    "Misterioso",

                text:
                    "Su presencia genera intriga."
            }

        ]

    },


    poluk: {

        name: "POLUK",

        category: "SECUNDARIO",

        image:
            "img/PERSONAJES/Poluk.png",

        tags: [
            "SECUNDARIO",
            "CRIATURA",
            "AMIGO"
        ],

        description:
            "Poluk forma parte de las numerosas criaturas que enriquecen el universo fantástico y colorido de Rayman.",

        features: [

            {
                icon:
                    "fa-solid fa-face-smile",

                title:
                    "Alegre",

                text:
                    "Posee personalidad amistosa."
            },

            {
                icon:
                    "fa-solid fa-paw",

                title:
                    "Criatura",

                text:
                    "Forma parte de la fauna."
            },

            {
                icon:
                    "fa-solid fa-earth-americas",

                title:
                    "Habitante",

                text:
                    "Pertenece al universo Rayman."
            },

            {
                icon:
                    "fa-solid fa-star",

                title:
                    "Secundario",

                text:
                    "Complementa sus aventuras."
            }

        ]

    },


    bzzit: {

        name: "BZZIT",

        category: "SECUNDARIO",

        image:
            "img/PERSONAJES/Bzzit.png",

        tags: [
            "SECUNDARIO",
            "VOLADOR",
            "AMIGO"
        ],

        description:
            "Bzzit es una pequeña criatura voladora con una apariencia alegre y reconocible.",

        features: [

            {
                icon:
                    "fa-solid fa-feather",

                title:
                    "Vuelo",

                text:
                    "Puede desplazarse por el aire."
            },

            {
                icon:
                    "fa-solid fa-face-smile",

                title:
                    "Amigable",

                text:
                    "Tiene apariencia simpática."
            },

            {
                icon:
                    "fa-solid fa-bug",

                title:
                    "Criatura",

                text:
                    "Diseño inspirado en insectos."
            },

            {
                icon:
                    "fa-solid fa-star",

                title:
                    "Compañero",

                text:
                    "Participa en sus aventuras."
            }

        ]

    },


    protean: {

        name:
            "THE GREAT PROTEAN",

        category:
            "SECUNDARIO",

        image:
            "img/PERSONAJES/TheGreatProtean.png",

        tags: [
            "SECUNDARIO",
            "CRIATURA",
            "FANTÁSTICO"
        ],

        description:
            "The Great Protean destaca por su apariencia fantástica y extravagante dentro del universo de Rayman.",

        features: [

            {
                icon:
                    "fa-solid fa-wand-magic-sparkles",

                title:
                    "Fantástico",

                text:
                    "Posee un diseño extraordinario."
            },

            {
                icon:
                    "fa-solid fa-palette",

                title:
                    "Colorido",

                text:
                    "Tiene apariencia llamativa."
            },

            {
                icon:
                    "fa-solid fa-paw",

                title:
                    "Criatura",

                text:
                    "Forma parte del mundo fantástico."
            },

            {
                icon:
                    "fa-solid fa-star",

                title:
                    "Secundario",

                text:
                    "Amplía el universo de personajes."
            }

        ]

    }

};


/* ============================================================
   MODAL
============================================================ */

const characterModal =
    document.getElementById(
        "characterModal"
    );

const characterModalOverlay =
    document.getElementById(
        "characterModalOverlay"
    );

const characterModalClose =
    document.getElementById(
        "characterModalClose"
    );

const modalCharacterImage =
    document.getElementById(
        "modalCharacterImage"
    );

const modalCharacterName =
    document.getElementById(
        "modalCharacterName"
    );

const modalCharacterCategory =
    document.getElementById(
        "modalCharacterCategory"
    );

const modalCharacterTags =
    document.getElementById(
        "modalCharacterTags"
    );

const modalCharacterDescription =
    document.getElementById(
        "modalCharacterDescription"
    );

const modalCharacterFeatures =
    document.getElementById(
        "modalCharacterFeatures"
    );


function openCharacterModal(
    characterKey
) {

    const character =
        charactersData[
            characterKey
        ];


    if (!character) {
        return;
    }


    modalCharacterImage.src =
        character.image;


    modalCharacterImage.alt =
        character.name;


    modalCharacterName.textContent =
        character.name;


    modalCharacterCategory.textContent =
        character.category;


    modalCharacterDescription.textContent =
        character.description;


    modalCharacterTags.innerHTML =
        "";


    character.tags.forEach(
        tag => {

            const span =
                document.createElement(
                    "span"
                );


            span.textContent =
                tag;


            modalCharacterTags.appendChild(
                span
            );

        }
    );


    modalCharacterFeatures.innerHTML =
        "";


    character.features.forEach(
        feature => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "modal-feature";


            item.innerHTML =
                `
                <i class="${feature.icon}"></i>

                <div>

                    <strong>
                        ${feature.title}
                    </strong>

                    <p>
                        ${feature.text}
                    </p>

                </div>
                `;


            modalCharacterFeatures.appendChild(
                item
            );

        }
    );


    characterModal.classList.add(
        "active"
    );


    document.body.classList.add(
        "modal-open"
    );

}


function closeCharacterModal() {

    characterModal.classList.remove(
        "active"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


document
    .querySelectorAll(
        ".open-character-modal"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    openCharacterModal(
                        button.dataset.character
                    );

                }
            );

        }
    );


characterModalOverlay.addEventListener(
    "click",
    closeCharacterModal
);


characterModalClose.addEventListener(
    "click",
    closeCharacterModal
);


/* ============================================================
   FILTROS
============================================================ */

const filterButtons =
    document.querySelectorAll(
        ".character-filter-button"
    );


const characterCards =
    [
        ...document.querySelectorAll(
            ".character-card"
        )
    ];


const emptyFilterMessage =
    document.getElementById(
        "emptyFilterMessage"
    );


function applyCharacterFilter(
    filter
) {

    let visible =
        0;


    characterCards.forEach(
        card => {

            const show =
                filter === "all"
                ||
                card.dataset.category === filter;


            card.classList.toggle(
                "filter-hidden",
                !show
            );


            if (show) {
                visible++;
            }

        }
    );


    emptyFilterMessage.classList.toggle(
        "active",
        visible === 0
    );


    filterButtons.forEach(
        button => {

            button.classList.toggle(
                "active",
                button.dataset.filter ===
                filter
            );

        }
    );

}


/* ============================================================
   BOTONES FILTRO
============================================================ */

filterButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                applyCharacterFilter(
                    button.dataset.filter
                );

            }
        );

    }
);


/* ============================================================
   MENU MORADO FILTRO
============================================================ */

const panelFilterLinks =
    document.querySelectorAll(
        "[data-panel-filter]"
    );


panelFilterLinks.forEach(
    link => {

        link.addEventListener(
            "click",
            () => {

                const filter =
                    link.dataset.panelFilter;


                panelFilterLinks.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                link.classList.add(
                    "active"
                );


                applyCharacterFilter(
                    filter
                );


                setTimeout(
                    closeCharacterPanel,
                    180
                );

            }
        );

    }
);


/* ============================================================
   MOBILE FILTRO
============================================================ */

const mobileFilterLinks =
    document.querySelectorAll(
        "[data-mobile-filter]"
    );


mobileFilterLinks.forEach(
    link => {

        link.addEventListener(
            "click",
            () => {

                const filter =
                    link.dataset.mobileFilter;


                mobileFilterLinks.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                link.classList.add(
                    "active"
                );


                applyCharacterFilter(
                    filter
                );


                setTimeout(
                    closeMobileMenu,
                    180
                );

            }
        );

    }
);


/* ============================================================
   ORDEN
============================================================ */

const characterSort =
    document.getElementById(
        "characterSort"
    );


const charactersGrid =
    document.getElementById(
        "charactersGrid"
    );


characterSort.addEventListener(
    "change",
    () => {

        const mode =
            characterSort.value;


        const cards =
            [...characterCards];


        if (
            mode === "name"
        ) {

            cards.sort(
                (a,b) =>
                    a.dataset.name
                        .localeCompare(
                            b.dataset.name,
                            "es"
                        )
            );

        }


        else if (
            mode === "reverse"
        ) {

            cards.sort(
                (a,b) =>
                    b.dataset.name
                        .localeCompare(
                            a.dataset.name,
                            "es"
                        )
            );

        }


        cards.forEach(
            card => {

                charactersGrid.appendChild(
                    card
                );

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
            ? 21
            : 44;


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
            "character-bubble",
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
   PARTICULAS
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
            ? 17
            : 34;


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
   FOOTER PARTICLES
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
            ? 28
            : 46;


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
            * 7
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

                        onReady(
                            event
                        ) {

                            event.target.setVolume(
                                30
                            );

                        }

                    }

                }
            );

    };


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


        closeCharacterPanel();


        if (
            characterModal.classList.contains(
                "active"
            )
        ) {

            closeCharacterModal();

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
                        window.innerWidth >
                        900
                    ) {

                        closeMobileMenu();

                    }

                    else {

                        closeCharacterPanel();

                    }

                },
                250
            );

    }
);