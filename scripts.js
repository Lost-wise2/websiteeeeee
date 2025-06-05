//
document.addEventListener("scroll", () => {
  header = document.querySelector("#header");
  // console.log(window.scrollY);
  if (window.scrollY == 0) {
    header.classList.remove("shrink");
  } else {
    header.classList.add("shrink");
  }
  const box = document.querySelector(".character-box");
  if (window.scrollY <= 200) {
    box.classList.add("hidden");
  } else {
    box.classList.remove("hidden");
  }
});
