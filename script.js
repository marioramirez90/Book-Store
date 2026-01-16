function renderBooks() {
    for (let i = 0; i< books.length; i++) {
      document.getElementById("book").innerHTML += `
        <p>${books[i].name}</p>`;
    }
}
