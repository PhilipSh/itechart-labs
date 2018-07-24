import '../../../style/article/article.less';

export let renderArticle = () => {
let application = document.getElementsByClassName("application")[0];
let article = document.createElement("article");
article.className = "article";
article.innerHTML =
  '\
      <ul class = "article__result-search-api1"></ul>\
      <ul class = "article__result-search-api2"></ul>';
application.appendChild(article);
}
