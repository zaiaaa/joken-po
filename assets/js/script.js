const pedra = document.getElementById('pedra')
const papel = document.getElementById('papel')
const tesoura = document.getElementById('tesoura')
const yourChoose = document.getElementById('yourChoose')
const machineChoose = document.getElementById('machineChoose')
const resultadoHTML = document.getElementById('Result')
const placar = document.getElementById('placar')
const contadorEmpate = document.getElementById('empateCount')
const contadorDerrota = document.getElementById('derrotaCount')
const contadorVitoria = document.getElementById('vitoriaCount')

const tagIconRock = '<i id="punho" class="fa-solid fa-hand-back-fist punho"></i>'
const tagIconPaper = '<i class="fa-solid fa-hand papel"></i>'
const tagIconScissors = '<i class="fa-solid fa-hand-scissors tesoura"></i>'

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

let vitorias = 0
let empates = 0
let derrotas = 0


function resultado(pessoa, maquina){
    //caso o usuário escolha pedra
    if(pessoa == 'pedra' & maquina == 'pedra'){
        yourChoose.innerHTML = `
        <h3>Você escolheu pedra:</h3>
        ${tagIconRock}
        `
        
        machineChoose.innerHTML = `
        ${tagIconRock}
        <h3>A máquina escolheu pedra:</h3>
        `

        resultadoHTML.innerHTML = `                
        <h1 class="empate">Empate</h1>
        `
        empates++

        contadorEmpate.innerHTML = empates

    }else if (pessoa == 'pedra' && maquina == 'papel'){
        yourChoose.innerHTML = `
        <h3>Você escolheu pedra:</h3>
        ${tagIconRock}
        `

        machineChoose.innerHTML = `
        ${tagIconPaper}
        <h3>A máquina escolheu papel:</h3>
        `

        resultadoHTML.innerHTML = `                
        <h1 class="derrota">Derrota</h1>
        `
        derrotas++
        contadorDerrota.innerHTML = derrotas


    }else if(pessoa == 'pedra' && maquina == 'tesoura'){
        yourChoose.innerHTML = `
        <h3>Você escolheu pedra:</h3>
        ${tagIconRock}
        `
        
        machineChoose.innerHTML = `
        ${tagIconScissors}
        <h3>A máquina escolheu tesoura:</h3>
        `

        resultadoHTML.innerHTML = `                
        <h1 class="vitoria">Vitória</h1>
        `

        vitorias++

        contadorVitoria.innerHTML = vitorias

    }//Caso o usuário escolha papel
    else if(pessoa == 'papel' & maquina == 'pedra'){
        yourChoose.innerHTML = `
        <h3>Você escolheu papel:</h3>
        ${tagIconPaper}
        `
        
        machineChoose.innerHTML = `
        ${tagIconRock}
        <h3>A máquina escolheu pedra:</h3>
        `

        resultadoHTML.innerHTML = `                
        <h1 class="vitoria">Vitória</h1>
        `

        vitorias++
        contadorVitoria.innerHTML = vitorias
    }else if (pessoa == 'papel' && maquina == 'papel'){
        yourChoose.innerHTML = `
        <h3>Você escolheu papel:</h3>
        ${tagIconPaper}
        `
        
        machineChoose.innerHTML = `
        ${tagIconPaper}
        <h3>A máquina escolheu papel:</h3>
        `

        resultadoHTML.innerHTML = `                
        <h1 class="empate">Empate</h1>
        `
        empates++
        contadorEmpate.innerHTML = empates
    }else if(pessoa == 'papel' && maquina == 'tesoura'){
        
        yourChoose.innerHTML = `
        <h3>Você escolheu papel:</h3>
        ${tagIconPaper}
        `
        
        machineChoose.innerHTML = `
        ${tagIconScissors}
        <h3>A máquina escolheu tesoura:</h3>
        `

        resultadoHTML.innerHTML = `                
        <h1 class="derrota">Derrota</h1>
        `

        derrotas++
        contadorDerrota.innerHTML = derrotas
    }//Caso o usuário escolha tesoura
    else if(pessoa == 'tesoura' & maquina == 'pedra'){
        yourChoose.innerHTML = `
        <h3>Você escolheu tesoura:</h3>
        ${tagIconScissors}
        `
        
        machineChoose.innerHTML = `
        ${tagIconRock}
        <h3>A máquina escolheu pedra:</h3>
        `

        resultadoHTML.innerHTML = `                
        <h1 class="derrota">Derrota</h1>
        `

        derrotas++
        contadorDerrota.innerHTML = derrotas
    }else if (pessoa == 'tesoura' && maquina == 'papel'){
        yourChoose.innerHTML = `
        <h3>Você escolheu tesoura:</h3>
        ${tagIconScissors}
        `
        
        machineChoose.innerHTML = `
        ${tagIconPaper}
        <h3>A máquina escolheu papel:</h3>
        `

        resultadoHTML.innerHTML = `                
        <h1 class="vitoria">Vitória</h1>
        `

        vitorias++

        contadorVitoria.innerHTML = vitorias
    }else if(pessoa == 'tesoura' && maquina == 'tesoura'){
        yourChoose.innerHTML = `
        <h3>Você escolheu tesoura:</h3>
        ${tagIconScissors}
        `
        
        machineChoose.innerHTML = `
        ${tagIconScissors}
        <h3>A máquina escolheu tesoura:</h3>
        `

        resultadoHTML.innerHTML = `                
        <h1 class="empate">Empate</h1>
        `
        empates++

        contadorEmpate.innerHTML = empates
    }
}
