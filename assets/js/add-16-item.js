document.addEventListener("DOMContentLoaded", () => {
  function show16ItemsSeries(id) {
    let items = document.querySelectorAll("id");
    items.forEach((item, index) => {
      if (index >= 16) {
        item.classList.add("hidden");
      } else {
        item.classList.remove("hidden");
      }
    });
  }
});
