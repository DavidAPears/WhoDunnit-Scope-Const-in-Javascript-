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
// #### Episode 9


let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);


// RETURN I WOULD EXPECT:
// "The murderer is Professor Plum"


// REASONING:
// Prof plum was the original declared murdered. Mrs Peacock is a let declaration inside a cunction block so she does NOT over-ride hime.


// TEXT ACTUALLY RETURNED:
// "The murderer is Professor Plum"
