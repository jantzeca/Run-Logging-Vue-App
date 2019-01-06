import mongoose from 'mongoose'
import UserSchema from '../Models/User'

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

// Need to figure out how to use export default here to be able to use it in the
// vue script

module.exports = {
  createUser
}
