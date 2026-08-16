/* =========================================================
   BLACKFORD ROVERS FC
   WEBSITE JAVASCRIPT
========================================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            mainNav.classList.toggle("active");

        });


        const navLinks = mainNav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mainNav.classList.remove("active");

            });

        });

    }


    /* =====================================================
       CLOSE MESSAGE BOX
    ===================================================== */

    const messageBox = document.getElementById("messageBox");
    const closeMessage = document.getElementById("closeMessage");

    if (closeMessage && messageBox) {

        closeMessage.addEventListener("click", function () {

            messageBox.classList.remove("active");

        });


        messageBox.addEventListener("click", function (event) {

            if (event.target === messageBox) {

                messageBox.classList.remove("active");

            }

        });

    }


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape" && messageBox) {

            messageBox.classList.remove("active");

        }

    });


    /* =====================================================
       PLAYER IMAGE ERROR HANDLING
    ===================================================== */

    const playerImages =
        document.querySelectorAll(".player-image img");

    playerImages.forEach(function (image) {

        image.addEventListener("error", function () {

            image.style.display = "none";

            image.parentElement.classList.add(
                "image-missing"
            );

        });

    });


    /* =====================================================
       SIMPLE SCROLL ANIMATION
    ===================================================== */

    const animatedElements =
        document.querySelectorAll(
            ".news-card, .player-card, .product-card, .fixture-item"
        );


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.1
            }
        );


    animatedElements.forEach(function (element) {

        observer.observe(element);

    });


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const yearElements =
        document.querySelectorAll(
            "[data-current-year]"
        );

    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });


});


/* =========================================================
   MATCH CENTRE MESSAGE
========================================================= */

function showMatchMessage() {

    const messageBox =
        document.getElementById("messageBox");

    if (messageBox) {

        messageBox.classList.add("active");

    }

}


/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (
            targetId &&
            targetId !== "#"
        ) {

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }

    });

});