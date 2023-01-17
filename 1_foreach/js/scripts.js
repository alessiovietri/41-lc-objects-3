const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {

    console.log('FOR', i, numbers[i]);
    console.log(numbers);

}

numbers.forEach((item, i, arr) => {

    console.log('FOREACH', i, item);
    console.log(arr);

});

const cats = [
    {name: 'Tom', color: 'Gray'},
    {name: 'Felix', color: 'Black and White'},
    {name: 'Garfield', color: 'Orange'},
];

for (let i = 0; i < cats.length; i++) {

    console.log(cats[i]);
    console.log(cats[i].name, cats[i].color);

}

cats.forEach((cat, catIndex) => {

    console.log(cat);
    console.log(catIndex, 'Il gatto ' + cat.name + ' è di colore ' + cat.color);

});