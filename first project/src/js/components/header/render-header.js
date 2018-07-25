import '../../../style/header/header.less';
import { showApi } from './header__button-select-api/header__button-show-api';

export let renderHeader= () => {
let application = document.getElementsByClassName("application")[0];
let header = document.createElement('header');
header.className = 'header';
header.innerHTML = `
<input type="text" class="header__search-line" placeholder = "Enter the name of the dish">
<div class="header__list-drop-down">
        <button class="header__button-drop-down">select api</button>
        <div class = "header__list-api">
        <a id = "header__a-food2fork-api" href="#">Food2Fork</a>
        <a id = "header__a-recipe-puppy-api" href="#">Recipe Puppy</a>
        </div>
    </div>
<input type="button" class="header__button-search" value = "Search">
<input type="button" class="header__button-favorites" value = "Favorites">`;
application.appendChild(header);
let buttonDropDown = document.getElementsByClassName("header__button-drop-down")[0];
buttonDropDown.addEventListener("click", showApi, false);
}