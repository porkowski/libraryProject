let myLibrary = [];

function Book(author,title,pages,read,year) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.year = year;
}

Book.prototype.addBookToLibrary= function () {
    myLibrary.push(this);
};



const book1 = new Book("Eckhart Tolle","The Power Of Now",236,"Yes",1997);
const book2 = new Book("Sun Tzu","The Art Of War",288,"Yes","221 B.C.E");
const book3 = new Book("Benjamin Graham", "The Intelligent Investor",640,"No",1949);
const book4 = new Book("Robert Cecil Martin","Clean Code",464,"No",2008)

//Add pre-loaded books to Library array
book1.addBookToLibrary();
book2.addBookToLibrary();
book3.addBookToLibrary();
book4.addBookToLibrary();

// grab cards div to DOM
const bookCards = document.getElementById("bookCards");

function addBooks() {

myLibrary.forEach((book) => {
    //Create a div/card for each book in my library
    const bookDiv = document.createElement("div");
    bookDiv.setAttribute('id',myLibrary.indexOf(book));

    //Create ul element
    const propList = document.createElement("ul");
    bookDiv.appendChild(propList);

        for(const key in book) {
            // This conditional to remove any methods added to prototype
            if (book.hasOwnProperty(key)) {

                const bookKey = document.createElement("li");
                bookKey.textContent = `${key}: ${book[key]}`;
                propList.appendChild(bookKey);
            };
        };

    bookCards.appendChild(bookDiv);

});
}

addBooks();