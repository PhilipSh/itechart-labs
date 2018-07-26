export default class Favorites {
  constructor(recipe) {
    this.recipe = recipe;
  }

  addFavorites() {
    localStorage.setItem(this.recipe.title, JSON.stringify(this.recipe));
  }

  renderFavorites() {
    const resultSearch = document.getElementsByClassName('article__result-search-api')[0];

    while (resultSearch.firstChild) {
      resultSearch.removeChild(resultSearch.firstChild);
    }

    for (let i = 0; i < localStorage.length; i++) {
      const favoriteRecipe = JSON.parse(localStorage.getItem(localStorage.key(i)));
      const imgDish = document.createElement('img');
      const new_li = document.createElement('li');
      const title = document.createElement('p');
      title.innerHTML = favoriteRecipe.title;
      if (favoriteRecipe.thumbnail) {
        imgDish.src = favoriteRecipe.thumbnail;
      } else {
        imgDish.src = favoriteRecipe.image_url;
      }
      resultSearch.appendChild(new_li);
      new_li.appendChild(title);
      new_li.appendChild(imgDish);
      new_li.className = 'article__recipe-dish';
    }
  }
}
