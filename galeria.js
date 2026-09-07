/* ============================================================
   ELEMENTOS GENERALES
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


    header.classList.toggle(
        "scrolled",
        current > 35
    );


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

const galleryPanel =
    document.getElementById(
        "galleryPanel"
    );


const galleryPanelToggle =
    document.getElementById(
        "galleryPanelToggle"
    );


const galleryPanelOverlay =
    document.getElementById(
        "galleryPanelOverlay"
    );


function openGalleryPanel() {

    galleryPanel.classList.add(
        "open"
    );


    galleryPanelOverlay.classList.add(
        "active"
    );

}


function closeGalleryPanel() {

    galleryPanel.classList.remove(
        "open"
    );


    galleryPanelOverlay.classList.remove(
        "active"
    );

}


galleryPanelToggle.addEventListener(
    "click",
    () => {

        if (
            galleryPanel.classList.contains(
                "open"
            )
        ) {

            closeGalleryPanel();

        }

        else {

            openGalleryPanel();

        }

    }
);


galleryPanelOverlay.addEventListener(
    "click",
    closeGalleryPanel
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
   DATOS LIGHTBOX
============================================================ */

const galleryImages = [];


/* ============================================================
   ARTE
============================================================ */

for (
    let i = 1;
    i <= 8;
    i++
) {

    galleryImages.push({

        src:
            `img/GALERIA/ARTE ${i}.jpg`,

        title:
            `ARTE CONCEPTUAL ${String(i).padStart(2,"0")}`,

        category:
            "ARTE CONCEPTUAL",

        description:
            "Explora una pieza visual inspirada en escenarios, personajes, formas y conceptos del universo de Rayman."

    });

}


/* ============================================================
   ILUSTRACIONES
============================================================ */

for (
    let i = 1;
    i <= 8;
    i++
) {

    galleryImages.push({

        src:
            `img/GALERIA/FANART ${i}.jpg`,

        title:
            `ILUSTRACIÓN ${String(i).padStart(2,"0")}`,

        category:
            "ILUSTRACIONES",

        description:
            "Ilustración inspirada en los personajes, mundos y aventuras del universo de Rayman."

    });

}


/* ============================================================
   LIGHTBOX
============================================================ */

const galleryLightbox =
    document.getElementById(
        "galleryLightbox"
    );


const lightboxImage =
    document.getElementById(
        "lightboxImage"
    );


const lightboxTitle =
    document.getElementById(
        "lightboxTitle"
    );


const lightboxCategory =
    document.getElementById(
        "lightboxCategory"
    );


const lightboxDescription =
    document.getElementById(
        "lightboxDescription"
    );


const lightboxCounter =
    document.getElementById(
        "lightboxCounter"
    );


const lightboxOverlay =
    document.getElementById(
        "lightboxOverlay"
    );


const lightboxClose =
    document.getElementById(
        "lightboxClose"
    );


const lightboxPrev =
    document.getElementById(
        "lightboxPrev"
    );


const lightboxNext =
    document.getElementById(
        "lightboxNext"
    );


let currentImageIndex = 0;


/* ============================================================
   MOSTRAR IMAGEN
============================================================ */

function showLightboxImage(index) {

    if (
        index < 0
    ) {

        index =
            galleryImages.length - 1;

    }


    if (
        index >=
        galleryImages.length
    ) {

        index = 0;

    }


    currentImageIndex =
        index;


    const image =
        galleryImages[index];


    lightboxImage.src =
        image.src;


    lightboxImage.alt =
        image.title;


    lightboxTitle.textContent =
        image.title;


    lightboxCategory.textContent =
        image.category;


    lightboxDescription.textContent =
        image.description;


    lightboxCounter.textContent =
        `${index + 1} / ${galleryImages.length}`;

}


/* ============================================================
   ABRIR LIGHTBOX
============================================================ */

function openLightbox(index) {

    showLightboxImage(
        index
    );


    galleryLightbox.classList.add(
        "active"
    );


    document.body.classList.add(
        "modal-open"
    );

}


/* ============================================================
   CERRAR LIGHTBOX
============================================================ */

function closeLightbox() {

    galleryLightbox.classList.remove(
        "active"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


/* ============================================================
   BOTONES DE IMAGEN
============================================================ */

document
    .querySelectorAll(
        ".gallery-open-image"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    openLightbox(
                        Number(
                            button.dataset.imageIndex
                        )
                    );

                }
            );

        }
    );


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


lightboxOverlay.addEventListener(
    "click",
    closeLightbox
);


lightboxPrev.addEventListener(
    "click",
    () => {

        showLightboxImage(
            currentImageIndex - 1
        );

    }
);


lightboxNext.addEventListener(
    "click",
    () => {

        showLightboxImage(
            currentImageIndex + 1
        );

    }
);


/* ============================================================
   FILTRADO
============================================================ */

const galleryCards =
    [
        ...document.querySelectorAll(
            ".gallery-card"
        )
    ];


const filterButtons =
    document.querySelectorAll(
        ".gallery-filter-button"
    );


const emptyGallery =
    document.getElementById(
        "emptyGallery"
    );


