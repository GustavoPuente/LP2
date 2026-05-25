function validarForm() {

    
    let nome = document.nomeform.elements["nome"].value;
    let email = document.nomeform.elements["email"].value;
    let comentario = document.nomeform.elements["comentario"].value;
    let pesquisa = document.nomeform.elements["pesquisa"];

    if (nome.length < 10) {
        alert("O nome deve ter pelo menos 10 caracteres.");
        return false;
    }

   
    if (comentario.length < 20) {
        alert("O comentário deve ter no mínimo 20 caracteres.");
        return false;
    }

    let resposta = "";

    for (let i = 0; i < pesquisa.length; i++) {
        if (pesquisa[i].checked) {
            resposta = pesquisa[i].value;
        }
    }

    if (resposta === "") {
        alert("Selecione uma opção da pesquisa.");
        return false;
    }

 
    if (resposta === "sim") {
        alert("Que bom que você voltou a visitar esta página!");
    } else {
        alert("Volte sempre a esta página!");
    }

   
    alert("Formulário enviado com sucesso!");

    return true;
}