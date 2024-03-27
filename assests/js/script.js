hamburger = document.getElementById("hamburger");
navItem = document.querySelector(".nav-items");
console.log(navItem);
hamburger.addEventListener("click", () => {
  navItem.classList.toggle("nav-item");
  console.log("how are you");
});
