// Problema "crescente"
// Leia uma quantidade indeterminada de duplas de valores inteiros X e Y. Escreva para cada X e Y uma mensagem que indique se estes valores foram digitados em ordem crescente ou decrescente. O  programa deve finalizar quando forem digitados dois valores iguais

let n1 = 0;
let n2 = 0;


do {
 n1 = Number.parseInt(prompt("Digite a 1º valor"));
 n2 = Number.parseInt(prompt("Digite a 2º valor"));

    alert(`${n1}, ${n2}`)
    if (n1 < n2) {
        alert("Crescente")


    } else if (n1 > n2) {
        alert("Decrescente")


    } else {
        alert("Os valores são iguais, programa finalizado")
    }

} while (n1 != n2)
