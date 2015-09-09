/*
DrEvil!

Create a function called DrEvil.
It should take a single argument, an amount, and return '<amount> dollars',
except it will add '(pinky)' at the end if the amount is 1 million.

For example:
  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)
*/

function drEvil(amount) {
  // write your solution here...
  var amount = 1000000;

    if (amount >= 100000) {
      return amount + " dollars (pinky)";
      } else {
          return amount + " dollars";
      }
}

console.log(drEvil(10));
