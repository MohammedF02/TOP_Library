

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}



const openButton = document.querySelector("[data-open-modal]");
const modal = document.querySelector("[data-modal]");

openButton.addEventListener("click", () => {
    modal.showModal();
});

modal.addEventListener("click", e => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        modal.close();
    }
});

const booksContainer = document.getElementById('books-container');

function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const hasRead = document.getElementById('has-read').checked;

    if (title === '' || author === '' || pages === '' || hasRead === null) {
        alert('Please fill in all the required fields.');
        return;
    }

    document.getElementById('add-book-form').reset();
    return new Book(title, author, pages, hasRead);
}

function createBookCard(book) {
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const cardButtons = document.createElement('div');
    const readButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    bookCard.classList.add('book-card');
    cardButtons.classList.add('card-buttons');
    readButton.classList.add('read-button');
    deleteButton.classList.add('delete-button');

    title.textContent = `${book.title}`;
    author.textContent = `${book.author}`;
    pages.textContent = `${book.pages} pages`;
    deleteButton.textContent = 'Delete';

    if (book.hasRead) {
        readButton.textContent = 'Read';
        readButton.classList.add('greenButton');
    } else {
        readButton.textContent = 'Not Read';
        readButton.classList.add('redButton');
    }

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    cardButtons.appendChild(readButton);
    cardButtons.appendChild(deleteButton);
    bookCard.appendChild(cardButtons);
    booksContainer.appendChild(bookCard);

    deleteButton.addEventListener('click', () => {
        bookCard.parentNode.removeChild(bookCard);
    });

    readButton.addEventListener('click', () => {
        if (book.hasRead) {
            book.hasRead = false;
            readButton.textContent = 'Not Read';
            readButton.classList.remove('greenButton');
            readButton.classList.add('redButton');
        } else {
            book.hasRead = true;
            readButton.textContent = 'Read';
            readButton.classList.remove('redButton');
            readButton.classList.add('greenButton');
        }
    });
}

const addBook = () => {
    const book = addBookToLibrary();

    // myLibrary.push(book);
    createBookCard(book);
}



const submitButton = document.getElementById('submit-button');

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    addBook();

    modal.close();
});