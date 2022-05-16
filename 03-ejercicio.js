const array = [3, 2, 1, 1, 2, 3, 2, 3, 1];
const array2 = [1, 1, 2, 2, 1, 1, 1, 2, 1];
console.log('Array:', array);
console.log('-------------------------------------------------------');
console.log('Array2:', array2);
console.log('-------------------------------------------------------');

let ArrayResult = [];

for (let index = 0; index < array.length; index++) {
    console.log( `${array[index]} + ${array2[index]} = ${array[index]+array2[index]}` );
    console.log( `${array[index]} * ${array2[index]} = ${array[index]*array2[index]}` );
    console.log('-------------------------------------------------------');
}