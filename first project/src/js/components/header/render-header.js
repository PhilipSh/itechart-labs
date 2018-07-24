import '../../../style/header/header.less';

export let renderHeader= () => {
let application = document.getElementsByClassName("application")[0];
let header = document.createElement('header');
header.className = 'header';
header.innerHTML = '\
<input type="text" class="header__search-line" placeholder = "Enter the name of the dish">\
<input type="button" class="header__button-search" value = "Search">\
<input type="button" class="header__button-favorites" value = "Favorites">';
application.appendChild(header);
}