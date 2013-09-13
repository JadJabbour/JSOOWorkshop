//JSON string
var JSONStringExample = function (){
	//json string
	var str = '{"a":"1", "b":"2"}';

	console.log("JSON string:");
	console.log(str);

	//parsing JSON string into an object
	//method 1
	var obj1 = eval("(function(){ return " + str + "; })()");
	//method 2
	var obj2 = JSON.parse(str);

	console.log("JSON object 1:");
	console.log(obj1);
	console.log("JSON object 2:");
	console.log(obj2);
	console.log("-----------------");
}

//JSON object
var JSONObjectExample1 = function (){
	var obj1 = { a:1, b:2 };
	var obj2 = { 'c':3, 'd':4 };

	console.log("Object 1");
	console.log("Property a: " + obj1.a);
	console.log("Property b: " + obj1["b"]);
	console.log("Object 2");
	console.log("Property c: " + obj2.c);
	console.log("Property d: " + obj2["d"]);
	console.log("-----------------");
}

//JSON object with private & public members and public, private & priviledged methods
var JSONObjectExample2 = function (name, age){
	//private members
	var _name;
	this.age = age;

	//setter/getter Privileged 
	this.setName = function(value){
		_name = value;
	}
	this.getName = function(value){
		return _name;
	}
	this.printAge = function(){
		_print(this.age);
	}

	//private method (closure)
	function _print(value){
		console.log(value);
	}

	this.setName(name);

	return this;
}

//public method
JSONObjectExample2.prototype.incrementAge = function(){
	this.age++;
}

//main
function tcm1_main(){
	JSONStringExample();
	JSONObjectExample1();

	var exmp = new JSONObjectExample2("jad", 26);
	console.log(exmp.hasOwnProperty("_name"));
	console.log(exmp.hasOwnProperty("_print"));

	exmp.incrementAge();
	exmp.printAge();
	exmp.age = 100;
	exmp.printAge();
	console.log("-----------------");
}