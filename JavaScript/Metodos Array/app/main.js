let books = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBooksAPI();

async function getBooksAPI() {
    const response = await fetch(endpointAPI);
    books = await response.json();
    let discountedBook = discountApply(books);
    showBooks(discountedBook);
}