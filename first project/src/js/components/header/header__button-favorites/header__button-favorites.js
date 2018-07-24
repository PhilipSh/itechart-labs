export class Favorites {
    constructor(recipe) {
        this.recipe = recipe;
    }
    addFavorites() {
        localStorage.setItem(this.recipe.title, this.recipe.title);
        console.log(this.recipe);
    }
    renderFavorites() {
        for (let i = 1; i < localStorage.length; i++) {
            console.log(localStorage.getItem(i))
        }
    }
}