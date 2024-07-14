// <--- utilizado para comentários
// se o chute for igual o número secreto
// if = se / else = do contrário
alert("Boas-vindas ao jogo do número secreto!");
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Digite um número entre 1 e ${numeroMaximo}`)
    if (chute == numeroSecreto) {
        break;
    } 
    else {
        if (chute > numeroSecreto) {
            alert(`o número secreto é menor que ${chute}!`);
        } else {
            alert(`o número secreto é maior que ${chute}!`);
        }
        //tentativas = tentativas + 1
        tentativas++;
    } 
}
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso aí! você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}! :)`);
