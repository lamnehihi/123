function mouse(name) {
	this.name = 'mickey',
	this.dead = false,
}

mouse.prototype.die = function() {
	this.dead = true
}
module.exports = mouse;