//extending Object
Object.prototype.inherit = function(_parent){
	var parent = function() { };
	parent.prototype = typeof _parent == 'function' ? new _parent() : _parent;
	return new parent();
};

Object.prototype.base = function(){
	return this.__proto__.__proto__;
};

//object constructor A
var A = function(a){
	this.a = a;
};

A.prototype = {
	doSomething : function(){
		console.log("there, i did[from A]!");
	}
};

//object constructor B (inherits A)
var B = function(a, b){
	A.call(a);
	this.b = b;
};

B.prototype = Object.inherit(A);
B.prototype.doSomething = function(){
	this.base().doSomething();
	console.log("there, i did[from B]!");
};

//object constructor C (inherits B)
var C = function(a, b, c){
	B.call(a, b);
	this.c = c;
};

C.prototype = Object.inherit(B);
C.prototype.doSomething = function(){
	this.base().doSomething();
	console.log("there, i did[from C]!");
};

//main
function tcm6_main(){
	console.log("---------------");
	z = new A(5);
	z.doSomething();
	console.log("---------------");
	x = new B(5, 10);
	x.doSomething();
	console.log("---------------");
	y = new C(5, 10, 15);
	y.doSomething();
	console.log("---------------");
}