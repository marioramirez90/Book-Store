const bookImg = "assets/img/book.png"
const fullHeart ="assets/img/full-heart.png"
const emptyHeart ="assets/img/empty-heart.png"


function renderBooks() {
  const bookRef = document.getElementById("book");
  bookRef.innerHTML = "";
    for (let i = 0; i< books.length; i++) {
      bookRef.innerHTML += ` <article class="Book-article">
    <header class="book-tittel">
      <h2>${books[i].name}</h2>
      <div class="white-line"></div>
      <img class="image-book" src="${bookImg}" alt="Bookimage">
      <div class="white-line"></div>
    </header>
    <section class="book-main">
    <div class="section-book-main-header">
      <span class="book-price">${books[i].price}€</span>
      <div class="image-heart"><span class="like-font">${books[i].likes}</span>
      <img 
      class="image-heart-toggel"
      src="${books[i].liked ? fullHeart : emptyHeart}"
      alt="heart"
      onclick="toggellike(${i})"
    >
  </div>
      

    </div>
   <table class="section-book-main">
  <tr>
    <td><strong>Author</strong></td>
    <td>:</td>
    <td>${books[i].author}</td>
  </tr>
  <tr>
    <td><strong>ErscheinungsJahr</strong></td>
    <td>:</td>
    <td>${books[i].publishedYear}</td>
  </tr>
  <tr>
    <td><strong>Genre</strong></td>
    <td>:</td>
    <td>${books[i].genre}</td>
  </tr>
</table>
    <div class="white-line"></div>
    <div class="section-book-bootom">
      <div class="book-comments">
        <h3>Komentare:</h3>
      </div>
      <div class="book-form">
       <section class="book-commentForm">${books[i].comments.name}</section>
       <div class="input-feld"><input class="book-input" type="text" placeholder="Schreibe dein Kommentar">
       <button class="btn" onclick=""></button></div>
       
      </div>
    </div>
    </section>
    </article>`;
    }
}
function toggellike(i){
  if (books[i].liked) {
    books[i].likes--
    books[i].liked = false;
  }else{
    books[i].likes++
    books[i].liked = true;

  }
renderBooks()
}
