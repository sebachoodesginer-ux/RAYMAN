/* ============================================================
   ELEMENTOS
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


const cursorRayman =
    document.getElementById("cursorRayman");


const topButton =
    document.getElementById("topButton");



/* ============================================================
   HEADER
============================================================ */

let previousScroll =
    window.scrollY;


let headerTimer;


function manageHeader() {

    const current =
        window.scrollY;


    if (
        current > 35
    ) {

        header.classList.add(
            "scrolled"
        );

    }

    else {

        header.classList.remove(
            "scrolled"
        );

    }


    if (
        current < 90
    ) {

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

        const wasHidden =
            header.classList.contains(
                "hidden"
            );


        header.classList.remove(
            "hidden"
        );


        if (
            wasHidden
        ) {

            header.classList.remove(
                "popup"
            );


            void header.offsetWidth;


            header.classList.add(
                "popup"
            );


            clearTimeout(
                headerTimer
            );


            headerTimer =
                setTimeout(
                    () => {

                        header.classList.remove(
                            "popup"
                        );

                    },
                    600
                );

        }

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
   MENU MOBILE
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
   MENU RAYMAN MOBILE
============================================================ */

document
    .querySelectorAll(
        ".mobile-rayman-link"
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                event => {

                    event.preventDefault();


                    const target =
                        link.getAttribute(
                            "href"
                        );


                    closeMobileMenu();


                    setTimeout(
                        () => {

                            document
                                .querySelector(
                                    target
                                )
                                ?.scrollIntoView({

                                    behavior:
                                        "smooth",

                                    block:
                                        "start"

                                });

                        },
                        220
                    );

                }
            );

        }
    );



/* ============================================================
   PANEL EXTRA
============================================================ */

const raymanPanel =
    document.getElementById(
        "raymanPanel"
    );


const panelToggle =
    document.getElementById(
        "panelToggle"
    );


const raymanPanelOverlay =
    document.getElementById(
        "raymanPanelOverlay"
    );


function openPanel() {

    raymanPanel.classList.add(
        "open"
    );


    raymanPanelOverlay.classList.add(
        "active"
    );

}



function closePanel() {

    raymanPanel.classList.remove(
        "open"
    );


    raymanPanelOverlay.classList.remove(
        "active"
    );

}


panelToggle.addEventListener(
    "click",
    () => {

        if (
            raymanPanel.classList.contains(
                "open"
            )
        ) {

            closePanel();

        }

        else {

            openPanel();

        }

    }
);


raymanPanelOverlay.addEventListener(
    "click",
    closePanel
);



/* ============================================================
   LINKS PANEL
============================================================ */

const panelLinks =
    document.querySelectorAll(
        ".panel-link"
    );


panelLinks.forEach(
    link => {

        link.addEventListener(
            "click",
            () => {

                setTimeout(
                    closePanel,
                    180
                );

            }
        );

    }
);



/* ============================================================
   SECCION ACTIVA
============================================================ */

const sections =
    document.querySelectorAll(
        "#historia, #origen, #caracteristicas, #evolucion"
    );


const sectionObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        const id =
                            entry.target.id;


                        panelLinks.forEach(
                            link => {

                                link.classList.toggle(
                                    "active",
                                    link.dataset.section === id
                                );

                            }
                        );

                    }

                }
            );

        },

        {

            threshold:
                .25,

            rootMargin:
                "-15% 0px -55% 0px"

        }

    );


sections.forEach(
    section => {

        sectionObserver.observe(
            section
        );

    }
);



/* ============================================================
   TOP
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
   REVEALS
============================================================ */

const revealElements =
    document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-card"
    );


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
            threshold:
                .12
        }

    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);



/* ============================================================
   BURBUJAS MÁS NOTORIAS
============================================================ */

const bubbleTexture =
    document.getElementById(
        "bubbleTexture"
    );


function createBubbleTexture() {

    if (
        !bubbleTexture
    ) {

        return;

    }


    bubbleTexture.innerHTML =
        "";


    const colors = [

        "blue",
        "yellow",
        "purple",
        "red",
        "green"

    ];


    /*
        Subimos ligeramente la cantidad
        respecto a la versión anterior.
    */

    const quantity =
        window.innerWidth <= 560
        ? 30
        : window.innerWidth <= 900
        ? 43
        : 62;


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
                    * colors.length
                )
            ];


        bubble.classList.add(
            "texture-bubble",
            color
        );


        /*
            Un poco más grandes también.
        */

        const size =
            window.innerWidth <= 560

            ? Math.random() * 72 + 36

            : Math.random() * 135 + 48;


        const left =
            Math.random() * 100;


        const top =
            Math.random() * 105;


        const duration =
            Math.random() * 11 + 14;


        const delay =
            Math.random() * 18;


        const drift =
            Math.random() * 170 - 85;


        bubble.style.width =
            `${size}px`;


        bubble.style.height =
            `${size}px`;


        bubble.style.left =
            `${left}%`;


        bubble.style.top =
            `${top}%`;


        bubble.style.animationDuration =
            `${duration}s`;


        bubble.style.animationDelay =
            `-${delay}s`;


        bubble.style.setProperty(
            "--drift-x",
            `${drift}px`
        );


        bubbleTexture.appendChild(
            bubble
        );

    }

}


createBubbleTexture();



/* ============================================================
   PARTICULAS DESDE EL FOOTER
============================================================ */

const risingParticles =
    document.getElementById(
        "risingParticles"
    );


