/*======== Hiện ẩn filter =========*/
document.getElementById("check-filter").addEventListener("change", function () {
  const check = document.getElementById("filter");
  if (this.checked) {
    check.classList.add("active");
  } else {
    check.classList.remove("active");
  }
});

/*======== Chỉ hiển thị 16 phim =========*/
function show16Items() {
  let items = document.querySelectorAll("#series");
  items.forEach((item, index) => {
    if (index >= 16) {
      item.classList.add("hidden");
    } else {
      item.classList.remove("hidden");
    }
  });
}
