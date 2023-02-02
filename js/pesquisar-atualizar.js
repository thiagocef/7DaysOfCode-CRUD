const inPesquisar = document.querySelector('.inPesquisar'),
      outPesquisar = document.querySelector('.outPesquisar'),
      inNovoNome = document.querySelector('.inNovoNome')

let pesquisar,
    novo
function pesquisarCadastro() {
    if(!localStorage.nome && !localStorage.nascimento) {
        alert('Não há dados cadastrados')
    }

    pesquisar = inPesquisar.value
    novo = pessoa.nome.indexOf(pesquisar)

    //verifica se existe no array
    for(let i = 0; i < pessoa.nome.length; i++) {
        if(novo != -1) {
            outDados.innerHTML = `"${pesquisar}" - Encontrado`
        } else {
            outDados.innerHTML = `"${pesquisar}" - Não encontrado`
        }
    }
}
document.querySelector('.btnPesquisar').addEventListener('click', pesquisarCadastro)

function atualizarCadastro() {
    novo = inNovoNome.value

    for(let i = 0; i < pessoa.nome.length; i++) {
        if(pessoa.nome[i] == pesquisar) {
            pessoa.nome[i] = novo
            outDados.innerHTML = `"${pesquisar}" foi substituído por "${novo}"`
            localStorage.nome = JSON.stringify(pessoa.nome)
        }
    }
}
document.querySelector('.btnAtualizar').addEventListener('click', atualizarCadastro)