function filterGallery(filter) {

    let visible = 0;


    galleryCards.forEach(
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


            if (
                show
            ) {

                visible++;

            }

        }
    );


    /* FILTROS DEL CENTRO */

    filterButtons.forEach(
        button => {

            button.classList.toggle(
                "active",
                button.dataset.filter ===
                filter
            );

        }
    );


    /* PANEL MORADO */

    document
        .querySelectorAll(
            ".gallery-panel-link"
        )
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset.panelFilter ===
                    filter
                );

            }
        );


    /* MOBILE */

    document
        .querySelectorAll(
            ".mobile-gallery-link"
        )
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset.mobileFilter ===
                    filter
                );

            }
        );


    emptyGallery.classList.toggle(
        "active",
        visible === 0
    );

}


/* ============================================================
   FILTROS CENTRALES
============================================================ */

filterButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                filterGallery(
                    button.dataset.filter
                );

            }
        );

    }
);


/* ============================================================
   FILTRO PANEL PC
============================================================ */

document
    .querySelectorAll(
        ".gallery-panel-link"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    filterGallery(
                        button.dataset.panelFilter
                    );


                    closeGalleryPanel();

                }
            );

        }
    );


/* ============================================================
   FILTRO MOBILE
============================================================ */

document
    .querySelectorAll(
        ".mobile-gallery-link"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    filterGallery(
                        button.dataset.mobileFilter
                    );


                    closeMobileMenu();

                }
            );

        }
    );


/* ============================================================
   VIDEO MODAL
============================================================ */

const videoModal =
    document.getElementById(
        "videoModal"
    );


const videoModalOverlay =
    document.getElementById(
        "videoModalOverlay"
    );


const videoModalClose =
    document.getElementById(
        "videoModalClose"
    );


const videoFrame =
    document.getElementById(
        "videoFrame"
    );


const videoModalTitle =
    document.getElementById(
        "videoModalTitle"
    );


function openVideo(
    videoId,
    title
) {

    videoModalTitle.textContent =
        title || "VIDEO";


    videoFrame.src =
        `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`;


    videoModal.classList.add(
        "active"
    );


    document.body.classList.add(
        "modal-open"
    );

}


function closeVideo() {

    videoModal.classList.remove(
        "active"
    );


    videoFrame.src =
        "";


    document.body.classList.remove(
        "modal-open"
    );

}


/* ============================================================
   VIDEOS TARJETAS
============================================================ */

document
    .querySelectorAll(
        ".open-video"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    openVideo(
                        button.dataset.video,
                        button.dataset.title
                    );

                }
            );

        }
    );


/* ============================================================
   VIDEO HERO
============================================================ */

document
    .getElementById(
        "heroVideoButton"
    )
    .addEventListener(
        "click",
        () => {

            openVideo(
                "PevoXzPJSJ4",
                "VIDEO DESTACADO"
            );

        }
    );


/* ============================================================
   VIDEO DESTACADO
============================================================ */

document
    .getElementById(
        "featuredVideoButton"
    )
    .addEventListener(
        "click",
        () => {

            openVideo(
                "PevoXzPJSJ4",
                "VIDEOS DE LA COMUNIDAD"
            );

        }
    );


videoModalOverlay.addEventListener(
    "click",
    closeVideo
);


videoModalClose.addEventListener(
    "click",
    closeVideo
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
        "red"

    ];


    const quantity =
        window.innerWidth <= 560
            ? 23
            : 47;


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
            "gallery-bubble",
            color
        );


        const size =
            Math.random()
            * 90
            + 32;


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
   PARTICULAS CONTENIDO
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
            "a, button"
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
   YOUTUBE API
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
   MUSICA ON / OFF
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
   KEYBOARD
============================================================ */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Escape"
        ) {

            closeMobileMenu();

            closeGalleryPanel();

            closeLightbox();

            closeVideo();

        }


        if (
            galleryLightbox.classList.contains(
                "active"
            )
        ) {

            if (
                event.key ===
                "ArrowRight"
            ) {

                showLightboxImage(
                    currentImageIndex + 1
                );

            }


            if (
                event.key ===
                "ArrowLeft"
            ) {

                showLightboxImage(
                    currentImageIndex - 1
                );

            }

        }

    }
);


/* ============================================================
   SWIPE MOBILE
============================================================ */

let touchStartX =
    0;


let touchEndX =
    0;


const lightboxImageArea =
    document.querySelector(
        ".lightbox-image-area"
    );


lightboxImageArea.addEventListener(
    "touchstart",
    event => {

        touchStartX =
            event.changedTouches[0]
                .screenX;

    },

    {
        passive: true
    }
);


lightboxImageArea.addEventListener(
    "touchend",
    event => {

        touchEndX =
            event.changedTouches[0]
                .screenX;


        const difference =
            touchStartX -
            touchEndX;


        if (
            Math.abs(
                difference
            ) < 50
        ) {

            return;

        }


        if (
            difference > 0
        ) {

            showLightboxImage(
                currentImageIndex + 1
            );

        }

        else {

            showLightboxImage(
                currentImageIndex - 1
            );

        }

    },

    {
        passive: true
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

                        closeGalleryPanel();

                    }

                },
                250
            );

    }
);