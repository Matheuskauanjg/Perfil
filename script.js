document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.addEventListener("mouseover", () => {
            section.style.transform = "scale(1.05)";
            section.style.transition = "0.3s";
        });
        section.addEventListener("mouseout", () => {
            section.style.transform = "scale(1)";
        });
    });
});
