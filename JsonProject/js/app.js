fetch("data/hokben.json")
    .then(response => response.json()) // membuat json menjadi object
    .then(data => {
        const cardMenu = document.getElementById('card-menu');
        const menu = data.menu
        menu.forEach((menu,i) => {
            cardMenu.innerHTML += card(menu)
            
        });
    }) // direct menu didalam object
    // .then(hasil => console.log(hasil)) // melihat isi object dari array menu
    

function card(menu){
    return `<div class="col mb-4">
              <div class="card" style="width: 18rem;">
                <img src="${menu.poster}" class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title">${menu.menu}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <h5 class="card-title">${menu.harga}</h5>
                  <a href="#" class="btn btn-primary">Detail</a>
                </div>
              </div>
            </div>`
}