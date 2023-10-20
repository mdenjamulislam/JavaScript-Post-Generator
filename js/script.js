import { generateTextAndImage } from "./utils.js";

const postGenerateBtn = document.getElementById("generate-post");

postGenerateBtn.addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let favoriteActivity = document.getElementById("favorite-activity").value;
  let favoritePlace = document.getElementById("favorite-place").value;
  let temperature = 0.6;
  // Reset Values
  document.getElementById("name").value = "";
  document.getElementById("favorite-activity").value = "";
  document.getElementById("favorite-place").value = "";
  generateTextAndImage(name, favoriteActivity, favoritePlace, temperature);
});

