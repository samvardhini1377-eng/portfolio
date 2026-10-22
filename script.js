const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const sections = document.querySelectorAll(".page-section");
const navigationLinks = document.querySelectorAll(
    '.nav-links a[href^="#"]'
);

// Show only the selected section
function showPage(pageId) {
    const selectedPage = document.getElementById(pageId);

    if (!selectedPage || !selectedPage.classList.contains("page-section")) {
        return;
    }

    sections.forEach(function (section) {
        section.classList.remove("active-page");
    });

    selectedPage.classList.add("active-page");

    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
}

// Navigate only when a navigation link is clicked or tapped
navigationLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const pageId = link.getAttribute("href").substring(1);
        showPage(pageId);
    });
});

// Mobile menu button
menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isOpen);
});

// Footer year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Contact form
document.getElementById("contact-form").addEventListener(
    "submit",
    function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const subject = encodeURIComponent("Portfolio message from " + name);
        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );

        window.location.href =
            "mailto:samvardhini1377@gmail.com?subject=" +
            subject + "&body=" + body;
    }
);