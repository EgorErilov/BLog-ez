var articles = [
{
    title : 'article 1',
    link: 'test1.html'
},
{
    title : 'article 2',
    link: 'test2.html'
},
{
    title : 'article 3',
    link: 'test3.html'
},
{
   title : 'article 4',
   link : 'test4.html'
}
]
var blog = '<ul>'
    amountOfArticles = articles.length
for (var article = 0; article < amountOfArticles; article++) {
        blog+= `
        <li>
            <a href = "articles/${articles[article].link}" class ="article">
             <h3>${articles[article].title}</h3>
            </a>
        </li>
        `
       }
       blog+= '</ul>'
       document.getElementById('root').innerHTML = blog;
       