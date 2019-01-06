import { healthTest } from '../Controllers/checkHealthController'
import { addDistanceRunToUser } from '../Controllers/distanceRunController'
import { createUser, getAllUsers, getUserById, deleteUser, updateUser } from '../Controllers/userController'

export function routes(app) {
  app.route('/checkHealth')
    .get(healthTest)

  app.route('/user')
    .post(createUser)
    .get(getAllUsers)

  app.route('/user/:userId')
    .get(getUserById)
    .delete(deleteUser)
    .put(updateUser)

  app.route('/distanceRun/:userId')
    .put(addDistanceRunToUser)
    // .get(distanceRunController.getDistanceRunByUser)

  /**
   * Add a route to get all runs done by a user
   */
}
