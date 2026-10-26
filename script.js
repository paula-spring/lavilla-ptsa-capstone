function greeting() {
    return `welcome to the LaVilla PTSA website!`;
}

console.log(greeting());

// Tell the browser that JavaScript is enabled
document.documentElement.classList.add("js-enabled");

// Find the Menu button and navigation
const toggle = document.querySelector("#navToggle");
const nav = document.querySelector("#mainNav");

// Open or close the navigation when Menu is clicked
toggle.addEventListener("click", () => {
const isOpen = nav.classList.toggle("open");
toggle.setAttribute("aria-expanded", String(isOpen));
});

// Set up the carousels
const carousels = document.querySelectorAll(
    "#carousel-right, #carousel-left"
);

carousels.forEach(function (carousel) {
    const items = carousel.querySelectorAll("li");
    let currentIndex = 0;

    if (items.length === 0) {
        return;
    }

    items[currentIndex].classList.add("active");

    // Change to the next image every 4 seconds
    setInterval(function () {
        items[currentIndex].classList.remove("active");

        currentIndex = (currentIndex + 1) % items.length;

        items[currentIndex].classList.add("active");
    }, 4000);
});

