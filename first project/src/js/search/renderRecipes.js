import {getIngredients} from './getIngredients';

export function renderSearch(response) {
    const result = document.getElementsByClassName('resultSearch')[0];
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
    for (let i = 0; i < 30; i++) {
        let imgDish = document.createElement('img');
        let new_li = document.createElement('li');
        let title = document.createElement('p');
        let showIngredients = document.createElement('input');
        showIngredients.type = 'button';
        showIngredients.value = 'Show Ingredients';
        title.innerHTML = response.data.recipes[i].title;
        imgDish.src = response.data.recipes[i].image_url;
        result.appendChild(new_li);
        new_li.appendChild(title);
        new_li.appendChild(imgDish);
        new_li.appendChild(showIngredients);
        new_li.className = 'recipeDish';
        title.className = 'title';
        showIngredients.addEventListener('click',getIngredients.bind(null, response.data.recipes[i].recipe_id, new_li), false);
    }
}