const mongoose = require('mongoose')
const UserSchema = require('../Models/User').UserSchema

const User = mongoose.model('User', UserSchema)

const createUser = (userInfo, callback) => {
  const newUser = new User(userInfo)

  newUser.save((err, user) => {
    if (err) {
      throw new Error(err.message)
    }

    return callback(null, {
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      gender: user.gender,
      weight: user.weight,
      height: user.height,
      id: user._id
    })
  })
}

module.exports = {
  createUser
}
