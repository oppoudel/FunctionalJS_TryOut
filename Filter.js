let animals = [
    {name: 'Fluffykins', species: 'rabbit'},
    {name: 'Caro', species: 'dog'},
    {name: 'Hamilton', species: 'dog'},
    {name: 'Harold', species: 'fish'},
    {name: 'Ursula', species: 'cat'},
    {name: 'Jimmy', species: 'fish'}
];
let isDog = (animal) => animal.species ==='dog';
let dogs = animals.filter(isDog);

/*var dogs = [];
for (var i = 0; i < animals.length; i++) {
    if (animals[i].species === 'dog')
        dogs.push(animals[i]);
}*/

console.log(dogs);
