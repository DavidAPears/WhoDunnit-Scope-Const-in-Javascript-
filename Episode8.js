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
// #### Episode 8


const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);



// RETURN I WOULD EXPECT:
// "The weapon is candelStick


// REASONING:
// Original scenario:
// murderer: 'Mrs. Peacock',room: 'Conservatory',weapon: 'Lead Pipe'
// THEN changeScenario edits it too:
 // murderer: 'Mrs. Peacock',room: 'Dining Room',weapon: 'Lead Pipe'
 // THEN plotTwist edits to too:
 // murderer: 'Col Mustard',room: 'Dining Room',weapon: 'Lead Pipe'
 // THEN unexpectedOutcome edits it too:
 //  murderer: 'Col Mustard',room: 'Dining Room',weapon: 'CandleStick' <---!



// TEXT ACTUALLY RETURNED:
// "The weapon is candelStick
