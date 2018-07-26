import Favorites from '../../article/article__button-favorites/article__button-favorites';

const addEventButtonShowFavorites = () => {
  const buttonShowFavorites = document.getElementsByClassName('header__button-favorites')[0];
  const showFavoriteDish = () => {
    const favoriteDish = new Favorites();
    favoriteDish.renderFavorites();
  };
  buttonShowFavorites.addEventListener('click', showFavoriteDish, false);
};

export { addEventButtonShowFavorites };
