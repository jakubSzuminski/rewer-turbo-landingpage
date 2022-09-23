//COPYRIGHT YEAR
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//MOBILE NAVIGATION
const btnNavEl = document.querySelector(".mobile-nav-btn");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
});

//SMOOTH SCROLLING
const allLinks = document.querySelectorAll('.main-nav a:link');

allLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        const href = link.getAttribute('href');
        
        if(link.classList.contains("main-nav-link"))
            headerEl.classList.toggle("nav-open");
    });
});

//STICKY NAVBAR
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
    function(entries) {
        const ent = entries[0];

        if(ent.isIntersecting === false) {
            document.body.classList.add("sticky");
        }

        if(ent.isIntersecting === true) {
            document.body.classList.remove("sticky");
        }
    },
    {
        root: null,
        threshold: 0,
        rootMargin: "-80px",
    }
);
obs.observe(sectionHeroEl);
