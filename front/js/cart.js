//-------------------local storage-----------------------//
//let btnEnvoyerPanier= document.querySelector("button");
//console.log(btnEnvoyerPanier);
//let newArticle = [];

//console.log(newArticle);
//newArticle.push(AChoosen);
//localStorage.setItem('newArticle', JSON.stringify(newArticle));

//const storedA = JSON.parse(localStorage.getItem('newArticle')); 
//console.log(storedA);

function savecart(cart) {
    localStorage.setItem("cart",JSON.stringify(cart));//dans le local storage on ne peut pas enregistrer des choses complexes comme des tableaux ou des objets du coup on utilise une notation en chaine de caractere 
}

savecart();

function getcart() {
   
    let cart= (localStorage.getItem("cart"));// on utilise json.parse pour récuperer la chaine de caractère en objet tableau ou données complexes
    if (cart==null){
        return [];
    }else{
        return JSON.parse(cart);
    }

}

getcart();

function addCart(product) {
    let cart=getCart ();// pour récupérer le panier
    cart.push(product);// on ajoute le produit dans le tableau dans le local storage on peu pas enregistrer des tableau et objet
    saveCart(cart);//une fois qu'on a ajouté le produit on va faire un save basket pour enregistrer le nouveau produit 
}
addCart();

