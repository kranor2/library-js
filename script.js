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

// step 3 - loop through array and display each book on the page

function displayBook() {
    const shelf = document.getElementById("shelf");
    shelf.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        const listing = document.createElement("div");
        listing.className = "listing";
        const book = myLibrary[i];
        shelf.insertBefore(listing, shelf.firstChild);
    }
}