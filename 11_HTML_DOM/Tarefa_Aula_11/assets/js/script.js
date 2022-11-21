function validaForm(){
    let validahora = document.forms['agendar']['horaMarcada'].value;//Pega um conteudo que está dentro de uma célula de formulário.
    let validaNomeDono = document.forms['agendar']['nomeTutor'].value;
    let validaNomeCachorro = document.forms['agendar']['nomeCao'].value;
    let validaTel = document.forms['agendar']['telef'].value;
    let validaData = document.forms['agendar']['dataAgenda'].value;

    //Condicional para ver se os campos, do "form", está vazio.
    if(validahora == ""){
        alert('O campo "Horário" deve ser preenchido!')
        return false;
    }
    if(validaNomeDono == ""){
        alert('O campo "Nome do tutor" deve ser preenchido!')
        return false;
    }
    if(validaNomeCachorro == ""){
        alert('O campo "Nome do cachorro" deve ser preenchido!')
        return false;
    }
    if(validaTel == ""){
        alert('O campo "Telefone" deve ser preenchido!')
        return false;
    }
    if(validaData == ""){
        alert('O campo "Data" deve ser preenchido!')
        return false;
    }
}

function insere(){
    let hora = document.forms['agendar']['horaMarcada'].value;
    let nomeDono = document.forms['agendar']['nomeTutor'].value;
    let nomeCachorro = document.forms['agendar']['nomeCao'].value;
    let tel = document.forms['agendar']['telef'].value;
    let data = document.forms['agendar']['dataAgenda'].value;
    let observacao = document.forms['agendar']['obs'].value;

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