const searchBar = document.getElementById('search-bar')
const searchButton = document.getElementById('search-button')
const cardFilm = document.getElementById('card-film')


function searchMovie(){

        const url = "http://www.omdbapi.com/?apikey=ee6e8b41&s=" + searchBar.value 
        fetch(url)
            .then(response => response.json())
            .then(daftar => daftar.Search)
            .then(data => {
                data.forEach(isi => {
                    cardFilm.innerHTML += card(isi)
                });
            })
}

searchButton.addEventListener('click', function(){
    searchMovie()
})

searchBar.addEventListener('keyup', function(c){
    if(c.key === 'Enter'){
        searchMovie()
    }
})


function card(film){
    return `<div class="card m-4" style="width: 18rem;">
            <img src="${film.Poster}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${film.Title}</h5>
              <p class="card-text">${film.Year}</p>
              <h1 class="card-text">${film.Type}</h1>
            </div>
          </div>`
}

