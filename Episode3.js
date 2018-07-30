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

//#### Episode 3


let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);


// RETURN I WOULD EXPECT:
// `First Verdict: The murderer is Mrs Peacock'
// `Second Verdict: The murderer is Professor Plum'
// REASONING: The first verdict will pull through Mrs Peacock as the 'let' within a function can be read as at the same 'level', the second verdict will simply look for the 'murderer' declared at begining.


// TEXT ACTUALLY RETURNED:
// First Verdict:  The murderer is Mrs. Peacock.
// Second Verdict:  The murderer is Professor Plum.
