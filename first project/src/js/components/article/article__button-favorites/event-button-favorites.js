import Favorites from './article__button-favorites';

export const addEventFavorites = (recipe, numberRecipe) => {
  if (document.getElementsByClassName('article__button-favorites')) {
    const buttonAddFavorites = document.getElementsByClassName('article__button-favorites')[numberRecipe];


    const createFavoriteDish = (recipe) => {
      const favoritesDish = new Favorites(recipe);
      favoritesDish.addFavorites();
    };

    buttonAddFavorites.addEventListener('click', createFavoriteDish.bind(this, recipe), false);
  }
};
