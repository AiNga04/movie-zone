function addMovieItemTVShows() {
  const movies = [
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/rap-viet-thumb.jpg",
      alt: "Rap Việt",
      nameVi: "Rap Việt",
      nameEn: "Rap Việt",
      episode: "Mùa 3",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/the-voice-vn-thumb.jpg",
      alt: "The Voice Việt Nam",
      nameVi: "The Voice Việt Nam",
      nameEn: "The Voice Vietnam",
      episode: "Mùa 6",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/vietnam-next-top-model-thumb.jpg",
      alt: "Vietnam’s Next Top Model",
      nameVi: "Vietnam’s Next Top Model",
      nameEn: "Vietnam’s Next Top Model",
      episode: "Mùa 9",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/so-you-think-you-can-dance-vn-thumb.jpg",
      alt: "So You Think You Can Dance Việt Nam",
      nameVi: "So You Think You Can Dance Việt Nam",
      nameEn: "So You Think You Can Dance Vietnam",
      episode: "Mùa 5",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/ai-la-trieu-phu-vn-thumb.jpg",
      alt: "Ai Là Triệu Phú",
      nameVi: "Ai Là Triệu Phú",
      nameEn: "Who Wants to Be a Millionaire",
      episode: "Tập 18",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/the-masked-singer-vn-thumb.jpg",
      alt: "The Masked Singer Việt Nam",
      nameVi: "The Masked Singer Việt Nam",
      nameEn: "The Masked Singer Vietnam",
      episode: "Mùa 2",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/got-talent-vn-thumb.jpg",
      alt: "Got Talent Việt Nam",
      nameVi: "Got Talent Việt Nam",
      nameEn: "Got Talent Vietnam",
      episode: "Mùa 3",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/masterchef-vn-thumb.jpg",
      alt: "MasterChef Việt Nam",
      nameVi: "MasterChef Việt Nam",
      nameEn: "MasterChef Vietnam",
      episode: "Mùa 4",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/the-voice-kids-vn-thumb.jpg",
      alt: "The Voice Kids Việt Nam",
      nameVi: "The Voice Kids Việt Nam",
      nameEn: "The Voice Kids Vietnam",
      episode: "Mùa 7",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/big-brother-vn-thumb.jpg",
      alt: "Big Brother Vietnam",
      nameVi: "Big Brother Vietnam",
      nameEn: "Big Brother Vietnam",
      episode: "Mùa 2",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/game-of-thrones-thumb.jpg",
      alt: "Game of Thrones",
      nameVi: "Game of Thrones",
      nameEn: "Game of Thrones",
      episode: "Season 8",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/stranger-things-thumb.jpg",
      alt: "Stranger Things",
      nameVi: "Stranger Things",
      nameEn: "Stranger Things",
      episode: "Season 4",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/the-office-us-thumb.jpg",
      alt: "The Office (US)",
      nameVi: "The Office (US)",
      nameEn: "The Office (US)",
      episode: "Season 9",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/the-simpsons-thumb.jpg",
      alt: "The Simpsons",
      nameVi: "The Simpsons",
      nameEn: "The Simpsons",
      episode: "Season 34",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/breaking-bad-thumb.jpg",
      alt: "Breaking Bad",
      nameVi: "Breaking Bad",
      nameEn: "Breaking Bad",
      episode: "Season 5",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/the-crown-thumb.jpg",
      alt: "The Crown",
      nameVi: "The Crown",
      nameEn: "The Crown",
      episode: "Season 5",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/black-mirror-thumb.jpg",
      alt: "Black Mirror",
      nameVi: "Black Mirror",
      nameEn: "Black Mirror",
      episode: "Season 6",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/money-heist-thumb.jpg",
      alt: "Money Heist",
      nameVi: "Money Heist",
      nameEn: "Money Heist",
      episode: "Season 5",
    },
    {
      tag: "HD+Vietsub",
      imgSrc: "./assets/images/movie/the-walking-dead-thumb.jpg",
      alt: "The Walking Dead",
      nameVi: "The Walking Dead",
      nameEn: "The Walking Dead",
      episode: "Season 11",
    },
  ];

  let htmlContent = '<div class="list-tv-shows row">';

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
