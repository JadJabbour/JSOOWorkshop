//functions are objects too
function out(value){
	console.log(value);
	return true;
}

function addition(value1, value2, output_channel){
	var num = value1 + value2;
	if(typeof output_channel == 'function'){
		output_channel(num);
	}
	else{
		console.log("invalid output channel, using console.log");
		console.log(num);
	}
}

var _object = function(value1, value2, value3){
	this.value1 = value1;
	this.value2 = value2;
	this.value3 = value3;
	return this;
};

//main
function tcm2_main(){
	var print = out;
	var isPrinted = out("test");
	print(isPrinted);

	//calling with function ref. var 'print'
	addition(1, 2, print);
	//calling with function 'out'
	addition(3, 4, out);
	//calling with anonymous function
	addition(5, 6, function (value) {
		print(value);
	});
	//calling with integer
	addition(7, 8, 9);
	//calling with string
	addition(7, 8, "dummy text");

	//anonymous functions in object constructors
	var obj1 = new _object(1, "string", function() { 
		console.log(this);
	});
	obj1.value3();
}