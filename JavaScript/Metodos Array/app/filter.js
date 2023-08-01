const btns = document.querySelectorAll('.btn');
btns.forEach(btn => btn.addEventListener('click', filterBooks));

function filterBooks() {
    const selectedBtn = document.getElementById(this.id);
    const selectedBtnCategory = selectedBtn.value;
    let filteredBooks = selectedBtnCategory == 'disponivel' ? filterByAvaliability() : filterByCategory(selectedBtnCategory);
    showBooks(filteredBooks);
    if (selectedBtnCategory == 'disponivel') {
        const amount = amountBooksAvailable(filteredBooks);
        showTotalPrice(amount);
    }
}

function filterByCategory(selectedBtnCategory) {
    return books.filter(book => book.categoria == selectedBtnCategory);
}

function filterByAvaliability() {
    return books.filter(book => book.quantidade > 0);
}

function showTotalPrice(amount) {
    availabilityBooksElement.innerHTML = 
    `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${amount}</span></p>
        </div>
    `
}