function createRisingParticles() {

    if (
        !risingParticles
    ) {

        return;

    }


    risingParticles.innerHTML =
        "";


    const quantity =
        window.innerWidth <= 560
        ? 24
        : window.innerWidth <= 900
        ? 34
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


        particle.classList.add(
            "rising-particle"
        );


        const size =
            window.innerWidth <= 560

            ? Math.random() * 5 + 4

            : Math.random() * 8 + 5;


        const left =
            Math.random() * 100;


        const duration =
            Math.random() * 11 + 15;


        const delay =
            Math.random() * 22;


        const drift =
            Math.random() * 120 - 60;


        particle.style.width =
            `${size}px`;


        particle.style.height =
            `${size}px`;


        particle.style.left =
            `${left}%`;


        particle.style.animationDuration =
            `${duration}s`;


        particle.style.animationDelay =
            `-${delay}s`;


        particle.style.setProperty(
            "--particle-drift",
            `${drift}px`
        );


        risingParticles.appendChild(
            particle
        );

    }

}


createRisingParticles();



/* ============================================================
   CURSOR
============================================================ */

if (
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    let mouseX =
        0;


    let mouseY =
        0;


    let cursorX =
        0;


    let cursorY =
        0;


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
            "a, button, .feature-card, .hero-title"
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
   PARTICULAS FOOTER
============================================================ */

const footerParticles =
    document.getElementById(
        "footerParticles"
    );


function createFooterParticles() {

    if (
        !footerParticles
    ) {

        return;

    }


    footerParticles.innerHTML =
        "";


    const quantity =
        window.innerWidth <= 900
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


        particle.classList.add(
            "particle"
        );


        const size =
            window.innerWidth <= 560

            ? Math.random() * 5 + 4

            : Math.random() * 7 + 5;


        particle.style.left =
            `${Math.random() * 100}%`;


        particle.style.width =
            `${size}px`;


        particle.style.height =
            `${size}px`;


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


let musicPausedByTrailer =
    false;



window.onYouTubeIframeAPIReady =
    function() {

        musicPlayer =
            new YT.Player(
                "musicaYoutube",
                {

                    videoId:
                        "jjcCGQDmCA0",

                    playerVars: {

                        autoplay:
                            0,

                        controls:
                            0,

                        loop:
                            1,

                        playlist:
                            "jjcCGQDmCA0",

                        rel:
                            0,

                        playsinline:
                            1

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


            musicButton.classList.add(
                "playing"
            );


            musicIcon.className =
                "fa-solid fa-volume-high";

        }

        else {

            musicPlayer.pauseVideo();


            musicActive =
                false;


            musicButton.classList.remove(
                "playing"
            );


            musicIcon.className =
                "fa-solid fa-volume-xmark";

        }

    }
);



/* ============================================================
   TRAILER
============================================================ */

const heroTrailer =
    document.getElementById(
        "heroTrailer"
    );


const trailerModal =
    document.getElementById(
        "trailerModal"
    );


const trailerModalBg =
    document.getElementById(
        "trailerModalBg"
    );


const trailerClose =
    document.getElementById(
        "trailerClose"
    );


const trailerIframe =
    document.getElementById(
        "trailerIframe"
    );


function openTrailer() {

    trailerIframe.src =
        "https://www.youtube.com/embed/zFUZYpRIFUo?autoplay=1&rel=0";


    trailerModal.classList.add(
        "active"
    );


    document.body.classList.add(
        "modal-open"
    );


    if (
        musicPlayer &&
        musicActive
    ) {

        musicPlayer.pauseVideo();


        musicPausedByTrailer =
            true;

    }

}



function closeTrailer() {

    trailerModal.classList.remove(
        "active"
    );


    trailerIframe.src =
        "";


    document.body.classList.remove(
        "modal-open"
    );


    if (
        musicPausedByTrailer &&
        musicPlayer
    ) {

        musicPlayer.playVideo();

    }


    musicPausedByTrailer =
        false;

}


heroTrailer.addEventListener(
    "click",
    openTrailer
);


trailerModalBg.addEventListener(
    "click",
    closeTrailer
);


trailerClose.addEventListener(
    "click",
    closeTrailer
);



/* ============================================================
   MODAL DE IMAGEN
============================================================ */

const imageModal =
    document.getElementById(
        "imageModal"
    );


const imageModalBg =
    document.getElementById(
        "imageModalBg"
    );


const imageModalClose =
    document.getElementById(
        "imageModalClose"
    );


const imageModalImage =
    document.getElementById(
        "imageModalImage"
    );


const imageModalTitle =
    document.getElementById(
        "imageModalTitle"
    );


const imageModalDescription =
    document.getElementById(
        "imageModalDescription"
    );


document
    .querySelectorAll(
        ".open-image-card"
    )
    .forEach(
        card => {

            card.addEventListener(
                "click",
                () => {

                    imageModalImage.src =
                        card.dataset.image;


                    imageModalTitle.textContent =
                        card.dataset.title || "";


                    imageModalDescription.textContent =
                        card.dataset.description || "";


                    imageModal.classList.add(
                        "active"
                    );


                    document.body.classList.add(
                        "modal-open"
                    );

                }
            );

        }
    );



function closeImageModal() {

    imageModal.classList.remove(
        "active"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


imageModalBg.addEventListener(
    "click",
    closeImageModal
);


imageModalClose.addEventListener(
    "click",
    closeImageModal
);



/* ============================================================
   ESCAPE
============================================================ */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Escape"
        ) {

            closeMobileMenu();

            closePanel();

            closeTrailer();

            closeImageModal();

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

                    createBubbleTexture();

                    createRisingParticles();

                    createFooterParticles();


                    if (
                        window.innerWidth > 900
                    ) {

                        closeMobileMenu();

                    }

                    else {

                        closePanel();

                    }

                },
                250
            );

    }
);