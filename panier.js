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
            <th>${panier[i].price/100}</th>
            <th>${panier[i].quantity}</th>
            <th><button class="btn-supprimer">Supprimer</button></th>
        </tr>
        `;
    }
        if(i === panier.length)
        //injection html dans la page panier//
        positionElement.innerHTML = tableauPanier;
    }


    //     Prix total     //
let PrixtotalCalcul = [];

for (let m = 0; m < panier.length; m++){
    let prixproduitpanier = panier[m].price/100;
    
    PrixtotalCalcul.push(prixproduitpanier)
}

//    Additionner les prix du panier   //

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const prixtotal = PrixtotalCalcul.reduce(reducer);

//  Affichage du prix total en HTML  //

const positionElement2 = document.querySelector('.subtotal');

const PrixTotalHTML = `
    ${prixtotal}
    `;

positionElement2.innerHTML = PrixTotalHTML;

    // Supprimer un produit du panier //

const positionElement4 = document.querySelector('.btn-supprimer')

function suppressionArticle (i){
    panier.splice(i, 1); //suppression de l'element i du tableau;  
    localStorage.clear(); //on vide le storage avant de le mettre à jour;
    localStorage.setItem("panier", JSON.stringify(panier)); //maj du panier sans l'élément i;
    window.location.reload();
}

positionElement4.addEventListener("click", function (event) {
    suppressionArticle(event.target.id);
});

//                FORMULAIRE                    //

// Constante pour récupérer la commande client //

const commandeUser = {
    contact: {},
    panier: [],
}

document.getElementById("formulaire").addEventListener("submit", function (envoi){
    envoi.preventDefault();//

    //Avant d'envoyer un formulaire, vérification que le panier n'est pas vide.
    if (panier.length == 0){
        alert("Attention, votre panier est vide.");
    }
    else {
        //Récupération des champs
        let nomForm = document.getElementById("Nomform").value;
        let prenomForm = document.getElementById("Prénom").value;
        let emailForm = document.getElementById("Email").value;
        let adresseForm = document.getElementById("Adresse").value;
        let villeForm = document.getElementById("Ville").value;

        //Création de l'objet formulaireObjet
        commandeUser.contact = {
            firstName: prenomForm,
            lastName: nomForm,  
            address: adresseForm,
            city: villeForm,
            email: emailForm,
        }    
     }
})
