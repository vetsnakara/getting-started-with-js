var bookShelf = new Bookshelf();

fakeAjax(addBooks);

function Bookshelf() {
  this.books = [];
};

Bookshelf.prototype.addBook = function(bookName) {
  if (bookName.toLowerCase().includes("great")) return;
  this.books.push(bookName);
};

Bookshelf.prototype.printBooks = function() {
  console.log(`Books: ${this.books.length}`);

  for (let book of this.books) {
    console.log(`Book title: ${book}`);
  }
}

function addBooks(books) {
  for (let book of books) {
    bookShelf.addBook(book);
  }

  bookShelf.printBooks();
}

function fakeAjax(cb) {
    setTimeout(function delay() {
      cb([
        "Book one",
        "Book two",
        "Book great three",
        "Book four",
        "Book five",
      ]);
    }, 1000);
};