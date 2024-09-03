
// reverse a string

const sentence = 'I am learning Web Development';


// donal
// d
// od
// nod
// anod
// lanod


// tricks 1
let reverse = '';
for( let letter of sentence){
    // console.log(letter);
    reverse = letter + reverse;
}
// console.log(reverse);


// tricks 2
let rev = '';
for(let i = 0; i < sentence.length; i++){ 
    const letter = sentence[i];
    rev = letter + rev;
}
// console.log(rev);


// tricks 3
// shortcut
const reversed = sentence.split('').reverse().join('');
console.log(reversed);

/*-------- NOTE: reverse() method is for array -------*/