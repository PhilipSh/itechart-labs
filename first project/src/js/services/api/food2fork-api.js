import axios from 'axios';
import {URL_FOOD2FORK,KEY_FOR_FOOD2FORK} from '../../constants/api-const';

const searchRecipeApi1 = (searchLine) => {
        return axios.get(URL_FOOD2FORK, {
        params: {
            key: KEY_FOR_FOOD2FORK,
            q: searchLine
        }
    })
        .then(function (response) {
            return response.data.recipes;        
        })
        .catch(function (error) {
            console.log(error);
        });
}

export {searchRecipeApi1};
