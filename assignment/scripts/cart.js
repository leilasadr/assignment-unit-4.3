console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


// Create a global variable named `basket` and set it to an empty array.
var basket = [];

// Create a function called `addItem`. It should:
// take an input parameter for a string `item`
// add the new item to the global array `basket`. 
// return `true` indicating the item was added 

function addItem(item) {
  basket.push(item);
  return true;
}


// Testing addItem
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log('Adding paper towels (expect true)', addItem('paper towels'));
console.log('Adding tuna (expect true)', addItem('tuna'));
console.log('Adding vitamin D (expect true)', addItem('Vitamin D'));
console.log(`Basket is now ${basket}`);

// Create a function called `listItems`. It should:
// loop over the items in the `basket` array
// console.log each individual item on a new line
function listItems() {
  console.log('in listItems:');
  for (var i = 0; i < basket.length; i++) {
    console.log('Basket is:', basket[i]);
  } // end for looping through items
} // end listItems 

// Testing listItems
console.log(`Basket is ${basket}`);
listItems();

// Create a function called `empty`. It should:
// reset the `basket` to an empty array
function empty() {
    console.log('in empty:');
    basket = [];
} // end empty 

// Testing empty
console.log(`Basket is ${basket}`);
empty();
console.log(`Basket is ${basket}`);

