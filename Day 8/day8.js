// Task
// Given names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. You will then be given an unknown number of names to query your phone book for. For each queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; if an entry for

// is not found, print Not found instead.

// Note: Your phone book should be a Dictionary/Map/HashMap data structure. 

function processData(input) {
  const lines = input.split('\n').reverse()
//no. of entries
  let n = parseInt(lines.pop(), 10)

//defining dictionary
  let dict = {}

  //creating phonebook
  for (let i = 0; i < n; i++) {
      const entry = lines.pop().split(' ')
      dict[entry[0]] = entry[1]
  }
  while (lines.length) {
      const name = lines.pop();
      
  //checking entries
      if (name in dict)
          console.log(name + '=' + dict[name]);
      else
          console.log('Not found')
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
