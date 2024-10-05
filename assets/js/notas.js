document.addEventListener('DOMContentLoaded', carregarNotas);

let notaAtualIndex = null;

function salvarNota() {
    const titulo = document.getElementById('titulo').value;
    const subtitulo = document.getElementById('subtitulo').value;
    const conteudo = document.getElementById('conteudo').value;
    const dataHora = new Date().toLocaleString();

    if (titulo && conteudo) {
        const nota = { titulo, subtitulo, conteudo, dataHora, nova: true };
        let notas = JSON.parse(localStorage.getItem('notas')) || [];

        if (notaAtualIndex !== null) {
            notas[notaAtualIndex] = nota;  // Edita nota existente
            notaAtualIndex = null;
        } else {
            notas.unshift(nota);  // Adiciona nova nota no topo
        }

        localStorage.setItem('notas', JSON.stringify(notas));
        carregarNotas();
        document.getElementById('formNota').reset();
        document.querySelector('.btn-close').click(); // Fechar modal
    }
}

function carregarNotas() {
    const notas = JSON.parse(localStorage.getItem('notas')) || [];
    const notasContainer = document.getElementById('notasContainer');
    const semNotas = document.getElementById('semNotas');

    notasContainer.innerHTML = '';
    if (notas.length === 0) {
        semNotas.style.display = 'block';
    } else {
        semNotas.style.display = 'none';
        notas.forEach((nota, index) => {
            const novaBadge = nota.nova ? `
            <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span class="visually-hidden">New alerts</span>
            </span>` : '';

            const card = `
                <div class="d-flex justify-content-between align-items-center mt-2 position-relative">
                    <div class="container d-flex justify-content-between align-items-center border border-primary p-2 rounded animate__animated animate__fadeIn"
                         onclick="visualizarNota(${index})">
                        <div class="title-nota">
                            <h5 class="m-0">${nota.titulo}</h5>
                            <span> - ${nota.subtitulo}</span>
                        </div>
                    </div>
                    ${novaBadge}
                </div>
            `;
            notasContainer.innerHTML += card;
        });
    }
}

function visualizarNota(index) {
    const notas = JSON.parse(localStorage.getItem('notas'));
    const nota = notas[index];

    document.getElementById('notaTitulo').textContent = nota.titulo;
    document.getElementById('notaSubtitulo').textContent = nota.subtitulo;
    document.getElementById('notaConteudo').textContent = nota.conteudo;
    document.getElementById('notaData').textContent = `Criado em: ${nota.dataHora}`;

    nota.nova = false;
    localStorage.setItem('notas', JSON.stringify(notas));

    document.getElementById('notasContainer').style.display = 'none';
    document.getElementById('verNotas').style.display = 'block';
    carregarNotas(); // Atualiza as notas para remover a badge
}

function voltar() {
    document.getElementById('notasContainer').style.display = 'block';
    document.getElementById('verNotas').style.display = 'none';
}

function excluirNota(index) {
    let notas = JSON.parse(localStorage.getItem('notas'));
    notas.splice(index, 1);
    localStorage.setItem('notas', JSON.stringify(notas));
    carregarNotas();
    voltar();
}

function editarNota(index) {
    const notas = JSON.parse(localStorage.getItem('notas'));
    const nota = notas[index];

    document.getElementById('titulo').value = nota.titulo;
    document.getElementById('subtitulo').value = nota.subtitulo;
    document.getElementById('conteudo').value = nota.conteudo;

    notaAtualIndex = index;

    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
}
