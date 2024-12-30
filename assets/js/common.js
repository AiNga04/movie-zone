/*========== Navbar ==========*/
function addNavbar() {
  document.write(`
        <nav class="navbar navbar-expand-lg bg-dark shadow-sm sticky-top">
        <div class="container">
            <!-- Logo -->
            <a class="navbar-brand text-warning fw-bold" href="./">MovieZone</a>

            <!-- Mobile toggle button -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
                aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Navbar content -->
            <div class="collapse navbar-collapse" id="navbarContent">
                <!-- Search bar in center -->
                <form class="search-form mx-auto" role="search">
                    <input class="form-control" type="search" placeholder="Tìm phim, diễn viên..." aria-label="Search">
                    <button class="btn-search" type="submit" aria-label="Search">
                        <i class="fas fa-search"></i>
                    </button>
                </form>

                <!-- Login/Sign-up buttons -->
                <div class="auth-buttons div-order">
                    <a href="sign-up.html" class="btn btn-outline-light me-2 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                            class="bi bi-box-arrow-in-right me-2" viewBox="0 0 18 18">
                            <path fill-rule="evenodd"
                                d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                            <path fill-rule="evenodd"
                                d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                        </svg>
                        Đăng nhập</a>
                    <a href="./sign-in.html" class="btn btn-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                            class="bi bi-person-plus-fill me-2" viewBox="0 0 18 18">
                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            <path fill-rule="evenodd"
                                d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                        </svg>
                        Đăng ký</a>
                </div>
            </div>
        </div>
    </nav>`);
}

/*========== Note ==========*/
function addNote() {
  document.write(`
        <section class="background container">
            <div class="container note">
                <p class="note--desc">CHÚ Ý: NẾU KHÔNG TẢI ĐƯỢC NỘI DUNG,HÃY BẤM F5 HOẶC BẤM TẢI LẠI TRANG 1 HOẶC 2 LẦN
                    BẠN
                    NHÉ .</p>
            </div>
        </section>`);
}

/*========= Navbar =========*/
function addNavbarHeader() {
  document.write(`
                <section>
            <nav class="navbar navbar-expand-lg navbar-light shadow" style="background-color: rgb(30 58 87);">
                <div class="container">
                    <!-- Toggler -->
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerMovie" aria-controls="navbarTogglerMovie" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <!-- Navbar Links -->
                    <div class="collapse navbar-collapse" id="navbarTogglerMovie">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active text-white" aria-current="page" href="./">Trang chủ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="./list-series.html">Phim bộ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="./list-single.html">Phim lẻ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="./list-cartoon.html">Hoạt hình</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="./list-tv-show.html">TV Shows</a>
                            </li>
                            <!-- Dropdown for Genres -->
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-white" href="#" id="genreDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Thể loại
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Hành động</a></li>
                                    <li><a class="dropdown-item" href="#">Tình cảm</a></li>
                                    <li><a class="dropdown-item" href="#">Kinh dị</a></li>
                                    <li><a class="dropdown-item" href="#">Viễn tưởng</a></li>
                                    <li><a class="dropdown-item" href="#">Hài hước</a></li>
                                    <li><a class="dropdown-item" href="#">Phim cổ trang</a></li>
                                </ul>
                            </li>
                            <!-- Dropdown for Countries -->
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-white" href="#" id="countryDropdown"
                                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Quốc gia
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Việt Nam</a></li>
                                    <li><a class="dropdown-item" href="#">Hàn Quốc</a></li>
                                    <li><a class="dropdown-item" href="#">Mỹ</a></li>
                                    <li><a class="dropdown-item" href="#">Trung Quốc</a></li>
                                    <li><a class="dropdown-item" href="#">Nhật Bản</a></li>
                                    <li><a class="dropdown-item" href="#">Thái Lan</a></li>
                                    <li><a class="dropdown-item" href="#">Âu - Mỹ</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>`);
}

/*========== Footer ==========*/
function addFooter() {
  document.write(`
            <div class="container">
            <div class="row top">
                <div class="col-lg-6 col-md-12 content p-0">
                    <!-- Logo -->
                    <a class="navbar-brand text-warning fw-bold" href="#">MovieZone</a>
                    <p>MovieZone - Trang web xem phim trực tuyến miễn phí chất lượng với giao diện trực quan, cùng kho
                        phim với hơn 200+ phim mới, phim hay, luôn cập nhật phim nhanh, hứa hẹn sẽ đem lại phút giây
                        giải trí tuyệt vời cho bạn.</p>
                </div>
                <div class="col-lg-3 col-md-6 mb-4 p-0">
                    <h6 class="text-uppercase fw-bold mb-4">Liên kết hữu ích</h6>
                    <p><i class="fas fa-link me-3"></i><a href="about.html" class="text-decoration-none text-reset">Giới
                            thiệu</a></p>
                    <p><i class="fas fa-shield-alt me-3"></i><a href="policy.html"
                            class="text-decoration-none text-reset">Chính sách
                            bảo
                            mật</a></p>
                    <p><i class="fas fa-life-ring me-3"></i><a href="support.html"
                            class="text-decoration-none text-reset">Hỗ trợ</a>
                    </p>
                </div>
                <div class="col-lg-3 col-md-6 mb-4 p-0">
                    <h6 class="text-uppercase fw-bold mb-4">Liên hệ</h6>
                    <p><i class="fas fa-map-marker-alt me-3"></i>Hồ Chí Minh, Việt Nam</p>
                    <p><i class="fas fa-envelope me-3"></i><a href="mailto:ainga01012004@gmail.com"
                            class="text-decoration-none text-reset">ainga01012004@gmail.com</a></p>
                    <p><i class="fas fa-phone-alt me-3"></i><a href="tel:+84376600545"
                            class="text-decoration-none text-reset">+84 376 600 545</a></p>
                </div>
            </div>
            <hr>
            <div class="row bottom">
                <p>© 2024 Ái Nga. Tất cả quyền được bảo lưu.</p>
            </div>
        </div>    `);
}
