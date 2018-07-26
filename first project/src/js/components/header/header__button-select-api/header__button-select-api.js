import { addEventButtonSearch } from '../header__button-search/header__button-search';
import { renderRecipesApiFood2Fork } from '../../article/article-result-search/render-recipes-api1';
import { renderRecipesApiRecipePuppy } from '../../article/article-result-search/render-recipes-api2';

function selectApi() {
  const food2ForkApi = document.getElementById('header__a-food2fork-api');
  const recipePuppyApi = document.getElementById('header__a-recipe-puppy-api');
  food2ForkApi.addEventListener('click', () => {
    addEventButtonSearch(renderRecipesApiFood2Fork, renderRecipesApiRecipePuppy);
  }, false);
  recipePuppyApi.addEventListener('click', () => {
    addEventButtonSearch(renderRecipesApiRecipePuppy, renderRecipesApiFood2Fork);
  }, false);
}

export { selectApi };
