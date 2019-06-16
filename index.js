var cat = require('./Cat');
var dog = require('./dog');
var tom = new cat;
var shiba = new dog;
shiba.eat(tom);
console.log(shiba);