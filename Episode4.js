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
// #### Episode 4


let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);


// RETURN I WOULD EXPECT:
// "The suspects are Miss Scarlet, Professor Plum, Colonel Mustard"
// "Suspect three is Mrs Peacock"

// REASONING: In the first concole.log all of the origional suspects are returned.
// However in the second console.log Although original suspectThree (Mrs. Peacock) had been declared the let instruction within the declareAllSuspects function over-writes her with the Colonel as it is on the same 'level'


// TEXT ACTUALLY RETURNED:
// "The suspects are Miss Scarlet, Professor Plum, Colonel Mustard"
// "Suspect three is Mrs Peacock"
