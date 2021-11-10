'use strict';

// filter

const names = ['Alex', 'Olga', 'Dima', 'Gennadiy', 'Ivan'];
const shortNames = names.filter(function (name) {
    return name.length < 5;
});
console.log(shortNames);

// map

const answers = ['AlEx', 'AnnA', 'DiMa', 'GeNNADIY', 'IvaN'];
const result = answers.map(item => item.toLowerCase());
console.log(result);

// every/some

const some = [4, 'qwe', 'Asdwd'];
console.log(some.some(item => typeof(item)==='number'));

const everyFalse = [4, 'qwe', 'Asdwd'];
const everyTrue = [4, 1, 4];
console.log(everyFalse.every(item => typeof(item)==='number'));
console.log(everyTrue.every(item => typeof(item)==='number'));

// reduce

const arr = [4, 4, 3,1 ,5];
const res = arr.reduce((sum, current) => sum + current);
const resMath = arr.reduce((sum, current) => sum + current, 3);
console.log(res);    
console.log(resMath);    

const arrString = ['apple', 'window', 'short'];
const resString = arrString.reduce((sum, current) => `${sum},  ${current}`);
console.log(resString);    



const obj = { 
    ivan: 'persone',
    alex: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);
console.log(newArr);