import { renderHeader } from './header/render-header';
import { renderArticle } from './article/render-article';
import { selectApi } from './header/header__button-select-api/header__button-select-api';
import { addEventButtonShowFavorites } from './header/header__button-favorites/header__button-favorites';

window.onload = () => {
  renderHeader();
  renderArticle();
  addEventButtonShowFavorites();
};
