// aparecer o home 
view.innerHTML = viewHome()

function display(id) {
    var view = document.getElementById("view");
    // colocar dentro da div view um codigo html gigante

    if (id == 'home') {
        view.innerHTML = viewHome()
    } else if (id == 'ifms') {
        view.innerHTML = viewIFMS()
    } else if (id = 'Code Developer'){
        view.innerHTML = viewCodeDeveloper()
    }
}

function viewHome() {
    const view = `<div class="container text-start">
                                <h1 class="fs-2">Home</h1>
                                <!-- IFMS -->
                                <div>
                                    <div class="sub-title-view d-flex ">
                                        <i class="ri-graduation-cap-line icon-view"></i>
                                        <span>IFMS</span>
                                    </div>
                                    <div class="body-view ">
                                        <div class="card mt-3">
                                            <div class="card-header">
                                                INFO 4C - Matutino
                                            </div>
                                            <div class="card-body">
                                                <blockquote class="blockquote mb-0">
                                                    <p>João Pedro Cristaldo Ferraz, Estudante do Instituto Federal de
                                                        Mato
                                                        Grosso do Sul, Cursando Tecnico de Informática.</p>
                                                    <footer class="blockquote-footer">IFMS 2024<cite
                                                            title="Source Title"></cite></footer>
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mt-3 ">
                                        <div class="col-sm-6 mb-3 mb-sm-0">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">Horários</h5>
                                                    <p class="card-text">Horários de aulas e atividades das turmas INFO
                                                        4C e
                                                        INFO 2C, organizados de forma clara para facilitar o
                                                        acompanhamento
                                                        e planejamento dos estudos.</p>
                                                    <a onclick="display('ifms')" class="btn btn-outline-primary">Acessar Horários</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                
                                <!-- notas -->
                                <div>
                                    <div class="sub-title-view d-flex ">
                                        <i class="ri-information-2-line icon-view"></i>
                                        <span>Notas de Atualizações</span>
                                    </div>
                                    <div class="body-view ">
                                        <div class="card text-center mt-3">
                                            <div class="card-header">
                                                Atualização
                                            </div>
                                            <div class="card-body">
                                                <h5 class="card-title">Beta 1.0</h5>
                                                <!-- <p class="card-text">
                                                </p> -->
                                            </div>
                                            <div class="card-footer text-body-secondary">
                                                V - 0.1.8
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`
    return view;
}

