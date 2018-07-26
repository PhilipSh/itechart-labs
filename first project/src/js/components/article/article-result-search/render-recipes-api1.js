import { getIngredients } from '../../../services/api/get-ingredients';
import { addEventFavorites } from '../article__button-favorites/event-button-favorites';
import { searchRecipeApiFood2Fork } from '../../../services/api/food2fork-api';

export const renderRecipesApiFood2Fork = () => {
  const searchLine = document.getElementsByClassName('header__search-line')[0].value;
  searchRecipeApiFood2Fork(searchLine).then((arrRecipes) => {
    const resultSearch = document.getElementsByClassName('article__result-search-api')[0];

    while (resultSearch.firstChild) {
      resultSearch.removeChild(resultSearch.firstChild);
    }

    for (let numberRecipe = 0; numberRecipe < arrRecipes.length; numberRecipe++) {
      const imgDish = document.createElement('img');
      const new_li = document.createElement('li');
      const title = document.createElement('p');
      const buttonFavorites = document.createElement('input');
      const buttonIgredients = document.createElement('input');
      title.innerHTML = arrRecipes[numberRecipe].title;
      imgDish.src = arrRecipes[numberRecipe].image_url;
      buttonFavorites.type = 'button';
      buttonFavorites.value = 'Favorites';
      buttonIgredients.type = 'button';
      buttonIgredients.value = 'Show Ingredients';
      resultSearch.appendChild(new_li);
      new_li.appendChild(title);
      new_li.appendChild(imgDish);
      new_li.appendChild(buttonFavorites);
      new_li.appendChild(buttonIgredients);
      new_li.className = 'article__recipe-dish';
      buttonFavorites.className = 'article__button-favorites';
      buttonIgredients.className = 'article__button-ingredients';
      addEventFavorites(arrRecipes[numberRecipe], numberRecipe);
      buttonIgredients.addEventListener('click', getIngredients.bind(null, arrRecipes[numberRecipe].recipe_id, new_li));
    }

  });
};
