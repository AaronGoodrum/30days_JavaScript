// Task
// Given an array, A, of N integers, prints A elements in reverse order as a single line of space-separated numbers.

// Input Format

// The first line contains an integer, N (the size of our array).
// The second line contains N space-separated integers describing array A elements.

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
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
// Take the input array, run reverse and join with a space-separated
    let newarr = arr.reverse().join(' ')

//output newarray
    console.log (newarr)
}