import { Router } from 'express'

import {
  createUserController,
  getAllUsersController,
  updateUserController,
  deleteUserController
} from '../controllers/controllers'

const route = Router()

route.delete('/:id', deleteUserController)
route.put('/:userId', updateUserController)
route.get('', getAllUsersController)
route.post('', createUserController)

export default route