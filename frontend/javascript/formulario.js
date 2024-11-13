const form = document.querySelector("form");

function getFormObject() {
    const formObject = {};
    const campos = form.querySelectorAll('[name]');
    campos.forEach(campo => {
        let campoName = campo.getAttribute('name');
        if(campoName == "status") { 
            formObject[campoName] = campo.checked;    
        }
        else {
            formObject[campoName] = campo.value;
        }
    });
    console.log(formObject)
    return formObject;
}

async function sendForm(urlApiTarefa) {
    await fetch(urlApiTarefa, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(getFormObject())
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('Network response was not ok');
        }
    });
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const urlApiTarefa = "http://127.0.0.1:5284/api/tarefa";
    sendForm(urlApiTarefa);
});