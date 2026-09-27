/* =========================
   ABRIR REGALO
========================= */

const botonAbrir =
    document.getElementById("abrirRegalo");

const bienvenida =
    document.getElementById("bienvenida");

const contenido =
    document.getElementById("contenido");


botonAbrir.addEventListener(
    "click",
    function () {

        bienvenida.style.animation =
            "desaparecer 0.8s ease forwards";

        setTimeout(function () {

            bienvenida.style.display =
                "none";

            contenido.style.display =
                "block";

            contenido.style.animation =
                "aparecer 1s ease";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 700);

    }
);


/* =========================
   VOLTEAR TARJETAS
========================= */

function voltearTarjeta(tarjeta) {

    tarjeta.classList.toggle(
        "volteada"
    );

}


/* =========================
   CORAZONES FINALES
========================= */

function crearCorazones() {

    const cantidad = 25;

    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        const corazon =
            document.createElement("div");

        corazon.classList.add(
            "corazon-final"
        );

        const tipos = [
            "🧡",
            "💙",
            "🧡",
            "💙",
            "✨"
        ];

        corazon.innerText =
            tipos[
                Math.floor(
                    Math.random()
                    * tipos.length
                )
            ];

        corazon.style.left =
            Math.random() * 100 + "vw";

        corazon.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        corazon.style.fontSize =
            (18 + Math.random() * 22) + "px";

        document.body.appendChild(
            corazon
        );


        setTimeout(
            function () {

                corazon.remove();

            },
            6000
        );

    }

}


/* =========================
   ANIMACIÓN EXTRA
========================= */

const estilo =
    document.createElement("style");

estilo.innerHTML = `

@keyframes desaparecer {

    from {
        opacity: 1;
        transform: scale(1);
    }

    to {
        opacity: 0;
        transform: scale(1.08);
    }

}

`;

document.head.appendChild(estilo);