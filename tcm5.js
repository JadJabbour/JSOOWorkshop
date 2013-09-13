//inheritance revisited #1

var A = function(a){
	this.a = a;
}

A.prototype = {
	a : null,
	doSomething : function(){
		console.log("there, i did[from A]!");
	}
}

var B = function(a, b){
	A.call(this, a);
	this.b = b;
}

B.prototype = Object.create(A.prototype, {
	b : {
		value : null
	},
	doSomething : {
		value : function(){
			A.prototype.doSomething.apply(this);
			console.log("there, i did[from B]!");
		}
	}
});

//main
function tcm5_main(){
	x = new B(5, 10);
	x.doSomething();
}