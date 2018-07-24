import '../../../style/header/header.less';

export let renderHeader= () => {
let application = document.getElementsByClassName("application")[0];
let header = document.createElement('header');
header.className = 'header';
header.innerHTML = '\
<input type="text" class="header__search-line" placeholder = "Enter the name of the dish">\
<button class="header__button-drop-down">select api</button>\
<div class="header__list-drop-down">\
        <input id = "Api1" name = "api" type = "radio" name = "Api1">\
        <label for = "Api1">Api1</label></br>\
        <input id = "Api2" name = "api" type = "radio" value = "Api2">\
        <label for = "Api2">Api2</label>\
    </div>\
<input type="button" class="header__button-search" value = "Search">\
<input type="button" class="header__button-favorites" value = "Favorites">';
application.appendChild(header);
}