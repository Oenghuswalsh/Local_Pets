const slideGallery1 = document.querySelector(".slides1");
const slides1 = slideGallery1.querySelectorAll("div");
const thumbnailContainer1 = document.querySelector(".thumbnails1");
const slideCount1 = slides1.length;
const slideWidth1 = 300;

const highlightThumbnail1 = () => {
  thumbnailContainer1
    .querySelectorAll("div.highlighted")
    .forEach((el) => el.classList.remove("highlighted"));
  const index = Math.floor(slideGallery1.scrollLeft / slideWidth1);
  thumbnailContainer1
    .querySelector(`div[data-id="${index}"]`)
    .classList.add("highlighted");
};

const scrollToElement1 = (el) => {
  const index = parseInt(el.dataset.id, 10);
  slideGallery1.scrollTo(index * slideWidth, 0);
};

thumbnailContainer1.innerHTML += [...slides1]
  .map((slide, i) => `<div data-id="${i}"></div>`)
  .join("");

thumbnailContainer1.querySelectorAll("div").forEach((el) => {
  el.addEventListener("click", () => scrollToElement1(el));
});

slideGallery1.addEventListener("scroll", (e) => highlightThumbnail1());

highlightThumbnail1();
