const Schema = require('mongoose').Schema

// Possibly add support for bulk api with the option for array of objects

const DistanceRunSchema = new Schema({
  distance: {
    type: String,
    required: 'Enter a distance'
  },
  time: {
    type: String,
    required: 'Enter a total time'
  },
  pace: {
    type: String
  }
})

module.exports = {
  DistanceRunSchema
}
