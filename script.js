document.querySelector("body").addEventListener("keydown", () => {
  let txtValue = document.querySelector("textarea").value;
  let total = (document.querySelector("span").textContent = txtValue.length);
  total = Number(total);
});
