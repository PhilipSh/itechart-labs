import {renderIngredientsApi2} from './render-ingredients-api2';

export let renderRecipesApi2 = (arrRecipes) => {
    let resultSearch = document.getElementsByClassName("article__result-search-api2")[0];
    while(resultSearch.firstChild) {
      resultSearch.removeChild(resultSearch.firstChild);
    }
    for (let numberRecipe = 0; numberRecipe < arrRecipes.length; numberRecipe++){
      let imgDish = document.createElement("img");
      let new_li = document.createElement("li");
      let title = document.createElement("p");
      let buttonFavorites = document.createElement("input");
      let buttonIgredients = document.createElement("input");
      title.innerHTML = arrRecipes[numberRecipe].title;
      imgDish.src = arrRecipes[numberRecipe].thumbnail;
      buttonFavorites.type = "button";
      buttonFavorites.value = "Favorites";
      buttonIgredients.type = "button";
      buttonIgredients.value = "Show Ingredients";
      resultSearch.appendChild(new_li);
      new_li.appendChild(title);
      new_li.appendChild(imgDish);
      new_li.appendChild(buttonFavorites);
      new_li.appendChild(buttonIgredients);
      new_li.className = "article__recipe-dish";
      buttonFavorites.className = "article__button-favorites";
      buttonIgredients.className = "article__button-ingredients";
      buttonIgredients.addEventListener("click",renderIngredientsApi2.bind(null, arrRecipes[numberRecipe], new_li));
    }
    console.log(arrRecipes);
  };