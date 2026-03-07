const images = document.querySelectorAll(".clickable-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if (lightbox && lightboxImg && images.length > 0) {
  images.forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("show");
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("show");
  });
}
