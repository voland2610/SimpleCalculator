function Calculator() {
	this.methods = {
		"+": (a,b) => a + b,
		"-": (a,b) => a - b,
	};

	this.calculate = function(name) {
		result = name.split(" ");
		return this.methods[result[1]](+result[0],+result[2]);
	}

	this.addMethod = function(name, func) {
		this.methods[name] = func;
	};
}

let calc = new Calculator;
calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);
alert(calc.calculate('2 / 5'));
