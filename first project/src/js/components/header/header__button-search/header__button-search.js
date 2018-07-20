import {searchRecipe} from '../../../services/api/food2fork-api';

let searchLine = document.getElementsByClassName('header__search-line')[0];
let buttonSearch = document.getElementsByClassName('header__button-search')[0];
if(buttonSearch)
buttonSearch.addEventListener('click', searchRecipe, false);
console.log(searchRecipe(searchLine));
