// Define a function called `Robot()`.
// Typically, we would create a new instance with `new Robot()`.
// Instead, create a "factory" that creates more `Robot`s with this call:
// ---
// Robot.new()
//
// When `Robot.new()` is called it should return a new instance with the prototype set to Robot e.g.:
// ---

function Robot(){
  this.evil = false;
}
Robot.prototype.alarm = function(){
  console.log('Danger, Danger!');
};

/**
 * Factory method that creates a new object that has
 * the prototype set to the Robot
 */
Robot.new = function(){
  function F(){}
  F.prototype = new Robot();
  return new F();
};

function Dalek(){
  Robot.call(this, color);
  this.evil = true;
}
Dalek.prototype = new Robot();

var sally = Robot.new();

console.log('testing');

sally.alarm();


function Truck(config){
  config = config || {};
  this.wheels = config.wheels;
  this.radio = config.radio;
}

function Ford(config){
  config = config || {};
  Truck.call(this, config);
  this.wheels = 5;
  this.model = config.model;
  this.doors = config.doors;
}
Ford.prototype = new Truck();

var f150 = new Ford({'model': 'F-150', 'wheels': 4, 'doors': 2, 'radio': true});

console.log(f150.model, f150.wheels, f150.doors, f150.radio);
