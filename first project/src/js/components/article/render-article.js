import '../../../style/article/article.less';

export let renderArticle = () => {
let application = document.getElementsByClassName("application")[0];
let article = document.createElement("article");
article.className = "article";
article.innerHTML =
  '<ul class = "article__result-search-api"></ul>';
application.appendChild(article);
}
