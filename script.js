const bookImg = "assets/img/book.png"
const fullHeart ="assets/icons/full-heart.png"
const emptyHeart ="assets/icons/empty-heart.png"
const buttenIcon ="assets/icons/papierflieger.png"


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
    <h3>Kommentare:</h3>
    <div class="section-book-bootom">
      <div id="bookComments-${i}"></div>
    </div>
    </div>
     <div class="input-feld">
     <input id="input-book-${i}" class="book-input" type="text" placeholder="Schreibe dein Kommentar">
      <img class="btn" onclick="addBookComment(${i})" src="${buttenIcon}" alt="butten"></div>
    </section>
    </article>`;
  renderComments(i);
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

function renderComments(BookIndex){
  let commentsRef = document.getElementById(`bookComments-${BookIndex}`);
  if (!commentsRef) return;
  const comments = books[BookIndex].comments;
  commentsRef.innerHTML = "";
  {
    if (!comments || comments.length === 0) {
      commentsRef.innerHTML += `<div class="commts-comment">kein Kommentare;schreibe du das erste</div>`;
    }else{ 

    for (let i = 0; i < books[BookIndex].comments.length; i++)
       commentsRef.innerHTML += `
    <div class="commts-box">
    <div class="commts-name">[${books[BookIndex].comments[i].name}]</div>
    <div class="commts-comment">:${books[BookIndex].comments[i].comment}</div>
    </div>`;
    }}
}

function addBookComment(BookIndex) {
  let inputRef = document.getElementById(`input-book-${BookIndex}`)
  let bookInput = inputRef.value;

  if (bookInput) {
    books[BookIndex].comments.unshift({
  name: "Frederic",
  comment: bookInput
 
});
 inputRef.value =""
renderComments(BookIndex);
  }else{
    return alert("Bitte schreibe einen Kommentar!") ;
  }
 
}