const container = document.getElementById("container");

fetch(api)
.then ((response) => response.json())
.then((teddies) => {
    console.log(teddies);
    for(const teddy of teddies) {
        container.innerHTML += `
        <div class="card">
            <img class="thumbnail" src="${teddy.imageUrl}" alt="">
            <div><h1>${teddy.name}</h1></div>
            <p class="description">${teddy.description}</p>
            <a class="bouton" href="produit.html?id=${teddy._id}" > Voir </a>
        </div>
        `;
    }
})