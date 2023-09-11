let title;
let author;
let pages;
let hasRead;

const myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;

    this.info = function() {
        if(hasRead == true) return title + " by " + author + ", " + pages + " pages, read";
        else return title + " by " + author + ", " + pages + " pages, not read yet"
    }
}

function addBookToLibrary() {
    const book = new Book(title, author, pages, hasRead);
    myLibrary.push(book);
}

function showBooks() {
    for(i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
}