let bookCollection = [];

function renderBooks() {
  const booksCollection = document.getElementById("books-content");
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((books) => {
      books.forEach((element) => {
        booksCollection.innerHTML += `<div class="card">
                    <img class="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap">
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                        <a href="#!" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>`;
      });
    });
}

window.onload = function () {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
    .then((response) => response.json())
    .then((musica) => {
      console.log(musica);
      const parent = document.getElementById("results");
      parent.innerHTML = musica
        .map(
          (musica) =>
            `<div class="card col-4" >
          <img src="${musica.data.cover}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${musica.data.title}</h5>
            <p class="card-text">Price ${musica.data.artist.name}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>`
        )
        .join("");
    });
};
