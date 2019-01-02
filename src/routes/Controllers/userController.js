const mongoose = require('mongoose')
const UserSchema = require('../../Models/User').UserSchema

const User = mongoose.model('User', UserSchema)

const createUser = (req, res) => {
  let newUser = new User(req.body)

  newUser.save((err, user) => {
    err ? res.send(err) : res.json(user)
  })
}

module.exports = {
  createUser
}
