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