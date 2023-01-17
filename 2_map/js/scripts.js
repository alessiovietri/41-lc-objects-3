const numbers = [1, 2, 3, 4, 5];

// CONSEGNA ALESSIO 1
// Voglio creare un nuovo array a partire da numbers che contenga gli stessi numeri di numbers ma elevati al quadrato

const squaredNumbers = [];
for (let i = 0; i < numbers.length; i++) {

    const singleSquaredNumber = numbers[i] * numbers[i];

    squaredNumbers.push(singleSquaredNumber);

}
console.log(squaredNumbers);    // Dovrebbe risultare in [1, 4, 9, 16, 25]

// Sintassi map con callback estesa
const squaredNumbersMap = numbers.map((singleNumber) => {
    const singleSquaredNumber = singleNumber * singleNumber;
    console.log(singleSquaredNumber);

    return singleSquaredNumber;
});

// Sintassi map con callback ridotta
// const squaredNumbersMap = numbers.map((singleNumber) => {
//     return singleNumber * singleNumber;
// });

// Sintassi map con callback minima
// const squaredNumbersMap = numbers.map((singleNumber) => singleNumber * singleNumber);
console.log(squaredNumbersMap);    // Dovrebbe risultare in [1, 4, 9, 16, 25]


	
const cats = [
    {name: 'Tom', color: 'Gray'},
    {name: 'Felix', color: 'Black and White'},
    {name: 'Garfield', color: 'Orange'},
];

// CONSEGNA ALESSIO 2
// Voglio creare un array a partire dall'array cats che contenga stringhe del tipo "Il gatto NOMEGATTO è di colore COLOREGATTO"

const catStrings = cats.map((singleCat) => {
    const singleCatString = `Il gatto ${singleCat.name} è di colore ${singleCat.color}`;

    return singleCatString;
});

console.log(catStrings);