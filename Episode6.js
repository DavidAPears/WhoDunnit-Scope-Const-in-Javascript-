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

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);


// RETURN I WOULD EXPECT:
// "The murderer is Mrs. White".

// REASONING: Murdered origionallty declared as Cnl Mustard, however the changeMurder function overwrites that with Mr Grren. BUT THEN the plotTwist function is called which replaces that with Mrs White. So once declared, murderer has changed 3 times.

// TEXT ACTUALLY RETURNED:
// "The murderer is Mrs. White".
