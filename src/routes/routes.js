const checkHealthController = require('./Controllers/checkHealthController')
const distanceRunController = require('./Controllers/distanceRunController')
const userController = require('./Controllers/userController')

const routes = app => {
  app.route('/checkHealth')
    .get(checkHealthController.healthTest)

  app.route('/user')
    .post(userController.createUser)

  app.route('/distanceRun')
    .post(distanceRunController.addDistanceRun)

  app.route('/distanceRun/:id')
    .get(distanceRunController.getDistanceRunByUser)

  /**
   * Add a route to get all runs done by a user
   *   Need to generate an id to be attatched to a user?
   */
}

module.exports = {
  routes
}
