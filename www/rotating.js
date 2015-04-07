//var myElement = document.getElementById('rf-tablegrid');

//var mc = new Hammer.Manager(myElement);

// create a pinch and rotate recognizer
// these require 2 pointers
//var pinch = new Hammer.Pinch();
//var rotate = new Hammer.Rotate();

// we want to detect both the same time
//pinch.recognizeWith(rotate);

// add to the Manager
//mc.add([pinch, rotate]);


//mc.on("pinch rotate", function(ev) {
//	console.log("Hello");
//    myElement.textContent += ev.type +" ";
//});



var myElement = document.getElementById('rf-tablegrid');

var mc = new Hammer.Manager(myElement, myOptions);

mc.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }) );
mc.add( new Hammer.Tap({ event: 'quadrupletap', taps: 4 }) );

mc.on("pan", handlePan){
	console.log("Hello");
};

mc.on("quadrupletap", handleTaps){
	console.log("Hello");
};