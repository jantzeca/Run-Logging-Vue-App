const Schema = require('mongoose').Schema

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: 'Must enter a first name'
  },
  lastName: {
    type: String,
    required: 'Must enter a last name'
  },
  age: {
    type: Number,
    required: 'Must enter an age'
  },
  weight: {
    type: Number
  },
  height: {
    type: String,
  }
})

module.exports = {
  UserSchema
}
