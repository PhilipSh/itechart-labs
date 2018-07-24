import { Favorites } from './header__button-favorites';

export let addEventFavorites = (recipe, numberRecipe) => {
    if (document.getElementsByClassName('article__button-favorites')) {
        let buttonFavorites = document.getElementsByClassName('article__button-favorites')[numberRecipe];
        let createFavoriteDish = (recipe) => {
            let favoritesDish = new Favorites(recipe);
            favoritesDish.addFavorites();
        };
        buttonFavorites.addEventListener('click', createFavoriteDish.bind(null, recipe), false);
    }
}