export let renderIngredientsApi2 = (response, new_li) =>{
    let ingredients = document.createElement("p");
      ingredients.className = "article__ingredients";
      ingredients.innerHTML = response.ingredients;
    new_li.appendChild(ingredients);
  }