import { Favorites } from './article__button-favorites';

export let addEventFavorites = (recipe, numberRecipe) => {
    if (document.getElementsByClassName('article__button-favorites')) {
        let buttonAddFavorites = document.getElementsByClassName('article__button-favorites')[numberRecipe];


        let createFavoriteDish = (recipe) => {
            let favoritesDish = new Favorites(recipe);
            favoritesDish.addFavorites();
        };

        buttonAddFavorites.addEventListener('click', createFavoriteDish.bind(this, recipe), false);
    }
}