let toggleMenu = document.querySelector(".toggle-menu");
let menu = document.querySelector(".ct-menu");

// handle toggle menu
document.addEventListener("click", (e) => {
  if (e.target.matches(".toggle-menu")) {
    console.log(menu);
    menu.classList.toggle("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
