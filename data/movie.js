const movies = [
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/khi-dien-thoai-do-chuong-thumb.jpg",
    alt: "Khi Điện Thoại Đổ Chuông",
    episode: "Tập 1",
    nameVi: "Khi Điện Thoại Đổ Chuông",
    nameEn: "When the Phone Rings",
    year: 2021,
    rating: 8.2,
    description: "Một câu chuyện tình yêu đầy cảm xúc và tình huống hài hước.",
    types: ["series", "hot"],
    views: 450000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/toi-gui-tinh-yeu-vao-gio-thumb.jpg",
    alt: "Tôi Gửi Tình Yêu Vào Gió",
    episode: "Tập 12",
    nameVi: "Tôi Gửi Tình Yêu Vào Gió",
    nameEn: "Chasing the Wind",
    year: 2020,
    rating: 9.0,
    description: "Một hành trình tìm kiếm tình yêu và ước mơ.",
    types: ["series", "hot"],
    views: 600000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/anh-hung-quang-dong-thap-ho-thumb.jpg",
    alt: "Anh Hùng Quảng Đông Thập Hổ",
    episode: "Tập 10",
    nameVi: "Anh Hùng Quảng Đông Thập Hổ",
    nameEn: "Ten Tigers Of Guangdong",
    year: 2019,
    rating: 8.5,
    description: "Câu chuyện về những anh hùng trong lịch sử Quảng Đông.",
    types: ["series"],
    views: 500000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/da-vi-uong-thumb.jpg",
    alt: "Dạ Vị Ương",
    episode: "Tập 9",
    nameVi: "Dạ Vị Ương",
    nameEn: "The Night is Still Young",
    year: 2021,
    rating: 8.7,
    description: "Một câu chuyện tình yêu đầy lãng mạn và bí ẩn.",
    types: ["series"],
    views: 550000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/khach-san-anh-trang.jpg",
    alt: "Khách Sạn Ánh Trăng",
    episode: "Tập 9",
    nameVi: "Khách Sạn Ánh Trăng",
    nameEn: "Hotel Del Luna",
    year: 2019,
    rating: 9.1,
    description: "Câu chuyện về một khách sạn dành cho linh hồn.",
    types: ["series"],
    views: 700000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/goblin-thumb.jpg",
    alt: "Goblin",
    episode: "Tập 16",
    nameVi: "Yêu Tinh",
    nameEn: "Goblin",
    year: 2016,
    rating: 9.3,
    description: "Câu chuyện về một yêu tinh và tình yêu của anh.",
    types: ["series"],
    views: 800000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/crash-landing-on-you-thumb.jpg",
    alt: "Hạ Cánh Nơi Anh",
    episode: "Tập 16",
    nameVi: "Hạ Cánh Nơi Anh",
    nameEn: "Crash Landing on You",
    year: 2019,
    rating: 9.4,
    description:
      "Một nữ doanh nhân Hàn Quốc rơi vào vùng lãnh thổ Bắc Triều Tiên và tình yêu nảy nở.",
    types: ["series"],
    views: 950000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/descendants-of-the-sun-thumb.jpg",
    alt: "Hậu Duệ Mặt Trời",
    episode: "Tập 16",
    nameVi: "Hậu Duệ Mặt Trời",
    nameEn: "Descendants of the Sun",
    year: 2016,
    rating: 9.2,
    description: "Câu chuyện tình yêu giữa một bác sĩ và một quân nhân.",
    types: ["series", "hot"],
    views: 900000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/the-heirs-thumb.jpg",
    alt: "Những Người Thừa Kế",
    episode: "Tập 20",
    nameVi: "Những Người Thừa Kế",
    nameEn: "The Heirs",
    year: 2013,
    rating: 8.6,
    description: "Câu chuyện về tình yêu và sự tranh giành quyền lực.",
    types: ["series"],
    views: 800000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/signal-thumb.jpg",
    alt: "Tín Hiệu",
    episode: "Tập 16",
    nameVi: "Tín Hiệu",
    nameEn: "Signal",
    year: 2016,
    rating: 9.0,
    description: "Một cuộc điều tra hình sự vượt thời gian.",
    types: ["series"],
    views: 750000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/itaewon-class-thumb.jpg",
    alt: "Tầng Lớp Itaewon",
    episode: "Tập 16",
    nameVi: "Tầng Lớp Itaewon",
    nameEn: "Itaewon Class",
    year: 2020,
    rating: 9.1,
    description: "Câu chuyện về sự kiên trì và ước mơ mở một quán bar.",
    types: ["series", "hot"],
    views: 850000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/strong-woman-do-bong-soon-thumb.jpg",
    alt: "Cô Nàng Mạnh Mẽ Do Bong Soon",
    episode: "Tập 16",
    nameVi: "Cô Nàng Mạnh Mẽ Do Bong Soon",
    nameEn: "Strong Woman Do Bong Soon",
    year: 2017,
    rating: 8.8,
    description: "Câu chuyện về một cô gái mạnh mẽ và tình yêu của cô.",
    types: ["series"],
    views: 600000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/mr-queen-thumb.jpg",
    alt: "Chàng Hậu",
    episode: "Tập 20",
    nameVi: "Chàng Hậu",
    nameEn: "Mr. Queen",
    year: 2020,
    rating: 9.0,
    description: "Câu chuyện hài hước giữa một chàng trai và một nữ hoàng.",
    types: ["series"],
    views: 700000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/vincenzo-thumb.jpg",
    alt: "Vincenzo",
    episode: "Tập 20",
    nameVi: "Vincenzo",
    nameEn: "Vincenzo",
    year: 2021,
    rating: 8.5,
    description:
      "Câu chuyện về một luật sư mafia và cuộc chiến chống lại tội phạm.",
    types: ["series"],
    views: 750000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/penthouse-thumb.jpg",
    alt: "Cuộc Chiến Thượng Lưu",
    episode: "Tập 21",
    nameVi: "Cuộc Chiến Thượng Lưu",
    nameEn: "Penthouse",
    year: 2020,
    rating: 8.9,
    description: "Câu chuyện về những âm mưu và bí mật trong giới thượng lưu.",
    types: ["series", "hot"],
    views: 800000,
  },
  {
    tag: "4K+Vietsub",
    imgSrc: "./assets/images/movie/avenger-endgame-thumb.jpg",
    alt: "Avenger: Hồi Kết",
    nameVi: "Avenger: Hồi Kết",
    episode: "Full",
    nameEn: "Avenger: Endgame",
    year: 2019,
    rating: 8.4,
    description: "Phần kết của cuộc chiến chống lại Thanos.",
    types: ["single"],
    views: 2500000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/inception-thumb.jpg",
    alt: "Kẻ Đánh Cắp Giấc Mơ",
    nameVi: "Kẻ Đánh Cắp Giấc Mơ",
    episode: "Full",
    nameEn: "Inception",
    year: 2010,
    rating: 8.8,
    description: "Một người đánh cắp ý tưởng từ giấc mơ của người khác.",
    types: ["single"],
    views: 1700000,
  },
  {
    tag: "4K+Vietsub",
    imgSrc: "./assets/images/movie/avatar-thumb.jpg",
    alt: "Avatar",
    nameVi: "Avatar",
    episode: "Full",
    nameEn: "Avatar",
    year: 2009,
    rating: 7.8,
    description: "Câu chuyện về cuộc chiến giữa người và người Na'vi.",
    types: ["single"],
    views: 2000000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/john-wick-thumb.jpg",
    alt: "John Wick",
    nameVi: "John Wick",
    episode: "Full",
    nameEn: "John Wick",
    year: 2014,
    rating: 7.4,
    description: "Một sát thủ trở lại để trả thù cho chó của mình.",
    types: ["single"],
    views: 1800000,
  },
  {
    tag: "4K+Vietsub",
    imgSrc: "./assets/images/movie/titanic-thumb.jpg",
    alt: "Titanic",
    nameVi: "Titanic",
    episode: "Full",
    nameEn: "Titanic",
    year: 1997,
    rating: 7.8,
    description: "Câu chuyện tình yêu giữa Jack và Rose trên tàu Titanic.",
    types: ["single"],
    views: 2100000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/the-dark-knight-thumb.jpg",
    alt: "Kỵ Sĩ Bóng Đêm",
    nameVi: "Kỵ Sĩ Bóng Đêm",
    episode: "Full",
    nameEn: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    description: "Cuộc chiến giữa Batman và Joker trong Gotham.",
    types: ["single", "hot"],
    views: 2300000,
  },
  {
    tag: "4K+Vietsub",
    imgSrc: "./assets/images/movie/forrest-gump-thumb.jpg",
    alt: "Forrest Gump",
    nameVi: "Forrest Gump",
    episode: "Full",
    nameEn: "Forrest Gump",
    year: 1994,
    rating: 8.8,
    description: "Cuộc sống phi thường của một người đàn ông đặc biệt.",
    types: ["single", "hot"],
    views: 1500000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/gladiator-thumb.jpg",
    alt: "Gladiator",
    nameVi: "Gladiator",
    episode: "Full",
    nameEn: "Gladiator",
    year: 2000,
    rating: 8.5,
    description: "Một người lính trở thành gladiator để trả thù.",
    types: ["single"],
    views: 1600000,
  },
  {
    tag: "4K+Vietsub",
    imgSrc: "./assets/images/movie/interstellar-thumb.jpg",
    alt: "Hố Đen Tử Thần",
    nameVi: "Hố Đen Tử Thần",
    episode: "Full",
    nameEn: "Interstellar",
    year: 2014,
    rating: 8.6,
    description:
      "Cuộc hành trình qua không gian và thời gian để cứu nhân loại.",
    types: ["single"],
    views: 1900000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/lion-king-thumb.jpg",
    alt: "Vua Sư Tử",
    nameVi: "Vua Sư Tử",
    episode: "Full",
    nameEn: "The Lion King",
    year: 1994,
    rating: 8.5,
    description:
      "Câu chuyện về Simba, một chú sư tử trẻ và hành trình trở thành vua.",
    types: ["cartoon"],
    views: 1700000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/spider-man-thumb.jpg",
    alt: "Người Nhện: Không Còn Nhà",
    nameVi: "Người Nhện: Không Còn Nhà",
    episode: "Full",
    nameEn: "Spider-Man: No Way Home",
    year: 2021,
    rating: 8.7,
    description: "Peter Parker đối mặt với những kẻ thù từ các vũ trụ khác.",
    types: ["single"],
    views: 2400000,
  },
  {
    tag: "4K+Vietsub",
    imgSrc: "./assets/images/movie/matrix-thumb.jpg",
    alt: "Ma Trận",
    nameVi: "Ma Trận",
    episode: "Full",
    nameEn: "The Matrix",
    year: 1999,
    rating: 8.7,
    description: "Một hacker phát hiện ra sự thật về thế giới mình đang sống.",
    types: ["single"],
    views: 2200000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/pirates-thumb.jpg",
    alt: "Cướp Biển Vùng Caribbean",
    nameVi: "Cướp Biển Vùng Caribbean",
    episode: "Full",
    nameEn: "Pirates of the Caribbean",
    year: 2003,
    rating: 7.8,
    description: "Cuộc phiêu lưu của Jack Sparrow và đội cướp biển.",
    types: ["single"],
    views: 1900000,
  },
  {
    tag: "4K+Vietsub",
    imgSrc: "./assets/images/movie/frozen-thumb.jpg",
    alt: "Nữ Hoàng Băng Giá",
    nameVi: "Nữ Hoàng Băng Giá",
    episode: "Full",
    nameEn: "Frozen",
    year: 2013,
    rating: 7.5,
    description: "Câu chuyện về tình chị em và sức mạnh của tình yêu.",
    types: ["cartoon"],
    views: 2100000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/jurassic-world-thumb.jpg",
    alt: "Thế Giới Khủng Long",
    nameVi: "Thế Giới Khủng Long",
    episode: "Full",
    nameEn: "Jurassic World",
    year: 2015,
    rating: 7.0,
    description: "Cuộc phiêu lưu trong công viên khủng long.",
    types: ["single"],
    views: 2000000,
  },
  {
    tag: "4K+Vietsub",
    imgSrc: "./assets/images/movie/shrek-thumb.jpg",
    alt: "Shrek",
    nameVi: "Shrek",
    episode: "Full",
    nameEn: "Shrek",
    year: 2001,
    rating: 7.9,
    description: "Cuộc phiêu lưu hài hước của một ogre và chú ngựa của mình.",
    types: ["cartoon"],
    views: 1800000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/up-thumb.jpg",
    alt: "Vút Bay",
    nameVi: "Vút Bay",
    episode: "Full",
    nameEn: "Up",
    year: 2009,
    rating: 8.2,
    description: "Câu chuyện về tình bạn và hành trình khám phá.",
    types: ["cartoon"],
    views: 1600000,
  },
  {
    tag: "4K+Vietsub",
    imgSrc: "./assets/images/movie/harry-potter-thumb.jpg",
    alt: "Harry Potter và Hòn Đá Phù Thủy",
    nameVi: "Harry Potter và Hòn Đá Phù Thủy",
    episode: "Full",
    nameEn: "Harry Potter and the Sorcerer's Stone",
    year: 2001,
    rating: 7.9,
    description: "Cuộc phiêu lưu đầu tiên của Harry tại Hogwarts.",
    types: ["cartoon"],
    views: 2200000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/star-wars-thumb.jpg",
    alt: "Chiến Tranh Giữa Các Vì Sao",
    nameVi: "Chiến Tranh Giữa Các Vì Sao",
    episode: "Full",
    nameEn: "Star Wars",
    year: 1977,
    rating: 8.6,
    description: "Cuộc chiến giữa các Jedi và Sith trong vũ trụ.",
    types: ["single"],
    views: 2500000,
  },
  {
    tag: "4K+Vietsub",
    imgSrc: "./assets/images/movie/toy-story-thumb.jpg",
    alt: "Câu Chuyện Đồ Chơi",
    nameVi: "Câu Chuyện Đồ Chơi",
    episode: "Full",
    nameEn: "Toy Story",
    year: 1995,
    rating: 8.3,
    description: "Câu chuyện về tình bạn giữa những món đồ chơi.",
    types: ["cartoon"],
    views: 2300000,
  },
  {
    tag: "4K+Vietsub",
    imgSrc: "./assets/images/movie/joker-thumb.jpg",
    alt: "Joker",
    nameVi: "Joker",
    episode: "Full",
    nameEn: "Joker",
    year: 2019,
    rating: 8.4,
    description: "Câu chuyện về sự hình thành của kẻ thù lớn nhất của Batman.",
    types: ["single"],
    views: 2400000,
  },
  {
    tag: "4K+Vietsub",
    imgSrc: "./assets/images/movie/parasite-thumb.jpg",
    alt: "Ký Sinh Trùng",
    nameVi: "Ký Sinh Trùng",
    episode: "Full",
    nameEn: "Parasite",
    year: 2019,
    rating: 8.6,
    description: "Câu chuyện về sự phân chia giai cấp và các mối quan hệ.",
    types: ["single"],
    views: 2000000,
  },
  {
    tag: "4K+Vietsub",
    imgSrc: "./assets/images/movie/the-godfather-thumb.jpg",
    alt: "Bố Già",
    nameVi: "Bố Già",
    episode: "Full",
    nameEn: "The Godfather",
    year: 1972,
    rating: 9.2,
    description: "Câu chuyện về gia đình mafia Corleone.",
    types: ["single", "hot"],
    views: 3000000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/frozen-thumb.jpg",
    alt: "Nữ Hoàng Băng Giá",
    episode: "Full",
    nameVi: "Nữ Hoàng Băng Giá",
    nameEn: "Frozen",
    year: 2013,
    rating: 7.5,
    description: "Câu chuyện về tình chị em và sức mạnh của tình yêu.",
    types: ["cartoon"],
    views: 2000000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/up-thumb.jpg",
    alt: "Vút Bay",
    episode: "Full",
    nameVi: "Vút Bay",
    nameEn: "Up",
    year: 2009,
    rating: 8.2,
    description: "Cuộc phiêu lưu của một ông lão và cậu bé.",
    types: ["cartoon"],
    views: 1800000,
  },
  {
    tag: "4K+Vietsub",
    imgSrc: "./assets/images/movie/toy-story-thumb.jpg",
    alt: "Câu Chuyện Đồ Chơi",
    episode: "Full",
    nameVi: "Câu Chuyện Đồ Chơi",
    nameEn: "Toy Story",
    year: 1995,
    rating: 8.3,
    description: "Cuộc sống của những món đồ chơi khi không có người.",
    types: ["cartoon"],
    views: 2200000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/tham-tu-lung-danh-conan-thumb.jpg",
    alt: "Thám Tử Lừng Danh Conan",
    episode: "Tập 1050",
    nameVi: "Thám Tử Lừng Danh Conan",
    nameEn: "Detective Conan",
    year: 1996,
    rating: 8.5,
    description: "Cuộc phiêu lưu của thám tử trẻ Conan.",
    types: ["series", "cartoon"],
    views: 4500000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/one-piece-thumb.jpg",
    alt: "One Piece",
    episode: "Tập 1000",
    nameVi: "One Piece",
    nameEn: "One Piece",
    year: 1999,
    rating: 8.6,
    description: "Cuộc phiêu lưu của Luffy và các đồng đội.",
    types: ["series", "cartoon"],
    views: 5000000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/naruto-thumb.jpg",
    alt: "Naruto",
    episode: "Tập 220",
    nameVi: "Naruto",
    nameEn: "Naruto",
    year: 2002,
    rating: 8.3,
    description: "Câu chuyện về một ninja trẻ với ước mơ trở thành Hokage.",
    types: ["series", "cartoon"],
    views: 4800000,
  },
  {
    tag: "4K+Vietsub",
    imgSrc: "./assets/images/movie/your-name-thumb.jpg",
    alt: "Your Name",
    episode: "Full",
    nameVi: "Tên Cậu Là Gì?",
    nameEn: "Your Name",
    year: 2016,
    rating: 8.9,
    description:
      "Câu chuyện tình yêu giữa hai người trẻ từ hai thế giới khác nhau.",
    types: ["cartoon", "hot"],
    views: 2300000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/spirit-away-thumb.jpg",
    alt: "Spirited Away",
    episode: "Full",
    nameVi: "Vùng Đất Linh Hồn",
    nameEn: "Spirited Away",
    year: 2001,
    rating: 8.6,
    description: "Câu chuyện về một cô bé lạc vào thế giới linh hồn.",
    types: ["cartoon"],
    views: 2400000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/attack-on-titan-thumb.jpg",
    alt: "Attack on Titan",
    episode: "Tập 40",
    nameVi: "Cuộc Tấn Công Của Titan",
    nameEn: "Attack on Titan",
    year: 2013,
    rating: 9.0,
    description: "Cuộc chiến giữa nhân loại và những con titan khổng lồ.",
    types: ["series", "cartoon"],
    views: 6000000,
  },
  {
    tag: "4K+Vietsub",
    imgSrc: "./assets/images/movie/demon-slayer-thumb.jpg",
    alt: "Demon Slayer",
    episode: "Full",
    nameVi: "Thanh Gươm Diệt Quái Vật",
    nameEn: "Demon Slayer",
    year: 2019,
    rating: 8.6,
    description: "Cuộc hành trình của Tanjiro để cứu em gái và trả thù.",
    types: ["series", "cartoon"],
    views: 5000000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/dragon-ball-thumb.jpg",
    alt: "Dragon Ball",
    episode: "Tập 150",
    nameVi: "Dragon Ball",
    nameEn: "Dragon Ball",
    year: 1986,
    rating: 8.6,
    description:
      "Cuộc phiêu lưu của Goku và những người bạn trong hành trình tìm kiếm ngọc rồng.",
    types: ["series", "cartoon"],
    views: 4700000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/bleach-thumb.jpg",
    alt: "Bleach",
    episode: "Tập 100",
    nameVi: "Bleach",
    nameEn: "Bleach",
    year: 2004,
    rating: 8.3,
    description: "Câu chuyện về Ichigo Kurosaki, một thám tử linh hồn.",
    types: ["series", "cartoon"],
    views: 4600000,
  },
  {
    tag: "4K+Vietsub",
    imgSrc: "./assets/images/movie/weathering-with-you-thumb.jpg",
    alt: "Weathering with You",
    episode: "Full",
    nameVi: "Thời Tiết Của Em",
    nameEn: "Weathering with You",
    year: 2019,
    rating: 7.9,
    description:
      "Câu chuyện tình yêu giữa một cậu bé và cô gái có khả năng điều khiển thời tiết.",
    types: ["cartoon"],
    views: 2100000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/7-deadly-sins-thumb.jpg",
    alt: "Seven Deadly Sins",
    episode: "Tập 100",
    nameVi: "Bảy Tội Ác Chết Người",
    nameEn: "Seven Deadly Sins",
    year: 2014,
    rating: 8.2,
    description: "Cuộc phiêu lưu của nhóm hiệp sĩ chống lại những thế lực xấu.",
    types: ["series", "cartoon"],
    views: 4200000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/doraemon-thumb.jpg",
    alt: "Doraemon",
    episode: "Tập 1200",
    nameVi: "Doraemon",
    nameEn: "Doraemon",
    year: 1979,
    rating: 8.5,
    description: "Cuộc phiêu lưu của chú mèo máy đến từ tương lai.",
    types: ["series", "cartoon", "hot"],
    views: 5000000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/inside-out-thumb.jpg",
    alt: "Những Cảm Xúc Tội Tình",
    episode: "Full",
    nameVi: "Những Cảm Xúc Tội Tình",
    nameEn: "Inside Out",
    year: 2015,
    rating: 8.1,
    description: "Câu chuyện về những cảm xúc của một cô bé.",
    types: ["cartoon"],
    views: 2200000,
  },
  {
    tag: "4K+Vietsub",
    imgSrc: "./assets/images/movie/finding-dory-thumb.jpg",
    alt: "Tìm Dory",
    episode: "Full",
    nameVi: "Tìm Dory",
    nameEn: "Finding Dory",
    year: 2016,
    rating: 7.3,
    description: "Cuộc tìm kiếm Dory của bạn bè.",
    types: ["cartoon"],
    views: 2300000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/rap-viet-thumb.jpg",
    alt: "Rap Việt",
    nameVi: "Rap Việt",
    nameEn: "Rap Việt",
    episode: "Mùa 3",
    year: 2022,
    rating: 8.5,
    description: "Chương trình tìm kiếm tài năng rap tại Việt Nam.",
    types: ["tv-show"],
    views: 1200000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/the-voice-vn-thumb.jpg",
    alt: "The Voice Việt Nam",
    nameVi: "The Voice Việt Nam",
    nameEn: "The Voice Vietnam",
    episode: "Mùa 6",
    year: 2022,
    rating: 8.0,
    description: "Chương trình ca nhạc tìm kiếm giọng hát xuất sắc.",
    types: ["tv-show"],
    views: 1500000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/vietnam-next-top-model-thumb.jpg",
    alt: "Vietnam’s Next Top Model",
    nameVi: "Vietnam’s Next Top Model",
    nameEn: "Vietnam’s Next Top Model",
    episode: "Mùa 9",
    year: 2022,
    rating: 7.5,
    description: "Chương trình tìm kiếm người mẫu tại Việt Nam.",
    types: ["tv-show"],
    views: 800000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/so-you-think-you-can-dance-vn-thumb.jpg",
    alt: "So You Think You Can Dance Việt Nam",
    nameVi: "So You Think You Can Dance Việt Nam",
    nameEn: "So You Think You Can Dance Vietnam",
    episode: "Mùa 5",
    year: 2021,
    rating: 8.1,
    description: "Chương trình tìm kiếm vũ công tài năng.",
    types: ["tv-show"],
    views: 900000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/ai-la-trieu-phu-vn-thumb.jpg",
    alt: "Ai Là Triệu Phú",
    nameVi: "Ai Là Triệu Phú",
    nameEn: "Who Wants to Be a Millionaire",
    episode: "Tập 18",
    year: 2020,
    rating: 8.4,
    description: "Chương trình truyền hình thực tế về kiến thức.",
    types: ["tv-show"],
    views: 1000000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/the-masked-singer-vn-thumb.jpg",
    alt: "The Masked Singer Việt Nam",
    nameVi: "The Masked Singer Việt Nam",
    nameEn: "The Masked Singer Vietnam",
    episode: "Mùa 2",
    year: 2022,
    rating: 8.7,
    description: "Chương trình ca nhạc bí ẩn với những người nổi tiếng.",
    types: ["tv-show"],
    views: 1300000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/got-talent-vn-thumb.jpg",
    alt: "Got Talent Việt Nam",
    nameVi: "Got Talent Việt Nam",
    nameEn: "Got Talent Vietnam",
    episode: "Mùa 3",
    year: 2021,
    rating: 8.2,
    description: "Chương trình tìm kiếm tài năng đa dạng.",
    types: ["tv-show"],
    views: 1100000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/masterchef-vn-thumb.jpg",
    alt: "MasterChef Việt Nam",
    nameVi: "MasterChef Việt Nam",
    nameEn: "MasterChef Vietnam",
    episode: "Mùa 4",
    year: 2022,
    rating: 8.3,
    description: "Chương trình tìm kiếm đầu bếp tài năng.",
    types: ["tv-show"],
    views: 950000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/the-voice-kids-vn-thumb.jpg",
    alt: "The Voice Kids Việt Nam",
    nameVi: "The Voice Kids Việt Nam",
    nameEn: "The Voice Kids Vietnam",
    episode: "Mùa 7",
    year: 2022,
    rating: 8.0,
    description: "Chương trình tìm kiếm tài năng ca hát cho trẻ em.",
    types: ["tv-show"],
    views: 1450000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/big-brother-vn-thumb.jpg",
    alt: "Big Brother Vietnam",
    nameVi: "Big Brother Vietnam",
    nameEn: "Big Brother Vietnam",
    episode: "Mùa 2",
    year: 2021,
    rating: 7.8,
    description: "Chương trình thực tế về cuộc sống trong nhà chung.",
    types: ["tv-show"],
    views: 700000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/game-of-thrones-thumb.jpg",
    alt: "Game of Thrones",
    nameVi: "Game of Thrones",
    nameEn: "Game of Thrones",
    episode: "Season 8",
    year: 2019,
    rating: 9.3,
    description: "Cuộc chiến giữa các gia tộc để giành quyền lực.",
    types: ["tv-show"],
    views: 3000000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/stranger-things-thumb.jpg",
    alt: "Stranger Things",
    nameVi: "Stranger Things",
    nameEn: "Stranger Things",
    episode: "Season 4",
    year: 2022,
    rating: 8.7,
    description: "Những điều kỳ bí xảy ra tại một thị trấn nhỏ.",
    types: ["tv-show"],
    views: 2500000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/the-office-us-thumb.jpg",
    alt: "The Office (US)",
    nameVi: "The Office (US)",
    nameEn: "The Office (US)",
    episode: "Season 9",
    year: 2013,
    rating: 8.8,
    description: "Câu chuyện hài hước về cuộc sống văn phòng.",
    types: ["tv-show"],
    views: 2000000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/the-simpsons-thumb.jpg",
    alt: "The Simpsons",
    nameVi: "The Simpsons",
    nameEn: "The Simpsons",
    episode: "Season 34",
    year: 2023,
    rating: 8.5,
    description: "Chương trình hoạt hình hài hước về gia đình Simpson.",
    types: ["tv-show"],
    views: 1800000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/breaking-bad-thumb.jpg",
    alt: "Breaking Bad",
    nameVi: "Breaking Bad",
    nameEn: "Breaking Bad",
    episode: "Season 5",
    year: 2013,
    rating: 9.5,
    description: "Cuộc sống của một giáo viên hóa học trở thành trùm ma túy.",
    types: ["tv-show"],
    views: 3200000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/the-crown-thumb.jpg",
    alt: "The Crown",
    nameVi: "The Crown",
    nameEn: "The Crown",
    episode: "Season 5",
    year: 2022,
    rating: 8.7,
    description: "Câu chuyện về cuộc đời của Nữ hoàng Elizabeth II.",
    types: ["tv-show"],
    views: 2100000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/black-mirror-thumb.jpg",
    alt: "Black Mirror",
    nameVi: "Black Mirror",
    nameEn: "Black Mirror",
    episode: "Season 6",
    year: 2023,
    rating: 8.8,
    description: "Những câu chuyện độc lập về công nghệ và xã hội.",
    types: ["tv-show"],
    views: 2200000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/money-heist-thumb.jpg",
    alt: "Money Heist",
    nameVi: "Money Heist",
    nameEn: "Money Heist",
    episode: "Season 5",
    year: 2021,
    rating: 8.3,
    description: "Một nhóm tội phạm thực hiện một vụ cướp lớn.",
    types: ["tv-show"],
    views: 2300000,
  },
  {
    tag: "HD+Vietsub",
    imgSrc: "./assets/images/movie/the-walking-dead-thumb.jpg",
    alt: "The Walking Dead",
    nameVi: "The Walking Dead",
    nameEn: "The Walking Dead",
    episode: "Season 11",
    year: 2022,
    rating: 8.5,
    description: "Cuộc chiến sinh tồn trong thế giới zombie.",
    types: ["tv-show"],
    views: 2400000,
  },
];

