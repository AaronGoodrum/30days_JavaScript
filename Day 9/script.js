'use strict'

//Dynamic nature
var cat = {name: 'Fluffy', color: 'Black'}

console.log(cat)

// Using Constructor Functions with new keyword
function Cat(name, color){
  this.name = name
  this.color = color
}

var Newcat = new Cat('Fluffy', 'White')
console.log(Newcat)


//Classes and constructor
class Dog{
  constructor(name, color){
    this.name = name
    this.color = color
  }

  play(){
    console.log('ball')
  }
}

var dog = new Dog('Kane', 'Red')

console.log(dog + dog.play())

