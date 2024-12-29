function addTopViews() {
  const topViews = [
    {
      image: "assets/images/movie/parasite-thumb.jpg",
      alt: "Ký Sinh Trùng",
      nameVi: "Ký Sinh Trùng",
      nameEn: "Parasite",
      year: 2019,
    },
    {
      image: "assets/images/movie/inception-thumb.jpg",
      alt: "Kẻ Đánh Cắp Giấc Mơ",
      nameVi: "Kẻ Đánh Cắp Giấc Mơ",
      nameEn: "Inception",
      year: 2010,
    },
    {
      image: "assets/images/movie/avatar-thumb.jpg",
      alt: "Avatar",
      nameVi: "Avatar",
      nameEn: "Avatar",
      year: 2009,
    },
    {
      image: "assets/images/movie/joker-thumb.jpg",
      alt: "Joker",
      nameVi: "Joker",
      nameEn: "Joker",
      year: 2019,
    },
    {
      image: "assets/images/movie/interstellar-thumb.jpg",
      alt: "Hố Đen Vũ Trụ",
      nameVi: "Hố Đen Vũ Trụ",
      nameEn: "Interstellar",
      year: 2014,
    },
    {
      image: "assets/images/movie/the-godfather-thumb.jpg",
      alt: "Bố Già",
      nameVi: "Bố Già",
      nameEn: "The Godfather",
      year: 1972,
    },
    {
      image: "assets/images/movie/avenger-endgame-thumb.jpg",
      alt: "Avengers: Hồi Kết",
      nameVi: "Avengers: Hồi Kết",
      nameEn: "Avengers: Endgame",
      year: 2019,
    },
  ];

  let htmlContent = '<div class="list-item pb-3">';

  topViews.forEach((movie) => {
    htmlContent += `
        <div class="row item-view">
            <div class="col-3 p-0 left">
                <img src="${movie.image}" alt="${movie.alt}" class="img-fluid">
            </div>
            <div class="col-9 right">
                <div class="content">
                    <div class="name">
                        <div class="name-vi">${movie.nameVi}</div>
                        <div class="name-en">${movie.nameEn}</div>
                    </div>
                    <div class="year">${movie.year}</div>
                </div>
            </div>
        </div>`;
  });

  htmlContent += "</div>";

  document.write(htmlContent);
}
