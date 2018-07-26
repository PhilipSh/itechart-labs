import axios from 'axios';
import { URL_RECIPEPUPPY } from '../../constants/api-const';

const searchRecipeApiRecipePuppy = (searchLine) => axios.get(URL_RECIPEPUPPY, {
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

export { searchRecipeApiRecipePuppy };
