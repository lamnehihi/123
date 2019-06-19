var mouse = require("./Mouse");
function cat() {
	name = "Tom";
	age = 3;
	feeded = false;
	this.stomach = [];
}

cat.prototype.eat = function(animal) {
	if(animal instanceof mouse) {
		this.stomach.push(mouse.name)
	}else {
		throw new Error("Cat only eat mouse!");
	};
}
module.exports = cat;