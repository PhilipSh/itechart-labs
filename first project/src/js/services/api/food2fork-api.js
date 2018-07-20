import axios from 'axios';
import {URL_FOOD2FORK} from '../../constants/api-const';

export function searchRecipe(searchLine) {
    axios.get(URL_FOOD2FORK, {
        params: {
            key: '14d4f957bf943fe0ae9172647a0f4d1f',
            q: searchLine
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}