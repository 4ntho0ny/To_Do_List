// --------------Classe Tarefa-------------- 
class Tarefa {
    constructor(id, titulo, descricao, status) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = status;
    }

    fromJSON(objectJSON) {
        this.id = parseInt(objectJSON["id"]);
        this.titulo = objectJSON["titulo"];
        this.descricao = objectJSON["descricao"];
        this.status = Boolean(objectJSON["status"]);

        return new Tarefa(this.id, this.titulo, this.descricao, this.status)
    }
}

// --------------URL API-------------- 
const urlApiTarefa = 'http://127.0.0.1:5284/api/tarefa';

// --------------Buscar todas as tarefas-------------- 
async function getAll() {
    let tarefas = fetch(urlApiTarefa)
    .then(response => {
        if (!response.ok) {
            throw new Error('A busca não deu certo!');
        }
        return response.json();
    })
    .then(data => {
        return data;
    });
    return tarefas;
}

// --------------Transformar todos os itens do JSON em objetos da classe Tarefa-------------- 
async function getTarefas() {
    let data = await getAll();
    let tarefas = [];
    data.forEach(objectJSON => {
        let tarefa = new Tarefa().fromJSON(objectJSON);
        tarefas.push(tarefa)
    });
    return tarefas;
}

// --------------Mudar a cor do símbolo de verificação do status da tarefa-------------- 
var mudarStatus = (campoStatus, statusTarefa) => {
    if (statusTarefa == true) {
        campoStatus.style.backgroundColor = '#0058fa';
    }
}

// --------------Criar a estrutura HTML que representa uma tarefa-------------- 
var criarHTMLTarefa = (id, titulo, descricao, status) => {
    let todasTarefas = document.querySelector('.todas-tarefas');

    let tarefa = document.createElement('div');
    tarefa.classList.add('tarefa');

    todasTarefas.appendChild(tarefa);

    let idTarefa = document.createElement('input');
    idTarefa.type = "number";
    idTarefa.value = id;

    idTarefa.style.display = 'none';

    tarefa.appendChild(idTarefa);

    let infoTarefa = document.createElement('div');
    infoTarefa.classList.add('info-tarefa');

    tarefa.appendChild(infoTarefa);

    let tituloTarefa = document.createElement('h2');
    tituloTarefa.innerHTML = titulo
    tituloTarefa.classList.add('titulo-tarefa');

    let descricaoTarefa = document.createElement('p');
    descricaoTarefa.innerHTML = descricao
    descricaoTarefa.classList.add('descricao-tarefa');

    infoTarefa.appendChild(tituloTarefa);
    infoTarefa.appendChild(descricaoTarefa);

    let circle = document.createElement("div");
    circle.classList.add("circle")
    
    var img = document.createElement("img");
    img.src = "../assets/verificacao.png";
    img.alt = "verificado";

    circle.appendChild(img);

    var botoesEditarExcluir = document.createElement("div");
    botoesEditarExcluir.classList.add("botoes-editar-excluir");

    var botaoEditar = document.createElement("button");
    botaoEditar.classList.add("editar");
    botaoEditar.textContent = "Editar";

    var botaoExcluir = document.createElement("button");
    botaoExcluir.classList.add("excluir");
    botaoExcluir.textContent = "Excluir";

    botoesEditarExcluir.appendChild(botaoEditar);
    botoesEditarExcluir.appendChild(botaoExcluir);

    tarefa.appendChild(infoTarefa);
    tarefa.appendChild(circle);
    tarefa.appendChild(botoesEditarExcluir);

    mudarStatus(circle, status);
}

// --------------Trazer todos os objetos de tarefa e inserir os dados na estrutura HTML-------------- 
var adicionarTarefas = async () => {
    let tarefas = await getTarefas();
    tarefas.forEach(tarefa => {
        criarHTMLTarefa(tarefa.id, tarefa.titulo, tarefa.descricao, tarefa.status);
    });
}

// --------------Listar todas as tarefas ao carregar a página-------------- 
window.addEventListener("load", function (event) {
    adicionarTarefas();
});