// Описаний в документації
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = document.querySelector("ul.gallery");

images.addEventListener("click", (e) => {
  e.preventDefault();
});

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});

