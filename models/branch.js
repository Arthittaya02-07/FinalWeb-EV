// Import the mongoose module
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define the branch schema
const branchSchema = new Schema({
  name: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
});

// Create the branch model
// Export the Branch model
const Branch = mongoose.model('Branch',branchSchema)
module.exports = Branch
