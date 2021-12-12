/* 
Exo 1 
    Faire une fonction add qui ajoute les 2 nombre en entré et retourn le résulta 
    Proto: function add(nb1, nb2)
Exo 2 
    Faire une fonciton even qui indique si le nombre passer en parametre est paire 
    Elle revoie donc true ou false (un boolean) 
    Proto: function even(nb1)
    -function even (a,b) {
        if (a,b = paire){
            true
        }
        else {
            false
        }
    }
Exo 3
    Faire une fonction qui renvoie la valeur de la clé color du 3eme element du tableau 
    Proto: function get3rdcolor(arr);
*/

//fonction qui s'execute dès le chargement de la page
async function main() {
    const articles = await getArticles()// await ça veut dire que tu attends que la promesse soit résolu
    for (article of articles) {
        displayArticle(article)
    }
}

function getArticles() {
    return fetch ("http://localhost:3000/api/products")
    .then(function(httpBodyResponse){
        return httpBodyResponse.json()
    
    })
    .then(function(articles) {
    return articles
//then c'est la fonction qu'il va executer quand on aura récupéré les données
    })
   // quand on fait un return dans un then on peut le récupérer dans un then suivant du coup au lieu de l'appeler httpBodyResponse.json()
//on l'appelle article
    .catch(function(error) {
    alert(error)
    })
}

function displayArticle(article) {
    console.log(article)
    const templateElt = document.getElementById("templateArticle")
    const cloneElt = document.importNode(templateElt.content,true)
    cloneElt.getElementById("picture").src = article.imageUrl;
    cloneElt.getElementById("picture").alt = article.altTxt
    cloneElt.getElementById("productName").textContent = article.name
    cloneElt.getElementById("productDescription").textContent = article.description
    cloneElt.getElementById("lienlink").href += `?id=${article._id}`
    document.getElementById("items").appendChild(cloneElt)
}

main()