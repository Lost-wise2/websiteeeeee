// Show first Italian food menu popup
document.getElementById("foodImage1").addEventListener("click", function () {
  document.getElementById("foodMenu").style.display = "flex"; // shows popup with img1.jpg
});

// Show second Italian food menu popup (different popup container)
document.getElementById("foodImage2").addEventListener("click", function () {
  document.getElementById("foodMenu2").style.display = "flex"; // shows popup with img2.jpg
});

// Show drinks menu popup
document.getElementById("drinksImage").addEventListener("click", function () {
  document.getElementById("drinksMenu").style.display = "flex"; // shows popup with drinks.jpg
});

// Close buttons for popups
document.querySelectorAll(".close").forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.closest(".popup").style.display = "none"; // hide popup on close click
  });
});

// Close by clicking outside popup content (on overlay)
window.addEventListener("click", function (event) {
  document.querySelectorAll(".popup").forEach(function (popup) {
    if (event.target === popup) {
      popup.style.display = "none"; // hide popup on overlay click
    }
  });
});
