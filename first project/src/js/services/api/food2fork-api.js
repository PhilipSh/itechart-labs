import axios from 'axios';
import {URL_FOOD2FORK} from '../../constants/api-const';
import {renderRecipesApi1} from '../../components/article/article-result-search/render-recipes';
import {searchRecipeApi2} from '../api/recipe-puppy';

export let searchRecipeApi1 = () => {
    let searchLine = document.getElementsByClassName('header__search-line')[0].value;
    let buttonSearch = document.getElementsByClassName('header__button-search')[0];
        axios.get(URL_FOOD2FORK, {
        params: {
            key: '14d4f957bf943fe0ae9172647a0f4d1f',
            q: searchLine
        }
    })
        .then(function (response) {
            renderRecipesApi1(response.data.recipes);        
        })
        .catch(function (error) {
            console.log(error);
        });
        buttonSearch.addEventListener('click', function(){searchRecipeApi1(), searchRecipeApi2()}, false);
}

