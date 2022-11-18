function validaForm(){
    let validahora = document.forms['agendar']['hora'].value;//Pega um conteudo que está dentro de uma célula de formulário.
    let validaNomeDono = document.forms['agendar']['nomeDono'].value;
    let validaNomeCachorro = document.forms['agendar']['nomeCachorro'].value;
    let validaTel = document.forms['agendar']['tel'].value;
    let validaData = document.forms['agendar']['data'].value;
    let validaObs = document.forms['agendar']['observacao'].value;

    //Condicional para ver se os campos, do "form", está vazio.
    if(validahora == ""){
        alert('O campo "Codigo" deve ser preenchido!')
        return false;
    }
    if(validaNomeDono == ""){
        alert('O campo "Data" deve ser preenchido!')
        return false;
    }
    if(validaNomeCachorro == ""){
        alert('O campo "Título" deve ser preenchido!')
        return false;
    }
    if(validaTel == ""){
        alert('O campo "Diretor" deve ser preenchido!')
        return false;
    }
    if(validaData == ""){
        alert('O campo "Ator/atriz" deve ser preenchido!')
        return false;
    }
    if(validaObs == ""){
        alert('O campo "Nota" deve ser preenchido!')
        return false;
    }
}

function insere(){
    let hora = document.forms['agendar']['hora'].value;
    let nomeDono = document.forms['agendar']['nomeDono'].value;
    let nomeCachorro = document.forms['agendar']['nomeCachorro'].value;
    let tel = document.forms['agendar']['tel'].value;
    let data = document.forms['agendar']['data'].value;
    let observacao = document.forms['agendar']['observacao'].value;

    let inserir = window.document.getElementById('inserirTabela');//Tudo que for colocado aqui, será colocado dentro do respectivo "id".

    inserir.innerHTML = `<th scope="row">${hora}</th>`
    inserir.innerHTML += `<td>${nomeDono}</td>
    <td>${nomeCachorro}</td>
    <td>${tel}</td>
    <td>${data}</td>
    <td>${hora}/10</td>
    <td>${observacao}</td>
    `;
}