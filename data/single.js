function addMovieItemSingle() {
  const movies = [
    {
      tag: "4K+Vietsub",
      imgSrc: "./assets/images/movie/avenger-endgame-thumb.jpg",
      alt: "Avenger: Hồi Kết",
      nameVi: "Avenger: Hồi Kết",
      episode: "Full",
      nameEn: "Avenger: Endgame",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/inception-thumb.jpg",
      alt: "Kẻ Đánh Cắp Giấc Mơ",
      nameVi: "Kẻ Đánh Cắp Giấc Mơ",
      episode: "Full",
      nameEn: "Inception",
    },
    {
      tag: "4K+Vietsub",
      imgSrc: "./assets/images/movie/avatar-thumb.jpg",
      alt: "Avatar",
      nameVi: "Avatar",
      episode: "Full",
      nameEn: "Avatar",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/john-wick-thumb.jpg",
      alt: "John Wick",
      nameVi: "John Wick",
      episode: "Full",
      nameEn: "John Wick",
    },
    {
      tag: "4K+Vietsub",
      imgSrc: "./assets/images/movie/titanic-thumb.jpg",
      alt: "Titanic",
      nameVi: "Titanic",
      episode: "Full",
      nameEn: "Titanic",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/the-dark-knight-thumb.jpg",
      alt: "Kỵ Sĩ Bóng Đêm",
      nameVi: "Kỵ Sĩ Bóng Đêm",
      episode: "Full",
      nameEn: "The Dark Knight",
    },
    {
      tag: "4K+Vietsub",
      imgSrc: "./assets/images/movie/forrest-gump-thumb.jpg",
      alt: "Forrest Gump",
      nameVi: "Forrest Gump",
      episode: "Full",
      nameEn: "Forrest Gump",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/gladiator-thumb.jpg",
      alt: "Gladiator",
      nameVi: "Gladiator",
      episode: "Full",
      nameEn: "Gladiator",
    },
    {
      tag: "4K+Vietsub",
      imgSrc: "./assets/images/movie/interstellar-thumb.jpg",
      alt: "Hố Đen Tử Thần",
      nameVi: "Hố Đen Tử Thần",
      episode: "Full",
      nameEn: "Interstellar",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/lion-king-thumb.jpg",
      alt: "Vua Sư Tử",
      nameVi: "Vua Sư Tử",
      episode: "Full",
      nameEn: "The Lion King",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/spider-man-thumb.jpg",
      alt: "Spider-Man: No Way Home",
      nameVi: "Người Nhện: Không Còn Nhà",
      episode: "Full",
      nameEn: "Spider-Man: No Way Home",
    },
    {
      tag: "4K+Vietsub",
      imgSrc: "./assets/images/movie/matrix-thumb.jpg",
      alt: "Ma Trận",
      nameVi: "Ma Trận",
      episode: "Full",
      nameEn: "The Matrix",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/pirates-thumb.jpg",
      alt: "Cướp Biển Vùng Caribbean",
      nameVi: "Cướp Biển Vùng Caribbean",
      episode: "Full",
      nameEn: "Pirates of the Caribbean",
    },
    {
      tag: "4K+Vietsub",
      imgSrc: "./assets/images/movie/frozen-thumb.jpg",
      alt: "Nữ Hoàng Băng Giá",
      nameVi: "Nữ Hoàng Băng Giá",
      episode: "Full",
      nameEn: "Frozen",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/jurassic-world-thumb.jpg",
      alt: "Thế Giới Khủng Long",
      nameVi: "Thế Giới Khủng Long",
      episode: "Full",
      nameEn: "Jurassic World",
    },
    {
      tag: "4K+Vietsub",
      imgSrc: "./assets/images/movie/shrek-thumb.jpg",
      alt: "Shrek",
      nameVi: "Shrek",
      episode: "Full",
      nameEn: "Shrek",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/up-thumb.jpg",
      alt: "Vút Bay",
      nameVi: "Vút Bay",
      episode: "Full",
      nameEn: "Up",
    },
    {
      tag: "4K+Vietsub",
      imgSrc: "./assets/images/movie/harry-potter-thumb.jpg",
      alt: "Harry Potter và Hòn Đá Phù Thủy",
      nameVi: "Harry Potter và Hòn Đá Phù Thủy",
      episode: "Full",
      nameEn: "Harry Potter and the Sorcerer's Stone",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/star-wars-thumb.jpg",
      alt: "Chiến Tranh Giữa Các Vì Sao",
      nameVi: "Chiến Tranh Giữa Các Vì Sao",
      episode: "Full",
      nameEn: "Star Wars",
    },
    {
      tag: "4K+Vietsub",
      imgSrc: "./assets/images/movie/toy-story-thumb.jpg",
      alt: "Câu Chuyện Đồ Chơi",
      nameVi: "Câu Chuyện Đồ Chơi",
      episode: "Full",
      nameEn: "Toy Story",
    },
    {
      tag: "4K+Vietsub",
      imgSrc: "./assets/images/movie/joker-thumb.jpg",
      alt: "Joker",
      nameVi: "Joker",
      episode: "Full",
      nameEn: "Joker",
    },
    {
      tag: "4K+Vietsub",
      imgSrc: "./assets/images/movie/parasite-thumb.jpg",
      alt: "Ký Sinh Trùng",
      nameVi: "Ký Sinh Trùng",
      episode: "Full",
      nameEn: "Parasite",
    },
    {
      tag: "4K+Vietsub",
      imgSrc: "./assets/images/movie/the-godfather-thumb.jpg",
      alt: "Bố Già",
      nameVi: "Bố Già",
      episode: "Full",
      nameEn: "The Godfather",
    },
  ];

  let htmlContent = '<div class="list-single row">';

  movies.forEach((movie) => {
    htmlContent += `
        <div class="movie-item col-md-3 col-4 p-0">
            <span class="movie-tag">${movie.tag}</span>
            <div class="movie-image">
                <img src="${movie.imgSrc}"
                    alt="${movie.alt}">
            </div>
            <div class="movie-info">
                <span class="movie-episode">${movie.episode}</span>
            </div>
            <div class="movie-name">
                <h4 class="name-vi">${movie.nameVi}</h4>
                <p c      episode: "Full",lass="name-en">${movie.nameEn}</p>
            </div>
        </div>
`;
  });

  htmlContent += "</div>";
  document.write(htmlContent);
}
