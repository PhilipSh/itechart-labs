export class Favorites {
    constructor(recipe) {
        this.recipe = recipe;
    }
    addFavorites() {
        localStorage.setItem(this.recipe.title, JSON.stringify(this.recipe));
        console.log(localStorage.getItem(this.recipe.title));
    }
    renderFavorites() {
        let resultSearch = document.getElementsByClassName("article__result-search-api")[0];

        while (resultSearch.firstChild) {
            resultSearch.removeChild(resultSearch.firstChild);
        }

        for (let i = 0; i < localStorage.length; i++) {
            let favoriteRecipe = JSON.parse(localStorage.getItem(localStorage.key(i)));
            let imgDish = document.createElement("img");
            let new_li = document.createElement("li");
            let title = document.createElement("p");
            console.log(favoriteRecipe);
            title.innerHTML = favoriteRecipe.title;
            if(favoriteRecipe.thumbnail){
                imgDish.src = favoriteRecipe.thumbnail;
            }
            else{
            imgDish.src = favoriteRecipe.image_url;
            }
            resultSearch.appendChild(new_li);
            new_li.appendChild(title);
            new_li.appendChild(imgDish);
            new_li.className = "article__recipe-dish";
        }

    }
}