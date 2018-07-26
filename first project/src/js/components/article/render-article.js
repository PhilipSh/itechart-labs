import '../../../style/article/article.less';

export const renderArticle = () => {
  const application = document.getElementsByClassName('application')[0];
  const article = document.createElement('article');
  article.className = 'article';
  article.innerHTML =  '<ul class = "article__result-search-api"></ul>';
  application.appendChild(article);
};
