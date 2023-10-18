import { generateTextAndImage } from "./utils.js";


const postGenerateBtn = document.getElementById('generate-post');

postGenerateBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const favoriteActivity = document.getElementById('favorite-activity').value;
    const favoritePlace = document.getElementById('favorite-place').value; 
    let temperature = 0.6;
    // Reset Values
    name.value = '';
    favoriteActivity.value = '';
    favoritePlace.value = '';
    
    generateTextAndImage(name, favoriteActivity, favoritePlace, temperature);
});



