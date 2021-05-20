import { Router } from 'express'

import * as ProjectController from '../controllers/ProjectController'

const routes = Router()

const projects = []

routes.get('/', ProjectController.default.getAll)

routes.get('/:id', ProjectController.default.getById)

routes.post('/create', ProjectController.default.create)

routes.put('/:id', ProjectController.default.update)

routes.delete('/:id', ProjectController.default.remove)

export default routes