const myLibrary = [];
const card = document.querySelector('#progenitor-card');
const cardDiv = document.querySelector('#cardsDiv');

const dialogSubmit = document.querySelector("#dialogSubmit")

function Book(name, description) {
    this.name = name;
    this.description = description;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(name, description, author, pageno) {
    newBook = new Book(name, description);
    myLibrary.push(newBook);
    displayBook(name, description, author, pageno);
}

function displayBook(name, description, author, pageno) {
    const clonedCard = card.cloneNode(true);
    clonedCard.id = null;
    cardDiv.appendChild(clonedCard);

    const title = clonedCard.querySelector('h4');
    title.textContent = name;

    const desc = clonedCard.querySelector('p');
    desc.textContent = description;

    const authorName = clonedCard.querySelector('h5');
    authorName.textContent = `By: ${author}`

    const pageNo = clonedCard.querySelector('h6');
    pageNo.textContent = `Number of pages: ${pageno}`
}

const newButton = document.querySelector("#New");

dialogSubmit.addEventListener('click', event => {
    event.preventDefault();
    const form = document.querySelector("#dialogForm");

    const name = form.elements["name"].value;
    const desc = form.elements["desc"].value;
    const author = form.elements["author"].value;
    const pageno = form.elements["page-no"].value;

    addBookToLibrary(name, desc, author, pageno);
    
    const dialog = document.querySelector("dialog");
    dialog.close();
})

addBookToLibrary(
    "Template Book",
    "A template for how the books look like! Press the new button at the bottom right corner of the header to add more books!",
    "BassWood",
    "3000"
)