const checkHealthController = require('./Controllers/checkHealthController')
const distanceRunController = require('./Controllers/distanceRunController')
const userController = require('./Controllers/userController')

const routes = app => {
  app.route('/checkHealth')
    .get(checkHealthController.healthTest)

  app.route('/user')
    .post(userController.createUser)
    .get(userController.getAllUsers)

  app.route('/user/:userId')
    .get(userController.getUserById)
    .delete(userController.deleteUser)
    .put(userController.updateUser)

  app.route('/distanceRun/:userId')
    .put(distanceRunController.addDistanceRunToUser)
    .get(distanceRunController.getDistanceRunByUser)

  /**
   * Add a route to get all runs done by a user
   */
}

module.exports = {
  routes
}
