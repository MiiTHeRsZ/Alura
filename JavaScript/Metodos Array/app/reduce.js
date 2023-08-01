function amountBooksAvailable(books) {
    return books.reduce((acc, book) => acc + book.preco).toFixed(2);
}