// Import the branch model
const Branch = require('../models/branch');

// Create a new branch
const newBranch = new Branch({
//   name: 'Nakhon Nayok', 
//   latitude: 14.319578999999999,
//   longitude: 101.27493,

  name: 'Krabi',
  latitude: 8.0424293999999996,
  longitude: 98.817982000000001,
});

// Save the new branch
newBranch.save();

