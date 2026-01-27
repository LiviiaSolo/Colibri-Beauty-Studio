
function scrollToSection(id) {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }

        function handleSubmit(e) {
            e.preventDefault();
            alert("Thank you! We will contact you shortly to confirm your appointment.");
            e.target.reset();
        }

document.getElementById("year").textContent = new Date().getFullYear();


        

// burger menu

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const navMenu = document.querySelector("nav ul");

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
});



