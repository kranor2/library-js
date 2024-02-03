let entry;

const myLibrary = [];

// step 2 - add object constructor, add each object to myLibrary

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const book = new Book(title, author, pages, read)
    myLibrary.push(book);
    console.log(myLibrary);
    console.log(myLibrary.indexOf(book));
}

// prevent default - enable use of dialog form method

document.getElementById("add-book").addEventListener("submit", function(event) {
    event.preventDefault();
    addBook(event);
})

// step 4 - add form and connect values to variables within object constructor

function addBook() {
    console.log("addBook function called");
    const title = document.getElementById("book-title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;
    const index = myLibrary.length;

    addBookToLibrary();
}

// step 3 - loop through array and display each book on the page

function displayBook() {
    const shelf = document.getElementById("shelf");
    shelf.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        const listing = document.createElement("div");
        listing.className = "listing";
        const book = myLibrary[i];
        listing.innerHTML = `
        <div class-"listing-start">
        <h2>${book.title}</h2>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p></div>
        <div class="listing-end"><p>Read: ${book.read ? `<input type="checkbox" id="read" checked>` : `<input type="checkbox" id="unread">`}</p>
        <button type="button" class="rmv-btn" data-index="${i}><i class="material-icons">delete</i></button></div>`
        ;
        shelf.insertBefore(listing, shelf.firstChild);
    }
}