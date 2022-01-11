/* 
URL DU SITE http://localhost:5500/front/html/product.html?id=107fb5b75607497b96722bda5b504926
QUERY PARAM ID DE l'URL = 107fb5b75607497b96722bda5b504926
 SUPOSE DE LA ROUTE API POUR 1 PRODUIT http://localhost:3000/api/products/${article.Id}

http://localhost:3000/api/products/107fb5b75607497b96722bda5b504926

*/

async function main() {
    const articleId =  getArticleId()
    console.log(articleId)
    const article = await getArticle(articleId)//await attend resultat d'une promesse
    hydrateArticle(article);
    const addToCartBtn =document.getElementById("addToCart");
    addToCartBtn.addEventListener("click", addtocartFnc);
}

function getArticleId() {
    return new URL(document.location).searchParams.get("id")
}

function addtocartFnc() {

    console.log("ajouter au panier");
    alert("quelqu'un a toquer au panier");
    
    let addTocart = document.createElement('button');
    addTocart.addEventListener("click", function(event) {
        event.preventDefault();
    })
    panier.push(article);
    window.localStorage.setItem('cart',JSON.stringify(article));
    alert("l'article à bien été ajouté au panier");
};

    
 function selectionIdFormulaire  () {
     
    const idForm = document.querySelector("#title");
    console.log(idForm);

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
    const templateElt = document.getElementById("templateArticle2")//creation template//
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
// ajouter produit dans le panier cart//
//récupération des données et envoi au panier

//prix 
//description couleur nombre //
main();


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
