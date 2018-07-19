window.onload = function(){
let application = document.getElementsByClassName("application")[0];
let header = document.createElement('header');
header.innerHTML = '\
<header>\
<input type="text" class="header__search-line">\
<input type="button" class="header__button-search">\
<input type="button" class="header__button-favorites">\
</header>';
application.appendChild(header);
}
