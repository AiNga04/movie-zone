function addMovieItemSeries() {
  const movies = [
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/khi-dien-thoai-do-chuong-thumb.jpg",
      alt: "Khi Điện Thoại Đổ Chuông",
      episode: "Tập 1",
      nameVi: "Khi Điện Thoại Đổ Chuông",
      nameEn: "When the Phone Rings",
    },
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/toi-gui-tinh-yeu-vao-gio-thumb.jpg",
      alt: "Tôi Gửi Tình Yêu Vào Gió",
      episode: "Tập 12",
      nameVi: "Tôi Gửi Tình Yêu Vào Gió",
      nameEn: "Chasing the Wind",
    },
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/anh-hung-quang-dong-thap-ho-thumb.jpg",
      alt: "Anh Hùng Quảng Đông Thập Hổ",
      episode: "Tập 10",
      nameVi: "Anh Hùng Quảng Đông Thập Hổ",
      nameEn: "Ten Tigers Of Guangdong",
    },
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/da-vi-uong-thumb.jpg",
      alt: "Dạ Vị Ương",
      episode: "Tập 9",
      nameVi: "Dạ Vị Ương",
      nameEn: "The Night is Still Young",
    },
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/khach-san-anh-trang.jpg",
      alt: "Khách Sạn Ánh Trăng",
      episode: "Tập 9",
      nameVi: "Khách Sạn Ánh Trăng",
      nameEn: "Hotel Del Luna",
    },
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/goblin-thumb.jpg",
      alt: "Goblin",
      episode: "Tập 16",
      nameVi: "Yêu Tinh",
      nameEn: "Goblin",
    },
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/crash-landing-on-you-thumb.jpg",
      alt: "Crash Landing on You",
      episode: "Tập 16",
      nameVi: "Hạ Cánh Nơi Anh",
      nameEn: "Crash Landing on You",
    },
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/descendants-of-the-sun-thumb.jpg",
      alt: "Descendants of the Sun",
      episode: "Tập 16",
      nameVi: "Hậu Duệ Mặt Trời",
      nameEn: "Descendants of the Sun",
    },
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/the-heirs-thumb.jpg",
      alt: "The Heirs",
      episode: "Tập 20",
      nameVi: "Những Người Thừa Kế",
      nameEn: "The Heirs",
    },
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/signal-thumb.jpg",
      alt: "Signal",
      episode: "Tập 16",
      nameVi: "Tín Hiệu",
      nameEn: "Signal",
    },
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/itaewon-class-thumb.jpg",
      alt: "Itaewon Class",
      episode: "Tập 16",
      nameVi: "Tầng Lớp Itaewon",
      nameEn: "Itaewon Class",
    },
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/strong-woman-do-bong-soon-thumb.jpg",
      alt: "Strong Woman Do Bong Soon",
      episode: "Tập 16",
      nameVi: "Cô Nàng Mạnh Mẽ Do Bong Soon",
      nameEn: "Strong Woman Do Bong Soon",
    },
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/mr-queen-thumb.jpg",
      alt: "Mr. Queen",
      episode: "Tập 20",
      nameVi: "Chàng Hậu",
      nameEn: "Mr. Queen",
    },
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/vincenzo-thumb.jpg",
      alt: "Vincenzo",
      episode: "Tập 20",
      nameVi: "Vincenzo",
      nameEn: "Vincenzo",
    },
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/penthouse-thumb.jpg",
      alt: "Penthouse",
      episode: "Tập 21",
      nameVi: "Cuộc Chiến Thượng Lưu",
      nameEn: "Penthouse",
    },
  ];

  let htmlContent = `
    <div class="list-series row">
`;

  movies.forEach((movie) => {
    htmlContent += `
    <div class="movie-item col-md-3 col-4 p-0">
      <span class="movie-tag">${movie.tag}</span>
      <div class="movie-image">
        <img src="${movie.image}" alt="${movie.alt}">
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

  htmlContent += `
    </div>
`;

  document.write(htmlContent);
}
