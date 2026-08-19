/*Exercício 1*/
let contador = 1;

while (contador <=10) {
    console.log("Contagem: ", contador)
    contador ++
}

/*Exercício 2*/
let numero = prompt("Digite um número:");
numero = Number(numero);

if (!isNaN(numero)) {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
} else {
    console.log("Por favor, digite um número válido!");
}

/*Exercício 3*/
let n = prompt("Digite um número inteiro positivo:");
n = Number(n);

if (!isNaN(n) && n > 0) {
    let soma = 0;
    
    for (let i = 1; i <= n; i++) {
        soma += i;
        console.log(i)
    }
    
    console.log(`A soma de 1 até ${n} é: ${soma}`);
} else {
    console.log("Por favor, digite um número inteiro positivo válido!");
}

/*Exercício 4*/
console.log("Números pares de 1 a 50:");

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

/*Exercício 6*/
let numeroContagem = prompt("Digite um número:");
numeroContagem = Number(numeroContagem);

if (!isNaN(numeroContagem)) {
    console.log(`Contagem regressiva a partir de ${numeroContagem}:`);
    
    if (numeroContagem < 0) {
        console.log("Digite um número par!");{
        }
    } else {
        for (let i = numeroContagem; i >= 0; i--) {
            console.log(i);
        }
    }
} else {
    console.log("Por favor, digite um número inteiro válido!");
}
