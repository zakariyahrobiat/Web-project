hamburger = document.getElementById("hamburger");
console.log(hamburger);
navItem = document.querySelector(".nav-items");

hamburger.addEventListener("click", () => {
  navItem.classList.toggle("nav-item");
});
