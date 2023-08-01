function discountApply(books) {
    const discount = 0.3;
    discountBook = books.map(book => {
        return {...book, preco: book.preco - (book.preco * discount)}
    })
    return discountBook;
}