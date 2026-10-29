/* ============================================================
   ELEMENTOS PRINCIPALES
============================================================ */

const header =
    document.getElementById(
        "header"
    );

const hamburger =
    document.getElementById(
        "hamburger"
    );

const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );

const mobileOverlay =
    document.getElementById(
        "mobileOverlay"
    );

const closeMobile =
    document.getElementById(
        "closeMobile"
    );

const topButton =
    document.getElementById(
        "topButton"
    );

const cursorRayman =
    document.getElementById(
        "cursorRayman"
    );


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
   PANEL MORADO
============================================================ */

const gamesPanel =
    document.getElementById(
        "gamesPanel"
    );

const gamesPanelToggle =
    document.getElementById(
        "gamesPanelToggle"
    );

const gamesPanelOverlay =
    document.getElementById(
        "gamesPanelOverlay"
    );


function openGamesPanel() {

    gamesPanel.classList.add(
        "open"
    );

    gamesPanelOverlay.classList.add(
        "active"
    );

}


function closeGamesPanel() {

    gamesPanel.classList.remove(
        "open"
    );

    gamesPanelOverlay.classList.remove(
        "active"
    );

}


gamesPanelToggle.addEventListener(
    "click",
    () => {

        if (
            gamesPanel.classList.contains(
                "open"
            )
        ) {

            closeGamesPanel();

        } else {

            openGamesPanel();

        }

    }
);


gamesPanelOverlay.addEventListener(
    "click",
    closeGamesPanel
);


/* ============================================================
   BOTON TOP
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
   DATOS
============================================================ */

const gamesData = {


    rayman1: {

        title:
            "RAYMAN",

        subtitle:
            "El comienzo de una leyenda.",

        year:
            "1995",

        score:
            "9.0",

        genre:
            "Plataformas 2D",

        developer:
            "Ubisoft Montpellier",

        release:
            "1995",

        video:
            "aSkbG9Ud9RY",

        description:
            "La primera aventura de Rayman presenta el Claro de los Sueños y una experiencia clásica de plataformas 2D llena de mundos, enemigos, secretos y escenarios inolvidables.",

        platforms: [

            [
                "fa-brands fa-playstation",
                "PlayStation"
            ],

            [
                "fa-solid fa-gamepad",
                "Atari Jaguar"
            ],

            [
                "fa-brands fa-windows",
                "PC"
            ],

            [
                "fa-solid fa-compact-disc",
                "Sega Saturn"
            ]

        ]

    },


    rayman2: {

        title:
            "RAYMAN 2: THE GREAT ESCAPE",

        subtitle:
            "Rayman da el salto a las tres dimensiones.",

        year:
            "1999",

        score:
            "9.3",

        genre:
            "Plataformas 3D / Aventura",

        developer:
            "Ubisoft Montpellier",

        release:
            "1999",

        video:
            "6KujjiLYaW8",

        description:
            "Rayman 2 lleva la saga al mundo tridimensional con exploración, escenarios más grandes y una aventura centrada en detener a los Piratas-Robot.",

        platforms: [

            [
                "fa-brands fa-windows",
                "PC"
            ],

            [
                "fa-solid fa-gamepad",
                "Nintendo 64"
            ],

            [
                "fa-brands fa-playstation",
                "PlayStation"
            ],

            [
                "fa-solid fa-gamepad",
                "Dreamcast"
            ]

        ]

    },


    rayman3: {

        title:
            "RAYMAN 3: HOODLUM HAVOC",

        subtitle:
            "Poderes, humor y acción.",

        year:
            "2003",

        score:
            "8.8",

        genre:
            "Plataformas 3D / Acción",

        developer:
            "Ubisoft",

        release:
            "2003",

        video:
            "o0KzXDnleOg",

        description:
            "Rayman 3 introduce nuevos poderes, combate, humor y una gran variedad de escenarios mientras Rayman intenta detener a los Hoodlums.",

        platforms: [

            [
                "fa-brands fa-playstation",
                "PlayStation 2"
            ],

            [
                "fa-brands fa-xbox",
                "Xbox"
            ],

            [
                "fa-solid fa-gamepad",
                "GameCube"
            ],

            [
                "fa-brands fa-windows",
                "PC"
            ]

        ]

    },


    origins: {

        title:
            "RAYMAN ORIGINS",

        subtitle:
            "El regreso a las raíces.",

        year:
            "2011",

        score:
            "9.2",

        genre:
            "Plataformas 2D / Aventura",

        developer:
            "Ubisoft Montpellier",

        release:
            "2011",

        video:
            "PevoXzPJSJ4",

        description:
            "Rayman Origins recupera las plataformas 2D mediante escenarios ilustrados, animaciones fluidas, cooperación local y niveles llenos de creatividad.",

        platforms: [

            [
                "fa-brands fa-playstation",
                "PlayStation 3"
            ],

            [
                "fa-brands fa-xbox",
                "Xbox 360"
            ],

            [
                "fa-solid fa-gamepad",
                "Nintendo Wii"
            ],

            [
                "fa-brands fa-windows",
                "PC"
            ],

            [
                "fa-solid fa-gamepad",
                "Nintendo 3DS"
            ]

        ]

    },


    legends: {

        title:
            "RAYMAN LEGENDS",

        subtitle:
            "Una aventura llena de ritmo y creatividad.",

        year:
            "2013",

        score:
            "9.5",

        genre:
            "Plataformas 2D / Aventura",

        developer:
            "Ubisoft Montpellier",

        release:
            "2013",

        video:
            "2_7BQ9hLGkk",

        description:
            "Rayman Legends amplía la fórmula de Origins con nuevos mundos, niveles musicales, cooperativo y una enorme variedad de desafíos.",

        platforms: [

            [
                "fa-brands fa-playstation",
                "PlayStation"
            ],

            [
                "fa-brands fa-xbox",
                "Xbox"
            ],

            [
                "fa-brands fa-windows",
                "PC"
            ],

            [
                "fa-solid fa-gamepad",
                "Nintendo Wii U"
            ],

            [
                "fa-solid fa-gamepad",
                "Nintendo Switch"
            ]

        ]

    }

};


