const pessoa = {
    nome: [],
    nascimento: []
}
const inNome = document.querySelector('.inNome'),
      inDtnascimento = document.querySelector('.inDtNascimento'),
      btnSalvar = document.querySelector('.btnSalvar'),
      outDados = document.querySelector('.outDados'),
      btnExibir = document.querySelector('.btnExibir')


      
function salvarDados() {
    const nome = inNome.value,
          num = nome.match(/[0-9]/g), //retorna os números do nome para verificação
          data = inDtnascimento.value

    //verifica se os dois já existem no localStorage
    if(localStorage.nome && localStorage.nascimento) {
        pessoa.nome = JSON.parse(localStorage.getItem('nome'))//recupera o que já existe (com o getItem) 
        pessoa.nascimento = JSON.parse(localStorage.getItem('nascimento'))//e converte de string para array (com JSON.parse)
    }

    //-- recebendo o nome --
    validarNome(nome, num)//chama a função, passando nome e num como parâmetros
    
    //-- recebendo a data --
    tratarDada(data)//chamando a função, passando data como parâmetro

    localStorage.nome = JSON.stringify(pessoa.nome) //recupera como string para salvar no array
    localStorage.nascimento = JSON.stringify(pessoa.nascimento)

    inNome.value = ''
    inNome.focus()
}
btnSalvar.addEventListener('click', salvarDados)

//-- Validar Nome --
function validarNome(nome, num) {
    //verifica se o campo data de nascimento foi preenchido
    if(inDtnascimento.value == 0 || inDtnascimento.value == null) {
        alert('Preencha todos os campos')
        return
    }
    //se o nome contem números(num === true)
    if(num) {
        alert('O nome deve conter apenas letras. Nenhum número')
        return 
    }
    if((nome.length < 3) || (nome.length) > 120) {
        alert('O nome deve ter entre 3 e 120 letras')
        return
    } 
    else {
        pessoa.nome.push(nome) //adiciona o nome ao objeto pessoa
        return nome
    }
}

//-- Tratar Data --
function tratarDada(data) {
    const partesData = data.split('-'),
          dia = partesData[2],
          mes = partesData[1],
          ano = partesData[0],
          nascimento = `${dia}/${mes}/${ano}`

    pessoa.nascimento.push(nascimento) //adiciona o nascimento ao objeto pessoa
    return nascimento
}

//-- Exibir Dados --
function exibirDados() {
    outDados.innerHTML = ''

    if(!localStorage.nome && !localStorage.nascimento) {
        alert('Não há dados cadastrados')
    }

    if(localStorage.nome && localStorage.nascimento) {
        pessoa.nome = JSON.parse(localStorage.getItem('nome'))//recupera o que já existe (com o getItem) 
        pessoa.nascimento = JSON.parse(localStorage.getItem('nascimento'))//e converte de string para array (com JSON.parse)
    }
    for(let i = 0; i < pessoa.nome.length; i++) {
        for(i = 0; i < pessoa.nascimento.length; i++) {
            let p = document.createElement('p')
            p.innerHTML =  `${pessoa.nome[i]} - ${pessoa.nascimento[i]}\n`
            outDados.append(p)

            console.log(`${pessoa.nome[i]} - ${pessoa.nascimento[i]}\n`)
        }
    }
}
btnExibir.addEventListener('click', exibirDados)