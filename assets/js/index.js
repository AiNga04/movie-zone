/*======== Hiện ẩn filter =========*/
document.getElementById("check-filter").addEventListener("change", function () {
  const check = document.getElementById("filter");
  if (this.checked) {
    check.classList.add("active");
  } else {
    check.classList.remove("active");
  }
});
