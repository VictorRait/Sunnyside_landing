const hamburgerMenu = document.querySelector(".hamburger-icon")
const subMenu = document.querySelector(".nav-links")

hamburgerMenu.addEventListener("click", () => {
  subMenu.classList.toggle("active")
  hamburgerMenu.classList.toggle("opaque")
})
