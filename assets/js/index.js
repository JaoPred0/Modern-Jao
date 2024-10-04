// Função para alternar entre os temas e salvar no localStorage
function tema() {
    const body = document.body;
    const temaAtual = body.getAttribute("data-bs-theme");

    // Alternar entre os temas
    if (temaAtual === "dark") {
        body.setAttribute("data-bs-theme", "light");
        localStorage.setItem("tema", "light");
    } else {
        body.setAttribute("data-bs-theme", "dark");
        localStorage.setItem("tema", "dark");
    }
}

// Função para carregar o tema salvo no localStorage
function carregarTema() {
    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo) {
        document.body.setAttribute("data-bs-theme", temaSalvo);
    }
}

// Carregar o tema ao iniciar a página
carregarTema();