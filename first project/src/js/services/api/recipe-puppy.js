import axios from 'axios';

window.onload = function searchRecipe(searchLine) {
    axios.get('http://www.recipepuppy.com/api/?', {
        params: {
            q: searchLine,
            i: searchLine
        }
    })
        .then(function (response) {
            return(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}