let button = document.querySelector(".navigation__button");
let background = document.querySelector(".background");

button.addEventListener("click", () => {
    background.classList.toggle("background--dark");
    
})

