// const numeros = [2, 5, 10, 25]
// const novoArray = []
// for (let i = 0; i < numeros.length; i++) {
//     novoArray.push(numeros[i] * 4)
// }

// console.log(novoArray)

// const mArrays = numeros.map(function (numeros) {
//     return numeros * 4
// })
// console.log(mArrays)

// const nArrays = numeros.map(n => n * 4)
// console.log(nArrays)

// // const nomes = ["Fulano", "Ciclano", "Fulano De Tal", "Plutão"]

// // for (let i = 0; i < nomes.length; i++) {
// //     const nomeMaiusculo = nomes[i].toUpperCase()
// //     console.log(nomeMaiusculo)
// // }
// // //Função calback
// // const nomesMaiusculo = nomes.map(function (nomes) {
// //     return nomes.toUpperCase()
// // })
// // console.log(nomesMaiusculo)

// // //areoFunction calback direta
// // console.log(nomes.map(nomesM => nomesM.toLowerCase()))

// // const divisores = [10, 8, 1]
// // for (let i = 0; i < divisores.length; i++) {
// //     if (divisores[i] % 2 == 0) {
// //         console.log(divisores[i])
// //     } 
// // }

// // const valoresFiltrados = divisores.filter(numeros => numeros % 2 == 0)
// // console.log(valoresFiltrados)

// // const valoresMapEFilterEReduce = divisores.filter(numeros => numeros % 2 == 0).map(numeros => numeros * 2).reduce((a,b) => a + b, 0)
// // console.log(valoresMapEFilterEReduce)

// const pessoas = [
//     {
//         nome: "Daniel",
//         idade: 20
//     },
//     {
//         nome: "gabi",
//         idade: 17
//     },
//     {
//         nome: "maria",
//         idade: 25
//     },
//     {
//         nome: "caio",
//         idade: 15
//     },
//     {
//         nome: "david",
//         idade: 25
//     }
// ]

// const grupoDePessoas = pessoas.reduce(function (valorAcumulador, pessoasArray) {
//    const MaioresOuMenores = pessoasArray.idade >= 18 ? 'maiores': 'menores'
//    valorAcumulador[MaioresOuMenores].push(pessoasArray)
//     return valorAcumulador
// }, { maiores: [], menores: []})

// console.log(grupoDePessoas)

// calcular a media de varias notas

const notas = [25, 30, 15, 20]
let acumulador = 0
for (let i = 0; i < notas.length; i++) {
     acumulador += notas[i] / 2
}
// console.log(acumulador)

// programa para calcular o quadrado de cinco numeros

const numeros = [2,5,10,12]

for(let i = 0; i < numeros.length; i++){
    // console.log(numeros[i] * 2)
}

// Digitar 5 numeros e descobrir qual é o maior

const cincoNumeros = [11,25,10,77]

for(let i = 0; i < cincoNumeros.length; i++){
    if(cincoNumeros[0] > cincoNumeros[1] && cincoNumeros[0] > cincoNumeros[2] && cincoNumeros[0] > cincoNumeros[3]){
        // console.log(cincoNumeros[0])
        break
    }else if(cincoNumeros[1] > cincoNumeros[0] && cincoNumeros[1] > cincoNumeros[2] && cincoNumeros[1] > cincoNumeros[3]){
        // console.log(cincoNumeros[1])
        break
    }else if(cincoNumeros[2] > cincoNumeros[0] && cincoNumeros[2] > cincoNumeros[1] && cincoNumeros[2] > cincoNumeros[3]){
        // console.log("maior numero: ", cincoNumeros[2])
        break
    }else{
        // console.log(cincoNumeros[3])
        break
    }
}

// programa para descobrir o maior de idade

const idades = [18,25,12,15,55]

const todasIDades = idades.reduce(function(valorAcumulador,idadeArray) {
    const MaioresOuMenores = idadeArray >= 18 ? 'maior' : 'menor'
    valorAcumulador[MaioresOuMenores].push(idadeArray)
    return valorAcumulador
}, {maior: [], menor: []})

//console.log(todasIDades)

// Criar um programa que o usuario digite a altura e sexo de 5 pessoas e exiba quantas pessoas
// sao do sexo masculino e quantas do sexo feminino. E despois qual a maior altura e se é de homem ou mulher.


const dadosDePessoas = [
    {
        altura: 1.78,
        sexo: "masculino"
    },
    {
        altura: 1.50, 
        sexo: "feminino"
    },
    {
        altura: 1.55,
        sexo: "masculino"
    },
    {
        altura: 1.88,
        sexo: "feminino"
    },
    {
        altura: 1.87,
        sexo: "masculino"
    }
]

const sexoMasculinoEFeminino = dadosDePessoas.reduce(function(acumuladorDados,sexoArray){
    const masculinoOuFeminno = sexoArray.sexo === "masculino" ? 'masculino' : 'feminino'
    acumuladorDados[masculinoOuFeminno].push(sexoArray)
    return acumuladorDados
},{ masculino:[],feminino:[] })

//console.log(sexoMasculinoEFeminino)

// Faça um programa em que o usuario digite 5 valores e eles sejam exibidos invertidos

const nomes = ["daniel", "caio", "giovana", "clara", "david"]

const nomesInvertidos = nomes.map((item, indice,array) => array[array.length - indice -1])
// console.log(nomesInvertidos)

var data = "02/06/1999"

var separarData = data.split('/')

console.log(separarData)