document.addEventListener("DOMContentLoaded", () => {

    /*
     * Rolagem suave para os botões internos
     */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (targetId === "#") {
                event.preventDefault();
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /*
     * Efeito suave nos cards de prêmios
     */

    const cards = document.querySelectorAll(".prize-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.boxShadow =
                "0 15px 40px rgba(178, 23, 83, 0.15)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.boxShadow = "none";

        });

    });

});
