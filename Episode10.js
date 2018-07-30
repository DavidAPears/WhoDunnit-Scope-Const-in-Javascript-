// # Scope: Who Dunnit
//
// ### Learning Objectives
//
// - Understand function scope
// - Know the difference in between the let and const keywords
//
// ## Brief
//
// Using your knowledge about scope and variable declarations in JavaScript, look at the following code snippets and predict what the output or error will be and why.

// Episode10 - Write your own episode:


var murderer = Array("Professor Plum", "Mr Green", "Miss Scarlett", "Mrs Peacock", "Mrs White", "Colonel Mustard");
var room = Array("kitchen", "conservatorty", "ballroom", "dining room", "billiard room", "study", "library", "dining room", "cellar", "hall", "lounge");
var weapon = ["candlestick", "knife", "leadpipe", "rope", "wrench", "revolver"];


var randomWeapon = weapon[Math.floor(Math.random() * weapon.length)]
var randomMurderer = murderer[Math.floor(Math.random() * murderer.length)]
var randomRoom = room[Math.floor(Math.random() * room.length)]


console.log("The murder weapon was the " + randomWeapon);
console.log("The murderer was " + randomMurderer);
console.log("The murder took place in the " + randomRoom);
