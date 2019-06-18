// Given a string, S, of length N that is indexed from 0 to N - 1, print its even-indexed and odd-indexed characters as
// space-separated strings on a single line (see the Sample below for more detail).
// Note:
// is considered to be an even index.

function processData(input) {
  //Enter your code here
  //need to clean up  the input
  let word = input.replace(/\d+\s+/g, '').split('\n')

//loop over each array input
  for (let x = 0; x < word.length; x++){
      newword = word[x]
      newword = newword.split('')

      let ar1 = []
      let ar2 = []
      a = newword

      //loop over the input and split from odd and even
      for (let i = 0; i < a.length; i++) {
          if (i % 2 === 0) { // index is even
              ar1.push(a[i])
          }
          if (i + 1 <= a.length && i % 2 === 1) {
              ar2.push(a[i])
          }
      }
      //remove space anf join the input
      ar1 = ar1.join('')
      ar2 = ar2.join('')
      console.log(ar1, ar2)
  }

} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
 processData(_input);
});
