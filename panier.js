let panier = JSON.parse(localStorage.getItem("panier"))

// Quantité de produits dans le panier //

const positionElement3 = document.querySelector(".nombreproduits")

if(panier === null){
    QuantiteTotalHTML= '0';
}else{
    QuantiteTotalHTML = panier.length;
}    

positionElement3.innerHTML = `
( ${QuantiteTotalHTML} )
`;

// Si le panier est vide //

const positionElement = document.querySelector('#productlist');

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
    const positionElement = document.querySelector('#productlist');

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

// Création du formulaire  //
let formValid = document.getElementById('ordre__validation');
let nom = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let email = document.getElementById('mail');
let ville = document.getElementById('ville');
let address = document.getElementById('address');
let missNom = document.getElementById('missNom');
let missPrenom = document.getElementById('missPrenom');
let missEmail = document.getElementById('missEmail');
let missVille = document.getElementById('missVille');
let missAddress = document.getElementById('missAddress');
let nomValid = /^[a-zA-ZéèîïÉÈÎÏ][A-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/; // Création de Regex // 
let prenomValid = /^[a-zA-ZéèîïÉÈÎÏ][A-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
let emailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let villeValid = /^[a-zA-ZéèîïÉÈÎÏ][A-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
let addressValid = /^\d+\s[A-z]+\s[A-z]+/;
            
formValid.addEventListener('click', validation); // Si les données du formulaires sont ok, Validation // 


function form(){
    //Si le champ nom est vide//
    if (nom.validity.valueMissing){
        missNom.textContent = 'Veuillez renseigner votre nom';
        missNom.style.color = 'red'; 
    //Si le format de données est incorrect//
    }else if(nomValid.test(nom.value) == false){
        missNom.textContent = 'Format incorrect';
        missNom.style.color = 'orange'; 
    }else{
        missNom.innerHTML = `<i class="fas fa-check"></i>`;
        missNom.style.color = 'green';
    };

    //Si le champ prenom est vide//
    if (prenom.validity.valueMissing){
        missPrenom.textContent = 'Veuillez renseigner votre prénom';
        missPrenom.style.color = 'red'; 
    //Si le format de données est incorrect//
    }else if (prenomValid.test(prenom.value) == false){
        missPrenom.textContent = 'Format incorrect';
        missPrenom.style.color = 'orange';  
    }else{
        missPrenom.innerHTML = `<i class="fas fa-check"></i>`
        missPrenom.style.color = 'green';
    };
    
    //Si le champ email est vide//
    if (email.validity.valueMissing){  
        missEmail.textContent = 'Veuillez renseigner votre e-mail';
        missEmail.style.color = 'red';   
        //Si le format de données est incorrect//
    }else if (emailValid.test(email.value) == false){
        missEmail.textContent = 'Format incorrect';
        missEmail.style.color = 'orange';  
    }else{
        missEmail.innerHTML = `<i class="fas fa-check"></i>`
        missEmail.style.color = 'green';
    };
   
    //Si le champ ville est vide//
    if (ville.validity.valueMissing){
        missVille.textContent = 'Veuillez renseigner votre commune';
        missVille.style.color = 'red';
        //Si le format de données est incorrect//
    }else if (villeValid.test(ville.value) == false){  
        missVille.textContent = 'Format incorrect';
        missVille.style.color = 'orange';   
    }else{
        missVille.innerHTML = `<i class="fas fa-check"></i>`
        missVille.style.color = 'green';
    };
   
    //Si le champ address est vide//
    if (address.validity.valueMissing){
        missAddress.textContent = 'Veuillez renseigner votre adresse';
        missAddress.style.color = 'red';        
    //Si le format de données est incorrect//
    }else if (addressValid.test(address.value) == false){
        missAddress.textContent = 'Format incorrect';
        missAddress.style.color = 'orange';  
    }else{
        missAddress.innerHTML = `<i class="fas fa-check"></i>`
        missAddress.style.color = 'green';
    }; 
};
    
    // Si formulaire OK, Création de l'objet à envoyer au serveur pour créer la commande //
function validation(){

    form();

    if (nomValid.test(nom.value) === true && addressValid.test(address.value) === true && villeValid.test(ville.value) === true && emailValid.test(email.value) === true && prenomValid.test(prenom.value) === true) {
        contact.firstName = nom.value
        contact.lastName = prenom.value
        contact.email = email.value
        contact.city = ville.value
        contact.address = address.value
    }else{

        alert ("Veuillez renseigner tous les champs s'il vous plaît!");
        return false;
    }

    // creation du tableau qui va contenir les id des peluches
    let productsId = [];
    for(let i =0; i<products.length; i++){
        productsId.push(products[i]._id)
    }

    // creation de l objet a envoyer

    let objectToSend = {
        contact : contact,
        products : productsId,
    };

    // envoi au serveur

    fetch("http://localhost:3000/api/teddies/order", {
        method: 'POST',            
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objectToSend) // conversion en JSON des données requis par le serveur 
    })
    .then(response => { response.json()
        .then(function(json) {
            let orderId = json.orderId;
            document.location.href = 'commande.html?id=' + orderId;  // envoi de l'ID de la commande dans l'url de la page de validation 
        });
    })
    .catch(error => { // enregistrement si erreur lors de l'envoi de données 
         alert(error);
    })  
};