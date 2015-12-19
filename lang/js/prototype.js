function Vehicle(wheels, engine) {
    this.wheels = wheels;
    this.engine = engine;
}

// Using Prototypes to Add Properties and Methods
var testVehicle = new Vehicle(2, false);
Vehicle.prototype.color = "red";
var testColor = testVehicle.color;


// function prototype
String.prototype.trim = function()
{
    // Replace leading and trailing spaces with the empty string
    return this.replace(/(^\s*)|(\s*$)/g, "");
}
var s = "    leading and trailing spaces    ";
// Displays "    leading and trailing spaces     (35)"
window.alert(s + " (" + s.length + ")");
// Remove the leading and trailing spaces
s = s.trim();
// Displays "leading and trailing spaces (27)"
window.alert(s + " (" + s.length + ")");

// Using Prototypes to Derive One Object from Another with Object.create
var Bicycle = Object.create(Object.getPrototypeOf(Vehicle), {
    "pedals" :{value: true}
});
// The Bicycle object has the properties wheels, engine, color, and pedals, and its prototype is Vehicle.prototype. The JavaScript engine finds the pedals property on Bicycle, and it looks up the prototype chain to find the wheels, engine, and color properties on Vehicle.


// Changing an Object's Prototype
function Friend() {
    this.demeanor = "happy";
}

function Foe() {
    this.demeanor = "suspicious";
}

var friend = new Friend();
var foe = new Foe();

var player = new Object();
player.__proto__ = foe;

friend.ally = "Tom";

if (console && console.log) {
    console.log(player.demeanor === "happy" );      // Returns false
    console.log(player.demeanor === "suspicious");  // Returns true
    console.log(player.ally === "Tom");             // Returns false
    // Turn the foe to a friend.
    player.__proto__ = friend;
    console.log(player.demeanor === "happy");       // Returns true
    console.log(player.demeanor === "suspicious");  // Returns false
    console.log(player.ally === "Tom");             // Returns true
}
