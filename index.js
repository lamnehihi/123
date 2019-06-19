var cat = require('./Cat');
var dog = require('./Dog');
var mouse = require('./Mouse');
var tom = new cat();
var shiba = new dog();
var mickey = new mouse('Mickey');
try{
	tom.eat(shiba);
}catch {
	console.log('cat can not eating dog !')
}
console.log(tom)