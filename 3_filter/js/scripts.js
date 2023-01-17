const numbers = [1, 2, 3, 4, 5];

// CONSEGNA ALESSIO 1
// Voglio creare un nuovo array, a partire da numbers, che contenga solo i numeri pari presenti in numbers

const evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 == 0) {
        evenNumbers.push(numbers[i]);
    }

}

console.log(evenNumbers);   // Dovrebbe risultare in [2, 4]

// Sintassi filter estesa
const evenNumbersFilter = numbers.filter((singleNumber) => {
    if (singleNumber % 2 == 0) {
        return true;
    }

    return false;
});

// Sintassi filter ridotta
// const evenNumbersFilter = numbers.filter((singleNumber) => {
//     return (singleNumber % 2 == 0);
// });

// Sintassi filter minima
// const evenNumbersFilter = numbers.filter((singleNumber) => singleNumber % 2 == 0);

console.log(evenNumbersFilter);