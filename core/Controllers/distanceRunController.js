import mongoose from 'mongoose'

import DistanceRunSchema from '../Models/DistanceRun'

const DistanceRun = mongoose.model('DistanceRun', DistanceRunSchema)
// const User = mongoose.model('User', UserSchema)


/**
 * Need to get the user that goes with the request
 * Push this new distance run to the end of the array of distance runs
 */
export function addDistanceRunToUser (req, res) {
  let newRun = new DistanceRun(req.body)

  newRun.save((err, run) => {
    err ? res.send(err) : res.json(run)
  })
}

// Change this one to look up a user and find the runs from within there
/**
 * Ideas for this:
 *  Send a date with the body?
 *  Allow for sending a distance/time/minTime in the body?
 */

// TODO: Figure out how to handle this one
// const getDistanceRunByUser = (req, res) => {
//   User.findById(req.params.userId, (err, user) => {
//     if(err) {
//       res.send(err)
//     }
//   })
//   // DistanceRun.findOneAndUpdate({ _id: req.params.userId }, req.body, )
// }



// module.exports = {
//   addDistanceRunToUser,
//   // getDistanceRunByUser
// }
