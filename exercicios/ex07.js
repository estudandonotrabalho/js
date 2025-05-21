let num1 = 2
let num2 = 2
let cal = '/'

switch(cal) {
    case '+':
        console.log(`O resultado é ${num1 + num2}`)
        break
    case '-':
        console.log(`O resultado é ${num1 - num2}`)
        break
    case '*':
        console.log(`O resultado é ${num1 * num2}`)
        break
    case '/':
        if (num2 === 0){
            console.log('Não é possível dividir por zero.')
        } else {
        console.log(`O resultado é ${num1 / num2}`)
        }
        break
    default:
        console.log('Digite uma operação válida.')
}