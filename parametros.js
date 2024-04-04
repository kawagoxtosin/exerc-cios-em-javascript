function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}
nomeIdade("Gustavo",22);

console.log(nomeIdade(25, "Kawã"))
console.log(nomeIdade("Kawã",25))


function soma(numero1, numero2) {
    return numero1 + numero2;
}

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}
console.log(soma(2))

console.log(multiplica(soma(4, 5)))
