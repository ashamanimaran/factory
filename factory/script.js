/* jshint browser: true */
function Vehicle(){
    var id=0;
    return function newVehicle(type){
     id++;
     return "Created a new "+type+" with id "+id;
    };
}

var vehicleFactory=Vehicle();
function createVehicle(){
    var vehicle=document.getElementById("vehicleType").value;
var p=document.createElement("p");
p.innerHTML=vehicleFactory(vehicle);
    document.getElementById("vehicles").appendChild(p);
}