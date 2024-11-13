// class FormSubmit {
//     constructor(configuracoes) {
//         this.configuracoes = configuracoes;
//         this.formulario = document.querySelector(configuracoes.formulario);
//         this.botaoSalvar = document.querySelector(configuracoes.botaoSalvar);
//         if (this.formulario){
//             this.url = this.formulario.getAttribute("action");
//         }
//         this.enviarFormulario = this.enviarFormulario.bind(this);
//     }

//     getFormObject() {
//         const formObject = [];
//         const campos = this.formulario.querySelectorAll('[name]');
//         campos.forEach(campo => {
//             console.log(campo.value);
//             formObject[campo.getAttribute("name")] = campo.value;
//         });
//         return formObject;
//     }

//     onSubmission(event) {
//         window.location.replace("http://127.0.0.1:5500/frontend/html/index.html");
//     }

//     async enviarFormulario(event) {
//         this.onSubmission(event);
//         await fetch(this.url,{
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 // Accept: "application/json"
//             },
//             body: JSON.stringify(this.getFormObject())
//         })
//         .then(response => {
//             console.log("statuss: "+response.status)
//             if(!response.ok) {
//                 data = response.json();
//             }
//         });
//     }
    
//     init() {
//         if (this.formulario) this.botaoSalvar.addEventListener("click", this.enviarFormulario);
//         return this;
//     }
// }

// const formulario = new FormSubmit({
//     formulario:"[data-form]",
//     botaoSalvar:"[data-button]",
//     sucesso: "<h2 class='sucesso'>Mensagem enviada!</h2>",
//     erro: "<h2 class='erro'>Não foi possível enviar a sua mensagem!</h2>"
// });

// formulario.init();

// const urlApiTarefa = "http://127.0.0.1:5284/api/tarefa";
const form = document.querySelector("form");

function converterStatusParaBoolean(status) {
    if(status == 'concluido') {
        return true;
    }
    return false;
}

function getFormObject() {
    const formObject = [];
    const campos = form.querySelectorAll('[name]');
    campos.forEach(campo => {
        // let campoName = campo.getAttribute('name');
        // if(campoName == "status") { campo.value = converterStatusParaBoolean(campo.value); }
        formObject[campo.getAttribute('name')] = campo.value;
    });
    console.log(formObject)
    return formObject;
}

async function sendForm(urlApiTarefa) {
    await fetch(urlApiTarefa, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Accept: "application/json"
        },
        body: JSON.stringify(getFormObject())
    })
    .then(response => {
        console.log("statuss: "+response.status)
        if(!response.ok) {
            throw new Error('Network response was not ok');
        }
    });
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const urlApiTarefa = "http://127.0.0.1:5284/api/tarefa";
    // const form = document.querySelector("form");
    sendForm(urlApiTarefa);
});