function addMovieItemHot() {
  let htmlContent = '<div class="movie-list">';

  const sortedMovies = movies
    .filter((movie) => movie.types.includes("hot"))
    .sort((a, b) => b.views - a.views);

  movies.forEach((movie) => {
    htmlContent += `
      <a href="./movie-detail.html" class="movie-item">
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
      </a>
    `;
  });

  htmlContent += "</div>";

  document.write(htmlContent);
}

function add16MovieItems(type) {
  let htmlContent = `<div class="list-${type} row">`;

  const sortedMovies = movies
    .filter((movie) => movie.types.includes(type))
    .sort((a, b) => b.views - a.views)
    .slice(0, 16);

  sortedMovies.forEach((movie) => {
    htmlContent += `
    <a href="./movie-detail.html" class="movie-item col-md-3 col-4 p-0">
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
    </a>
  `;
  });

  htmlContent += `</div>`;
  document.write(htmlContent);
}

function addAllMovieItems(type) {
  let htmlContent = `<div class="list-${type} row">`;

  const sortedMovies = movies
    .filter((movie) => movie.types.includes(type))
    .sort((a, b) => b.views - a.views);

  sortedMovies.forEach((movie) => {
    htmlContent += `
    <a href="./movie-detail.html" class="movie-item col-md-3 col-4 p-0">
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
    </a>
  `;
  });

  htmlContent += `</div>`;
  document.write(htmlContent);
}