function viewIFMS() {
    const view = `<div class="container text-start">
    <h1 class="fs-2 d-flex"><i class="ri-graduation-cap-line icon-view-title"></i>IFMS</h1>
    <!-- IFMS -->
    <div>
        <div class="sub-title-view d-flex">

            <span></span>
        </div>
        <div class="body-view ">
            <div class="card mt-3">
                <div class="card-header">
                    <i class="ri-information-2-line"></i> Sobre
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>Dados de Informações da Escola.</p>
                        <footer class="blockquote-footer"><cite title="Source Title"><a
                                    href="404.html">Acessar</a></cite></footer>
                    </blockquote>
                </div>
            </div>
        </div>
        <hr>
        <!-- Horário -->
        <div class="mt-3 ">
            <h4 class="fs-3"><i class="ri-time-line"></i> Horário</h4>
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <!-- Horário Matutino -->
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOneIFMSHorario"
                            aria-expanded="false"
                            aria-controls="flush-collapseOneIFMSHorario">
                            Horário Matutino
                        </button>
                    </h2>
                    <div id="flush-collapseOneIFMSHorario"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <div class="table-responsive mb-5">
                                <table
                                    class="table table-bordered table-striped">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>Hora</th>
                                            <th>Segunda</th>
                                            <th>Terça</th>
                                            <th>Quarta</th>
                                            <th>Quinta</th>
                                            <th>Sexta</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>07:00 - 7:45</td>
                                            <td>LPLB 2 (sala 04)</td>
                                            <td>FÍSICA 2 (sala 04)</td>
                                            <td>HISTÓRIA 4 (sala 10)</td>
                                            <td></td>
                                            <td>ESPANHOL TÉCNICO (sala 10)</td>
                                        </tr>
                                        <tr>
                                            <td>07:45 - 08:30</td>
                                            <td>LPLB 2 (sala 04)</td>
                                            <td>FÍSICA 2 (sala 04)</td>
                                            <td></td>
                                            <td></td>
                                            <td>ESPANHOL TÉCNICO (sala 10)</td>
                                        </tr>
                                        <tr>
                                            <td>08:30 - 09:15</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>09:35 - 10:20</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>HISTÓRIA 4 (sala 10)</td>
                                            <td>SOCIOLOGIA 2 (sala 04)6</td>
                                        </tr>
                                        <tr>
                                            <td>10:20 - 11:05</td>
                                            <td></td>
                                            <td></td>
                                            <td>EMPREENDEDORISMO E INOVAÇÃO (sala 10)</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>11:05 - 11:50</td>
                                            <td></td>
                                            <td></td>
                                            <td>EMPREENDEDORISMO E INOVAÇÃO (sala 10)</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>11:50 - 12:35</td>
                                            <td>FÍSICA 2 (sala 04)</td>
                                            <td>LPLB 2 (sala 04)</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Horário Vespertino -->
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwoIFMSHorario"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwoIFMSHorario">
                            Horário Vespertino
                        </button>
                    </h2>
                    <div id="flush-collapseTwoIFMSHorario"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <div class="table-responsive mb-5">
                                <table class="table table-bordered table-striped">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>Hora</th>
                                            <th>Segunda</th>
                                            <th>Terça</th>
                                            <th>Quarta</th>
                                            <th>Quinta</th>
                                            <th>Sexta</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>13:00 - 13:45</td>
                                            <td>Matemática 4</td>
                                            <td>Server-side</td>
                                            <td>Ed. Física 4</td>
                                            <td>Biologia 2</td>
                                            <td>Redes de Comp.</td>
                                        </tr>
                                        <tr>
                                            <td>13:45 - 14:30</td>
                                            <td>Matemática 4</td>
                                            <td>Server-side</td>
                                            <td>Ed. Física 4</td>
                                            <td>Biologia 2</td>
                                            <td>Redes de Comp.</td>
                                        </tr>
                                        <tr>
                                            <td>14:30 - 15:15</td>
                                            <td>BD 1</td>
                                            <td>Geografia 4</td>
                                            <td>APSW 1</td>
                                            <td>Química 3</td>
                                            <td>Sociologia 4</td>
                                        </tr>
                                        <tr>
                                            <td>15:35 - 16:20</td>
                                            <td>Sociologia 4</td>
                                            <td>Geografia 4</td>
                                            <td>APSW 1</td>
                                            <td>Química 3</td>
                                            <td>Filosofia 4</td>
                                        </tr>
                                        <tr>
                                            <td>16:20 - 17:05</td>
                                            <td>Física 4</td>
                                            <td>Filosofia 4</td>
                                            <td>Matemática 4</td>
                                            <td>LPLB 4</td>
                                            <td>História 2</td>
                                        </tr>
                                        <tr>
                                            <td>17:05 - 17:50</td>
                                            <td>Física 4</td>
                                            <td>Química 3</td>
                                            <td>LEM 4</td>
                                            <td>LPLB 4</td>
                                            <td>História 2</td>
                                        </tr>
                                        <tr>
                                            <td>17:50 - 18:35</td>
                                            <td>Sociologia 4</td>
                                            <td>LEM 4</td>
                                            <td>LPLB 4</td>
                                            <td>Server-side</td>
                                            <td>Física 4</td>
                                        </tr>
                                        <tr>
                                            <td>18:35 - 19:20</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>Server-side</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Horário Noturno -->
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThreeIFMSHorario"
                            aria-expanded="false"
                            aria-controls="flush-collapseThreeIFMSHorario">
                            Horário Noturno
                        </button>
                    </h2>
                    <div id="flush-collapseThreeIFMSHorario"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <div class="table-responsive mb-5">
                                <table
                                    class="table table-bordered table-striped">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>Hora</th>
                                            <th>Segunda</th>
                                            <th>Terça</th>
                                            <th>Quarta</th>
                                            <th>Quinta</th>
                                            <th>Sexta</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>19:30 - 20:15</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>20:15 - 21:20</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>21:20 - 22:30</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>22:30 - 23:00</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <!-- notas -->
        <div class="mt-3 ">
            <h4 class="fs-3"><i class="ri-sticky-note-line"></i> Notas </h4>
            <p class="card-text">Bloco de notas destinado ao armazenamento de
                informações e anotações, preparado para ser utilizado em
                diversas
                finalidades e situações, conforme necessário.</p>
            <a href="notas.html" class="btn btn-outline-primary">Acessar Bloco de
                Notas</a>
        </div>
    </div>
    <hr>
    <div class="mt-3 text-center">
        <p>IFMS 2024 - INFO 4C</p>
    </div>
</div>`
    return view;
}

function viewCodeDeveloper() {
    const view = `<div class="container text-start">
                                <h1 class="fs-2 d-flex"><i class="ri-code-s-slash-line icon-view-title"></i>Code Developer</h1>
                                <!-- IFMS -->
                                <div>
                                    
                                </div>
                                <hr>
                                <div class="mt-3 text-center">
                                    <p>Code Developer -  Desenvolvimento de Software</p>
                                    <a href="404.html">Code Developer</a>
                                </div>
                            </div>`
    return view;
}
