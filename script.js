const bookImg = "assets/img/book.png"
const fullHeart ="assets/icons/full-heart.png"
const emptyHeart ="assets/icons/empty-heart.png"
const buttenIcon ="assets/icons/papierflieger.png"


function toggellike(i){
  if (books[i].liked) {
    books[i].likes--
    books[i].liked = false;
  }else{
    books[i].likes++
    books[i].liked = true;
  }
  saveToLocalStorage()
  renderBooks()
}

function addBookComment(BookIndex) {
  let inputRef = document.getElementById(`input-book-${BookIndex}`)
  let bookInput = inputRef.value;

  if (bookInput) {
    books[BookIndex].comments.unshift({
  name: "Frederic",
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
getFromLocalStorage()