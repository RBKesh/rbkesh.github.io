document.addEventListener("scroll", function() {
    const aboutSection = document.querySelector(".about");
    const skillsSection = document.querySelector(".skills");
    const contactSection = document.querySelector(".contact");

    if (window.scrollY > aboutSection.offsetTop - window.innerHeight / 1.5) {
        aboutSection.classList.add("slide-in");
    }

    if (window.scrollY > skillsSection.offsetTop - window.innerHeight / 1.5) {
        skillsSection.classList.add("slide-in");
    }

    if (window.scrollY > contactSection.offsetTop - window.innerHeight / 1.5) {
        contactSection.classList.add("slide-in");
    }
});

document.querySelectorAll("section").forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = "translateY(100px)";
});

document.querySelectorAll(".slide-in").forEach((section) => {
    section.style.opacity = 1;
    section.style.transform = "translateY(0)";
    section.style.transition = "opacity 1s, transform 1s";
});
