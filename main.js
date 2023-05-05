const form = document.getElementById("form-agenda");
const nomeAgenda = [];
const discagemAgenda = [];
const numeroAgenda = []; 
let linhas = "";

form.addEventListener("submit", function(e){
    e.preventDefault();

    adcLinha();
    attTabela()
})

function adcLinha(){
    const nomeContato = document.getElementById("nome-contato");
    const discagemDireta = document.getElementById("discagem-direta");
    const numeroTelefone = document.getElementById("numero-telefone");

    if (nomeAgenda.includes(nomeContato.value)){
        alert (`Contato ${nomeContato.value} ja está registrado na sua agenda `);
    }else{
        nomeAgenda.push(nomeContato.value);
        discagemAgenda.push(discagemDireta.value);
        numeroAgenda.push(numeroTelefone.value);
    
        let linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${discagemDireta.value}</td>`;
        linha += `<td>${numeroTelefone.value }</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }



    nomeContato.value = "";
    discagemDireta.value = "";
    numeroTelefone.value = "";

}

function attTabela(){
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}
