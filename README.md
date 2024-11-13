# To-Do List

O objetivo é desenvolver um sistema web com **API em .NET C#, FRONT-END em HTML/CSS/JS e com um banco
de dados relacional** para armazenar as informações. O sistema precisa ser capaz de criar, listar,
atualizar e excluir tarefas, permitindo a organização e visualização fácil de suas responsabilidades

## Configuração da aplicação localmente

Baixe o projeto na sua máquina e abra o arquivo `ToDoList`, preferencialmente, no **Visual Studio Code**.

Dentro do Visual Studio Code, abra o terminal de comando e digite `cd ToDoApi` para entrar no diretório da api.
Após essa etapa, digite no terminal `dotnet watch run` para iniciar a API.

Mantenha o terminal da API rodando, abra um novo terminal e digite `cd frontend/html/` para rodar o front-end. 
É desejável que você tenha a extenção **Live Server** instalada. Caso tenha, é só clicar em **Go Live** no canto inferior direito.
Caso não tenha, é so ir na barra lateral **Explorar** do Visual Studio Code, entrar neste caminho `frontend/html/` e arrastar o `index.html`
para o seu navegador.

## Observações

No arquivo `appsettings.json` está localizado alguma das configurações para conectar a aplicação com o Banco de dados:
- Se você utilizar um sistema operacional **Linux** ou **MacOS**, a configuração é a seguinte:

  ```
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=localhost;Initial Catalog={DATABASENAME};User Id=SA;Password={SUASENHA};Integrated Security=True;TrustServerCertificate=true;Trusted_Connection=false"
  },```
  
- Caso seja um sistema operacional **Windows**, a configuração é esta:

  ```
  "ConnectionStrings": {
    "DefaultConnection": Data Source={PCNAME}\\SQLEXPRESS;Initial Catalog={DATABASENAME};Integrated Security=True;Connect   Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False
  },```
