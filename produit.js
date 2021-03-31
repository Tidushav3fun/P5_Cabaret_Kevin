var searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get("id")
console.log(id)
const title = document.querySelector("#containerproduct h1")
const description = document.querySelector("#containerproduct .productdescription")
const image = document.querySelector("#containerproduct img")
const prix = document.querySelector("#containerproduct .prix")
const select = document.querySelector("#containerproduct select")
const button = document.querySelector("#containerproduct button")
let teddy
fetch(api+"/"+ id)
.then ((response) => response.json())
.then((data) => {
    teddy=data
    console.log(teddy);
    title.innerHTML= teddy.name
    image.setAttribute("src",teddy.imageUrl)
    description.innerHTML= teddy.description
    prix.innerHTML = (teddy.price/100 + " " +"€")
    for (const color of teddy.colors){
        const option = document.createElement("option")
        option.setAttribute("value", color)
        option.innerHTML = color
        select.appendChild(option)
    }
})

/*Ajouter un article au panier*/

button.addEventListener("click", ()=> { 
    let panier = [];
    panier.push({
        name : teddy.name,
        price : teddy.price,
        id : teddy._id,
        color : select.value,
        quantity : 1,
    })
    localStorage.setItem("panier",JSON.stringify(panier))
    alert('Ajouté au panier !');
    window.location.reload();
})

