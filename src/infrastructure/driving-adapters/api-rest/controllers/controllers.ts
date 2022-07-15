import { createUser } from './user/createUserController'
import { getAllUsers } from './user/getAllUserController'
import { updateUser } from './user/updateUserController'
import { deleteUser } from './user/deleteUserController'

export {
  createUser as createUserController,
  getAllUsers as getAllUsersController,
  updateUser as updateUserController,
  deleteUser as deleteUserController
}