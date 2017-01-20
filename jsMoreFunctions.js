// 1. Positive Numbers
var arr = [1,-2,4,-4,-3,6,-7];
var pos = arr.filter(function(n){
    return n > 0;
});
console.log(pos);

// 2. Even Numbers
var arr = [1,-2,4,-4,-3,6,-7];
var evens = arr.filter(function(n) {
    return n % 2 == 0;
});
console.log(evens);

// 3. Square the Numbers
var arr = [1,2,3];
var squareTheNumbers = arr.map(function(n){
    return n * n;
});
console.log(squareTheNumbers);

// 4. Citites 1
var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];
var temp = cities.filter(function(city) {
    return city.temperature < 70.0;
})
console.log(temp);

// 5. Cities 2
var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];
var temp = cities.filter(function(city) {
    return city.temperature < 70.0;
})
temp.forEach(function(city) {
    console.log(city.name);
});

// 6. Good Job
var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

people.forEach(function(person){
    console.log('Good job ' + person + '!');
});

// 7. Sort an Array
var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

people.sort();
console.log(people);

// 8. Sort an Array 2
var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

function compareNumber(a,b) {
    return a.length - b.length;
}

people.sort(compareNumber);
console.log(people);

// 9. Sort an Array 3
var arr = [
   [1, 3, 4],
   [2, 4, 6, 8],
   [3, 6]
  ];

function compareArr(a1,a2) {
    var combine = function(a,b){
        return a+b;
    }
    return a1.reduce(combine, 0) - a2.reduce(combine, 0);
}
arr.sort(compareArr);
console.log(arr);

// 10. Call three times
var fun = function() {
    console.log("Hello World!");
}
call3Times(fun);

// 11. Sum as Array
var arr = [1,2,3];
var combine = function(a,b) {
    return a+b;
};
var sum = arr.reduce(combine, 0);
console.log(sum);

// 12. Acronym
var acronym = (['very', 'important', 'person'])
var acronym = (['national', 'aeronautics', 'space', 'administration'])

var acronymVal = acronym.reduce(function(currentValue, name) {
    if (currentValue === '') {
        return name[0];
    } else {
        return currentValue + '' + name[0];
}
}, '');
console.log(acronymVal)

// 13. Bonus
var arr = [
  { name: 'Bob' },
  { name:'Alice' },
  { name:'Joe' }];
forEach(arr, function(person) {
  fun();
});

// 14. Bonus
var arr = [
    { name: 'Bob' },
    { name:'Alice' },
    { name:'Joe' }];
var temp = arr.filter(function(indName) {
    return indName.name;
})
temp.forEach(function(indName) {
    console.log(indName.name);
});
