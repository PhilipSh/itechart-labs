import axios from 'axios';
import {URL_FOOD2FORK,KEY_FOR_FOOD2FORK} from '../../constants/api-const';
import {renderRecipesApi1} from '../../components/article/article-result-search/render-recipes';
import {searchRecipeApi2} from '../api/recipe-puppy';

const searchRecipeApi1 = () => {
    let searchLine = document.getElementsByClassName('header__search-line')[0].value;
    let buttonSearch = document.getElementsByClassName('header__button-search')[0];
        axios.get(URL_FOOD2FORK, {
        params: {
            key: KEY_FOR_FOOD2FORK,
            q: searchLine
        }
    })
        .then(function (response) {
            renderRecipesApi1(response.data.recipes);        
        })
        .catch(function (error) {
            console.log(error);
        });
        buttonSearch.addEventListener('click', function(){searchRecipeApi1(), searchRecipeApi2(searchLine)}, false);
}

export {searchRecipeApi1};
