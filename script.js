const bookImg = "assets/img/book.png"

function renderBooks() {
    for (let i = 0; i< books.length; i++) {
      document.getElementById("book").innerHTML += ` <article class="Book-article">
    <header class="book-tittel">
      <h2>${books[i].name}</h2>
      <div class="white-line"></div>
      <img class="image-book" src="${bookImg}" alt="Bookimage">
      <div class="white-line"></div>
    </header>
    
    <section class="book-main">
    <div class="section-book-main-header">
      <span class="book-price">${books[i].price}€</span>
       <button onclick="toggleLike(${i})"
              class="${books[i].liked ? 'liked' : ''}">
              ❤ ${books[i].likes}
            </button>
    </div>

    <div class="section-book-main">
      <p class="book-author">Author :${books[i].author}</p>
      <p class="book-year">ErscheinungsJahr :${books[i].publishedYear}</p>
      <P class="genre">Genre :${books[i].genre}</P>
    </div>
    <div class="white-line"></div>
    <div class="section-book-bootom">
      <div class="book-comments">
        <h3>Komentare:</h3>
      </div>
      <div class="book-form">
       <section class="book-commentForm">${books[i].comments[name]}</section>
       <input class="book-input" type="text" placeholder="Schreibe dein Kommentar">
       <button class="btn" onclick=""></button>
      </div>
    </div>

    </section>
    </article>`;
    }
}
