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
//
// #### Episode 2


const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);


// RETURN I WOULD EXPECT:
// `The murderer is Professor Plum'
// REASON: A constant can not be overridden


// TEXT ACTUALLY RETURNED:
// `TypeError: Assignment to constant variable.
// Javascript wouldn't allow 'Prof Plum' to be over-written over by 'Mrs Peacock'
