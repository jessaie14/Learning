const togglebutton = document.getElementById("toggle-button");
const sidebar = document.getElementById("side-bar");

togglebutton.addEventListener("click", show);

function show() {
  sidebar.classList.toggle("active");
}

// remove sidebar if click on the main content

const content = document.querySelector(".content");

content.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