// show 16 movie items
function addMovieItemSeries() {
  add16MovieItems("series");
}

function addMovieItemSingle() {
  add16MovieItems("single");
}

function addMovieItemCartoon() {
  add16MovieItems("cartoon");
}

function addMovieItemTVShows() {
  add16MovieItems("tv-show");
}
// show all movie items
function addAllMovieItemHot() {
  addAllMovieItems("hot");
}
function addAllMovieItemSeries() {
  addAllMovieItems("series");
}

function addAllMovieItemSingle() {
  addAllMovieItems("single");
}

function addAllMovieItemCartoon() {
  addAllMovieItems("cartoon");
}

function addAllMovieItemTVShows() {
  addAllMovieItems("tv-show");
}

function addTopViews() {
  let htmlContent = '<div class="list-item pb-3">';

  const sortedMovies = movies.sort((a, b) => b.views - a.views).slice(0, 30);

  sortedMovies.forEach((movie) => {
    htmlContent += `
        <a href="./movie-detail.html" class="row item-view">
            <div class="col-3 p-0 left">
                <img src="${movie.imgSrc}" alt="${movie.alt}" class="img-fluid"> <!-- Sửa thành imgSrc -->
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
        </a>`;
  });

  htmlContent += "</div>";

  document.write(htmlContent);
}
