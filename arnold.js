"use strict";

var arnoldjs = require('arnoldjs');
var ajsProgram = 
"YOU SET US UP MATE STICK AROUND LISTEN TO ME VERY CAREFULLY GIVE THESE PEOPLE AIR PLEASE"+ 
	"ENOUGH TALK IT'S SHOWTIME"+
			"TALK TO THE HAND GIVE THESE PEOPLE AIR PLEASE ENOUGH TALK" +
		"HASTA LA VISTA BABY" +
	"TERMINATED MATE" +
	"GIVE THESE PEOPLE AIR"+ "'ARNY'" +
"ENOUGH TALK"	

var jsProgram = arnoldjs.transpile(ajsProgram); //stores ";"

console.log(jsProgram)

const poo = eval(jsProgram)