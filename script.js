const myLibrary = [];
const form = document.querySelector("form");
const title = document.getElementById("book-title").value;
const titleInput = document.getElementById("book-title");
const author = document.getElementById("author").value;
const authorInput = document.getElementById("author");
const pages = document.getElementById("pages").value;
const pagesInput = document.getElementById("pages");
const read = document.getElementById("read").checked;
const index = myLibrary.length;
const titleErrorMsg = document.getElementById("title-error");
const authorErrorMsg = document.getElementById("author-error");
const pagesErrorMsg = document.getElementById("pages-error");

// step 2 - add object constructor, add each object to myLibrary

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// prevent default - enable use of dialog form method

document.getElementById("add-book").addEventListener("submit", function(event) {
    event.preventDefault();
    addBook(event);
})

// step 4 - add form and connect values to variables within object constructor

function addBook() {
    console.log("addBook function called");

    let addBookToLibrary = new Book(title, author, pages, read, index);
    myLibrary.push(addBookToLibrary)
    document.getElementById("add-book").reset();
    displayBook();
}

// refactor => add form validation

form.addEventListener("submit", (event) => {
    if (!titleInput.validity.valid) {
        titleError();
        event.preventDefault();
    } else if (!authorInput.validity.valid) {
        authorError();
        event.preventDefault();
    } else if (!pagesInput.validity.valid) {
        pagesError();
        event.preventDefault();
    }
});

titleInput.addEventListener("input", (event) => {
    if (titleInput.validity.valid) {
        titleErrorMsg.textContent = "";
        titleErrorMsg.className = "error";
    } else {
        titleError();
    }
});

function titleError() {
    if (titleInput.validity.valueMissing) {
        titleErrorMsg.textContent = "What is the title of the book?";
    } else if (titleInput.validity.tooShort) {
        titleErrorMsg.textContent = "Please enter the complete title of the book.";
    }

    titleErrorMsg.className = "error active";
}

authorInput.addEventListener("input", (event) => {
    if (authorInput.validity.valid) {
        authorErrorMsg.textContent = "";
        authorErrorMsg.className = "error"
    } else {
        authorError();
    }
})

function authorError() {
    if (authorInput.validity.valueMissing) {
        authorErrorMsg.textContent = "What is the author's name?";
    } else if (authorInput.validity.tooShort) {
        authorErrorMsg.textContent = "Please enter the author's full name.";
    }

    authorErrorMsg.className = "error active";
}

pagesInput.addEventListener("input", (event) => {
    if (pagesInput.validity.valid) {
        pagesErrorMsg.textContent = "";
        pagesErrorMsg.className = "error";
    } else {
        pagesError();
    }
});

function pagesError() {
    if (pagesInput.validity.valueMissing) {
        pagesErrorMsg.textContent = "How many pages does this book/edition have?";
    } else if (pagesInput.value = "0") {
        pagesErrorMsg.textContent = "Please enter a valid number of pages.";
    } else if (pagesInput.validity.typeMismatch) {
        pagesErrorMsg.textContent = "Please enter a number.";  
    }

    pagesErrorMsg.className = "error active";
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
        <div class= "listing-start">
        <h2>${book.title}</h2>
        <p>Author:  ${book.author}</p>
        <p>Pages:  ${book.pages}</p></div>
        <div class="listing-end"><p class="status">Read:  ${book.read ? `<input type="checkbox" id="read" checked>` : `<input type="checkbox" id="unread">`}</p>
        <button type="button" class="rmv-btn" data-index="${i}"><i class="material-icons">delete</i></button></div>`    
        ;
        shelf.insertBefore(listing, shelf.firstChild);
    }
    const removeBtns = document.getElementsByClassName("rmv-btn");
    for (let btn of removeBtns) {
        btn.addEventListener("click", function() {
            const index = this.getAttribute("data-index");
            myLibrary.splice(index, 1);
            displayBook();
        });
    }
}