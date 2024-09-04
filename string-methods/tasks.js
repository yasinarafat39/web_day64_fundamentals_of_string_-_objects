


// ------------------ Task 1 ---------------------
// Count how many times a string has the letter a

const myName = 'Yasin Arafat';
// console.log(myName.includes('a')); // true
let counterForA = 0;
for(let i = 0; i <= myName.length; i++){
    // console.log(myName[i]);
    if(myName[i] === 'a'){
        counterForA++;
    }
}
console.log(counterForA); // 3




// ------------------ Task 2 ---------------------
// Count how many times a string has the letter a or A  
let total = 0;
for(let i = 0; i <= myName.length; i++){
    // console.log(myName[i]);
    if(myName[i] === 'a' || myName[i] === 'A'){
        total++;
    }
}
console.log(total); // 4





// ------------------ Task 3 ---------------------
// Check whether a string contains all the vowels a, e, i, o, u
const vowelStr = 'A quick brown fox jumps over the lazy dog.'; 
for(let i = 0; i <= vowelStr.length; i++){
    const lowerCaseStr = vowelStr.toLowerCase();
    // console.log(lowerCaseStr[i]);
    
    // if(lowerCaseStr[i] === 'a' && vowelStr[i] === 'e' && lowerCaseStr[i] === 'i' && vowelStr[i] === 'o' && lowerCaseStr[i] === 'u'){
    //     console.log(true);
    // } else{
    //     console.log(false);
    // }
}



// ------------------ Task 4 ---------------------
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
const str4 = 'If a given string has either x, replace x by y. if the given string has X, replace it by Y.';
let newStr4 = '';
for(let i = 0; i <= str4.length; i++){ 
    // console.log(str4[i]); 
    if(str4[i] === 'x'){ 
        newStr4 += 'X';
    } else if(str4[i] === 'y'){
        newStr4 += 'Y'
    }
    else{
        newStr4 += str4[i];
    }
     
}

console.log(newStr4); // If a given string has either X, replace X bY Y. if the given string has X, replace it bY Y.