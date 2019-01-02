const mongoose = require('mongoose')

const DistanceRunSchema = require('../../Models/DistanceRun').DistanceRunSchema

const DistanceRun = mongoose.model('DistanceRun', DistanceRunSchema)

const addDistanceRun = (req, res) => {
  let newRun = new DistanceRun(req.body)

  newRun.save((err, run) => {
    err ? res.send(err) : res.json(run)
  })
}

const getDistanceRunByUser = (req, res) => {
  DistanceRun.findById(req.params.id, (err, run) => {
    err ? res.send(err) : res.json(run)
  })
}

module.exports = {
  addDistanceRun,
  getDistanceRunByUser
}