/* ============================================================
   MODAL INFO
============================================================ */

const gameModal =
    document.getElementById(
        "gameModal"
    );

const gameModalOverlay =
    document.getElementById(
        "gameModalOverlay"
    );

const gameModalClose =
    document.getElementById(
        "gameModalClose"
    );

const gameModalVideo =
    document.getElementById(
        "gameModalVideo"
    );

const modalGameTitle =
    document.getElementById(
        "modalGameTitle"
    );

const modalGameSubtitle =
    document.getElementById(
        "modalGameSubtitle"
    );

const modalGameYear =
    document.getElementById(
        "modalGameYear"
    );

const modalGameScore =
    document.getElementById(
        "modalGameScore"
    );

const modalGameDescription =
    document.getElementById(
        "modalGameDescription"
    );

const modalGenre =
    document.getElementById(
        "modalGenre"
    );

const modalDeveloper =
    document.getElementById(
        "modalDeveloper"
    );

const modalRelease =
    document.getElementById(
        "modalRelease"
    );

const platformList =
    document.getElementById(
        "platformList"
    );


function openGameModal(
    gameKey
) {

    const game =
        gamesData[
            gameKey
        ];


    if (!game) {
        return;
    }


    modalGameTitle.textContent =
        game.title;

    modalGameSubtitle.textContent =
        game.subtitle;

    modalGameYear.textContent =
        game.year;

    modalGameScore.textContent =
        game.score;

    modalGameDescription.textContent =
        game.description;

    modalGenre.textContent =
        game.genre;

    modalDeveloper.textContent =
        game.developer;

    modalRelease.textContent =
        game.release;


    platformList.innerHTML =
        "";


    game.platforms.forEach(
        platform => {

            const chip =
                document.createElement(
                    "div"
                );


            chip.className =
                "platform-chip";


            chip.innerHTML =
                `
                <i class="${platform[0]}"></i>

                <strong>
                    ${platform[1]}
                </strong>
                `;


            platformList.appendChild(
                chip
            );

        }
    );


    gameModalVideo.src =
        `https://www.youtube.com/embed/${game.video}?autoplay=1&rel=0&playsinline=1`;


    gameModal.classList.add(
        "active"
    );


    document.body.classList.add(
        "modal-open"
    );

}


function closeGameModal() {

    gameModal.classList.remove(
        "active"
    );


    gameModalVideo.src =
        "";


    document.body.classList.remove(
        "modal-open"
    );

}


document
    .querySelectorAll(
        ".open-game-modal"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    openGameModal(
                        button.dataset.game
                    );

                }
            );

        }
    );


gameModalOverlay.addEventListener(
    "click",
    closeGameModal
);


gameModalClose.addEventListener(
    "click",
    closeGameModal
);


/* ============================================================
   HERO
============================================================ */

