class book {
    #isbn;

    constructor(isbn, title, author,){
        this.#isbn = isbn;
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }

    getIsbn(){
        return this.#isbn;
    }

    borrowBook(){
        this.isAvailable = false;
    }

    returnBook(){
        this.isAvailable = true;
    }
}

class fiction extends book {
    constructor(isbn, title, author, genre){
        super(isbn, title, author);
        this.genre = genre;
    }
}

class philosophy extends book {
    constructor(isbn, title, author, genre){
        super(isbn, title, author);
        this.genre = genre;
    }
}

class member {
    #id;

    constructor(id, name){
        this.#id = id;
        this.name = name;
        this.borrowedBooks = [];
    }

    borrow(book){
       if (book.isAvailable === true){
            borrowBook();
            this.borrowedBooks += book;
       }
    }
    
    return(book){
        if (book.isAvailable === false) {
            returnBook();
            this.borrowedBooks -= book;
        }
    }
}

class library {
    constructor(){
        this.books = [];
        this.members = [];
    }

    addBook(book){
        console.log(`added: ${book.title} by ${book.author}`)
        this.books.push(book);
    }

    removeBook(isbn){
        const index = this.books.findIndex(book => book.isbn === isbn);

    // 2. Jika indeks ditemukan (tidak bernilai -1)
    if (index !== -1) {
        this.books.splice(index, 1); // Hapus 1 elemen pada posisi 'index'
        console.log("Buku berhasil dihapus.");
    } else {
        console.log("Buku tidak ditemukan.");
    }
    }

    registerMember(member){
        console.log(`Welcome ${member.name}!`)
        this.members.push(member);
    }

    availableBooks(){
        console.log("== Available books ==")
        for (const book of this.books) {
            if (book.isAvailable) {
                console.log(`${book.title} by ${book.author}`)
            }
        }
    }
}

const myLibrary = new library();
const book1 = new fiction(123, "Harry Potter", "JK. Rowling", "Fantasy");
const book2 = new philosophy(456, "Stoicim", "Marcus Aurelius", "Philosophy");
const member1 = new member(1, "Arfa");

myLibrary.registerMember(member1)

myLibrary.addBook(book1)
myLibrary.addBook(book2)
myLibrary.availableBooks()

myLibrary.removeBook(book1)
myLibrary.availableBooks()