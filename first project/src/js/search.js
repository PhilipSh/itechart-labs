function renderSearch(response) {
    const result = document.getElementsByClassName('resultSearch')[0];
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
    for (let i = 0; i < 30; i++) {
        let imgDish = document.createElement('img');
        let new_li = document.createElement('li');
        let title = document.createElement('p');
        title.innerHTML = response.data.recipes[i].title;
        imgDish.src = response.data.recipes[i].image_url;
        result.appendChild(new_li);
        new_li.appendChild(title);
        new_li.appendChild(imgDish);
        new_li.className = 'recipeDish';
        getIngredients(response.data.recipes[i].recipe_id, new_li);
    }
}

window.onload = function getRecipes() {
    const but = document.getElementById('article_searcher_buttonSearch');
    let recipe = document.getElementById('searchLine').value;
    axios.get('https://cors.io/?http://food2fork.com/api/search?', {
        params: {
            key: '14d4f957bf943fe0ae9172647a0f4d1f',
            q: recipe
        }
    })
        .then(function (response) {
            console.log(response)
            renderSearch(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    but.addEventListener('click', getRecipes, false);
}
function getIngredients(recipe_id, new_li) {
    axios.get('https://cors.io/?http://food2fork.com/api/get?', {
        params: {
            key: '14d4f957bf943fe0ae9172647a0f4d1f',
            rId: recipe_id
        }
    })
        .then(function (response) {
            console.log(response);
            renderIngredients(response, new_li);
        })
        .catch(function (error) {
            console.log(error);
        })
}
function renderIngredients(response, new_li) {
    let p = document.createElement('p');
    for (let lengthIngredients = 0; lengthIngredients < response.data.recipe.ingredients.length; lengthIngredients++) {
        p.innerHTML = p.innerHTML + response.data.recipe.ingredients[lengthIngredients] + ', ';
    }
    new_li.appendChild(p);
}