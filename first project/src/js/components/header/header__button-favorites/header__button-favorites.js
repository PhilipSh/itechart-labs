import { Favorites } from "../../article/article__button-favorites/article__button-favorites";

const addEventButtonShowFavorites = () => {
    console.log('12324');
    let buttonShowFavorites = document.getElementsByClassName('header__button-favorites')[0];
    let showFavoriteDish = () => {
        let favoriteDish = new Favorites();
        favoriteDish.renderFavorites();
    }
    buttonShowFavorites.addEventListener('click', showFavoriteDish, false);
}

export {addEventButtonShowFavorites};