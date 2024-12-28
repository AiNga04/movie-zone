/*========= Carousel =========*/
function addCarousel() {
  document.write(`
                <section class="background container">
            <div id="movieCarousel" class="carousel slide" data-bs-ride="carousel">
                <!-- Carousel Indicators -->
                <ol class="carousel-indicators list-unstyled">
                    <li data-bs-target="#movieCarousel" data-bs-slide-to="0" class="active"></li>
                    <li data-bs-target="#movieCarousel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#movieCarousel" data-bs-slide-to="2"></li>
                </ol>

                <!-- Carousel Slides -->
                <div class="carousel-inner rounded-2">
                    <!-- Slide 1 -->
                    <div class="carousel-item active">
                        <img src="./assets/images/carousel/movie-1.jpg" class="d-block w-100" alt="Avengers: Endgame">
                        <div class="carousel-caption d-none d-md-block">
                            <h2 class="text-white">Avengers: Endgame</h2>
                            <p class="text-light">Trận chiến cuối cùng của các siêu anh hùng để cứu lấy vũ trụ.</p>
                            <a href="#" class="btn btn-primary btn-lg">Xem ngay</a>
                        </div>
                    </div>

                    <!-- Slide 2 -->
                    <div class="carousel-item">
                        <img src="./assets/images/carousel/movie-2.jpg" class="d-block w-100" alt="Interstellar">
                        <div class="carousel-caption d-none d-md-block">
                            <h2 class="text-white">Interstellar</h2>
                            <p class="text-light">Cuộc hành trình xuyên qua các chiều không gian để tìm kiếm tương lai
                                cho nhân
                                loại.</p>
                            <a href="#" class="btn btn-primary btn-lg">Xem ngay</a>
                        </div>
                    </div>

                    <!-- Slide 3 -->
                    <div class="carousel-item">
                        <img src="./assets/images/carousel/movie-3.jpg" class="d-block w-100" alt="The Conjuring">
                        <div class="carousel-caption d-none d-md-block">
                            <h2 class="text-white">The Conjuring</h2>
                            <p class="text-light">Những bí ẩn ma quái đầy ám ảnh dựa trên câu chuyện có thật.</p>
                            <a href="#" class="btn btn-primary btn-lg">Xem ngay</a>
                        </div>
                    </div>
                </div>

                <!-- Carousel Controls -->
                <button class="carousel-control-prev" type="button" data-bs-target="#movieCarousel"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#movieCarousel"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>`);
}
