const livros = [
    { title: "Ebook 1", description: "Sobre o Livro 1", image: "https://fakeimg.pl/3000x2000/?text=Ebook+1" },
    { title: "Ebook 2", description: "Sobre o Livro 2", image: "https://fakeimg.pl/3000x2000/?text=Ebook+2" },
    { title: "Ebook 3", description: "Sobre o Livro 3", image: "https://fakeimg.pl/3000x2000/?text=Ebook+3" },
    { title: "Ebook 4", description: "Sobre o Livro 4", image: "https://fakeimg.pl/3000x2000/?text=Ebook+4" },
    { title: "Ebook 5", description: "Sobre o Livro 5", image: "https://fakeimg.pl/3000x2000/?text=Ebook+5" },
    { title: "Ebook 6", description: "Sobre o Livro 6", image: "https://fakeimg.pl/3000x2000/?text=Ebook+6" },
    { title: "Ebook 7", description: "Sobre o Livro 7", image: "https://fakeimg.pl/3000x2000/?text=Ebook+7" },
    { title: "Ebook 8", description: "Sobre o Livro 8", image: "https://fakeimg.pl/3000x2000/?text=Ebook+8" },
    { title: "Ebook 9", description: "Sobre o Livro 9", image: "https://fakeimg.pl/3000x2000/?text=Ebook+9" },
    { title: "Ebook 10", description: "Sobre o Livro 10", image: "https://fakeimg.pl/3000x2000/?text=Ebook+10" },
    { title: "Ebook 11", description: "Sobre o Livro 11", image: "https://fakeimg.pl/3000x2000/?text=Ebook+11" },
    { title: "Ebook 12", description: "Sobre o Livro 12", image: "https://fakeimg.pl/3000x2000/?text=Ebook+12" },
    { title: "Ebook 13", description: "Sobre o Livro 13", image: "https://fakeimg.pl/3000x2000/?text=Ebook+13" },
    { title: "Ebook 14", description: "Sobre o Livro 14", image: "https://fakeimg.pl/3000x2000/?text=Ebook+14" },
    { title: "Ebook 15", description: "Sobre o Livro 15", image: "https://fakeimg.pl/3000x2000/?text=Ebook+15" },
    { title: "Ebook 16", description: "Sobre o Livro 16", image: "https://fakeimg.pl/3000x2000/?text=Ebook+16" }
];

let currentIndex = 0;
const booksPerPage = 8;

// Função para criar um card de livro
function createCard(livro) {
    return `
        <div class="card appear" style="width: 18rem;">
            <img src="${livro.image}" class="card-img-top" alt="${livro.title}">
            <div class="card-body">
                <h5 class="card-title">${livro.title}</h5>
                <p class="card-text">${livro.description}</p>
                <a href="#" class="btn btn-primary">Abaixar</a>
            </div>
        </div>`;
}

// Função para exibir os livros
function displayBooks() {
    const cardContainer = document.getElementById('cardContainer');
    const filteredBooks = livros.slice(0, currentIndex + booksPerPage);

    cardContainer.innerHTML = filteredBooks.map(createCard).join('');
    currentIndex += booksPerPage;

    // Se não houver mais livros a mostrar, ocultar o botão
    if (currentIndex >= livros.length) {
        document.getElementById('loadMoreBtn').style.display = 'none';
    }
}

// Função de pesquisa
document.getElementById('searchInput').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const cardContainer = document.getElementById('cardContainer');
    const filteredBooks = livros.filter(livro => livro.title.toLowerCase().includes(searchTerm));

    cardContainer.innerHTML = filteredBooks.slice(0, currentIndex).map(createCard).join('');

    // Mostrar ou ocultar o botão "Mostrar mais" com base na pesquisa
    if (filteredBooks.length > currentIndex) {
        document.getElementById('loadMoreBtn').style.display = 'block';
    } else {
        document.getElementById('loadMoreBtn').style.display = 'none';
    }
});

// Botão para carregar mais livros
document.getElementById('loadMoreBtn').addEventListener('click', displayBooks);

// Exibir os primeiros 8 livros ao carregar a página
displayBooks();