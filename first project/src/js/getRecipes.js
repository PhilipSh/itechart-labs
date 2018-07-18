import {renderIngredients} from './renderIngredients';
import {renderSearch} from './renderRecipes';
import {getIngredients} from './getIngredients';
 
window.onload = function getRecipes() {
    const but = document.getElementById('article_searcher_buttonSearch');
    let recipe = document.getElementById('searchLine').value;
    axios.get('https://cors.io/?http://food2fork.com/api/search?', {
        params: {
            key: '14d4f957bf943fe0ae9172647a0f4d1f',
            q: recipe
        }
    })
        .then(function (response) {
            console.log(response)
            renderSearch(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    but.addEventListener('click', getRecipes, false);
}
