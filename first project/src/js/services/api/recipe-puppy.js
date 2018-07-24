import axios from 'axios';
import {URL_RECIPEPUPPY} from '../../constants/api-const';
import {renderRecipesApi2} from '../../components/article/article-result-search/render-recipes-api2';

export let searchRecipeApi2 = () => {
    let searchLine = document.getElementsByClassName('header__search-line')[0].value;
    let buttonSearch = document.getElementsByClassName('header__button-search')[0];
    axios.get(URL_RECIPEPUPPY, {
        params: {
            q: searchLine,
            i: searchLine
        }
    })
        .then(function (response) {
            renderRecipesApi2(response.data.results);
        })
        .catch(function (error) {
            console.log(error);
        });
}