//fonction qui s'execute dès le chargement de la page qui va contenir le code de base pour pas avoir de variable au niveau du scope global

async function main() {
    const articles = await getArticles()// await ça veut dire que tu attends que la promesse soit résolu
    for (article of articles) {
        displayArticle(article)
    }
}

function getArticles() {
    return fetch ("http://localhost:3000/api/products")
    //on attache les fonctions qu'il va exevuter quand il aura récupérer les données
    .then(function(httpBodyResponse){
        return httpBodyResponse.json()// on transforme
    
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
    //on recupere l'élement template en le clonant puis en l'ajoutant
    const templateElt = document.getElementById("templateArticle")

    const cloneElt = document.importNode(templateElt.content,true)
    //const clone Elt permet de faire un clone de template Elt
    cloneElt.getElementById("picture").src = article.imageUrl;
    //comme si on faisait getelement  sur document sauf qu"on le fait sur clone.elt
    cloneElt.getElementById("picture").alt = article.altTxt
    cloneElt.getElementById("productName").textContent = article.name
    cloneElt.getElementById("productDescription").textContent = article.description
    cloneElt.getElementById("lienlink").href += `?id=${article._id}`
    document.getElementById("items").appendChild(cloneElt)
    //la dernière ligne permet d'intergrer notre clone dans la page//
}

main()