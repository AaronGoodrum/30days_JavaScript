'use strict';
//Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:
// First, print each vowel in on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in
// Second, print each consonant (i.e., non-vowel) in on a new line in the same order as it appeared in .


process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(str) { 
    //Enter your code here
    let splitString = str.split('');

    let vowels = "aeiou";
    let consonant_list = "bcdfghjklmnpqrstvwxyz"
    
    //check for vowels
    splitString.forEach((letter) => {
        if (vowels.indexOf(letter.toLowerCase()) !== -1) {
            console.log(letter)
        }
    }); 

    //check for consonants
    splitString.forEach((letter) => {
        if (consonant_list.indexOf(letter.toLowerCase()) !== -1) {
            console.log(letter)
        }
    }); 
}

