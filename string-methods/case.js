const school = 'RAJ UK Uttara Model School';

console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());


// uppercase = ABCD EFG
// lowercase = abcd efg

const subject = 'Chemistry';
const book = 'chemistry';

if(subject.toLowerCase() == book.toLowerCase()){
    console.log(`I am reading book aibar porikkai patai felmo`)
} else{
    console.log(`hudai hudai prista ultai Bath khawar jonno`)
}


const drink = 'water    ';
const liquid = '     Water';

if(drink.toLowerCase().trim() == liquid.toLowerCase().trim()){
    console.log('pani er opor nam life');
    console.log(drink.toLowerCase().trim());
    console.log(liquid.toLowerCase().trim());
}
else{
    console.log('somudre pani ase khaite pari na'); 
    console.log(drink.toLowerCase().trim());
    console.log(liquid.toLowerCase().trim());
}