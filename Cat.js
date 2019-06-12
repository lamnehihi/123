function cat() {
	name : "Tom",
	age : "3",
	feeded : false,
	this.stomach = []
}

cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse.name)
}
module.exports = cat;