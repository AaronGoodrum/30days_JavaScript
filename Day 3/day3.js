// Task
// Given an integer, N, perform the following conditional actions:

//If N is odd, print Weird
// If N is even and in the inclusive range of 2 to 5, print Not Weird
// If N is even and in the inclusive range of 6 to 20, print Weird
// If N is even and greater than 20, print Not Weird

// Complete the stub code provided in your editor to print whether or not N is weird.

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const N = parseInt(readLine(), 10);
    if (N <= 20 && N >= 6) {
        return console.log('Weird')
    } else {
        if (N % 2 == 0) {
            return console.log('Not Weird')
        } else {
            return console.log('Weird')
        }
    }
}
