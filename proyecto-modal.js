/* ============================================================
   MUNDO RAYMAN
   SOBRE EL PROYECTO - MODAL GLOBAL

   IMPORTANTE:
   Detecta automáticamente:
   href="proyecto.html"

   No necesitas modificar esos enlaces.
============================================================ */

(function () {

    "use strict";


    /* ========================================================
       EVITAR QUE SE CARGUE DOS VECES
    ======================================================== */

    if (
        document.getElementById(
            "proyectoModalGlobal"
        )
    ) {

        return;

    }


    /* ========================================================
       CREAR CONTENEDOR
    ======================================================== */

    const modal =
        document.createElement(
            "div"
        );


    modal.id =
        "proyectoModalGlobal";


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    /* ========================================================
       HTML COMPLETO DEL MODAL
    ======================================================== */

    modal.innerHTML = `

        <!-- ==================================================
             FONDO MORADO
        =================================================== -->

        <div
            class="proyecto-overlay"
            data-cerrar-proyecto
        ></div>


        <!-- ==================================================
             PARTÍCULAS
        =================================================== -->

        <div
            class="proyecto-particulas"
            id="proyectoParticulas"
        ></div>


        <!-- ==================================================
             VENTANA
        =================================================== -->

        <div
            class="proyecto-ventana"
            role="dialog"
            aria-modal="true"
            aria-labelledby="proyectoTitulo"
        >


            <div
                class="proyecto-barra-superior"
            ></div>


            <!-- ==============================================
                 BOTÓN X
            =============================================== -->

            <button
                type="button"
                class="proyecto-cerrar"
                id="proyectoCerrar"
                aria-label="Cerrar sobre el proyecto"
            >

                <i
                    class="fa-solid fa-xmark"
                ></i>

            </button>


            <!-- ==============================================
                 SCROLL INTERNO
            =============================================== -->

            <div
                class="proyecto-scroll"
                id="proyectoScroll"
            >


                <!-- ==========================================
                     INTRODUCCIÓN
                =========================================== -->

                <section
                    class="proyecto-intro"
                >


                    <div
                        class="proyecto-ruta"
                    >

                        <i
                            class="fa-solid fa-house"
                        ></i>

                        <span>
                            MUNDO RAYMAN
                        </span>

                        <i
                            class="fa-solid fa-chevron-right"
                        ></i>

                        <span>
                            SOBRE EL PROYECTO
                        </span>

                    </div>


                    <span
                        class="proyecto-subtitulo"
                    >

                        DETRÁS DE LA AVENTURA

                    </span>


                    <h2
                        id="proyectoTitulo"
                    >

                        SOBRE EL

                        <strong>
                            PROYECTO
                        </strong>

                    </h2>


                    <div
                        class="proyecto-linea-titulo"
                    ></div>


                    <p
                        class="proyecto-descripcion"
                    >

                        Mundo Rayman nace como una propuesta
                        de diseño y desarrollo web inspirada
                        en el universo de Rayman. Su objetivo
                        es reunir historia, personajes,
                        videojuegos, mundos y contenido visual
                        dentro de una experiencia interactiva.

                    </p>


                    <p
                        class="proyecto-descripcion"
                    >

                        La propuesta combina una identidad
                        gráfica inspirada en la saga con
                        navegación dinámica, animaciones,
                        galerías, contenido audiovisual y
                        adaptación para computador y
                        dispositivos móviles.

                    </p>


                    <!-- TAGS -->

                    <div
                        class="proyecto-tags"
                    >


                        <span>

                            <i
                                class="fa-solid fa-palette"
                            ></i>

                            DISEÑO UI

                        </span>


                        <span>

                            <i
                                class="fa-solid fa-code"
                            ></i>

                            DESARROLLO

                        </span>


                        <span>

                            <i
                                class="fa-solid fa-gamepad"
                            ></i>

                            VIDEOJUEGOS

                        </span>


                        <span>

                            <i
                                class="fa-solid fa-mobile-screen-button"
                            ></i>

                            RESPONSIVE

                        </span>


                    </div>


                </section>


                <!-- ==========================================
                     PROCESO
                =========================================== -->

                <section
                    class="
                        proyecto-seccion
                        proyecto-proceso
                    "
                >


                    <header
                        class="proyecto-heading"
                    >


                        <div
                            class="proyecto-heading-icono"
                        >

                            <i
                                class="fa-solid fa-gears"
                            ></i>

                        </div>


                        <div>

                            <small>

                                DEL CONCEPTO A LA WEB

                            </small>


                            <h3>

                                PROCESO CREATIVO

                            </h3>

                        </div>


                    </header>


                    <p
                        class="proyecto-proceso-intro"
                    >

                        El proyecto se desarrolló mediante
                        seis etapas principales que permitieron
                        pasar de la investigación inicial a una
                        experiencia web completamente funcional.

                    </p>


                    <!-- ======================================
                         GRID
                    ======================================= -->

                    <div
                        class="proyecto-proceso-grid"
                    >


                        <!-- ==================================
                             PASO 1
                        =================================== -->

                        <article
                            class="proyecto-paso"
                        >


                            <span
                                class="proyecto-paso-numero"
                            >

                                01

                            </span>


                            <div
                                class="proyecto-paso-icono"
                            >

                                <i
                                    class="fa-solid fa-magnifying-glass"
                                ></i>

                            </div>


                            <h4>

                                INVESTIGACIÓN

                            </h4>


                            <p>

                                Investigación de Rayman,
                                su historia, videojuegos,
                                personajes, mundos y
                                referentes gráficos.

                            </p>


                        </article>


                        <!-- ==================================
                             PASO 2
                        =================================== -->

                        <article
                            class="proyecto-paso"
                        >


                            <span
                                class="proyecto-paso-numero"
                            >

                                02

                            </span>


                            <div
                                class="proyecto-paso-icono"
                            >

                                <i
                                    class="fa-solid fa-palette"
                                ></i>

                            </div>


                            <h4>

                                MOODBOARD

                            </h4>


                            <p>

                                Construcción del lenguaje
                                visual, selección de colores,
                                tipografías y referencias.

                            </p>


                        </article>


                        <!-- ==================================
                             PASO 3
                        =================================== -->

                        <article
                            class="proyecto-paso"
                        >


                            <span
                                class="proyecto-paso-numero"
                            >

                                03

                            </span>


                            <div
                                class="proyecto-paso-icono"
                            >

                                <i
                                    class="fa-solid fa-sitemap"
                                ></i>

                            </div>


                            <h4>

                                ARQUITECTURA

                            </h4>


                            <p>

                                Organización de las páginas,
                                navegación, categorías y
                                jerarquía del contenido.

                            </p>


                        </article>


                        <!-- ==================================
                             PASO 4
                        =================================== -->

                        <article
                            class="proyecto-paso"
                        >


                            <span
                                class="proyecto-paso-numero"
                            >

                                04

                            </span>


                            <div
                                class="proyecto-paso-icono"
                            >

                                <i
                                    class="fa-solid fa-pen-ruler"
                                ></i>

                            </div>


                            <h4>

                                WIREFRAMES

                            </h4>


                            <p>

                                Planeación de banners,
                                menús, tarjetas, botones
                                y distribución de cada sección.

                            </p>


                        </article>


                        <!-- ==================================
                             PASO 5
                        =================================== -->

                        <article
                            class="proyecto-paso"
                        >


                            <span
                                class="proyecto-paso-numero"
                            >

                                05

                            </span>


                            <div
                                class="proyecto-paso-icono"
                            >

                                <i
                                    class="fa-solid fa-object-group"
                                ></i>

                            </div>


                            <h4>

                                DISEÑO VISUAL

                            </h4>


                            <p>

                                Desarrollo de banners,
                                recursos gráficos, menús,
                                tarjetas y elementos UI.

                            </p>


                        </article>


                        <!-- ==================================
                             PASO 6
                        =================================== -->

                        <article
                            class="proyecto-paso"
                        >


                            <span
                                class="proyecto-paso-numero"
                            >

                                06

                            </span>


                            <div
                                class="proyecto-paso-icono"
                            >

                                <i
                                    class="fa-solid fa-code"
                                ></i>

                            </div>


                            <h4>

                                DESARROLLO

                            </h4>


                            <p>

                                Construcción con HTML,
                                CSS y JavaScript,
                                animaciones, funciones
                                y adaptación responsive.

                            </p>


                        </article>


                    </div>


                    <!-- ======================================
                         LÍNEA DEL PROCESO
                    ======================================= -->

                    <div
                        class="proyecto-ruta-proceso"
                    >


                        <span
                            class="
                                proyecto-punto
                                inicio
                            "
                        ></span>


                        <span
                            class="proyecto-ruta-linea"
                        ></span>


                        <span
                            class="proyecto-punto"
                        ></span>


                        <span
                            class="proyecto-ruta-linea"
                        ></span>


                        <span
                            class="proyecto-punto"
                        ></span>


                        <span
                            class="proyecto-ruta-linea"
                        ></span>


                        <span
                            class="proyecto-punto"
                        ></span>


                        <span
                            class="proyecto-ruta-linea"
                        ></span>


                        <span
                            class="proyecto-punto"
                        ></span>


                        <span
                            class="proyecto-ruta-linea"
                        ></span>


                        <span
                            class="
                                proyecto-punto
                                final
                            "
                        ></span>


                    </div>


                </section>


                <!-- ==========================================
                     CREADORES
                =========================================== -->

                <section
                    class="
                        proyecto-seccion
                        proyecto-creadores
                    "
                >


                    <header
                        class="proyecto-heading"
                    >


                        <div
                            class="proyecto-heading-icono"
                        >

                            <i
                                class="fa-solid fa-user-group"
                            ></i>

                        </div>


                        <div>

                            <small>

                                EL EQUIPO

                            </small>


                            <h3>

                                CREADORES

                            </h3>

                        </div>


                    </header>


                    <p
                        class="proyecto-creadores-intro"
                    >

                        El proyecto combina investigación,
                        diseño visual, construcción de recursos
                        y desarrollo web.

                    </p>


                    <div
                        class="proyecto-creadores-grid"
                    >


                        <!-- ==================================
                             SEBASTIAN
                        =================================== -->

                        <article
                            class="proyecto-creador"
                        >


                            <div
                                class="proyecto-creador-foto"
                            >


                                <img
                                    src="img/proyecto/sebastian ramirez.jpg"
                                    alt="Sebastian Ramirez"
                                >


                                <div
                                    class="proyecto-creador-overlay"
                                >


                                    <i
                                        class="fa-solid fa-palette"
                                    ></i>


                                    <span>

                                        DISEÑO & DESARROLLO

                                    </span>


                                </div>


                            </div>


                            <div
                                class="proyecto-creador-info"
                            >


                                <span
                                    class="proyecto-creador-rol"
                                >

                                    DISEÑO · UX/UI · DESARROLLO

                                </span>


                                <h4>

                                    SEBASTIAN RAMIREZ

                                </h4>


                                <p>

                                    Participación en investigación,
                                    estructura, diseño visual,
                                    experiencia de usuario,
                                    organización del contenido
                                    y desarrollo web.

                                </p>


                            </div>


                        </article>


                        <!-- ==================================
                             JOSHUA
                        =================================== -->

                        <article
                            class="proyecto-creador"
                        >


                            <div
                                class="proyecto-creador-foto"
                            >


                                <img
                                    src="img/proyecto/joshua schamch.jpg"
                                    alt="Joshua Schamch"
                                >


                                <div
                                    class="proyecto-creador-overlay"
                                >


                                    <i
                                        class="fa-solid fa-pencil"
                                    ></i>


                                    <span>

                                        DISEÑO GRÁFICO

                                    </span>


                                </div>


                            </div>


                            <div
                                class="proyecto-creador-info"
                            >


                                <span
                                    class="proyecto-creador-rol"
                                >

                                    DISEÑO · CONCEPTO · APOYO VISUAL

                                </span>


                                <h4>

                                    JOSHUA SCHAMCH

                                </h4>


                                <p>

                                    Participación en concepto
                                    visual, referencias gráficas,
                                    composición y desarrollo
                                    de recursos del proyecto.

                                </p>


                            </div>


                        </article>


                    </div>


                </section>


                <!-- ==========================================
                     CIERRE
                =========================================== -->

                <section
                    class="proyecto-final"
                >


                    <div
                        class="proyecto-final-icono"
                    >

                        <i
                            class="fa-solid fa-gamepad"
                        ></i>

                    </div>


                    <div>


                        <small>

                            MUNDO RAYMAN · 2026

                        </small>


                        <h3>

                            UNA AVENTURA HECHA PARA LA WEB

                        </h3>


                        <p>

                            Diseño, creatividad,
                            interacción y pasión
                            por los videojuegos.

                        </p>


                    </div>


                </section>


            </div>


        </div>

    `;


    /* ========================================================
       INSERTAR MODAL
    ======================================================== */

    document.body.appendChild(
        modal
    );


    /* ========================================================
       REFERENCIAS
    ======================================================== */

    const botonCerrar =
        document.getElementById(
            "proyectoCerrar"
        );


    const scrollProyecto =
        document.getElementById(
            "proyectoScroll"
        );


    const contenedorParticulas =
        document.getElementById(
            "proyectoParticulas"
        );


    let ultimoElementoConFoco = null;


    /* ========================================================
       ABRIR MODAL
    ======================================================== */

    function abrirProyecto() {

        ultimoElementoConFoco =
            document.activeElement;


        modal.classList.add(
            "activo"
        );


        modal.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.classList.add(
            "proyecto-modal-abierto"
        );


        /*
            Volvemos al comienzo
            del scroll interno.
        */

        if (scrollProyecto) {

            scrollProyecto.scrollTop =
                0;

        }


        /*
            Foco en la X.
        */

        setTimeout(
            function () {

                botonCerrar.focus();

            },
            120
        );

    }


    /* ========================================================
       CERRAR MODAL
    ======================================================== */

    function cerrarProyecto() {

        modal.classList.remove(
            "activo"
        );


        modal.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.classList.remove(
            "proyecto-modal-abierto"
        );


        /*
            Devolver foco al botón
            que abrió la ventana.
        */

        if (
            ultimoElementoConFoco
            &&
            typeof ultimoElementoConFoco.focus
            === "function"
        ) {

            setTimeout(
                function () {

                    ultimoElementoConFoco.focus();

                },
                100
            );

        }

    }


    /* ========================================================
       DETECTAR TODOS LOS href="proyecto.html"

       ESTA ES LA PARTE IMPORTANTE.

       No necesitas modificar tus botones actuales.
    ======================================================== */

    document.addEventListener(
        "click",
        function (event) {

            const enlace =
                event.target.closest(
                    "a"
                );


            if (!enlace) {

                return;

            }


            /*
                Leer href tal como fue
                escrito en HTML.
            */

            const href =
                enlace.getAttribute(
                    "href"
                );


            if (!href) {

                return;

            }


            /*
                Aceptamos:
                proyecto.html
                ./proyecto.html
                /proyecto.html
            */

            const esProyecto =

                href ===
                "proyecto.html"

                ||

                href ===
                "./proyecto.html"

                ||

                href.endsWith(
                    "/proyecto.html"
                );


            if (!esProyecto) {

                return;

            }


            /*
                Evita el error:
                Cannot GET /proyecto.html
            */

            event.preventDefault();


            /*
                Cerramos menú móvil
                si está abierto.
            */

            const menuMobile =
                document.getElementById(
                    "mobileMenu"
                );


            const overlayMobile =
                document.getElementById(
                    "mobileOverlay"
                );


            if (menuMobile) {

                menuMobile.classList.remove(
                    "active"
                );

            }


            if (overlayMobile) {

                overlayMobile.classList.remove(
                    "active"
                );

            }


            document.body.classList.remove(
                "menu-open"
            );


            /*
                También tratamos de cerrar
                cualquier menú lateral
                que esté abierto.
            */

            document
                .querySelectorAll(
                    ".open, .active"
                )
                .forEach(
                    function (elemento) {

                        /*
                            No tocar elementos del modal.
                        */

                        if (
                            elemento.closest(
                                "#proyectoModalGlobal"
                            )
                        ) {

                            return;

                        }


                        /*
                            Únicamente paneles laterales
                            conocidos.
                        */

                        if (

                            elemento.classList.contains(
                                "gallery-panel"
                            )

                            ||

                            elemento.classList.contains(
                                "side-menu"
                            )

                            ||

                            elemento.classList.contains(
                                "extra-menu"
                            )

                        ) {

                            elemento.classList.remove(
                                "open"
                            );

                            elemento.classList.remove(
                                "active"
                            );

                        }

                    }
                );


            abrirProyecto();

        }
    );


    /* ========================================================
       BOTÓN X
    ======================================================== */

    botonCerrar.addEventListener(
        "click",
        cerrarProyecto
    );


    /* ========================================================
       CLICK EN EL FONDO MORADO
    ======================================================== */

    modal
        .querySelectorAll(
            "[data-cerrar-proyecto]"
        )
        .forEach(
            function (elemento) {

                elemento.addEventListener(
                    "click",
                    cerrarProyecto
                );

            }
        );


    /* ========================================================
       ESC
    ======================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key !==
                "Escape"
            ) {

                return;

            }


            if (
                modal.classList.contains(
                    "activo"
                )
            ) {

                cerrarProyecto();

            }

        }
    );


    /* ========================================================
       PARTÍCULAS
    ======================================================== */

    function crearParticulasProyecto() {

        if (!contenedorParticulas) {

            return;

        }


        contenedorParticulas.innerHTML =
            "";


        const cantidad =

            window.innerWidth <= 560

                ? 20

                : 38;


        for (
            let i = 0;
            i < cantidad;
            i++
        ) {

            const particula =
                document.createElement(
                    "span"
                );


            particula.className =
                "proyecto-particula";


            const tamano =

                Math.random()
                * 8
                + 3;


            particula.style.width =
                tamano + "px";


            particula.style.height =
                tamano + "px";


            particula.style.left =

                (
                    Math.random()
                    * 100
                )

                + "%";


            particula.style.animationDuration =

                (
                    Math.random()
                    * 8
                    + 8
                )

                + "s";


            particula.style.animationDelay =

                (
                    -Math.random()
                    * 13
                )

                + "s";


            contenedorParticulas.appendChild(
                particula
            );

        }

    }


    crearParticulasProyecto();


    /* ========================================================
       RESIZE
    ======================================================== */

    let temporizadorResize;


    window.addEventListener(
        "resize",
        function () {

            clearTimeout(
                temporizadorResize
            );


            temporizadorResize =
                setTimeout(
                    function () {

                        crearParticulasProyecto();

                    },
                    250
                );

        }
    );


})();