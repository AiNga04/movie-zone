/*======== Hiện ẩn filter =========*/
document.getElementById("check-filter").addEventListener("change", function () {
  const check = document.getElementById("filter");
  if (this.checked) {
    check.classList.add("active");
  } else {
    check.classList.remove("active");
  }
});

// Cuộn phim hot
const movieList = document.querySelector(".movie-list");
const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-prev");

let currentTranslateX = 0;

btnNext.addEventListener("click", () => {
  const listWidth = movieList.scrollWidth;
  const containerWidth = movieList.parentElement.offsetWidth;

  if (Math.abs(currentTranslateX) + containerWidth < listWidth) {
    currentTranslateX -= containerWidth / 2;
    movieList.style.transform = `translateX(${currentTranslateX}px)`;
  }
});

btnPrev.addEventListener("click", () => {
  const containerWidth = movieList.parentElement.offsetWidth;

  if (currentTranslateX < 0) {
    currentTranslateX += containerWidth / 2;
    movieList.style.transform = `translateX(${currentTranslateX}px)`;
  }
});

// Tự động cuộn sau mỗi 2 giây
setInterval(() => {
  const listWidth = movieList.scrollWidth;
  const containerWidth = movieList.parentElement.offsetWidth;

  if (Math.abs(currentTranslateX) + containerWidth < listWidth) {
    currentTranslateX -= containerWidth / 2;
  } else {
    currentTranslateX = 0;
  }

  movieList.style.transform = `translateX(${currentTranslateX}px)`;
  movieList.style.transition = "transform 0.3s ease-in-out";
}, 2000);
