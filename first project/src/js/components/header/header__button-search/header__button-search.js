function addEventButtonSearch(funHandler, funcRemove) {
  const buttonSearch = document.getElementsByClassName('header__button-search')[0];
  buttonSearch.removeEventListener('click', funcRemove, false);
  buttonSearch.addEventListener('click', funHandler, false);
}

export { addEventButtonSearch };
