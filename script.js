const form = document.getElementById("form-contato");
const tabela = document.getElementById("tabela-contatos");
const tabelaElemento = document.getElementById("tabela");

form.addEventListener("submit", function(event){

event.preventDefault();

const nome = document.getElementById("nome").value;
const telefone = document.getElementById("telefone").value;

const novaLinha = `
<tr>
<td>${nome}</td>
<td>${telefone}</td>
</tr>
`;

tabela.innerHTML += novaLinha;

tabelaElemento.style.display = "table";

form.reset();

});