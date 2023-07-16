const pedra = document.getElementById('pedra')
const papel = document.getElementById('papel')
const tesoura = document.getElementById('tesoura')

pedra.addEventListener('click', ()=>{
    const escolha1 = pedra.id
    resultado(escolha1, maquinaEscolheu())
})
papel.addEventListener('click', ()=>{
    console.log("escolheu papel")
    const escolha2 = papel.id
    resultado(escolha2, maquinaEscolheu())
})
tesoura.addEventListener('click', ()=>{
    console.log("escolheu tesoura")

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
    }

    
}




//maquinaEscolheu()






// function startGame(){
//     const idPedra = pedra.id
//     const idPapel = papel.id
//     const idTesoura = tesoura.id
    
//     if(){

//     }


// }