import { galleryItems } from "./js/galleryItems";

const gallery = document.querySelector(".js-gallery")
const modal = document.querySelector(".js-lightbox")
const img = document.querySelector(".lightbox__image")
const btn = document.querySelector('[data-action="close-lightbox"]')

const items = []

galleryItems.forEach(item => {
const prev = item.preview
const origin = item.original
const descr = item.description
  item = `
<li class="gallery__item">
<a href="#" class="gallery__link">
<img src="${prev}" data-source="${origin}" class="gallery__image" alt="${descr}"></a>
</li>`
  
  items.push(item)
});

gallery.insertAdjacentHTML('afterbegin', items.join(" "))
gallery.addEventListener("click", onImgClick);
btn.addEventListener("click", onCloseModal)

function onImgClick(event) { 
  const targetImg = event.target;
  console.log("event target: ", targetImg)
  modal.classList.toggle("is-open")
  img.src = targetImg.dataset.source
};

function onCloseModal(event) {
  const targetCloseBtn = event.target;
  modal.classList.toggle("is-open")
    img.src = ""
}