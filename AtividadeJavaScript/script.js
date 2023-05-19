function Email() {
    let cfEmail = document.getElementById("cEmail").value
    let vEmail = document.getElementById("pEmail").value

    if (cfEmail == vEmail) {
        alert("E-mail confirmado");
    }
    else
        alert("E-mail não encontrado")
}
function verificarAcesso() {
    var dataNascimento = document.getElementById("dataNascimento").value;
    var partesData = dataNascimento.split("-");
    var anoNascimento = parseInt(partesData[0]);
    var mesNascimento = parseInt(partesData[1]);
    var diaNascimento = parseInt(partesData[2]);

    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var mesAtual = dataAtual.getMonth() + 1;
    var diaAtual = dataAtual.getDate();

    var idade = anoAtual - anoNascimento;
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }

    if (idade < 18) {

        document.getElementById("mensagem").textContent = "Apenas para maiores de 18 anos.";
    } else {
        document.getElementById("mensagem").textContent = "Acesso permitido.";
    }
}


