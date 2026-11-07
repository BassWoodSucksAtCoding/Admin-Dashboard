const myLibrary = [];
const card = document.querySelector('#progenitor-card');
const cardDiv = document.querySelector('#cardsDiv');

const dialogSubmit = document.querySelector("#dialogSubmit")

function Book(name, description, author, pageno) {
    this.name = name;
    this.description = description;
    this.id = crypto.randomUUID();
    this.author = author
    this.pageno = pageno
}

function addBookToLibrary(name, description, author, pageno) {
    newBook = new Book(name, description, author, pageno);
    myLibrary.push(newBook);
    displayBook(newBook);
}

function displayBook(book) {
    const clonedCard = card.cloneNode(true);
    clonedCard.id = null;
    cardDiv.appendChild(clonedCard);

    const title = clonedCard.querySelector('h4');
    title.textContent = book.name;

    const desc = clonedCard.querySelector('p');
    desc.textContent = book.description;

    const authorName = clonedCard.querySelector('h5');
    authorName.textContent = `By: ${book.author}`

    const pageNo = clonedCard.querySelector('h6');
    pageNo.textContent = `Number of pages: ${book.pageno}`
}

const newButton = document.querySelector("#New");

dialogSubmit.addEventListener('click', event => {
    event.preventDefault();
    const form = document.querySelector("#dialogForm");

    const name = form.elements["name"].value;
    const desc = form.elements["desc"].value;
    const author = form.elements["author"].value;
    const pageno = form.elements["page-no"].value;

    if (!(name === "" || desc === "" || author === "" || pageno === "")) {
        addBookToLibrary(name, desc, author, pageno);
    
        const dialog = document.querySelector("dialog");
        dialog.close();
    }    
})

addBookToLibrary(
    "Template Book",
    "A template for how the books look like! Press the new button at the bottom right corner of the header to add more books!",
    "BassWood",
    "3000"
)

const save = document.querySelector('#save'); 

save.addEventListener('click', event => { 
  save.src = 'Images/trash-can-outline.svg'; 
});
