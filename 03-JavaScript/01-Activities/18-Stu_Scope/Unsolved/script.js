// TODO: Declare variable 'shout' with the value 'Shout' so it's available to `justShout` and `shoutItAllOut` functions
function justShout() {
  console.log(`${shout}, ${shout}`);
  return;
}

function shoutItAllOut() {
  console.log(`${shout} it all out! `);
  return;
}

justShout();
shoutItAllOut();

// TODO: Declare variable 'animal' with the value 'Tigers' so it is only available to the 'sayTigers' function
function sayLions() {
  const animal = 'Lions';
  console.log(animal);
  return;
}

function sayTigers() {
  console.log(`and ${animal} and `);
  return;
}

// TODO: The variable 'bears' should only declared once and 'sayBears' should return 'Bears! OH MY!'.
const bears = 'Bears';

function sayBears() {
  const bears = 'Pandas';
  console.log(`${bears}! OH  MY!`);
  return;
}

sayLions();
sayTigers();
sayBears();

// TODO: The variable 'sing' should be declared once in the local scope.
const sing = 'Sing';

function singAlong() {
  console.log(`${sing},`);
  const singASong = function () {
    console.log(`${sing} a Song.`);
  };
  singASong();
}

singAlong();
