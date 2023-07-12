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
const book4 = new Book("Robert Cecil Martin","Clean Code",464,"No",2008);

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
    const rmBtn = document.createElement("button");
    rmBtn.setAttribute('class',"removeBtn");
    bookDiv.appendChild(rmBtn);

    const rdBtn = document.createElement("button");
    rdBtn.setAttribute('class',"readBtn");
    bookDiv.appendChild(rdBtn);

    bookCards.appendChild(bookDiv);

});
}

addBooks();


//Add singular book function
function addBook(book) {

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
        const rmBtn = document.createElement("button");
        rmBtn.setAttribute('class',"removeBtn");
        bookDiv.appendChild(rmBtn);
    
        const rdBtn = document.createElement("button");
        rdBtn.setAttribute('class',"readBtn");
        bookDiv.appendChild(rdBtn);
    
        bookCards.appendChild(bookDiv);
    
    };
    

//grab readBtn and removeBtn to DOM.
//read Button to switch statu
let readButton = document.querySelectorAll(".readBtn");
readButton.forEach((button) => {

    button.addEventListener("mousedown",(button)=> {
    const divreadElement = button.target.parentElement;
    const ulRead = divreadElement.querySelector('ul :nth-child(4)');

    if (ulRead.textContent.includes("Yes")||ulRead.textContent.includes("yes")) {
    //change in actual myLibrary array
        const index = divreadElement.id;
        myLibrary[index].read= "No";
    
    //display if read or not in html
        ulRead.textContent = "read: " + myLibrary[index].read;
        

    } else if (ulRead.textContent.includes("No")||ulRead.textContent.includes("no")) {

        //change in actual myLibrary array
        const index = divreadElement.id;
        myLibrary[index].read= "Yes";
       
       //display if read or not in html
           ulRead.textContent = "read: " + myLibrary[index].read;
        
           
    }

})});


let removeButton = document.querySelectorAll(".removeBtn");
removeButton.forEach((button) =>    { 

    button.addEventListener("mousedown",(button)=> {
    const divElement = button.target.parentElement;
    const index=divElement.id;
    //remove from actual library array
    myLibrary.splice(index,1)
    //remove from HTML
    divElement.remove();
})});


//new book form/button
const newBtn = document.getElementById("newBook");

const form = document.getElementById("popupForm");

newBtn.addEventListener("mousedown", () => {
    //unhide form
    form.setAttribute('class','formDisplay')
}
)

//select radio buttons

const radios = document.getElementsByName("read");



//On submit, hide form and add new book to myLibrary. Add to cards as well
const submitFormButton = document.getElementById("submitButton");

function handleForm(event) {
    event.preventDefault();
    let radioChoice= "";
//Run through nodelist of radio controls and see which are checked
    radios.forEach(radio => {
        if (radio.checked) {radioChoice = radio.value;}
    })

    const newBook = new Book(author.value,title.value,pages.value,radioChoice,year.value);
    myLibrary.push(newBook);
    addBook(newBook);

//Reload buttons for remove and read since a card was added
removeButton = document.querySelectorAll(".removeBtn");
readButton = document.querySelectorAll(".readBtn");
    form.setAttribute('class','formHidden');
}

form.addEventListener('submit',handleForm);

