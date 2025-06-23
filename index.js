// Declare customerName in global scope
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Declare bestCustomer in global scope
var bestCustomer;

// Function to set bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare leastFavoriteCustomer with const
const leastFavoriteCustomer = 'someone';

// Function to try to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // This will throw an error
}