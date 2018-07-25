import { addEventButtonSearch } from "../header__button-search/header__button-search";
import { renderRecipesApi1 } from "../../article/article-result-search/render-recipes-api1";
import { renderRecipesApi2 } from "../../article/article-result-search/render-recipes-api2";

function selectApi(){
    let food2ForkApi = document.getElementById('header__a-food2fork-api');
    let recipePuppyApi = document.getElementById('header__a-recipe-puppy-api');
    food2ForkApi.addEventListener("click",() => {
        addEventButtonSearch(renderRecipesApi1, renderRecipesApi2);
    }, false)
    recipePuppyApi.addEventListener("click", () => {
        addEventButtonSearch(renderRecipesApi2, renderRecipesApi1);
    }, false);
}

export {selectApi};