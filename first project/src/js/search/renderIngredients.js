export function renderIngredients(response, new_li) {
    let p = document.createElement('p');
    p.innerHTML = response.data.recipe.ingredients[0];
    for (let lengthIngredients = 1; lengthIngredients < response.data.recipe.ingredients.length; lengthIngredients++) {
        p.innerHTML = p.innerHTML + ', ' + response.data.recipe.ingredients[lengthIngredients];
    }
    p.className = 'ingredients';
    new_li.appendChild(p);
}