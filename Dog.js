function dog() {
	this.name = 'Shiba inu';
	this.age = '5 months';
	this.stomach = []
}

dog.prototype.eat = function(cat) {
	this.stomach.push(cat)
}
module.exports = dog;
