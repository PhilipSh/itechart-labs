import { selectApi } from './header__button-select-api';

function showApi() {
  document.getElementsByClassName('header__list-api')[0].classList.toggle('header__list-api_show');
  window.onclick = function (event) {
    if (!event.target.matches('.header__button-drop-down')) {
      const dropdowns = document.getElementsByClassName('header__list-api');
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('header__list-api_show')) {
          openDropdown.classList.remove('header__list-api_show');
        }
      }
    }
  };
  selectApi();
}

export { showApi };
