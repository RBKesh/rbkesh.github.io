function handleScroll() {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.2;

        if (sectionTop < triggerPoint) {
            section.classList.add("show");
        } else {
            section.classList.remove("show");
        }
    });
}

document.addEventListener("scroll", handleScroll);