document
    .getElementById(
        "heroTrailerButton"
    )
    .addEventListener(
        "click",
        () => {

            openGameModal(
                "origins"
            );

        }
    );


/* ============================================================
   FILTRO
============================================================ */

const filterButtons =
    document.querySelectorAll(
        ".game-filter-button"
    );


const gameCards =
    [
        ...document.querySelectorAll(
            ".game-card"
        )
    ];


const emptyFilterMessage =
    document.getElementById(
        "emptyFilterMessage"
    );


function applyGameFilter(
    filter
) {

    let visible =
        0;


    gameCards.forEach(
        card => {

            const categories =
                card.dataset.category
                    .split(" ");


            const show =
                filter === "all"
                ||
                categories.includes(
                    filter
                );


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


filterButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                applyGameFilter(
                    button.dataset.filter
                );

            }
        );

    }
);


/* ============================================================
   PANEL FILTRA
============================================================ */

const panelLinks =
    document.querySelectorAll(
        "[data-panel-filter]"
    );


panelLinks.forEach(
    link => {

        link.addEventListener(
            "click",
            () => {

                const filter =
                    link.dataset.panelFilter;


                panelLinks.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                link.classList.add(
                    "active"
                );


                applyGameFilter(
                    filter
                );


                setTimeout(
                    closeGamesPanel,
                    180
                );

            }
        );

    }
);


/* ============================================================
   MOBILE FILTRA
============================================================ */

const mobileGameLinks =
    document.querySelectorAll(
        "[data-mobile-filter]"
    );


