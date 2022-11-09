function validaForm(){
    let validaCod = document.forms['cadastrar']['codigo'].value;//Pega um conteudo que está dentro de uma célula de formulário.
    let validaData = document.forms['cadastrar']['data'].value;
    let validaTit = document.forms['cadastrar']['titulo'].value;
    let validaDir = document.forms['cadastrar']['diretor'].value;
    let validaAto = document.forms['cadastrar']['ator'].value;
    let validaNot = document.forms['cadastrar']['nota'].value;
    let validaRad = document.forms['cadastrar']['radio'].value;

    //Condicional para ver se os campos, do "form", está vazio.
    if(validaCod == ""){
        alert('O campo "Codigo" deve ser preenchido!')
        return false;
    }
    if(validaData == ""){
        alert('O campo "Data" deve ser preenchido!')
        return false;
    }
    if(validaTit == ""){
        alert('O campo "Título" deve ser preenchido!')
        return false;
    }
    if(validaDir == ""){
        alert('O campo "Diretor" deve ser preenchido!')
        return false;
    }
    if(validaAto == ""){
        alert('O campo "Ator/atriz" deve ser preenchido!')
        return false;
    }
    if(validaNot == ""){
        alert('O campo "Nota" deve ser preenchido!')
        return false;
    }
    if(validaRad == ""){
        alert('O campo "Genero" deve ser marcado!')
        return false;
    }
}

function insere(){
    let codi = document.forms['cadastrar']['codigo'].value;
    let data = document.forms['cadastrar']['data'].value;
    let titu = document.forms['cadastrar']['titulo'].value;
    let dire = document.forms['cadastrar']['diretor'].value;
    let ator = document.forms['cadastrar']['ator'].value;
    let nota = document.forms['cadastrar']['nota'].value;
    let radi = document.forms['cadastrar']['radio'].value;

    let inserir = window.document.getElementById('inserirTabela');//Tudo que for colocado aqui, será colocado dentro do respectivo "id".

    inserir.innerHTML = `<th scope="row">${codi}</th>`
    inserir.innerHTML += `<td>${titu}</td>
    <td>${dire}</td>
    <td>${data}</td>
    <td>${radi}</td>
    <td>${ator}</td>
    <td>${nota}/10</td>
    `;
}