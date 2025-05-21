let age = 10

if (age < 16) {
    console.log('Você não pode votar.')
} else if ((age >= 16 && age < 18) || age >= 70) {
    console.log('Você pode votar, mas não é obrigado.')
} else if (age >= 18 && age <70) {
    console.log('Você é obrigado a votar.')
} else {
    console.log('Digite uma idade válida.')
}