let animals;
animals = [
    {name: 'Fluffykins',    species: 'rabbit'},
    {name: 'Caro',          species: 'dog'},
    {name: 'Hamilton',      species: 'dog'},
    {name: 'Harold',        species: 'fish'},
    {name: 'Ursula',        species: 'cat'},
    {name: 'Jimmy',         species: 'fish'},
];

let names = animals.map((animal) => animal.name );

/*let names = [];
for (let i = 0; i < animals.length; i++){
    names.push(animals[i].name);
}*/

console.log(names);
