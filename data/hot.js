function addMovieItemHot() {
  const movies = [
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/khi-dien-thoai-do-chuong-thumb.jpg",
      alt: "Khi Điện Thoại Đổ Chuông",
      nameVi: "Khi Điện Thoại Đổ Chuông",
      nameEn: "When the Phone Rings",
      episode: "Tập 1",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/thien-than-ho-men-thumb.jpg",
      alt: "Thiên Thần Hộ Mệnh",
      nameVi: "Thiên Thần Hộ Mệnh",
      nameEn: "The Guardian Angel",
      episode: "Full",
    },
    {
      tag: "4K+EngSub",
      imgSrc: "./assets/images/movie/avenger-endgame-thumb.jpg",
      alt: "Avenger: Hồi Kết",
      nameVi: "Avenger: Hồi Kết",
      nameEn: "Avenger: Endgame",
      episode: "Full",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/tham-tu-lung-danh-conan-thumb.jpg",
      alt: "Thám Tử Lừng Danh Conan",
      nameVi: "Thám Tử Lừng Danh Conan",
      nameEn: "Detective Conan",
      episode: "Tập 1050",
    },
    {
      tag: "HD+EngSub",
      imgSrc: "./assets/images/movie/co-di-ma-lay-chong-toi-thumb.jpg",
      alt: "Cô đi mà lấy chồng tôi",
      nameVi: "Cô đi mà lấy chồng tôi",
      nameEn: "Marry My Husband",
      episode: "Full",
    },
    {
      tag: "HD+EngSub",
      imgSrc: "./assets/images/movie/bat-gap-tinh-yeu-o-trung-khanh-thumb.jpg",
      alt: "Bắt Gặp Tình Yêu Ở Trùng Khánh",
      nameVi: "Bắt Gặp Tình Yêu Ở Trùng Khánh",
      nameEn: "Meet Love in Chong Qing",
      episode: "Full",
    },
    {
      tag: "HD+EngSub",
      imgSrc: "./assets/images/movie/sa-vao-tinh-yeu-thumb.jpg",
      alt: "Sa Vào Tình Yêu",
      nameVi: "Sa Vào Tình Yêu",
      nameEn: "Love Trap",
      episode: "Full",
    },
  ];

  let htmlContent = '<div class="movie-list">';

  movies.forEach((movie) => {
    htmlContent += `
      <div class="movie-item">
        <span class="movie-tag">${movie.tag}</span>
        <div class="movie-image">
          <img src="${movie.imgSrc}" alt="${movie.alt}">
        </div>
        <div class="movie-info">
          <span class="movie-episode">${movie.episode}</span>
        </div>
        <div class="movie-name">
          <h4 class="name-vi">${movie.nameVi}</h4>
          <p class="name-en">${movie.nameEn}</p>
        </div>
      </div>
    `;
  });

  htmlContent += "</div>";

  document.write(htmlContent);
}
