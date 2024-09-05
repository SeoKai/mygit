document.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  const header = document.querySelector("header");
  if (scroll <= 50) {
  } else {
    header.classList.add("fixed");
  }
});
