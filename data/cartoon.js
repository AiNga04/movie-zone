function addMovieItemCartoon() {
  const movies = [
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/frozen-thumb.jpg",
      alt: "Nữ Hoàng Băng Giá",
      episode: "Full",
      nameVi: "Nữ Hoàng Băng Giá",
      nameEn: "Frozen",
    },
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/up-thumb.jpg",
      alt: "Vút Bay",
      episode: "Full",
      nameVi: "Vút Bay",
      nameEn: "Up",
    },
    {
      tag: "4K+Vietsub",
      image: "./assets/images/movie/toy-story-thumb.jpg",
      alt: "Câu Chuyện Đồ Chơi",
      episode: "Full",
      nameVi: "Câu Chuyện Đồ Chơi",
      nameEn: "Toy Story",
    },
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/shrek-thumb.jpg",
      alt: "Shrek",
      episode: "Full",
      nameVi: "Shrek",
      nameEn: "Shrek",
    },
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/tham-tu-lung-danh-conan-thumb.jpg",
      alt: "Thám Tử Lừng Danh Conan",
      episode: "Tập 1050",
      nameVi: "Thám Tử Lừng Danh Conan",
      nameEn: "Detective Conan",
    },
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/one-piece-thumb.jpg",
      alt: "One Piece",
      episode: "Tập 1000",
      nameVi: "One Piece",
      nameEn: "One Piece",
    },
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/naruto-thumb.jpg",
      alt: "Naruto",
      episode: "Tập 220",
      nameVi: "Naruto",
      nameEn: "Naruto",
    },
    {
      tag: "4K+Vietsub",
      image: "./assets/images/movie/your-name-thumb.jpg",
      alt: "Your Name",
      episode: "Full",
      nameVi: "Tên Cậu Là Gì?",
      nameEn: "Your Name",
    },
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/spirit-away-thumb.jpg",
      alt: "Spirited Away",
      episode: "Full",
      nameVi: "Vùng Đất Linh Hồn",
      nameEn: "Spirited Away",
    },
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/attack-on-titan-thumb.jpg",
      alt: "Attack on Titan",
      episode: "Tập 40",
      nameVi: "Cuộc Tấn Công Của Titan",
      nameEn: "Attack on Titan",
    },
    {
      tag: "4K+Vietsub",
      image: "./assets/images/movie/demon-slayer-thumb.jpg",
      alt: "Demon Slayer",
      episode: "Full",
      nameVi: "Thanh Gươm Diệt Quái Vật",
      nameEn: "Demon Slayer",
    },
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/dragon-ball-thumb.jpg",
      alt: "Dragon Ball",
      episode: "Tập 150",
      nameVi: "Dragon Ball",
      nameEn: "Dragon Ball",
    },
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/bleach-thumb.jpg",
      alt: "Bleach",
      episode: "Tập 100",
      nameVi: "Bleach",
      nameEn: "Bleach",
    },
    {
      tag: "4K+Vietsub",
      image: "./assets/images/movie/weathering-with-you-thumb.jpg",
      alt: "Weathering with You",
      episode: "Full",
      nameVi: "Thời Tiết Của Em",
      nameEn: "Weathering with You",
    },
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/kimi-no-na-wa-thumb.jpg",
      alt: "Your Name",
      episode: "Full",
      nameVi: "Tên Cậu Là Gì?",
      nameEn: "Your Name",
    },
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/7-deadly-sins-thumb.jpg",
      alt: "Seven Deadly Sins",
      episode: "Tập 100",
      nameVi: "Bảy Tội Ác Chết Người",
      nameEn: "Seven Deadly Sins",
    },
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/doraemon-thumb.jpg",
      alt: "Doraemon",
      episode: "Tập 1200",
      nameVi: "Doraemon",
      nameEn: "Doraemon",
    },
    {
      tag: "HD+Vietsub",
      image: "./assets/images/movie/inside-out-thumb.jpg",
      alt: "Những Cảm Xúc Tội Tình",
      episode: "Full",
      nameVi: "Những Cảm Xúc Tội Tình",
      nameEn: "Inside Out",
    },
    {
      tag: "4K+Vietsub",
      image: "./assets/images/movie/finding-dory-thumb.jpg",
      alt: "Tìm Dory",
      episode: "Full",
      nameVi: "Tìm Dory",
      nameEn: "Finding Dory",
    },
  ];

  let htmlContent = '<div class="list-single row">';

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
