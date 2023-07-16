const pedra = document.getElementById('pedra')
const papel = document.getElementById('papel')
const tesoura = document.getElementById('tesoura')
// const punho = document.getElementById('punho')

// punho.addEventListener('mouseenter', () => {
//     console.log('hai')
// })

const pedraEscolhida = pedra.addEventListener('click', ()=>{
    const escolha1 = pedra.id
    resultado(escolha1, maquinaEscolheu())
})
papel.addEventListener('click', ()=>{
    //console.log("escolheu papel")
    const escolha2 = papel.id
    resultado(escolha2, maquinaEscolheu())
})
tesoura.addEventListener('click', ()=>{
    //console.log("escolheu tesoura")
    const escolha3 = tesoura.id
    resultado(escolha3, maquinaEscolheu())

})

const escolhasMaquina = {
    1: 'pedra',
    2: 'papel',
    3: 'tesoura'
}

function maquinaEscolheu(){
    let sorteio = Math.floor(Math.random() * 3) + 1
    return escolhasMaquina[sorteio]
}

function resultado(pessoa, maquina){
    //caso o usuário escolha pedra
    if(pessoa == 'pedra' & maquina == 'pedra'){
        console.log('você jogou ' + pessoa)
        console.log('a máquina jogou ' + maquina)
        console.log('empate')
    }else if (pessoa == 'pedra' && maquina == 'papel'){
        console.log('você jogou ' + pessoa)
        console.log('a máquina jogou ' + maquina)
        console.log('Derrota')
    }else if(pessoa == 'pedra' && maquina == 'tesoura'){
        console.log('você jogou ' + pessoa)
        console.log('a máquina jogou ' + maquina)
        console.log('Vitória!')
    }//Caso o usuário escolha papel
    else if(pessoa == 'papel' & maquina == 'pedra'){
        console.log('você jogou ' + pessoa)
        console.log('a máquina jogou ' + maquina)
        console.log('Vitória')
    }else if (pessoa == 'papel' && maquina == 'papel'){
        console.log('você jogou ' + pessoa)
        console.log('a máquina jogou ' + maquina)
        console.log('Empate')
    }else if(pessoa == 'papel' && maquina == 'tesoura'){
        console.log('você jogou ' + pessoa)
        console.log('a máquina jogou ' + maquina)
        console.log('Derrota')
    }//Caso o usuário escolha tesoura
    else if(pessoa == 'tesoura' & maquina == 'pedra'){
        console.log('você jogou ' + pessoa)
        console.log('a máquina jogou ' + maquina)
        console.log('Derrota')
    }else if (pessoa == 'tesoura' && maquina == 'papel'){
        console.log('você jogou ' + pessoa)
        console.log('a máquina jogou ' + maquina)
        console.log('Vitória')
    }else if(pessoa == 'tesoura' && maquina == 'tesoura'){
        console.log('você jogou ' + pessoa)
        console.log('a máquina jogou ' + maquina)
        console.log('Empate')
    }else{
        console.log('erro')
    }
}