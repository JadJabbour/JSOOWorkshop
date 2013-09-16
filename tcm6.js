//extending Object
Object.prototype.inherit = function(_parent){
	var parent = function() { };
	var constructor = this.constructor;
	parent.prototype = typeof _parent == 'function' ? new _parent() : _parent;
	return new parent();
};

Object.prototype.base = function(){
	return this.__proto__.__proto__;
};

Object.prototype.baseConstructor = function(_constructor, _input){
	_constructor.call(this, _input);
};

//object constructor A
var A = function(input){
	this.a = typeof input ==  'undefined' ? null : input.a || null;
};

A.prototype.constructor = A;
A.prototype = {
	doSomething : function(){
		console.log("there, i did[from A]!" + this.a);
	}
};

//object constructor B (inherits A)
var B = function(input){
	this.baseConstructor(A, input);
	this.b = typeof input ==  'undefined' ? null : input.b || null;
};

B.prototype = Object.inherit(A);
B.prototype.constructor = B;
B.prototype.doSomething = function(){
	console.log("there, i did[from B]!" + this.a + "-" + this.b);
};

//object constructor C (inherits B)
var C = function(input){
	this.baseConstructor(B, input);
	this.c = typeof input ==  'undefined' ? null : input.c || null;
};

C.prototype = Object.inherit(B);
C.prototype.constructor = C;
C.prototype.doSomething = function(){
	console.log("there, i did[from C]!" + this.a + "-" + this.b + "-" + this.c);
};

//object constructor D (inherits C)
var D = function(input){
	this.baseConstructor(C, input)
	this.d = typeof input ==  'undefined' ? null : input.d || null;
};

D.prototype = Object.inherit(C);
D.prototype.constructor = D;
D.prototype.doSomethingElse = function(){
	console.log("there, i did somthing else[from D]!" + this.a + "-" + this.b + "-" + this.c + "-" + this.d);
};

//main
function tcm6_main(){
	z = new A({
		a:1
	});

	y = new B({
		a:2, 
		b:1
	});

	x = new C({
		a:3, 
		b:2, 
		c:1
	});

	w = new D({
		a:4,
		b:3,
		c:2,
		d:1
	});
}