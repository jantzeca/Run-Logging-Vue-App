const mongoose = require('mongoose')
const UserSchema = require('../../Models/User').UserSchema

const User = mongoose.model('User', UserSchema)

const createUser = (req, res) => {
  let newUser = new User(req.body)

  newUser.save((err, user) => {
    err ? res.send(err) : res.json({
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

// Get Users *** Look into adding security to routes like this route ***
const getAllUsers  = (req, res) => {
  User.find({}, (err, users) => {
    let info = {}
    for (let user of users) {
      info[`${user._id}`] = {
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        gender: user.gender,
        weight: user.weight,
        height: user.height,
        id: user._id
      }
    }
    err ? res.send(err) : res.json(info)
  })
}

// Get User by ID
const getUserById = (req, res) => {
  User.findById(req.params.userId, (err, user) => {
    err ? res.send(err) : res.json({
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

// Delete User
const deleteUser = (req, res) => {
  User.deleteOne({ _id: req.params.userId }, err => {
    err ? res.send(err) : res.json({ message: 'Successfully deleted user'})
  })
}

// Update User
const updateUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true, runValidators: true }, (err, user) => {
    err ? res.send(err) : res.json({
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
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser
}
