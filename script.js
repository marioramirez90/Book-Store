const bookImg = "assets/img/book.png"
const fullHeart ="assets/icons/full-heart.png"
const emptyHeart ="assets/icons/empty-heart.png"
const buttenIcon ="assets/icons/papierflieger.png"

function renderBooks(i) {
  
  const bookRef = document.getElementById("book");
  bookRef.innerHTML = "";

    for (let i = 0; i< books.length; i++) {
      bookRef.innerHTML += renderTemplate(i) 
      renderComments(i)
    }
  }

function renderComments(BookIndex){ 
  let commentsRef = document.getElementById(`bookComments-${BookIndex}`);
  if (!commentsRef) return;
  const comments = books[BookIndex].comments;
  commentsRef.innerHTML = "";
  {
    if (!comments || comments.length === 0) {
      commentsRef.innerHTML += `<div class="commts-comment">kein Kommentare:schreibe du das erste</div>`;
    }else{ 

    for (let i = 0; i < books[BookIndex].comments.length; i++)
       commentsRef.innerHTML += CommentTemplate(BookIndex,i);
    }}
}

function toggellike(i){

  let heartRef = document.getElementById(`heart-${i}`);
  let likeRef = document.getElementById(`likes-${i}`)

  if (books[i].liked) {
    books[i].likes--
    books[i].liked = false;
    heartRef.src = emptyHeart; 
  }else{
    books[i].likes++
    books[i].liked = true;
    heartRef.src = fullHeart;
  }

  if(likeRef){
    likeRef.innerHTML = books[i].likes
  }
  saveToLocalStorage()
}

function addBookComment(BookIndex) {
  let inputRef = document.getElementById(`input-book-${BookIndex}`)
  let bookInput = inputRef.value;

  if (bookInput) {
    books[BookIndex].comments.unshift({
  name: "Albert",
  comment: bookInput});
  inputRef.value =""

renderComments(BookIndex);
  }else{
  return alert("Bitte schreibe einen Kommentar!") ;
  }
 saveToLocalStorage()
}

function saveToLocalStorage(){
  localStorage.setItem("books",JSON.stringify(books));
}

function getFromLocalStorage(){
  let BookItem = localStorage.getItem("books")
  if(BookItem){
    books = JSON.parse(BookItem)
  }
}
getFromLocalStorage();
renderBooks();
