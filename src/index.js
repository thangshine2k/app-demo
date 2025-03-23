document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");

  // Định nghĩa hàm toggleMenu trong JavaScript
  function toggleMenu() {
    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
      console.log("Menu is now visible");
    } else {
      console.log("Menu is hidden");
    }
  }
  burger.addEventListener("click", toggleMenu);
});

  document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".text-book1-h1");
    elements.forEach((el) => {
      el.innerHTML = el.innerHTML.replace(/\.\s*/g, ".<br>");
    });
  });
