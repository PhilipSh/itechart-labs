export const renderIngredientsApiRecipePuppy = (response, new_li) => {
  const ingredients = document.createElement('p');
  ingredients.className = 'article__ingredients';
  ingredients.innerHTML = response.ingredients;
  new_li.appendChild(ingredients);
};
