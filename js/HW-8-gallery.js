const gallery = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const ulRef = document.querySelector(".js-gallery");
const modalImageRef = document.querySelector(".lightbox__image");
const lightboxRef = document.querySelector(".js-lightbox");
const lightboxOverlayRef = document.querySelector(".lightbox__overlay");
const closeBtn = document.querySelector('button[data-action="close-lightbox"]');

ulRef.addEventListener("click", onGalleryClick);
lightboxOverlayRef.addEventListener("click", onBackdropClick);
closeBtn.addEventListener("click", onCloseModal);

let indexImg = 0;
const liRef = gallery.map((item) => {
  const itemRef = document.createElement("li");
  itemRef.classList.add("gallery__item");
  itemRef.insertAdjacentHTML(
    "afterbegin",
    `<a class='gallery__link' href="${item.original}">
    <img class='gallery__image' src="${item.preview}" data-source="${item.original}" alt="${item.description}" indexImg="${indexImg}">`
  );
  indexImg += 1;
  return itemRef;
});
ulRef.append(...liRef);

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const imageRef = event.target;
  const largeImageURL = imageRef.dataset.source;

  setLargeImageSrc(largeImageURL);

  onOpenModal(imageRef);
}

function setLargeImageSrc(url) {
  modalImageRef.src = url;
}

function onOpenModal(source) {
  let indexPreview = Number(source.attributes.indexImg.value);

  window.addEventListener("keydown", (event) => {
    let imgURL;
    if (event.code === "Escape") {
      onCloseModal();
    } else if (event.code === "ArrowRight") {
      if (indexPreview === gallery.length - 1) indexPreview = -1;
      imgURL = gallery[(indexPreview += 1)].original;
      setLargeImageSrc(imgURL);
    } else if (event.code === "ArrowLeft") {
      if (indexPreview === 0) indexPreview = gallery.length;
      imgURL = gallery[(indexPreview -= 1)].original;
      setLargeImageSrc(imgURL);
    }
  });
  lightboxRef.classList.add("is-open");
}

function onCloseModal() {
  lightboxRef.classList.remove("is-open");
  modalImageRef.removeAttribute("src");
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
}





// ДО ВИКОНАННЯ ОСТАННЬОГО ЗАВДАННЯ - ПРОЛИСТУВАННЯ ГАЛЕРЕЇ ВЛІВО І ВПРАВО
// const ulRef = document.querySelector(".js-gallery");
// const modalImageRef = document.querySelector(".lightbox__image");
// const lightboxRef = document.querySelector(".js-lightbox");
// const lightboxOverlayRef = document.querySelector(".lightbox__overlay");
// const closeBtn = document.querySelector('button[data-action="close-lightbox"]');

// ulRef.addEventListener("click", onGalleryClick);
// lightboxOverlayRef.addEventListener("click", onBackdropClick);
// closeBtn.addEventListener("click", onCloseModal);

// let indexImg = 0;
// const liRef = gallery.map((item) => {
//   const itemRef = document.createElement("li");
//   itemRef.classList.add("gallery__item");
//   itemRef.insertAdjacentHTML(
//     "afterbegin",
//     `<a class='gallery__link' href="${item.original}">
//       <img class='gallery__image' src="${item.preview}" data-source="${item.original}" alt="${item.description}" indexImg="${indexImg}">`
//   );
//   indexImg += 1;
//   return itemRef;
// });
// ulRef.append(...liRef);

// function onGalleryClick(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }
//   const imageRef = event.target;
//   const largeImageURL = imageRef.dataset.source;
//   setLargeImageSrc(largeImageURL);
//   onOpenModal();
// }
// function setLargeImageSrc(url) {
//   modalImageRef.src = url;
// }
// function onOpenModal() {
//   window.addEventListener("keydown", onPressKey);
//   lightboxRef.classList.add("is-open");
// }
// function onCloseModal() {
//   window.removeEventListener("keydown", onPressKey);
//   lightboxRef.classList.remove("is-open");
//   modalImageRef.removeAttribute("src");
// }
// function onBackdropClick(event) {
//   if (event.target === event.currentTarget) {
//     onCloseModal();
//   }
// }
// function onPressKey(event) {
//   if (event.code === "Escape") {
//     onCloseModal();
//   }
// }
