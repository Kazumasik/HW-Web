//Завдання 1
let a = {};
function A() { 
    return a; 
}
function B() { 
    return a; 
}
console.log(new A() == new B()); 
//Завдання 2
function Calculator(){

  this.read = function() {
    this.a = +prompt('Vvedite a');
    this.b = +prompt('Vvedite b');
  };
  this.sum = function() {
    return this.a + this.b;
  };
  this.mul = function() {
    return this.a * this.b;
  };
}
let calculator = new Calculator();
calculator.read();
alert( "Suma: " + calculator.sum() );
alert( "Mnojenya: " + calculator.mul() );
//Завдання 3
function Constr(startingValue) {
  this.value = startingValue;
  this.read = function() {
    this.value += +prompt('Skolko nyjno dobavit?', 0);
  };
}
let constr = new Constr(0);
constr.read();
constr.read();
alert(constr.value);