mobileGameLinks.forEach(
    link => {

        link.addEventListener(
            "click",
            () => {

                const filter =
                    link.dataset.mobileFilter;


                mobileGameLinks.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                link.classList.add(
                    "active"
                );


                applyGameFilter(
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
   SORT
============================================================ */

const gamesSort =
    document.getElementById(
        "gamesSort"
    );


const gamesGrid =
    document.getElementById(
        "gamesGrid"
    );


gamesSort.addEventListener(
    "change",
    () => {

        const mode =
            gamesSort.value;


        const sorted =
            [...gameCards];


        sorted.sort(
            (a,b) => {

                if (
                    mode === "recent"
                ) {

                    return (
                        Number(
                            b.dataset.year
                        )
                        -
                        Number(
                            a.dataset.year
                        )
                    );

                }


                if (
                    mode === "old"
                ) {

                    return (
                        Number(
                            a.dataset.year
                        )
                        -
                        Number(
                            b.dataset.year
                        )
                    );

                }


                return (
                    a.dataset.name
                        .localeCompare(
                            b.dataset.name,
                            "es"
                        )
                );

            }
        );


        sorted.forEach(
            card => {

                gamesGrid.appendChild(
                    card
                );

            }
        );

    }
);


/* ============================================================
   JUEGOS JUGABLES
============================================================ */

const playableGames = [

    {
        title:
            "RAYMAN",

        year:
            "1995",

        description:
            "Revive la esencia clásica de Rayman y recorre una aventura de plataformas llena de color y desafíos.",

        url:
            "https://www.minijuegos.com/embed/rayman"
    },


    {
        title:
            "RAYMAN 2: THE GREAT ESCAPE",

        year:
            "1999",

        description:
            "Acompaña a Rayman en una aventura tridimensional inspirada en uno de los capítulos más recordados de la saga.",

        url:
            "https://www.minijuegos.com/embed/rayman-2-the-great-escape"
    },


    {
        title:
            "RAYMAN 3",

        year:
            "2003",

        description:
            "Disfruta una experiencia inspirada en Rayman 3 con acción, humor y nuevos desafíos.",

        url:
            "https://www.minijuegos.com/embed/rayman-3"
    },


    {
        title:
            "RAYMAN ORIGINS: SLAP, FLAP, GO!",

        year:
            "2011",

        description:
            "Una experiencia inspirada en Rayman Origins con escenarios coloridos y una jugabilidad dinámica.",

        url:
            "https://www.minijuegos.com/embed/rayman-origins-slap-flap-go"
    }

];


let currentPlayableGame =
    0;


const playOriginalButton =
    document.getElementById(
        "playOriginalButton"
    );

const originalGameModal =
    document.getElementById(
        "originalGameModal"
    );

const originalGameBackdrop =
    document.getElementById(
        "originalGameBackdrop"
    );

const closeOriginalGame =
    document.getElementById(
        "closeOriginalGame"
    );

const originalGameFrame =
    document.getElementById(
        "originalGameFrame"
    );

const previousPlayableGame =
    document.getElementById(
        "previousPlayableGame"
    );

const nextPlayableGame =
    document.getElementById(
        "nextPlayableGame"
    );

const playableGameTitle =
    document.getElementById(
        "playableGameTitle"
    );

const playableGameDescription =
    document.getElementById(
        "playableGameDescription"
    );

const playableGameYear =
    document.getElementById(
        "playableGameYear"
    );

const playableGameNumber =
    document.getElementById(
        "playableGameNumber"
    );

const playableDots =
    document.querySelectorAll(
        ".playable-dot"
    );


function loadPlayableGame(
    index
) {

    if (
        index >=
        playableGames.length
    ) {

        index = 0;

    }


    if (
        index < 0
    ) {

        index =
            playableGames.length - 1;

    }


    currentPlayableGame =
        index;


    const game =
        playableGames[
            currentPlayableGame
        ];


    playableGameTitle.textContent =
        game.title;


    playableGameYear.textContent =
        game.year;


    playableGameDescription.textContent =
        game.description;


    playableGameNumber.textContent =
        String(
            currentPlayableGame + 1
        ).padStart(
            2,
            "0"
        );


    originalGameFrame.innerHTML =
        `
        <iframe
            src="${game.url}"
            style="width:100%;height:100%;"
            frameborder="0"
            allowfullscreen>
        </iframe>
        `;


    playableDots.forEach(
        (
            dot,
            dotIndex
        ) => {

            dot.classList.toggle(
                "active",
                dotIndex ===
                currentPlayableGame
            );

        }
    );

}


function openOriginalGame() {

    currentPlayableGame = 0;


    loadPlayableGame(
        0
    );


    originalGameModal.classList.add(
        "active"
    );


    document.body.classList.add(
        "modal-open"
    );

}


function closeOriginalRaymanGame() {

    originalGameModal.classList.remove(
        "active"
    );


    originalGameFrame.innerHTML =
        "";


    document.body.classList.remove(
        "modal-open"
    );

}


function nextGame() {

    loadPlayableGame(
        currentPlayableGame + 1
    );

}


function previousGame() {

    loadPlayableGame(
        currentPlayableGame - 1
    );

}


playOriginalButton.addEventListener(
    "click",
    openOriginalGame
);


closeOriginalGame.addEventListener(
    "click",
    closeOriginalRaymanGame
);


originalGameBackdrop.addEventListener(
    "click",
    closeOriginalRaymanGame
);


nextPlayableGame.addEventListener(
    "click",
    nextGame
);


previousPlayableGame.addEventListener(
    "click",
    previousGame
);


playableDots.forEach(
    dot => {

        dot.addEventListener(
            "click",
            () => {

                loadPlayableGame(
                    Number(
                        dot.dataset.playableIndex
                    )
                );

            }
        );

    }
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
        "red",
        "green"
    ];


    const quantity =
        window.innerWidth <= 560
            ? 22
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


        bubble.classList.add(

            "game-bubble",

            colors[
                Math.floor(
                    Math.random()
                    *
                    colors.length
                )
            ]

        );


        const size =
            Math.random()
            * 100
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

const gamesRisingParticles =
    document.getElementById(
        "gamesRisingParticles"
    );


function createGameParticles() {

    gamesRisingParticles.innerHTML =
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
            "game-rise-particle";


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


        gamesRisingParticles.appendChild(
            particle
        );

    }

}


createGameParticles();


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
            : 45;


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
            !musicPlayer ||
            typeof musicPlayer.playVideo !==
            "function"
        ) {

            return;

        }


        if (!musicActive) {

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
   TECLADO
============================================================ */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Escape"
        ) {

            closeMobileMenu();

            closeGamesPanel();


            if (
                gameModal.classList.contains(
                    "active"
                )
            ) {

                closeGameModal();

            }


            if (
                originalGameModal.classList.contains(
                    "active"
                )
            ) {

                closeOriginalRaymanGame();

            }

        }


        if (
            event.key ===
            "ArrowRight"
            &&
            originalGameModal.classList.contains(
                "active"
            )
        ) {

            nextGame();

        }


        if (
            event.key ===
            "ArrowLeft"
            &&
            originalGameModal.classList.contains(
                "active"
            )
        ) {

            previousGame();

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

                    createGameParticles();

                    createFooterParticles();


                    if (
                        window.innerWidth >
                        900
                    ) {

                        closeMobileMenu();

                    } else {

                        closeGamesPanel();

                    }

                },
                250
            );

    }
);