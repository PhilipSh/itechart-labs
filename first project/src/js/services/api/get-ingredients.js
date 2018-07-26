import axios from 'axios';

export const getIngredients = (recipe_id, new_li) => {
  axios
    .get('https://cors.io/?http://food2fork.com/api/get?', {
      params: {
        key: '14d4f957bf943fe0ae9172647a0f4d1f',
        rId: recipe_id,
      },
    })
    .then((response) => {
      renderIngredients(response.data.recipe, new_li);
    })
    .catch((error) => {
      console.log(error);
    });
};
export let renderIngredients = (response, new_li) => {
  const ingredients = document.createElement('p');
  ingredients.className = 'article__ingredients';
  for (
    let lengthIngredients = 0;
    lengthIngredients < response.ingredients.length;
    lengthIngredients++
  ) {
    ingredients.innerHTML =     ` ${ingredients.innerHTML + response.ingredients[lengthIngredients]  }, `;
  }
  new_li.appendChild(ingredients);
};
