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




 var x = document.getElementById("rf-tablegrid");

// We create a manager object, which is the same as Hammer(), but without the presetted recognizers. 
var mc = new Hammer.Manager(x);


// Tap recognizer with minimal 2 taps
mc.add( new Hammer.Tap({ event: 'doubletap', taps: 2 }) );
// Single tap recognizer
mc.add( new Hammer.Tap({ event: 'singletap' }) );


// we want to recognize this simulatenous, so a quadrupletap will be detected even while a tap has been recognized.
mc.get('doubletap').recognizeWith('singletap');
// we only want to trigger a tap, when we don't have detected a doubletap
mc.get('singletap').requireFailure('doubletap');


mc.on("singletap doubletap", function(ev) {
    x.textContent += ev.type +" ";
	console.log("hello");
});