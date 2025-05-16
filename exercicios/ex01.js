let num1 = 2
let num2 = 1
let op = '/'

switch(op) {
    case '+':
        console.log(`Resultado: ${num1 + num2}`)
        break
    case '-':
        console.log(`Resultado: ${num1 - num2}`)
        break
    case '*':
        console.log(`Resultado: ${num1 * num2}`)
        break
    case '/':
        console.log(`Resultado: ${num1 / num2}`)
        break
    default:
        console.log('Operação inválida!')
}