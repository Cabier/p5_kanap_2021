/* 
URL DU SITE http://localhost:5500/front/html/product.html?id=107fb5b75607497b96722bda5b504926
QUERY PARAM ID DE l'URL = 107fb5b75607497b96722bda5b504926
 SUPOSE DE LA ROUTE API POUR 1 PRODUIT http://localhost:3000/api/products/${article.Id}

http://localhost:3000/api/products/107fb5b75607497b96722bda5b504926

*/

async function main() {
    
    const articleId =  getArticleId()
    console.log(articleId)
    const article = await getArticle(articleId)
    hydrateArticle(article);
}

function getArticleId() {
    return new URL(document.location).searchParams.get("id")
}

async function getArticle(articleId) {
    let url = "http://localhost:3000/api/products/" + articleId;
    
    console.log("URL API /> 1 produit ", url);    // ERREUR DE STRING 
    return fetch(url)
     .then(function(httpBodyResponse){
         return httpBodyResponse.json()
     })
     .then(function(articles) {
     return articles
     }).catch(function(error) {
     alert(error)
     })
}

function hydrateArticle(article) {
    const templateElt = document.getElementById("templateArticle2")
    const cloneElt = document.importNode(templateElt.content,true)
    let optionColor = "";
    article.colors.forEach((el) => { optionColor = optionColor + `<option value="${el}">${el}</option>` });
    cloneElt.getElementById("imgitem").src = article.imageUrl
    cloneElt.getElementById("title").textContent = article.name
    cloneElt.getElementById("price").textContent = article.price
    cloneElt.getElementById("description").textContent = article.description
    cloneElt.getElementById("colors").innerHTML = optionColor;
    
    document.getElementById("item").appendChild(cloneElt)
}
//-------------------local storage-----------------------//

//prix 
//description couleur nombre //
main()
monStockage = localStorage;
localStorage.setItem('cart_item',cart_item.value);
var cat = localStorage.getItem('myCat');


// <!> NE PAS ECRIRE SOUS MAIN l'ARTICLE ET LE HTML SONT PAS DISSPONIBLE


//ajoute le produit dans le local storage avec la bonne couleur
// faire des exercices d'algorithmie" utiliser l'inspecteur pour voir ce quil y a dedans onglet cash cash storage"


// selectElem.forEach(e => {
//     console.log("e", e)
// })
// var pElem = document.getElementById('p');

// Quand une nouvelle <option> est selectionnée
// selectElem.addEventListener('change', function() {
//   var index = selectElem.selectedIndex;
//   // Rapporter cette donnée au <p>
//   pElem.innerHTML = 'selectedIndex: ' + index;
// })
