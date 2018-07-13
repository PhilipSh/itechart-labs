function getRecipes() {
    var recipe = document.getElementById('elem').value;
    axios.get('https://cors.io/?http://food2fork.com/api/search?', {
        params: {
            key: '14d4f957bf943fe0ae9172647a0f4d1f',
            q: recipe
        }
    })
        .then(function (response) {
            console.log(response)
            console.log(response.data.count)
        })
        .catch(function (error) {
            console.log(error);
        })
}
