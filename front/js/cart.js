
cart = JSON.parse(localStorage.getItem("cart"));



actualCartString = JSON.parse(localStorage.getItem("cart"));
console.log(cart)
let cartaImplementer = document.querySelector("#cart__items");


console.log(cartaImplementer);
//si le panier est vide : afficher le panier est vide
if(actualCartString === null ||actualCartString == 0 ){
    let panierVide = `
    <article class="cart__item" data-id="{product-ID}">
    <div class="container-panier-vide">
        <div> Le panier est vide </div>
    </div>    
    `;
    cartaImplementer.innerHTML = panierVide;
    
    console.log("je suis vide");
    
}
else {
    //si le panier n'est pas vide afficher le produit dans le local storage
   let structureProduitPanier =  [];
  for(k = 0;k < actualCartString.length; k++){
    structureProduitPanier = structureProduitPanier + `
    <section id="cart__items"
        <article class="cart__item" data-id="{product-ID}">
                <div class="cart__item__img">
                  <img src=${actualCartString[k].imageUrl}alt=${actualCartString[k].altTxt}>
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__titlePrice">
                    <h2>${actualCartString[k].name}</h2>
                    <p><${actualCartString[k].price}</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <button class="deleteItem">Supprimer</button>
                    </div>
                  </div>
                </div>
              </article> 
    </section>
    `; 
  }
    if(k === actualCartString.length) { 
    cartaImplementer.innerHTML = structureProduitPanier;

    }
  }
      console.log("nombre de produit ajouté " + actualCartString.length);

    console.log("je ne suis pas vide");

//----------------GESTION DU BOUTON SUPPRIMER L'ARTICLE-------------------//
  // sélection des références de tous les boutons btn-supprimer
  let btnSupprimer = document.querySelectorAll(".deleteItem")
  console.log(btnSupprimer);

for (let l = 0; l < btnSupprimer.length; l++){
    btnSupprimer[l].addEventListener("click",(event) =>{
        event.preventDefault();// pour éviter que quand on clique sur le bouton ça recharge la page

        //séléction de l'id du produit qui va être supprimé en cliquant sur le produit
        let idSelectionSuppression = actualCartString[l].name;
        console.log("idSelectionSuppression")
        console.log(idSelectionSuppression)

        //avec la méthode filter je sélectionne les éléments à garder et je supprime l'émément où le btn supp a été supprimé
        actualCartString = actualCartString.filter( el =>el.name !== idSelectionSuppression);
        console.log(actualCartString)
       // la méthode filter va chercher tous les éléments qui ont été enregistré dans le local storage

       

       //on envoie la variable dans le local storage
       //la transformation
       localStorage.setItem("cart", JSON.stringify(actualCartString))

       alert("ce produit a été supprimer du panier");
       window.location.href = "cart.html";
    })

}


// délaration de la variable pour pouvoir mettre des prix qui sont dans le panier
let prixTotalCalcul = [];
//chercher les prix dans le panier
for (let p = 0;p < actualCartString.length ; p++ ) {
  let prixProduitDansLePanier = actualCartString[p].price;
  prixTotalCalcul.push(prixProduitDansLePanier) // en général quand c'est un tableau on push
  console.log(prixTotalCalcul);
  //mettre les prix du panier dans la variable "prixTotalCalcul"
}
//Aditionner les prix qu'il y a dans le tableau de la variable prix total avec la méthode reduce
const reducer = (accumulator,currentValue) => accumulator + currentValue;
const prixTotal = prixTotalCalcul.reduce(reducer,0);
console.log("total prix " + prixTotal)

//le code html du prix total à afficher

let insertionPrix = document.querySelector(".cart__price");
console.log(insertionPrix);
let structure2 =[];
for(z = 0;z < actualCartString.length; z++){
  structure2 = `
 
<p>Total (<span id="totalQuantity"><!-- 2 --></span> articles) : <span id="totalPrice">${prixTotal}</span> €</p>
</div>`;
}
if(z === actualCartString.length ) {
  insertionPrix.innerHTML = structure2;
}
