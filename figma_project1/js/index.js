document.querySelector("#toggler").addEventListener("click", function () {
  document.querySelector("#nav_items ul").classList.toggle('showList');
});
let nav_link = document.querySelector(".nav_link");

toggler.addEventListener("click", listDisplay);

function listDisplay() {
  nav_link.classList.toggle('showList');
}
