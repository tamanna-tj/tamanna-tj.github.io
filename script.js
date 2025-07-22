// Scroll-to-top button
window.onscroll = function () {
  const scrollBtn = document.getElementById("scrollBtn");
  if (scrollBtn) {
    scrollBtn.style.display =
      document.body.scrollTop > 150 || document.documentElement.scrollTop > 150
        ? "block"
        : "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Smooth scroll (optional if you use same-page anchors)
document.addEventListener("DOMContentLoaded", () => {
  // Lightbox popup
  const images = document.querySelectorAll(".popup-img");
  images.forEach(img => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.id = "lightbox";
      document.body.appendChild(overlay);

      const popup = document.createElement("img");
      popup.src = img.src;
      popup.alt = img.alt;
      popup.className = "popup-image";
      overlay.appendChild(popup);

      overlay.addEventListener("click", () => overlay.remove());
    });
  });

  // Contact form alert
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Message sent! We'll contact you soon.");
      form.reset();
    });
  }
});