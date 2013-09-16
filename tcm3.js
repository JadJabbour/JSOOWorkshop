//namespaces
var People = {};

//object constructors 
People.Person = function(id, name, age, profession){
	this.id = id;
	this.name = name;
	this.age = age;
	this.profession = profession;
	this.print = function (){
		console.log(this);
	}
	return this;
};

//public function
People.Person.prototype.changeName = function(value){
	this.name = value;
};

//main
function tcm3_main(){
	//this will throw an error
	//var person = new Person(1, "person", 26, "carpenter");
	//this will not
	jad = new People.Person(1, "jad", 26, "developer");
	jad.print();
	jad.changeName("jad2");
	jad.print();
}