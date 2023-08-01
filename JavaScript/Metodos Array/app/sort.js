let btnOrderByPrice = document.getElementById('btnOrdenarPorPreco');
btnOrderByPrice.addEventListener('click', orderByPrice);

function orderByPrice() {
    let orderedBooks = books.sort((a, b) => a.preco - b.preco);
    showBooks(orderedBooks);
}
