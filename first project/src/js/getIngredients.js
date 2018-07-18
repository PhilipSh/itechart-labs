import {renderIngredients} from './renderIngredients';

export function getIngredients(recipe_id, new_li) {
    axios.get('https://cors.io/?http://food2fork.com/api/get?', {
        params: {
            key: '14d4f957bf943fe0ae9172647a0f4d1f',
            rId: recipe_id
        }
    })
        .then(function (response) {
            console.log(response);
            renderIngredients(response, new_li);
        })
        .catch(function (error) {
            console.log(error);
        })
}