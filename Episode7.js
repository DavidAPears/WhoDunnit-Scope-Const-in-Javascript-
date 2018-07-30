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

// #### Episode 7


let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer2 = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);


// RETURN I WOULD EXPECT:
// "The murderer is Mr Green"


// REASONING:
// The original murderer = Prof Plum. There are several methods that look at amen ding this fact. However 'unexpectedOutcome' & 'plotTwist' are both called withon a function block so create a 'new' murdereds that are never able to be returned. They do not have scope to amend Prof Plum. Mustard is a 'let' inside a function, which can not be returned outside of that function
// BUT! the 'changeMurderer' method is outside the brackets (and therefore within scope) so that method does overwrite Mustard with Green.


// TEXT ACTUALLY RETURNED:
// "The murderer is Mr Green.
