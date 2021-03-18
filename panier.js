// Importation du panier //

let panier = JSON.parse(localStorage.getItem('panier'));

console.log(panier);

// Selection de la classe ou injecter le code HTML //

const positionElement = document.querySelector('#productlist');

// Si le panier est vide //

if(panier === null){
const panierVide = `
    <div class="panier-vide">
        <div>Le panier est vide</div>
    </div>
    ` ;
    positionElement.innerHTML = panierVide;
} else {
    //si le panier n'est pas vide, il faut afficher les produits//
    let tableauPanier = [];

    for(i = 0; i < panier.length; i++ ){

        tableauPanier = tableauPanier + `
        <tr>
            <th>${panier[i].name}</th>
            <th>${panier[i].color}</th>
            <th>${panier[i].price}</th>
            <th>${panier[i].quantity}</th>
            <th><button class="delete">Supprimer</button></th>
        </tr>
        `;
    }
        if(i === panier.length)
        //injection html dans la page panier//
        positionElement.innerHTML = tableauPanier;
    }