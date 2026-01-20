
function renderTemplate(i){
  return` <article class="Book-article">
    <header class="book-tittel">
      <h2>${books[i].name}</h2>
      <div class="white-line"></div>
      <img class="image-book" src="${bookImg}" alt="Bookimage">
      <div class="white-line"></div>
    </header>
    <section class="book-main">
    <div class="section-book-main-header">
      <span class="book-price">${books[i].price.toFixed(2)}€</span>
      <div class="image-heart"><span id="likes-${i}" class="like-font">${books[i].likes}</span>
      <img 
      id="heart-${i}"
      class="image-heart-toggel"
      src="${books[i].liked ? fullHeart : emptyHeart}"
      alt="heart"
      onclick="toggellike(${i})">
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
    }

    function CommentTemplate(BookIndex,i) {
      return `
    <div class="commts-box">
    <div class="commts-name">[${books[BookIndex].comments[i].name}]</div>
    <div class="commts-comment">:${books[BookIndex].comments[i].comment}</div>
    </div>`;
    }


   




