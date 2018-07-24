import {renderHeader} from '../components/header/render-header';
import {renderArticle} from '../components/article/render-article';
import {searchRecipeApi1} from '../services/api/food2fork-api';

window.onload = () => {
    renderHeader();
    renderArticle();
    searchRecipeApi1();
}
