//inheritance

var inherit_1 = function(c, p) {
	c.prototype = p;
};

var inherit_2 = function(s1, s2) {
	s1.prototype = s2.prototype;
};

var inherit_3 = function(c, p) {
	var parent = function() { };
	parent.prototype = new p();
	c.prototype = new parent();
};

var inherit_4 = function(p){
	var prop, child = {};
	for(prop in p){
		child[prop] = p[prop];
	}
	return child;
};

var inherit_5 = function(o){
	var parent = function() { };
	parent.prototype = o;
	return new parent();
};

var inherit_6 = function(c, p){
	c.prototype = new p();
};

var inherit_7 = function(o){
	var parent = function() { };
	parent.prototype = o;
	return new parent();
};

//therealdeal
var inherit = function(_parent){
	var parent = function() { };
	parent.prototype = typeof _parent == 'function' ? new _parent() : _parent;
	return new parent();
};

var object1 = {
	a : 1,
	b : "string",
	c : function(){
		console.log("Hello World!");
	},
	d : {
		e : [ 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024 ],
		f : true
	}
};

var object2 = function(){
	this.a = 2;
	this.b = "string";
	this.c = function(){
		console.log("Hello World!");
	};
	this.d = {
		e : [ 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024 ],
		f : true
	};
	return this;
}

object2.prototype.g = 9;

////////////////////////////////////////////////////////////////////////////////////////////////////
Object.prototype.inherit = function(_parent){
	var parent = function() { };
	parent.prototype = typeof _parent == 'function' ? new _parent() : _parent;
	return new parent();
};

Object.prototype.base = function(){
	return this.__proto__;
};

var SpecialObject = function(){
	var _ = Object.inherit(object2);
	_.c = function (){ console.log("polymorphed"); };
	return _;
};

//main
function tcm4_main(){
	console.log("option 1");
	childObject1 = {};
	inherit_1(childObject1, object1);
	console.log(childObject1);
	console.log(childObject1.hasOwnProperty("a"));
	console.log("------------------------------");
	
	console.log("option 2");
	childObject2 = {};
	inherit_2(childObject2, childObject1);
	console.log(childObject2);
	console.log(childObject2.hasOwnProperty("a"));
	console.log("------------------------------");

	console.log("option 3");
	childObject3 = {};
	inherit_3(childObject3, object2);
	console.log(childObject3);
	console.log(childObject3.hasOwnProperty("a"));
	console.log("------------------------------");

	console.log("option 4");
	childObject4 = inherit_4(object1);
	console.log(childObject4);
	console.log(childObject4.hasOwnProperty("a"));
	console.log("------------------------------");

	console.log("option 5");
	childObject5 = inherit_5(object1);
	console.log(childObject5);
	console.log(childObject5.hasOwnProperty("a"));
	console.log("------------------------------");

	console.log("option 6");
	childObject6 = {};
	inherit_6(childObject5, object2);
	console.log(childObject6);
	console.log(childObject6.hasOwnProperty("a"));
	console.log("------------------------------");

	console.log("option 7");
	childObject7 = inherit_7(object1);
	console.log(childObject7);
	console.log(childObject7.hasOwnProperty("a"));
	console.log("------------------------------");
	
	console.log("the most sane and logical option to solve this clusterfuck of OO inheritance");
	child1 = inherit(object1);
	child2 = inherit(object2);
	console.log(child1);
	console.log(child2);
	child2.g = 90;
	console.log(child2.g);
	delete child2.g;
	console.log(child2.g);
	child1.c = function() { this.__proto__.c();console.log("test"); };
	child2.c = function() { console.log("test2"); };
	child1.c();
	child2.c();
	delete child1.c;
	delete child2.c;
	child1.c();
	child2.c();
	console.log("ps: that was polymorphism");

	child = new SpecialObject();
	child.c();
	child.base().c();
}