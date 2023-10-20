import { generateTextAndImage } from "./utils.js";

const postGenerateBtn = document.getElementById("generate-post");

<<<<<<< HEAD

// 1. Change the value of the variable to your name
let name = "Enjam"

// 2. Change the value of the variable to your favorite activity
let favoriteActivity = "coading"

// 3. Assign the favoritePlace variable your favorite place
// I.e. city, mountain, pub, forrest, beach, Manhattan, etc.
let favoritePlace = "river park"

// 4. Configure the AI by setting a temperature from 0 to 1
// The higher temperature, the more random & experimental output
let temperature = 0.6

// Optional: delete "avatar.jpg" and add a photo of yourself
// (remember to use "avatar.jpg" as the name of your photo)

generateTextAndImage(name, favoriteActivity, favoritePlace, temperature)
=======
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
>>>>>>> 978b68a7090d5c36a63fe653b4116b250ca4bbdd
