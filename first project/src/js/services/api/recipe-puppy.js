import axios from 'axios';
import {URL_RECIPEPUPPY} from '../../constants/api-const';
import {renderRecipesApi2} from '../../components/article/article-result-search/render-recipes-api2';

const searchRecipeApi2 = (searchLine) => {
    return axios.get(URL_RECIPEPUPPY, {
        params: {
            i: searchLine
        }
    })
        .then(function (response) {
           return response.data.results;
        })
        .catch(function (error) {
            console.log(error);
        });
}

export {searchRecipeApi2};